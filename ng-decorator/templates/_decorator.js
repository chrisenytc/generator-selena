/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

app.config(function ($provide) {
    $provide.decorator('<%= name %>', function ($delegate) {
      // ...
      return $delegate;
    });
});