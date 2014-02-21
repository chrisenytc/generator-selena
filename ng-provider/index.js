'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgproviderGenerator = module.exports = function NgproviderGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgproviderGenerator, yeoman.generators.NamedBase);

NgproviderGenerator.prototype.files = function files() {
  this.template('_provider.js', 'app/public/services/' + this.name.toLowerCase() + 'Provider.js');
};
