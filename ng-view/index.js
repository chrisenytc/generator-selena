'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var NgviewGenerator = module.exports = function NgviewGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

};

util.inherits(NgviewGenerator, yeoman.generators.NamedBase);

NgviewGenerator.prototype.files = function files() {
  this.template('_view.html', 'app/public/views/' + this.name.toLowerCase() + '.html');
};
