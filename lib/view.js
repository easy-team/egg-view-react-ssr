'use strict';
class View {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  render(name, locals, options = {}) {
    const config = this.app.config.reactssr;
    if (this.app.config.security.csrf.enable) {
      locals = Object.assign({}, { csrf: this.ctx.csrf }, locals);
    }
    try {
      return this.app.react.renderPage(name, locals, options);
    } catch (err) {
      if (config.fallbackToClient) {
        const layout = options.layout || config.layout;
        this.app.logger.error('[%s] server render bundle error, try client render, the server render error', name, err);
        options = Object.assign({}, options, { name, markup: true });
        return this.app.react.renderPage(layout, locals, options);
      }
      /* istanbul ignore next */
      throw err;
    }
  }

  /* eslint no-unused-vars:off */
  /* istanbul ignore next */
  renderString(tpl, locals) {
    return Promise.reject('not implemented yet!');
  }
}

module.exports = View;
