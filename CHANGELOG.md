<a name="3.0.0"></a>
# [3.0.0](https://github.com/hubcarl/egg-view-react-ssr/compare/2.5.4...3.0.0) (2020-01-26)


### Bug Fixes

* ssr render error to client render ([0600156](https://github.com/hubcarl/egg-view-react-ssr/commit/0600156))


### Features

* node 8 upgrade ([6168d8c](https://github.com/hubcarl/egg-view-react-ssr/commit/6168d8c))



<a name="3.0.0-beta.2"></a>
# [3.0.0-beta.2](https://github.com/hubcarl/egg-view-react-ssr/compare/2.5.4...3.0.0-beta.2) (2020-01-20)


### Bug Fixes

* ssr render error to client render ([0600156](https://github.com/hubcarl/egg-view-react-ssr/commit/0600156))


### Features

* node 8 upgrade ([6168d8c](https://github.com/hubcarl/egg-view-react-ssr/commit/6168d8c))



## [2.5.4](https://github.com/hubcarl/egg-view-react-ssr/compare/2.5.3...2.5.4) (2020-01-16)



<a name="2.5.1"></a>
## [2.5.1](https://github.com/hubcarl/egg-view-react-ssr/compare/2.5.0...2.5.1) (2019-11-05)


### Bug Fixes

* support render react stateless component ([d579b9a](https://github.com/hubcarl/egg-view-react-ssr/commit/d579b9a))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/hubcarl/egg-view-react-ssr/compare/2.4.1...2.5.0) (2019-06-27)


### Features

* support no manifest render ([f99ad0f](https://github.com/hubcarl/egg-view-react-ssr/commit/f99ad0f))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/hubcarl/egg-view-react-ssr/compare/2.4.0...2.4.1) (2018-12-18)


### Bug Fixes

* restore renderReactClient to body ([b2d08f8](https://github.com/hubcarl/egg-view-react-ssr/commit/b2d08f8))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/hubcarl/egg-view-react-ssr/compare/2.3.4...2.4.0) (2018-12-14)


### Features

* remove unused code ([f505622](https://github.com/hubcarl/egg-view-react-ssr/commit/f505622))
* support render asset mode ([74299fe](https://github.com/hubcarl/egg-view-react-ssr/commit/74299fe))



<a name="2.3.4"></a>
## [2.3.4](https://github.com/hubcarl/egg-view-react-ssr/compare/2.3.3...2.3.4) (2018-12-03)


### Bug Fixes

* server render error, client render name error ([180362b](https://github.com/hubcarl/egg-view-react-ssr/commit/180362b))



<a name="2.3.3"></a>
## [2.3.3](https://github.com/hubcarl/egg-view-react-ssr/compare/2.3.1...2.3.3) (2018-11-13)



<a name="2.3.1"></a>
## [2.3.1](https://github.com/hubcarl/egg-view-react-ssr/compare/2.3.0...2.3.1) (2018-07-20)


### Bug Fixes

* mergeLocals ([9692af6](https://github.com/hubcarl/egg-view-react-ssr/commit/9692af6))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/hubcarl/egg-view-react-ssr/compare/2.2.7...2.3.0) (2018-07-20)


### Features

* support whether merge ctx.local by config.mergeLocals option ([aae1391](https://github.com/hubcarl/egg-view-react-ssr/commit/aae1391))



<a name="2.2.7"></a>
## [2.2.7](https://github.com/hubcarl/egg-view-react-ssr/compare/2.2.6...2.2.7) (2018-07-04)


### Bug Fixes

* renderClient locals no merge in state ([21160f9](https://github.com/hubcarl/egg-view-react-ssr/commit/21160f9))



<a name="2.2.6"></a>
## [2.2.6](https://github.com/hubcarl/egg-view-react-ssr/compare/2.2.5...2.2.6) (2018-07-03)


### Bug Fixes

* renderClient layout not use ssr layout ([0e6ec1f](https://github.com/hubcarl/egg-view-react-ssr/commit/0e6ec1f))



<a name="2.2.5"></a>
## [2.2.5](https://github.com/hubcarl/egg-view-react-ssr/compare/2.2.4...2.2.5) (2018-06-13)


### Bug Fixes

* ctx missing when server render by enumerable: false ([1749123](https://github.com/hubcarl/egg-view-react-ssr/commit/1749123))



<a name="2.2.4"></a>
## [2.2.4](https://github.com/hubcarl/egg-view-react-ssr/compare/2.2.3...2.2.4) (2018-03-16)



<a name="2.2.3"></a>
## [2.2.3](https://github.com/hubcarl/egg-view-react-ssr/compare/2.2.2...2.2.3) (2018-03-15)


### Bug Fixes

* csrf support when post request ([f6b39a4](https://github.com/hubcarl/egg-view-react-ssr/commit/f6b39a4))



2.2.2 / 2018-01-06
==================

  * fix: locals set default {}

2.2.1 / 2017-12-25
==================

  * fix:remove ctx,request,helper from locals use Object.defineProperty
  * doc: add version description
  * deps: react and react-dom not inline plugin dependence
  * Release 2.1.1
  * fix: webpack es6 module mode
  * feat:support babel es6 module

2.1.1 / 2017-11-23
==================

  * fix: webpack es6 module mode
  * feat:support babel es6 module

2.1.0 / 2017-11-16
==================

  * deps: resource login use server-side-render-resource plugin

2.0.0 / 2017-11-09
==================

  * refactor: not deps egg-view-react

1.1.2 / 2017-10-30
==================

  * fix:local mode, render logic overidde faild

1.1.1 / 2017-10-25
==================

  * fix:get react component store data

1.1.0 / 2017-10-24
==================

  * feat:support react redux and redux server side render

1.0.2 / 2017-08-28
==================

  * fix:node 8 async and await support':