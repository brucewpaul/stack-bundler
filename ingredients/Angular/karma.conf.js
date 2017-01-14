module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
        'client/bower_components/angular/angular.js',
        'client/bower_components/angular-route/angular-route.js',
        'client/bower_components/angular-mocks/angular-mocks.js',
        'client/about/**/*.js',
        'client/home/**/*.js',
        'client/services/**/*.js',
        'client/app.js',
        'Test/Angular/**/*.js',
    ],

    autoWatch: true,

    singleRun: true,

    frameworks: ['mocha', 'chai', 'sinon'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-mocha',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-sinon'
    ],

  });
};