'use strict';

const path = require('path'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  rimraf = require('rimraf'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware');

gulp.task('clean', () =>
  rimraf('dist/*', err => {
    if (err) throw new gutil.PluginError('clean', err)
  })
);
