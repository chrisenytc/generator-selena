# Selena Generator [![Build Status](https://secure.travis-ci.org/chrisenytc/generator-selena.png?branch=master)](https://travis-ci.org/chrisenytc/generator-selena) [![NPM version](https://badge-me.herokuapp.com/app/npm/generator-selena.png)](http://badges.enytc.com/for/npm/generator-selena) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrisenytc/generator-selena/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

> A Selena.js Generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

[![Selena.js](https://raw2.github.com/enytc/selena/master/logo.png)](http://selenajs.enytc.com)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-selena from npm, run:

```
$ npm install -g generator-selena
```

Finally, initiate the generator:

```
$ yo selena
```

## Generators

Available generators:

* [selena:route](#route)
* [selena:controller](#controller)
* [selena:restful](#restful)
* [selena:middleware](#middleware)
* [selena:model](#model)
* [selena:view](#view)
* [selena:service](#service)
* [selena:socket](#socket)
* [selena:make](#test)
* [selena:ng-controller](#ng-controller)
* [selena:ng-directive](#ng-directive)
* [selena:ng-filter](#ng-filter)
* [selena:ng-route](#ng-route)
* [selena:ng-service](#ng-service)
* [selena:ng-provider](#ng-service)
* [selena:ng-factory](#ng-service)
* [selena:ng-value](#ng-service)
* [selena:ng-constant](#ng-service)
* [selena:ng-decorator](#ng-decorator)
* [selena:ng-view](#ng-view)

**Note: Generators are to be run from the root directory of your app.**

### Route
Generates a controller in `app/controllers` and generates a view in `app/views`.

Example:
```bash
yo selena:route tasks index:GET show:GET update:PUT destroy:DELETE
```

Produces `app/controllers/tasks.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {

  /*
  * GET /tasks
  */


 /*
  * GET /tasks/index
  */

  index: {
  method: 'GET',
  fn: function (req, res) {
   //
  }
 },

 /*
  * GET /tasks/show
  */

  show: {
  method: 'GET',
  fn: function (req, res) {
   //
  }
 },

 /*
  * PUT /tasks/update
  */

  update: {
  method: 'PUT',
  fn: function (req, res) {
   //
  }
 },

 /*
  * DELETE /tasks/destroy
  */

  destroy: {
  method: 'DELETE',
  fn: function (req, res) {
   //
  }
 },


};
```

Produces `app/views/tasks.html`:
```html
{% extends '../layouts/default.html' %} 

{% block content %}
<p>This is the tasks view</p>
{% endblock %}
```

### Controller
Generates a controller in `app/controllers`.

Example:
```bash
yo selena:controller tasks index:GET show:GET update:PUT destroy:DELETE
```

Produces `app/controllers/tasks.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {

  /*
  * GET /tasks
  */


 /*
  * GET /tasks/index
  */

  index: {
  method: 'GET',
  fn: function (req, res) {
   //
  }
 },

 /*
  * GET /tasks/show
  */

  show: {
  method: 'GET',
  fn: function (req, res) {
   //
  }
 },

 /*
  * PUT /tasks/update
  */

  update: {
  method: 'PUT',
  fn: function (req, res) {
   //
  }
 },

 /*
  * DELETE /tasks/destroy
  */

  destroy: {
  method: 'DELETE',
  fn: function (req, res) {
   //
  }
 },


};
```

### Restful
Generates a restful controller in `app/controllers`.

Example:
```bash
yo selena:restful users
```

Produces `app/controllers/users.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {

  /*
   * GET /users
   */
  index: function (req, res) {
    //
  },

  /*
   * GET /users/new
   */
  new: function (req, res) {
    //
  },

  /*
   * POST /users
   */
  create: function (req, res) {
    //
  },

  /*
   * GET /users/:task
   */
  show: function (req, res) {
    //
  },

  /*
   * GET /users/:task/edit
   */
  edit: function (req, res) {
    //
  },

  /*
   * PUT /users/:task
   */
  update: function (req, res) {
    //
  },

  /*
   * DELETE /users/:task
   */
  destroy: function (req, res) {
    //
  }
};
```

### Middleware
Generates a middleware in `app/middlewares`.

Example:
```bash
yo selena:middleware selena_example
```

Produces `app/middlewares/selena_example.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

/*
* Name: selena_example
*/

module.exports = {

  /*
   * Set true if you want enable this middleware
   */
  enabled: true,
  fn: function () {
    return function (req, res, next) {
      //
      next();
    };
  }
};

```

### Model
Generates a model in `app/models`.

Example:
```bash
yo selena:model Task name:String slug:String closed:Boolean created:Date
```

Produces `app/models/tasks.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
 * Task Schema
 */
var TaskSchema = new Schema({

  name: {
    type: String
  },

  slug: {
    type: String
  },

  closed: {
    type: Boolean
  },

  created: {
    type: Date
  },

});

//Exports model
module.exports = mongoose.model('Task', TaskSchema);
```

### View
Generates a view in `app/views`.

Example:
```bash
yo selena:view tasks
```

Produces `app/views/tasks.html`:
```html
{% extends '../layouts/default.html' %} 

{% block content %}
<p>This is the tasks view</p>
{% endblock %}
```

### Service
Generates a service in `app/services`.

Example:
```bash
yo selena:service names "name:Chris" "name:Bella"
```

Produces `app/services/names.json`:
```json
{
 "name": "Chris",
 "name": "Bella",
}
```

### Socket
Generates a socket in `app/sockets`.

Example:
```bash
yo selena:socket test index
```

Produces `app/sockets/test.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 EnyTC Corporation
 * Licensed under the BSD license.
 */

'use strict';

module.exports = {


  /*
   * SOCKET test/index
   */

  index: {
    on: function (data) {
      console.log(data);
      this.emit('test/index', 'testing sockets');
    },
    emit: 'test this'
  },

};
```

### Test
Generates a test in `test/`.

Example:
```bash
yo selena:make tasks "GET /tasks" "should be return a welcome"
```

Produces `test/tasks_test.js`:
```javascript
/*
 * selena
 * https://github.com/enytc/selena
 *
 * Copyright (c) 2014 Christopher EnyTC
 * Licensed under the MIT license.
 */

'use strict';

var supertest = require('supertest');
var selena = require('../lib/selena.js');
var request = supertest(selena().http);
var chai = require('chai');
chai.expect();
chai.should();

describe('#tasks', function () {
  describe('GET /tasks', function () {
    it('should be return a welcome', function (done) {
      request
        .get('/tasks')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, {}, done);
    });
  });
});
```

### ng-route
Generates a controller and view, and configures a route in `app/public/app.js` connecting them.

Example:
```bash
yo selena:ng-route myroute
```

Produces `app/public/controllers/myroute.js`:
```javascript
app.controller('myrouteCtrl', function ($scope) {
  // ...
});
```

Produces `app/public/views/myroute.html`:
```html
<p>This is the myroute view</p>
```

### ng-controller
Generates a controller in `app/public/controllers`.

Example:
```bash
yo selena:ng-controller user
```

Produces `app/public/controllers/userCtrl.js`:
```javascript
app.controller('userCtrl', function ($scope) {
  // ...
});
```
### ng-directive
Generates a directive in `app/public/directives`.

Example:
```bash
yo selena:ng-directive myDirective
```

Produces `app/public/directives/myDirective.js`:
```javascript
app.directive('myDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the myDirective directive');
    }
  };
});
```

### ng-filter
Generates a filter in `app/public/filters`.

Example:
```bash
yo selena:ng-filter myFilter
```

Produces `app/public/filters/myFilter.js`:
```javascript
app.filter('myFilter', function () {
  return function (input) {
    return 'myFilter filter:' + input;
  };
});
```

### ng-view
Generates an HTML view file in `app/public/views`.

Example:
```bash
yo selena:ng-view user
```

Produces `app/public/views/user.html`:
```html
<p>This is the user view</p>
```

### ng-service
Generates an AngularJS service.

Example:
```bash
yo selena:ng-service myService
```

Produces `app/public/services/myServiceService.js`:
```javascript
app.service('myService', function () {
  // ...
});
```

You can also do `yo selena:ng-factory`, `yo selena:ng-provider`, `yo selena:ng-value`, and `yo selena:ng-constant` for other types of services.

### ng-decorator
Generates an AngularJS service decorator.

Example:
```bash
yo selena:ng-decorator serviceName
```

Produces `app/public/decorators/serviceName.js`:
```javascript
app.config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // ...
      return $delegate;
    });
  });
```

## Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/enytc/selena/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/enytc/selena/issues).

## License
Copyright (c) 2014 Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
