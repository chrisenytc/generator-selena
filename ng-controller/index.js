'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgcontrollerGenerator = module.exports = function NgcontrollerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgcontrollerGenerator, yeoman.generators.NamedBase);

NgcontrollerGenerator.prototype.files = function files() {
  this.template('_controller.js', 'app/public/controllers/' + this.name.toLowerCase() + 'Ctrl.js');
};
