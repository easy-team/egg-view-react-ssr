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
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

React server side render example, please see [egg-react-webpack-boilerplate](https://github.com/hubcarl/egg-react-webpack-boilerplate)

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
