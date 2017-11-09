'use strict';
const path = require('path');
const fs = require('fs');
const serialize = require('serialize-javascript');

class Resource {
  constructor(app) {
    this.app = app;
    this.config = app.config.reactssr;
    this.manifest = require(this.config.manifest);
    this.init();
  }

  init() {
    if (Array.isArray(this.config.injectRes)) {
      this.config.injectRes.forEach(item => {
        const url = this.getRes(item);
        this.app.logger.debug('Resource#initInline', url, item);
        if (item.inline && this.isExist(url)) {
          const content = this.readFile(url);
          if (/\.js$/.test(url)) {
            item.content = `<script>${content}</script>`;
          } else if (/\.css$/.test(url)) {
            item.content = `<style>${content}</style>`;
          }
        } else {
          if (/\.js$/.test(url)) {
            item.content = this.createScriptSrcTag(url);
          } else if (/\.css$/.test(url)) {
            item.content = this.createCssLinkTag(url);
          }
        }
      });
      this.app.logger.debug('Resource#this.config.injectRes', this.config.injectRes);
    }
  }

  getRes(resInfo) {
    const url = resInfo.url;
    if (/^(https?|\/\/)/.test(url) || path.isAbsolute(url)) {
      return url;
    }
    if (resInfo.inline) {
      const filepath = path.join(this.app.baseDir, url);
      if (this.isExist(filepath)) {
        return filepath;
      }
    }
    if (this.manifest.info) {
      const buildPath = this.manifest.info.buildPath;
      const mappingUrl = this.manifest[url];
      if (resInfo.inline && buildPath && mappingUrl) {
        const filepath = path.join(this.app.baseDir, buildPath, mappingUrl);
        this.app.logger.debug('Resource#getRes', filepath, resInfo);
        if (this.isExist(filepath)) {
          return filepath;
        }
      }
    }
    return url;
  }

  isExist(filepath) {
    return fs.existsSync(filepath);
  }

  readFile(filepath) {
    return fs.readFileSync(filepath, 'utf8');
  }

  createCssLinkTag(url) {
    return `<link rel="stylesheet" href="${url}">`;
  }

  createScriptSrcTag(url) {
    // support cdn js error catch
    if (this.config.crossorigin) {
      const crossorigin = typeof this.config.crossorigin === 'string' ? this.config.crossorigin : 'anonymous';
      return `<script type="text/javascript" crossorigin="${crossorigin}" src="${url}"></script>`;
    }
    return `<script type="text/javascript" src="${url}"></script>`;
  }

  injectHead(resArr) {
    this.config.injectRes.forEach(item => {
      if (item.content) {
        if (item.location === 'headBefore' || (item.location === undefined && /\.(css|js)$/.test(item.url))) {
          resArr.unshift(item.content);
        } else if (item.location === 'headAfter') {
          resArr.push(item.content);
        }
      }
    });
  }

  injectBody(resArr) {
    this.config.injectRes.forEach(item => {
      if (item.content) {
        if (item.location === 'bodyBefore') {
          resArr.unshift(item.content);
        } else if (item.location === 'bodyAfter') {
          resArr.push(item.content);
        }
      }
    });
  }


  inject(html, name, locals, options) {
    const resourceDeps = this.manifest.deps;
    const deps = resourceDeps[name];
    if (deps) {
      const headInject = [];
      const bodyInject = [];
      if (this.config.injectCss && (options.injectCss === undefined || options.injectCss)) {
        deps.css.forEach(url => {
          headInject.push(this.createCssLinkTag(url));
        });
      } else if (locals.styles) {
        headInject.push(locals.styles);
      }
      if (this.config.injectJs) {
        deps.js.forEach(url => {
          bodyInject.push(this.createScriptSrcTag(url));
        });
        if (!/window.__INITIAL_STATE__/.test(html)) {
          bodyInject.unshift(`<script> window.__INITIAL_STATE__= ${serialize(locals.state || locals, { isJSON: true })};</script>`);
        }
      }
      this.injectHead(headInject);
      html = html.replace(this.config.injectHeadRegex, match => {
        return headInject.join('') + match;
      });

      this.injectBody(bodyInject);
      html = html.replace(this.config.injectBodyRegex, match => {
        return bodyInject.join('') + match;
      });

      html = this.config.doctype + html;
    }
    return this.config.afterRender(html, locals);
  }
}

module.exports = Resource;
