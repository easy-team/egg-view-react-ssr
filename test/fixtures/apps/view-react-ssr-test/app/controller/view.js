'use strict';
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
  yield ctx.renderClient('component.js', {
    msg: 'react client render',
  });
};
