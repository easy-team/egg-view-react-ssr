'use strict';
module.exports = {
  renderClient(name, locals, options) {
    return this.renderReactClient(name, locals, options);
  },

  renderAsset(name, locals, options) {
    return this.renderReactAsset(name, locals, options);
  },

  async renderReactAsset(name, locals, options) {
    this.body = await this.renderReactAssetToHTML(name, locals, options);
  },

  async renderReactClient(name, locals = {}, options = {}) {
    this.body = await this.renderReactClientToHTML(name, locals, options);
  },

  async renderReactAssetToHTML(name, locals, options) {
    return await this.app.react.renderAsset(this, name, locals, options);
  },

  async renderReactClientToHTML(name, locals = {}, options = {}) {
    const config = this.app.config.reactssr;
    const layout = options.layout || config.layout;
    locals = this.app.react.mergeLocals(this, locals, options, false);
    options = Object.assign({}, options, { name, markup: true });
    return await this.app.react.renderPage(layout, locals, options);
  },
};
