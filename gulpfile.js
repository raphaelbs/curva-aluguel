var gulp  = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var htmlmin = require('gulp-htmlmin');
var jsonminify = require('gulp-jsonminify');

// Operação padrão: chame 'gulp' no terminal
gulp.task('init', ['build-app',
	'build-less', 'build-html', 'build-json']);

// Operação padrão: chame 'gulp' no terminal
gulp.task('default', ['init', 'watch']);

// Constroi 1 único arquivo app.js
gulp.task('build-app', function() {
	return gulp.src('./src/app/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/dist/js'));
});

// Constroi 1 único arquivo .less
gulp.task('build-less', function(){
	return gulp.src('./src/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'));
});

// Realoca arquivos html
gulp.task('build-html', function(){
	return gulp.src('./src/**/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist/html'));
});

// Realoca arquivos json
gulp.task('build-json', function(){
	return gulp.src('./src/**/*.json')
		.pipe(jsonminify())
		.pipe(gulp.dest('./dist/html'));
});

// Observa por mudanças nos arquivos
gulp.task('watch', function() {
	gulp.watch('./src/**/*.js', ['build-app']);
	gulp.watch('./src/**/*.less', ['build-less']);
	gulp.watch('./src/**/*.html', ['build-html']);
	gulp.watch('./src/**/*.json', ['build-json']);
});
