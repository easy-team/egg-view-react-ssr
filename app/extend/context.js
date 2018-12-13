'use strict';
module.exports = {
  renderClient(name, locals, options) {
    return this.renderReactClient(name, locals, options).then(html => {
      this.body = html;
    });
  },

  renderAsset(name, locals, options) {
    return this.renderReactAsset(name, locals, options).then(html => {
      this.body = html;
    });
  },

  renderReactAsset(name, locals, options) {
    return this.app.react.renderAsset(this, name, locals, options);
  },

  renderReactClient(name, locals = {}, options = {}) {
    const config = this.app.config.reactssr;
    const layout = options.layout || config.layout;
    locals = this.app.react.mergeLocals(this, locals, options, false);
    options = Object.assign({}, options, { name, markup: true });
    return this.app.react.renderPage(layout, locals, options);
  },
};
