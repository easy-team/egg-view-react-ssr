'use strict';
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Resource = require('./resource');
const REACT_RESOURCE = Symbol('Application#resource');

class Engine {
  constructor(app) {
    this.app = app;
    this.config = app.config;
  }

  get resource() {
    if (!this[REACT_RESOURCE]) {
      const config = this.config.reactssr;
      if (fs.existsSync(config.manifest)) {
        this[REACT_RESOURCE] = new Resource(this.app);
      }
    }
    return this[REACT_RESOURCE];
  }

  render(name, locals, options) {
    const reactElement = require(name);
    return this.renderElement(reactElement, locals, options);
  }

  renderPage(name, locals, options){
    locals = Object.assign({}, locals, { ctx: undefined, request: undefined, helper: undefined });
    return this.app.react.render(name, locals, options).then(html => {
      return this.app.react.resource.inject(html, options.name, locals, options);
    });
  }

  renderElement(reactElement, locals, options) {
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
    const element = React.createElement(reactElement, locals);
    return ReactDOMServer.renderToString(element);
  }

  renderToStaticMarkup(reactElement, locals) {
    const element = React.createElement(reactElement, locals);
    return ReactDOMServer.renderToStaticMarkup(element);
  }
}

module.exports = Engine;
