var path = require('path');
var webpackConfig = require('./webpack.config');

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
      module: webpackConfig.module
    },
    webpackMiddleware: {
      noInfo: true,
      watchOptions: { poll: true },
      stats: {
        color: true,
        chunkModules: false,
        modules: false
      }
    }
  });

};
