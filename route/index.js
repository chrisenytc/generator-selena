'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var RouteGenerator = module.exports = function RouteGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.hookFor('selena:controller', {
		args: args
  });
  this.hookFor('selena:view', {
		args: args
  });
};

util.inherits(RouteGenerator, yeoman.generators.NamedBase);

RouteGenerator.prototype.files = function files() {
  //
};
