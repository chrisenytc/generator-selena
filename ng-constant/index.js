'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgconstantGenerator = module.exports = function NgconstantGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgconstantGenerator, yeoman.generators.NamedBase);

NgconstantGenerator.prototype.files = function files() {
  this.template('_constant.js', 'app/public/services/' + this.name.toLowerCase() + 'Constant.js');
};
