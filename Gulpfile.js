
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
gulp.task("webpack", function() {
	var myConfig = Object.create(webpackConfig);
    webpack(myConfig);
});

// ×¢²áÈ±Ê¡ÈÎÎñ
gulp.task('default', ['webpack']);