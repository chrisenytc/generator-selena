'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgfilterGenerator = module.exports = function NgfilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgfilterGenerator, yeoman.generators.NamedBase);

NgfilterGenerator.prototype.files = function files() {
  this.template('_filter.js', 'app/public/filters/' + this.name.toLowerCase() + '.js');
};
