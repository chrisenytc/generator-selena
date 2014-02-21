'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgvalueGenerator = module.exports = function NgvalueGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
 
};

util.inherits(NgvalueGenerator, yeoman.generators.NamedBase);

NgvalueGenerator.prototype.files = function files() {
  this.template('_value.js', 'app/public/services/' + this.name.toLowerCase() + 'Value.js');
};
