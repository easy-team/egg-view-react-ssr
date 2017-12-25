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
  }

  get resource() {
    if (!this[REACT_RESOURCE]) {
      if (fs.existsSync(this.config.manifest)) {
        this[REACT_RESOURCE] = new Resource(this.app, this.config);
      }
    }
    return this[REACT_RESOURCE];
  }

  normalizeLocals(locals) {
    [ 'ctx', 'request', 'helper' ].forEach(key => {
      Object.defineProperty(locals, key, { enumerable: false });
    });
    return locals;
  }

  render(name, locals, options) {
    const reactElement = require(name);
    return this.renderElement(reactElement, locals, options);
  }

  renderPage(name, locals, options) {
    locals = this.normalizeLocals(locals);
    return this.app.react.render(name, locals, options).then(html => {
      return this.app.react.resource.inject(html, options.name, locals, options);
    });
  }

  renderElement(reactElement, locals, options) {
    reactElement = reactElement && reactElement.default ? reactElement.default : reactElement;
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
    reactElement = reactElement && reactElement.default ? reactElement.default : reactElement;
    const element = React.createElement(reactElement, locals);
    return ReactDOMServer.renderToString(element);
  }

  renderToStaticMarkup(reactElement, locals) {
    reactElement = reactElement && reactElement.default ? reactElement.default : reactElement;
    const element = React.createElement(reactElement, locals);
    return ReactDOMServer.renderToStaticMarkup(element);
  }
}

module.exports = Engine;
