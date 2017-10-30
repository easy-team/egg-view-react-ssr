'use strict';
const path = require('path');
const assert = require('assert');
module.exports = {

  /**
   * render react bundle file
   * @method Context#render
   * @param {String} name filename
   * @param {Object} [locals] template data
   * @param {Object} options custom params
   */
  render(name, locals, options = {}) {
    locals = Object.assign({}, this.app.locals, this.locals, locals);
    const config = this.app.config.reactssr;
    const layout = options.layout || config.layout;
    const filepath = path.join(this.app.config.view.root[0], name);
    const renderList = [];
    renderList.push(layout ? this.app.react.render(layout, locals, { markup: true }) : Promise.resolve(''));
    renderList.push(this.app.react.render(filepath, locals, options));
    return Promise.all(renderList).then(result => {
      const html = result[0].replace(/(<\/div><\/body>)/i, match => {
        return result[1] + match;
      });
      this.body = this.app.react.resource.inject(html, config, name, locals, options);
    });
  },

  renderClient(name, locals, options = {}) {
    locals = Object.assign({}, this.app.locals, this.locals, locals);
    const config = this.app.config.reactssr;
    const layout = options.layout || config.layout;
    assert(layout, 'renderClient layout can`t empty');
    return this.app.react.render(layout, locals, { markup: true }).then(html => {
      this.body = this.app.react.resource.inject(html, config, name, locals, options);
    });
  },
};