'use strict';
const path = require('path');
exports.render = function* (ctx) {
  yield ctx.render('component.js', {
    title: '--react server side render--',
    keywords: 'react server side render',
    message: {
      text: 'react server side render for component!',
    },
  });
};

exports.renderClient = function* (ctx) {
  ctx.locals = {
    title: 'egg renderClient',
  };
  yield ctx.renderClient('component.js', {
    msg: 'react client render',
  });
};
exports.renderReactClient = function* (ctx) {
  ctx.locals = {
    title: 'egg renderClient',
  };
  yield ctx.renderReactClient('component.js', {
    msg: 'react client render',
  });
};
exports.renderAsset = function* (ctx) {
  yield ctx.renderAsset('component.js', {
    title: 'renderAsset',
    message: 'react renderAsset test',
  }, { layout: path.join(ctx.app.baseDir, 'app/view/layout_asset.html'),
  });
};

exports.renderReactAsset = function* (ctx) {
  yield ctx.renderReactAsset('component.js', {
    title: 'renderAsset',
    message: 'react renderAsset test',
  }, { layout: path.join(ctx.app.baseDir, 'app/view/layout_asset.html'),
  });
};

exports.renderError = function* (ctx) {
  yield ctx.render('error.js', {
    msg: 'react client render',
  });
};

exports.renderMarkup = function* (ctx) {
  const filepath = path.resolve(__dirname, '../view/component.js');
  this.body = yield ctx.app.react.renderMarkup(filepath, {
    title: '--react server side render--',
    keywords: 'react server side render',
    message: {
      text: 'react server side render for component!',
    },
  });
};

exports.reactServerRenderStateless = function* (ctx) {
  yield ctx.render('stateless.js', {
    title: 'React Server Render',
    text: 'Egg + React + Webpack Server Side Render Stateless Component',
  });
};

exports.reactServerRenderPromise = function* (ctx) {
  yield ctx.render('promise.js', {
    title: 'React Server Render',
    message: 'Egg + React + Webpack Server Side Render Promise Mode',
  });
};
