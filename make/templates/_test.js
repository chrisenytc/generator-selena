/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

var supertest = require('supertest');
var selena = require('../lib/selena.js');
var request = supertest(selena().http);
var chai = require('chai');
chai.expect();
chai.should();

describe('#<%= name %>', function () {
  describe('<%= args[1] %>', function () {
    it('<%= args[2] %>', function (done) {
      request
        .get('/<%= name %>')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {}, done);
    });
  });
});
