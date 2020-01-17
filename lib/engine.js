'use strict';
const fs = require('fs');
const React = require('react');
const serialize = require('serialize-javascript');
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
    if (process.env && process.env.NODE_ENV === 'production' && !this[REACT_RESOURCE]) {
      this.app.logger.warn('[egg-view-react-ssr] react server rendering missing manifest!');
    }
    return this[REACT_RESOURCE];
  }

  getAsset(name, state) {
    const manifest = this.resource && this.resource.manifest || {};
    const deps = manifest.deps || {};
    const res = deps[name] || {};
    return {
      js: res.js || [],
      css: res.css || [],
      state: serialize(state || {}, { isJSON: true }),
    };
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

  async render(name, locals, options) {
    const reactElement = require(name);
    return this.renderElement(reactElement, locals, options);
  }

  async readFile(filepath) {
    if (this.fileCache[filepath]) {
      return this.fileCache[filepath];
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

  async renderPage(name, locals, options) {
    // 支持自定义 layout html 模板
    const html = /\.(html|htm|tpl)$/.test(name) ? await this.readFile(name) : await this.render(name, locals, options);
    if (this.app.react.resource) {
      locals = this.normalizeLocals(locals);
      return this.app.react.resource.inject(html, options.name, locals, options);
    }
    return html;
  }

  // eslint-disable-next-line no-unused-vars
  async renderElement(reactElement, locals, options) {
    reactElement = this.normalizeReactElement(reactElement);
    // support asyncData
    if (reactElement.asyncData) {
      const data = await reactElement.asyncData(locals);
      locals = Object.assign(locals, data);
      return this.renderToString(reactElement, locals);
    }
    return this.renderToString(reactElement, locals);
  }

  async renderAsset(ctx, name, locals, options = {}) {
    const layout = options.layout || this.config.layout;
    const viewEngine = options.viewEngine || this.config.viewEngine || 'nunjucks';
    // 输出到页面的 state 数据
    const state = Object.assign({}, ctx.locals, locals);
    const asset = this.getAsset(name, state);
    // egg-view 自动合并 ctx, request, response, helper
    const template = await this.readFile(layout);
    const context = Object.assign({}, locals, { asset });
    return ctx.renderString(template, context, { viewEngine });
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
