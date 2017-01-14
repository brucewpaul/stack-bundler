var fs = require('fs');
var _ = require('lodash');



var gulpModules = [
'\'use strict\';\n',
'var gulp = require(\'gulp\');\n',
'var cleanCSS = require(\'gulp-clean-css\');\n',
'var extname = require(\'gulp-extname\');\n'
];

var gulpOptions = {
  sass: 'var sass = require(\'gulp-sass\');\n',
  less: 'var less = require(\'gulp-less\');\n',
  css: '\n'
};

var gulpTasks = {
  sass: '\ngulp.task(\'build-sass\', function () {\n  return gulp.src(\'client/public/assets/*.scss\')\n    .pipe(sass().on(\'error\', sass.logError))\n    .pipe(cleanCSS())\n    .pipe(extname(\'.min.css\'))\n    .pipe(gulp.dest(\'client/public/assets\'));\n});\n',
  less: '\ngulp.task(\'build-less\', function () {\n  return gulp.src(\'client/public/assets/*.less\')\n    .pipe(less())\n    .pipe(cleanCSS())\n    .pipe(extname(\'.min.css\'))\n    .pipe(gulp.dest(\'client/public/assets\'));\n});\n',
  css: '\ngulp.task(\'build-css\', function () {\n  return gulp.src(\'client/public/assets/*.css\')\n    .pipe(cleanCSS())\n    .pipe(extname(\'.min.css\'))\n    .pipe(gulp.dest(\'client/public/assets\'));\n});\n'
}

function createGulpFile (options) {
  var gulpWatch = '\ngulp.task(\'watch\', function() {\n  gulp.watch(\'client/public/assets\', [\'' + "build-" + options.devTools.styling + '\']);\n});';
  var gulpFile = '';
  gulpModules.push(gulpOptions[options.devTools.
  styling]); //set up the dependancies with less/sass
  _.forEach(gulpModules, function(dependency) {
    gulpFile += dependency;
  });
  gulpModules.pop();
  gulpFile += gulpWatch;
  gulpFile += gulpTasks[options.devTools.
  styling];
  return gulpFile;
};

module.exports = createGulpFile;