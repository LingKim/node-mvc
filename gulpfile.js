const { src,dest,series } = require('gulp');
const babel = require('gulp-babel');
const del = require('del');
const vinylPaths = require('vinyl-paths');
const entry = './src/**/*.js'

function buildProd() {
	return src(entry)
		.pipe(
			babel({
				babelrc: false,
				// ignore: [cleanEntry],
				plugins: ['@babel/plugin-transform-modules-commonjs'],
			})
		)
		.pipe(dest('dist'));
}

function clean(){
	return src('dist')
		.pipe(del('dist'))
}

exports.buildProd = buildProd;
exports.default = series(buildProd);
