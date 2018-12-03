'use strict';
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Resource = require('server-side-render-resource');
const REACT_RESOURCE = Symbol('Application#resource');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config.reactssr;
    this.fileCache = [];
  }

  get resource() {
    if (!this[REACT_RESOURCE]) {
      if (fs.existsSync(this.config.manifest)) {
        this[REACT_RESOURCE] = new Resource(this.app, this.config);
      }
    }
    return this[REACT_RESOURCE];
  }

  normalizeLocals(locals = {}) {
    [ 'ctx', 'request', 'helper' ].forEach(key => {
      Object.defineProperty(locals, key, { enumerable: false });
    });
    return locals;
  }

  mergeLocals(ctx, locals, options, engine = true) {
    options = options || {};
    locals = engine ? options.locals : locals;
    locals = this.setCSRFLocals(ctx, locals);
    if (this.config.mergeLocals) {
      // if egg-view engine mode, the locals had merged
      return Object.assign({}, { ctx, request: ctx.request, helper: ctx.helper }, ctx.locals, locals);
    }
    return Object.assign({}, { ctx, request: ctx.request, helper: ctx.helper }, locals);
  }

  setCSRFLocals(ctx, locals) {
    // when csrf enable, set ctx csrf
    const security = this.app.config.security;
    if (security.csrf && security.csrf.enable) {
      return Object.assign({}, { csrf: ctx.csrf }, locals);
    }
    return locals;
  }

  normalizeReactElement(reactElement) {
    return reactElement && reactElement.default ? reactElement.default : reactElement;
  }

  render(name, locals, options) {
    const reactElement = require(name);
    return this.renderElement(reactElement, locals, options);
  }

  readFile(filepath) {
    if (this.fileCache[filepath]) {
      return Promise.resolve(this.fileCache[filepath]);
    }
    return new Promise((resolve, reject) => {
      fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          this.fileCache[filepath] = data;
          resolve(data);
        }
      });
    });
  }

  renderPage(name, locals, options) {
    // 支持自定义 layout html 模板
    const result = /\.(html|htm|tpl)$/.test(name) ? this.readFile(name) : this.render(name, locals, options);
    return result.then(html => {
      locals = this.normalizeLocals(locals);
      return this.app.react.resource.inject(html, options.name, locals, options);
    });
  }

  renderElement(reactElement, locals, options) {
    reactElement = this.normalizeReactElement(reactElement);
    if (React.isValidElement(reactElement) || (reactElement.prototype && reactElement.prototype.isReactComponent)) {
      return Promise.resolve(this.renderToString(reactElement, locals));
    }
    // support react redux isomorphism, this reactElement is callback function
    const context = { state: locals };
    return reactElement(context, options).then(element => {
      return this.renderToString(element, locals);
    });
  }

  renderMarkup(name, locals) {
    const reactElement = require(name);
    return Promise.resolve(this.renderToStaticMarkup(reactElement, locals));
  }

  renderToString(reactElement, locals) {
    reactElement = this.normalizeReactElement(reactElement);
    const element = React.createElement(reactElement, locals);
    return ReactDOMServer.renderToString(element);
  }

  renderToStaticMarkup(reactElement, locals) {
    reactElement = this.normalizeReactElement(reactElement);
    const element = React.createElement(reactElement, locals);
    return ReactDOMServer.renderToStaticMarkup(element);
  }
}

module.exports = Engine;
