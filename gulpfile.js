var gulp = require('gulp');
var $ = require("gulp-load-plugins")();

// VARIABLES
// ---------------------------------------------
var outputFolder = './build';

var sources = {
  sass: 'src/style/**/*.scss'
};

// TASKS
// ----------------------------------------------

gulp.task('sass', function() {
  return gulp.src(sources.sass)
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer())
    .pipe(gulp.dest(outputFolder))
});

gulp.task("watch", function() {
  gulp.watch(sources.sass, gulp.parallel("sass"));
});


gulp.task(
  "dev",
  gulp.series("sass", "watch")
);
