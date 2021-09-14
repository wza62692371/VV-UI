'use strict';
const { series, src, dest } = require('gulp');
const less = require('gulp-less');
var cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

function compile() {
  return src('./src/*.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib'));
}

function copyfont() {
  return src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
}


exports.build = series(compile, copyfont);