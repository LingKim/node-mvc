const gulp = require('gulp');
const babel = require('gulp-babel');
const entry = './src/**/*.js'

function buildProd() {
	return gulp
		.src(entry)
		.pipe(
			babel({
				babelrc: false,
				// ignore: [cleanEntry],
				plugins: ['@babel/plugin-transform-modules-commonjs'],
			})
		)
		.pipe(gulp.dest('dist'));
}

const build = gulp.series(buildProd);

gulp.task('default',build)