/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

app.directive('<%= name %>', function <%= name %>() {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the <%= name %> directive');
    }
  };
});