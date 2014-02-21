'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgrouteGenerator = module.exports = function NgrouteGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  this.hookFor('selena:ng-controller', {
		args: args
  });
  this.hookFor('selena:ng-view', {
		args: args
  });
};

util.inherits(NgrouteGenerator, yeoman.generators.NamedBase);

NgrouteGenerator.prototype.files = function files() {
  //
};
