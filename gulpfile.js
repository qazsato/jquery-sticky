var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function () {
  gulp.src('./src/**/*.html')
      .pipe($.minifyHtml())
      .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  gulp.src('./src/**/*.js')
      .pipe($.uglify())
      .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
  gulp.src('./src/**/*.css')
      .pipe($.cssmin())
      .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  gulp.src('./src/**/*.scss')
      .pipe($.sass({outputStyle: 'compressed'}))
      .pipe($.autoprefixer())
      .pipe(gulp.dest('./dist'));
});

gulp.task('image', function () {
  gulp.src('./src/**/*.+(jpg|jpeg|png|gif|svg)')
      .pipe($.imagemin())
      .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/**/*.css', ['css']);
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task("server", function() {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('./src/**/*.html', ['html', reload]);
    gulp.watch('./src/**/*.js', ['js', reload]);
    gulp.watch('./src/**/*.css', ['css', reload]);
    gulp.watch('./src/**/*.scss', ['sass', reload]);
});

gulp.task('default', ['html', 'js', 'css', 'sass', 'image']);
