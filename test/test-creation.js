/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;


describe('selena generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('selena:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            'app',
            'app/assets',
            'app/assets/theme',
            'app/assets/theme/css',
            'app/assets/theme/css/admin.css',
            'app/assets/theme/css/login.css',
            'app/assets/theme/css/pure-min.css',
            'app/assets/theme/img',
            'app/assets/theme/js',
            'app/config',
            'app/config/development',
            'app/config/development/app.json',
            'app/config/development/auth.json',
            'app/config/development/cors.json',
            'app/config/development/database.json',
            'app/config/development/errors.json',
            'app/config/development/i18n.json',
            'app/config/development/mail.json',
            'app/config/development/middlewares.json',
            'app/config/development/ssl.json',
            'app/config/production',
            'app/config/production/app.json',
            'app/config/production/auth.json',
            'app/config/production/cors.json',
            'app/config/production/database.json',
            'app/config/production/i18n.json',
            'app/config/production/mail.json',
            'app/config/production/errors.json',
            'app/config/production/middlewares.json',
            'app/config/production/ssl.json',
            'app/config/test',
            'app/config/test/app.json',
            'app/config/test/auth.json',
            'app/config/test/cors.json',
            'app/config/test/database.json',
            'app/config/test/i18n.json',
            'app/config/test/mail.json',
            'app/config/test/errors.json',
            'app/config/test/middlewares.json',
            'app/config/test/ssl.json',
            'app/controllers',
            'app/controllers/index.js',
            'app/controllers/routes.js',
            'app/controllers/users.js',
            'app/locales',
            'app/locales/en',
            'app/locales/en/messages.json',
            'app/locales/sv',
            'app/locales/sv/messages.json',
            'app/middlewares',
            'app/middlewares/middleware.js',
            'app/models',
            'app/public',
            'app/public/controllers',
            'app/public/controllers/indexCtrl.js',
            'app/public/decorators',
            'app/public/directives',
            'app/public/filters',
            'app/public/services',
            'app/public/views',
            'app/public/views/index.html',
            'app/public/app.js',
            'app/public/init.js',
            'app/services',
            'app/services/names.json',
            'app/sockets',
            'app/sockets/test.js',
            'app/views',
            'app/views/home',
            'app/views/home/index.html',
            'app/views/includes',
            'app/views/includes/alert.html',
            'app/views/includes/error.html',
            'app/views/includes/foot.html',
            'app/views/includes/head.html',
            'app/views/includes/messages.html',
            'app/views/includes/success.html',
            'app/views/layouts',
            'app/views/layouts/default.html',
            'app/views/layouts/login.html',
            'app/views/users',
            'app/views/users/login.html',
            'app/views/users/signup.html',
            'app/views/404.html',
            'app/views/500.html',
            'lib/ssl',
            'lib/ssl/.gitkeep',
            'lib/authorization.js',
            'lib/loader.js',
            'lib/mailer.js',
            'lib/debugger.js',
            'lib/passport.js',
            'lib/passportRoutes.js',
            'lib/selena.js',
            'lib/selenaHttp.js',
            'lib/selenaHttps.js',
            'test',
            'test/selena_test.js',
            'test/requests_test.js',
            'test/services_test.js',
            'CONTRIBUTING.md',
            'LICENSE',
            'package.json',
            'README.md',
            'app.js',
            'bower.json',
            '.bowerrc',
            'CHANGELOG',
            'cluster.js',
            '.editorconfig',
            '.gitignore',
            'Gulpfile.js',
            '.jshintrc',
            '.npmignore',
            'Procfile',
            '.travis.yml',
            'yuidoc.json'
        ];

        helpers.mockPrompt(this.app, {
            'appName': 'selena',
            'appDescription': 'The best project ever',
            'appVersion': '0.1.0',
            'authorName': 'Christopher EnyTC',
            'authorEmail': 'chrisenytc@gmail.com',
            'userName': 'chrisenytc',
            'enableTravis': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
