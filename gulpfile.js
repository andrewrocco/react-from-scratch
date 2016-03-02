// gulpfile.js
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var watchify    = require('watchify');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();

watchify.args.debug = true;
var bundler = watchify(browserify('./src/script.js', watchify.args));

bundler.transform(babelify.configure({
  presets: ["es2015", "react"]
}));

bundler.on('update', bundle);

function bundle() {

  gutil.log('Bundling...');

  return bundler.bundle()
    .on('error', function (err) {
      gutil.log(err.message);
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({once: true}));
}

gulp.task('bundle', function () {
  return bundle();
});

gulp.task('default', ['bundle'], function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch('index.html', function() {
    browserSync.reload();
  })
});
