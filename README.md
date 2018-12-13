# egg-view-react-ssr

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-react-ssr.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-react-ssr
[travis-image]: https://img.shields.io/travis/hubcarl/egg-view-react-ssr.svg?style=flat-square
[travis-url]: https://travis-ci.org/hubcarl/egg-view-react-ssr
[codecov-image]: https://img.shields.io/codecov/c/github/hubcarl/egg-view-react-ssr.svg?style=flat-square
[codecov-url]: https://codecov.io/github/hubcarl/egg-view-react-ssr?branch=master
[david-image]: https://img.shields.io/david/hubcarl/egg-view-react-ssr.svg?style=flat-square
[david-url]: https://david-dm.org/hubcarl/egg-view-react-ssr
[snyk-image]: https://snyk.io/test/npm/egg-view-react-ssr/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-react-ssr
[download-image]: https://img.shields.io/npm/dm/egg-view-react-ssr.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-react-ssr

React server side render solution for egg

## Install

```bash
$ npm i egg-view-react-ssr --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.reactssr = {
  enable: true,
  package: 'egg-view-react-ssr',
};
```

## Version

#### 1.x.x

egg-view-react-ssr depends on egg-view-react plugin

#### 2.x.x

egg-view-react-ssr no longer depends on egg-view-react plugin, egg-view-react-ssr has an independent function that can run on its own

- 2.0.0-2.1.1: react and react-dom dependence in plugin dependence
- >2.2.0: react and react-dom are not inside in plugin dependence

## Configuration

```js
// {app_root}/config/config.default.js
exports.reactssr = {
  // doctype: '<!doctype html>',
  // layout: path.join(app.baseDir, 'app/view/layout.js'),
  // manifest: path.join(app.baseDir, 'config/manifest.json'),
  // injectHeadRegex: /(<\/head>)/i,
  // injectBodyRegex: /(<\/body>)/i,
  // injectCss: true,
  // injectJs: true,
  // crossorigin: false,
  // injectRes: [],
  // mergeLocals: true,
  // fallbackToClient: true, // fallback to client rendering if server render failed
  // afterRender: (html, context) => { /* eslint no-unused-vars:off */
  //   return html;
  // },
};
```

see [config/config.default.js](config/config.default.js) for more detail.


## Render

### Server Render, Call `render`

> when server render bundle error, will try client render**

> https://www.yuque.com/easy-team/egg-react/node

```js
// controller/home.js
exports.index = function* (ctx) {
  yield ctx.render('index/index.js', { message: 'egg react server side render'});
};
```

### Client Render, Call `renderClient`, Use React render layout

> https://www.yuque.com/easy-team/egg-react/web

> when client render, render layout `exports.reactssr.layout` by React

```js
// controller/home.js
exports.client = function* (ctx) {
  yield ctx.renderClient('index/index.js',{ message: 'egg react client render'});
};
```

### Asset Render, Call `renderAsset`, Use render layout by viewEngine, default `nunjucks`

> https://www.yuque.com/easy-team/egg-react/asset

- when asset render, you can render layout `exports.reactssr.layout` by viewEngine, default use `egg-view-nunjucks`
- you must install the specified engine dependence, such as `egg-view-nunjucks` or `egg-view-ejs`
- The context provides an `asset` object that can get `js`, `css`, `state` information. [layout template](https://www.yuque.com/easy-team/egg-react/asset)

#### use default viewEngine nunjucks

```js
// controller/home.js
exports.asset = function* (ctx) {
  yield ctx.renderAsset('index/index.js', { message: 'egg react asset render'});
};
```

#### scope render viewEngine config

```js
// controller/home.js
exports.asset = function* (ctx) {
  yield ctx.renderAsset('index/index.js', { message: 'egg react asset render'}, { viewEngine: 'ejs' });
};
```

## Example

React server side render example, please see [egg-react-webpack-boilerplate](https://github.com/easy-team/egg-react-webpack-boilerplate)

## Questions & Suggestions

Please open an issue [here](https://github.com/easy-team/egg-react-webpack-boilerplate/issues).

## License

[MIT](LICENSE)
