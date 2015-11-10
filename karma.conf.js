var path = require('path');
var webpackConfig = require('./webpack.config');

// No hot reload for tests!
var modules = webpackConfig.module;
modules.loaders[0].query.env = {};

module.exports = function (config) {
  config.set({
    autoWatch: true,
    singleRun: false,
    frameworks: ['mocha', 'chai'],
    reporters: ['dots'],
    browsers: ['Firefox'],
    files: [
      'src/tests/index.js'
    ],
    preprocessors: {
      'src/tests/index.js': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ['', '.js']
      },
      module: modules
    },
    webpackMiddleware: {
      watchOptions: { poll: true },
      stats: {
        color: true,
        chunkModules: false,
        modules: false
      }
    }
  });

};
