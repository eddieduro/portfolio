'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sassSources     = ['sass/**/*.scss'];

gulp.task('sass', function () {
  return gulp.src(sassSources)
    .pipe(sass({
        includePaths: ['bower_components/compass-mixins/lib']}
    ))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream: true}))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('watch-server', ['sass'], function() {
    browserSync.init( {
        // browsersync with a MAMP php server
        // Note: BS still serves on port 3000
        proxy: "localhost:8888",
        reloadOnRestart: true
    });
    gulp.watch(sassSources,     ['sass']);
});

gulp.task('sass:prod', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
       browsers: ['last 2 version']
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:dev', function () {
  gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 version']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass:dev']);
});

gulp.task('default', ['sass:dev', 'sass:watch', 'watch-server']);
