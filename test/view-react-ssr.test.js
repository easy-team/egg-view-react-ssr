'use strict';
const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/view-react-ssr.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/view-react-ssr-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, reactssr')
      .expect(200);
  });
  it('should GET /render', () => {
    return request(app.callback())
      .get('/render')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('"csrf"') > -1);
        assert(res.text.indexOf('react server side render for component') > -1);
      });
  });
  it('should GET /renderMarkup', () => {
    return request(app.callback())
      .get('/renderMarkup')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('react server side render for component!') > -1);
      });
  });
  it('should GET /renderError', () => {
    return request(app.callback())
      .get('/error')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('</body></html>') > -1);
      });
  });
  it('should GET /renderClient', () => {
    return request(app.callback())
      .get('/renderClient')
      .expect(200)
      .expect(res => {
        assert(res.text.indexOf('"csrf"') > -1);
        assert(res.text.indexOf('"egg renderClient"') > -1);
        assert(res.text.indexOf('react client render') > -1);
      });
  });
});
