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

exports.renderAsset = function* (ctx) {
  yield ctx.renderAsset('component.js', {
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
  ctx.body = yield ctx.app.react.renderMarkup(filepath, {
    title: '--react server side render--',
    keywords: 'react server side render',
    message: {
      text: 'react server side render for component!',
    },
  });
};
