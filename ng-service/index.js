'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgserviceGenerator = module.exports = function NgserviceGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgserviceGenerator, yeoman.generators.NamedBase);

NgserviceGenerator.prototype.files = function files() {
  this.template('_service.js', 'app/public/services/' + this.name.toLowerCase() + 'Service.js');
};
