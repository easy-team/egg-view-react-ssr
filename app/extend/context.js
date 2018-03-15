'use strict';
module.exports = {
  renderClient(name, locals, options) {
    return this.renderReactClient(name, locals, options);
  },

  renderReactClient(name, locals, options = {}) {
    const config = this.app.config.reactssr;
    const layout = options.layout || config.layout;
    locals = Object.assign({}, { csrf: this.csrf }, locals);
    options = Object.assign({}, options, { name, markup: true });
    return this.app.react.renderPage(layout, locals, options).then(html => {
      this.body = html;
    });
  },
};
