'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgdirectiveGenerator = module.exports = function NgdirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgdirectiveGenerator, yeoman.generators.NamedBase);

NgdirectiveGenerator.prototype.files = function files() {
  this.template('_directive.js', 'app/public/directives/' + this.name.toLowerCase() + '.js');
};
