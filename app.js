'use strict';
const Resource = require('./lib/resource');
module.exports = app => {
  app.react.resource = new Resource(app);
  app.react.renderElement = (reactElement, locals, options) => {
    if (reactElement.prototype && reactElement.prototype.isReactComponent) {
      return Promise.resolve(app.react.renderToString(reactElement, locals));
    }
    const context = { state: locals };
    return reactElement(context, options).then(element => {
      return app.react.renderToString(element, context.state);
    });
  }
  app.react.render = (filepath, locals, options) => {
    const reactElement = require(filepath);
    return app.react.renderElement(reactElement, locals, options);
  }
};