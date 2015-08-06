var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var del = require('del');
var KarmaServer = require('karma').Server;

// VARIABLES
// ---------------------------------------------
var outputFolder = './build';

var sources = {
  scripts: 'src/app/**/*.js',
  sass: 'src/style/**/*.scss',
  index: 'src/index.html'
};

var devCompiler = webpack(webpackConfig);
var devServer;

// TASKS
// ----------------------------------------------

gulp.task("index", function() {
  return gulp
    .src(sources.index)
    .pipe(gulp.dest(outputFolder));
});

gulp.task('sass', function() {
  return gulp.src(sources.sass)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest(outputFolder))
});

gulp.task('clean', function(cb) {
  del([outputFolder], cb);
});

gulp.task("test:watch", function(cb) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false
  }, cb).start();
});


gulp.task("watch", function() {
  gulp.watch(sources.sass, gulp.parallel("sass"));
  gulp.watch(sources.index, gulp.parallel("index"));
});


gulp.task(
  "dev",
  gulp.series("clean", "sass", "index", gulp.parallel("test:watch", "webpack:server", "watch"))
);

gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("sass", "index", "webpack:build"))
);
