;
(function () {
    'use strict';

    var gulp        = require('gulp'),
        wrap        = require('gulp-wrap'),
        less        = require('gulp-less'),
        watch       = require('gulp-watch'),
        concat      = require('gulp-concat'),
        notify      = require("gulp-notify"),
        declare     = require('gulp-declare'),
        path        = require('path');

    // Source Path
    var SOURCE_LESS = 'resources/less/**/*.less';

    // Less Compilation
    gulp.task('less', function () {
      return gulp.src('resources/less/**/*.less')
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('public/css'))
        .pipe(notify('Less Compiled'));
    });

    // Watch task
    gulp.task('watch', function () {
        gulp.watch(SOURCE_LESS, ['less']);
    });

    gulp.task('default', ['less']);    

})();