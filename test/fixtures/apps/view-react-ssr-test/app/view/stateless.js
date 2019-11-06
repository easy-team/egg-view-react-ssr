(function(e, a) { for (const i in a) e[i] = a[i]; }(exports, /** ****/ (function(modules) { // webpackBootstrap
  /** ****/ 	// The module cache
  /** ****/ 	const installedModules = {};
  /** ****/
  /** ****/ 	// The require function
  /** ****/ 	function __webpack_require__(moduleId) {
  /** ****/
  /** ****/ 		// Check if module is in cache
  /** ****/ 		if (installedModules[moduleId]) {
      /** ****/ 			return installedModules[moduleId].exports;
      /** ****/ 		}
    /** ****/ 		// Create a new module (and put it into the cache)
    /** ****/ 		const module = installedModules[moduleId] = {
      /** ****/ 			i: moduleId,
      /** ****/ 			l: false,
      /** ****/ 			exports: {},
      /** ****/ 		};
    /** ****/
    /** ****/ 		// Execute the module function
    /** ****/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** ****/
    /** ****/ 		// Flag the module as loaded
    /** ****/ 		module.l = true;
    /** ****/
    /** ****/ 		// Return the exports of the module
    /** ****/ 		return module.exports;
  /** ****/ 	}
  /** ****/
  /** ****/
  /** ****/ 	// expose the modules object (__webpack_modules__)
  /** ****/ 	__webpack_require__.m = modules;
  /** ****/
  /** ****/ 	// expose the module cache
  /** ****/ 	__webpack_require__.c = installedModules;
  /** ****/
  /** ****/ 	// define getter function for harmony exports
  /** ****/ 	__webpack_require__.d = function(exports, name, getter) {
  /** ****/ 		if (!__webpack_require__.o(exports, name)) {
      /** ****/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** ****/ 		}
  /** ****/ 	};
  /** ****/
  /** ****/ 	// define __esModule on exports
  /** ****/ 	__webpack_require__.r = function(exports) {
  /** ****/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** ****/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** ****/ 		}
    /** ****/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /** ****/ 	};
  /** ****/
  /** ****/ 	// create a fake namespace object
  /** ****/ 	// mode & 1: value is a module id, require it
  /** ****/ 	// mode & 2: merge all properties of value into the ns
  /** ****/ 	// mode & 4: return value when already ns object
  /** ****/ 	// mode & 8|1: behave like require
  /** ****/ 	__webpack_require__.t = function(value, mode) {
  /** ****/ 		if (mode & 1) value = __webpack_require__(value);
    /** ****/ 		if (mode & 8) return value;
    /** ****/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** ****/ 		const ns = Object.create(null);
    /** ****/ 		__webpack_require__.r(ns);
    /** ****/ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** ****/ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
    /** ****/ 		return ns;
  /** ****/ 	};
  /** ****/
  /** ****/ 	// getDefaultExport function for compatibility with non-harmony modules
  /** ****/ 	__webpack_require__.n = function(module) {
  /** ****/ 		const getter = module && module.__esModule ?
    /** ****/ 			function getDefault() { return module.default; } :
    /** ****/ 			function getModuleExports() { return module; };
    /** ****/ 		__webpack_require__.d(getter, 'a', getter);
    /** ****/ 		return getter;
  /** ****/ 	};
  /** ****/
  /** ****/ 	// Object.prototype.hasOwnProperty.call
  /** ****/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** ****/
  /** ****/ 	// __webpack_public_path__
  /** ****/ 	__webpack_require__.p = '/public/';
  /** ****/
  /** ****/
  /** ****/ 	// Load entry module and return exports
  /** ****/ 	return __webpack_require__(__webpack_require__.s = './app/web/page/stateless/index.tsx');
  /** ****/ })({

  /** */ './app/web/component/layout.tsx':
  /* !**************************************!*\
    !*** ./app/web/component/layout.tsx ***!
    \**************************************/
  /* ! exports provided: default */
  /** */ function(module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/* ! tslib */ 'tslib');
    /* harmony import */ const tslib__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/* ! react */ 'react');
    /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


    const Layout = function(_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Layout, _super);

      function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Layout.prototype.render = function() {
        if (true) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('html', null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('head', null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('title', null, this.props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('meta', {
            charSet: 'utf-8',
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('meta', {
            name: 'viewport',
            content: 'initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui',
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('meta', {
            name: 'keywords',
            content: this.props.keywords,
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('meta', {
            name: 'description',
            content: this.props.description,
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('link', {
            rel: 'shortcut icon',
            href: '/favicon.ico',
            type: 'image/x-icon',
          })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('body', null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement('div', {
            id: 'app',
          }, this.props.children)));
        }

        return this.props.children;
      };

      return Layout;
    }(react__WEBPACK_IMPORTED_MODULE_1__.Component);

    /* harmony default export */ __webpack_exports__.default = (Layout);

  /** */ },

  /** */ './app/web/framework/app.tsx':
  /* !***********************************!*\
    !*** ./app/web/framework/app.tsx ***!
    \***********************************/
  /* ! exports provided: SSR, CSR */
  /** */ function(module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SSR', function() { return SSR; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'CSR', function() { return CSR; });
    /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/* ! react */ 'react');
    /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/* ! react-dom */ 'react-dom');
    /* harmony import */ const react_dom__WEBPACK_IMPORTED_MODULE_1___default = /* #__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ const react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/* ! react-hot-loader */ 'react-hot-loader');
    /* harmony import */ const react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /* #__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);


    const clientRender = function(Com, method) {
      const state = window.__INITIAL_STATE__;
      const root = document.getElementById('app');

      if (false) {} else {
        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a[method](react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Com, state), root);
      }
    };

    const serverRender = function(Com) {
      return Com;
    };

    function SSR(Com) {
      return true ? serverRender(Com) : undefined;
    }
    function CSR(Com) {
      return clientRender(Com, 'render');
    }

  /** */ },

  /** */ './app/web/page/stateless/index.tsx':
  /* !******************************************!*\
    !*** ./app/web/page/stateless/index.tsx ***!
    \******************************************/
  /* ! exports provided: default */
  /** */ function(module, __webpack_exports__, __webpack_require__) {

    'use strict';
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/* ! react */ 'react');
    /* harmony import */ const react__WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ const _component_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/* ! ../../component/layout */ './app/web/component/layout.tsx');
    /* harmony import */ const _framework_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/* ! ../../framework/app */ './app/web/framework/app.tsx');


    const Index = function(props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_layout__WEBPACK_IMPORTED_MODULE_1__.default, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('h1', null, props.text));
    };

    /* harmony default export */ __webpack_exports__.default = (Object(_framework_app__WEBPACK_IMPORTED_MODULE_2__.SSR)(Index));

  /** */ },

  /** */ react:
  /* !************************!*\
    !*** external "react" ***!
    \************************/
  /* ! no static exports found */
  /** */ function(module, exports) {

    module.exports = require('react');

  /** */ },

  /** */ 'react-dom':
  /* !****************************!*\
    !*** external "react-dom" ***!
    \****************************/
  /* ! no static exports found */
  /** */ function(module, exports) {

    module.exports = require('react-dom');

  /** */ },

  /** */ 'react-hot-loader':
  /* !***********************************!*\
    !*** external "react-hot-loader" ***!
    \***********************************/
  /* ! no static exports found */
  /** */ function(module, exports) {

    module.exports = require('react-hot-loader');

  /** */ },

  /** */ tslib:
  /* !************************!*\
    !*** external "tslib" ***!
    \************************/
  /* ! no static exports found */
  /** */ function(module, exports) {

    module.exports = require('tslib');

  /** */ },

  /** ****/ })));
