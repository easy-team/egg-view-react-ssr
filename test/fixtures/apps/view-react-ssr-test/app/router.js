'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.reactssr.name;
  });
  app.get('/render', app.controller.view.render);
  app.get('/renderClient', app.controller.view.renderClient);
  app.get('/error', app.controller.view.renderError);
  app.get('/renderMarkup', app.controller.view.renderMarkup);
};
