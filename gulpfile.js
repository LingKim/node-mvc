const { src,dest,series } = require('gulp');
const babel = require('gulp-babel');
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

exports.buildProd = buildProd;
exports.default = series(buildProd);
