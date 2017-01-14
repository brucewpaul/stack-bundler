var fs = require('fs');
var _ = require('lodash');

var gruntMain = [
  'module.exports = function(grunt) {\n',
  '}\n'
];

var gruntInitConfig = [
  '  grunt.initConfig({\n',
  '    pkg: grunt.file.readJSON(\'package.json\'),\n',
  '  });\n'
]

var pluginConfigsSpecifc = {
  cssmin: {
    name: '    cssmin: {\n',
    src: '          src: [\'*.css\', \'!*.min.css\'],\n',
    ext: '          ext: \'.min.css\'\n'
  },
  uglify: {
    name: '    uglify: {\n',
    src: '          src: [\'*.js\', \'!*.min.js\'],\n',
    ext: '          ext: \'.min.js\'\n'
  },
  sass: {
    name: '    sass: {\n',
    src: '          src: [\'*.scss\'],\n',
    ext: '          ext: \'.css\'\n',
  },
  less: {
    name: '    less: {\n',
    src: '          cwd: \'client/assets\',\n',
    ext: '          ext: \'.css\'\n',
  }
}

var pluginConfig = [
  'name',
  '      target: {\n',
  '        files: [{\n',
  '          expand: true,\n',
  '          cwd: \'client/assets\',\n',
  'src',
  '          dest: \'client/assets\',\n',
  'ext',
  '        }]\n',
  '      }\n',
  '    },\n'
]

var watchOptions = {
  uglify: [
    '      uglify: {\n',
    '        files: \'client/assets/*.js\',\n',
    '        tasks: [\'uglify\']\n',
    '      },\n'
  ],
  sass: [
    '      sass: {\n',
    '        files: \'client/assets/*.scss\',\n',
    '        tasks: [\'sass\']\n',
    '      },\n'
  ],
  less: [
    '      less: {\n',
    '        files: \'client/assets/*.less\',\n',
    '        tasks: [\'less\']\n',
    '      },\n'
  ],
  cssmin: [
    '      cssmin: {\n',
    '        files: \'client/assets/*.css\',\n',
    '        tasks: [\'cssmin\']\n',
    '      },\n'
  ]
}

var loadNpmTasks = {
  cssmin: '  grunt.loadNpmTasks(\'grunt-contrib-cssmin\');\n',
  uglify: '  grunt.loadNpmTasks(\'grunt-contrib-uglify\');\n',
  sass: '  grunt.loadNpmTasks(\'grunt-contrib-sass\');\n',
  less: '  grunt.loadNpmTasks(\'grunt-contrib-less\');\n',
  watch: '  grunt.loadNpmTasks(\'grunt-contrib-watch\');\n'
}

var buildWatchConfig = function(options) {
  var watchConfig = '    watch: {\n';
  _.forEach(options.devTools.taskRunner.plugins, function(plugin) {
    if (plugin !== 'watch') {
      _.forEach(watchOptions[plugin], function(line) {
        if (typeof line === 'object') {
          watchConfig += line[options.frontEnd.framework];
        } else {
          watchConfig += line;
        }
      });
    }
  });
  watchConfig += '    },\n';
  return watchConfig;
}

var createGruntTask = function(task) {
  var gruntTask = '  grunt.registerTask(';
  gruntTask = gruntTask + "'" + task.name + "', [";
  _.forEach(task.plugins, function(plugin, index) {
    var formattedPlugin = "'" + plugin + "'";
    if (index !== task.plugins.length - 1) {
      gruntTask = gruntTask + formattedPlugin + ', ';
    } else {
      gruntTask += formattedPlugin;
    }
  });
  gruntTask += ']);\n';
  return gruntTask;
}

var createGruntfileContents = function(options) {
  var gruntFile = '';
  gruntFile += gruntMain[0];
  gruntFile += gruntInitConfig[0];
  gruntFile += gruntInitConfig[1];
  // for each plugin, insert it into the config init
  _.forEach(options.devTools.taskRunner.plugins, function(plugin) {
    if (plugin !== 'watch') {
      _.forEach(pluginConfig, function(line) {
          if (line === 'name') {
            gruntFile += pluginConfigsSpecifc[plugin].name;
          } else if (line === 'src') {
            gruntFile += pluginConfigsSpecifc[plugin].src;
          } else if (line === 'ext') {
            gruntFile += pluginConfigsSpecifc[plugin].ext;
          } else {
            gruntFile += line;
          }
      });
    } else {
      gruntFile += buildWatchConfig(options);
    }
  });
  gruntFile += gruntInitConfig[2];
  // for each plugin, load npm module
  _.forEach(options.devTools.taskRunner.plugins, function(plugin) {
    gruntFile += loadNpmTasks[plugin];
  });
  // for each task, create the task.
  _.forEach(options.devTools.taskRunner.tasks, function(task) {
    gruntFile += createGruntTask(task);
  });
  gruntFile += gruntMain[1];
  return gruntFile;
}

module.exports = createGruntfileContents;