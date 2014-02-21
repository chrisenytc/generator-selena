'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var banner = require('./banner.js');


var SelenaGenerator = module.exports = function SelenaGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SelenaGenerator, yeoman.generators.Base);

SelenaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  banner();

  var prompts = [{
    name: 'appName',
    message: 'What the project name?'
  }, {
    name: 'appDescription',
    message: 'What the description?'
  }, {
    name: 'appVersion',
    message: 'What the project version?',
    default: '0.1.0'
  }, {
    name: 'authorName',
    message: 'What the author name?',
  }, {
    name: 'authorEmail',
    message: 'What the author email?',
  }, {
    name: 'userName',
    message: 'What the github username?',
  }, {
    type: 'confirm',
    name: 'enableTravis',
    message: 'Would you like to enable travis support?',
    default: true
  }];

  this.prompt(prompts, function(props) {
    this.appName = props.appName;
    this.appDescription = props.appDescription;
    this.appVersion = props.appVersion;
    this.authorName = props.authorName;
    this.authorEmail = props.authorEmail;
    this.userName = props.userName;
    this.enableTravis = props.enableTravis;

    cb();
  }.bind(this));
};

SelenaGenerator.prototype.app = function app() {
  var appName = this.appName;

  this.mkdir(appName);
  process.chdir(appName);

  //Api folder
  this.mkdir('app');
  this.mkdir('app/assets');
  this.mkdir('app/assets/theme');
  this.mkdir('app/assets/theme/css');
  this.mkdir('app/assets/theme/img');
  this.mkdir('app/assets/theme/js');
  this.mkdir('app/config');
  this.mkdir('app/config/development');
  this.mkdir('app/config/production');
  this.mkdir('app/config/test');
  this.mkdir('app/controllers');
  this.mkdir('app/locales');
  this.mkdir('app/locales/en');
  this.mkdir('app/locales/sv');
  this.mkdir('app/middlewares');
  this.mkdir('app/models');
  this.mkdir('app/public');
  this.mkdir('app/public/controllers');
  this.mkdir('app/public/decorators');
  this.mkdir('app/public/directives');
  this.mkdir('app/public/filters');
  this.mkdir('app/public/services');
  this.mkdir('app/public/views');
  this.mkdir('app/services');
  this.mkdir('app/sockets');

  this.directory('app');

  //Lib folder
  this.mkdir('lib');
  this.mkdir('lib/ssl');

  this.directory('lib');

  //Test folder
  this.mkdir('test');

  this.directory('test');
};

SelenaGenerator.prototype.projectfiles = function projectfiles() {
  this.template('CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('LICENSE', 'LICENSE');
  this.template('_package.json', 'package.json');
  this.template('README.md', 'README.md');
  this.copy('app.js', 'app.js');
  this.copy('bower.json', 'bower.json');
  this.copy('bowerrc', '.bowerrc');
  this.copy('CHANGELOG', 'CHANGELOG');
  this.copy('cluster.js', 'cluster.js');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitignore', '.gitignore');
  this.copy('Gulpfile.js', 'Gulpfile.js');
  this.copy('jshintrc', '.jshintrc');
  this.copy('npmignore', '.npmignore');
  this.copy('Procfile', 'Procfile');
  this.copy('yuidoc.json', 'yuidoc.json');
  //Check if travis option is enabled
  if (this.enableTravis) {
    this.copy('travis.yml', '.travis.yml');
  }
};