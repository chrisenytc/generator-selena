'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgdecoratorGenerator = module.exports = function NgdecoratorGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgdecoratorGenerator, yeoman.generators.NamedBase);

NgdecoratorGenerator.prototype.files = function files() {
  this.template('_decorator.js', 'app/public/decorators/' + this.name.toLowerCase() + '.js');
};
