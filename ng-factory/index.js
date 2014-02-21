'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgfactoryGenerator = module.exports = function NgfactoryGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgfactoryGenerator, yeoman.generators.NamedBase);

NgfactoryGenerator.prototype.files = function files() {
  this.template('_factory.js', 'app/public/services/' + this.name.toLowerCase() + 'Factory.js');
};
