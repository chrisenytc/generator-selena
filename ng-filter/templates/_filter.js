/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

app.filter('<%= name %>', function <%= name %>() {
  return function (input) {
    return '<%= name %> filter:' + input;
  };
});