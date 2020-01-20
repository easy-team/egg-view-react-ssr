'use strict';
class View {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
  }

  async render(name, locals, options = {}) {
    locals = this.app.react.mergeLocals(this.ctx, locals, options);
    try {
      return await this.app.react.renderPage(name, locals, options);
    } catch (err) {
      const config = this.app.config.reactssr;
      if (config.fallbackToClient) {
        const layout = options.layout || config.layout;
        this.app.logger.error('[%s] server render bundle error, try client render, the server render error', name, err);
        options = Object.assign({}, options, { markup: true });
        return await this.app.react.renderPage(layout, locals, options);
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
