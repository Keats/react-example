var path = require('path');
var webpackConfig = require('./webpack.config');
console.log(webpackConfig);
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
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel?optional[]=runtime&stage=1'],
            exclude: /node_modules/
          }
        ]
      }
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
