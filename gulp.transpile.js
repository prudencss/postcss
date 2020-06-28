const gulp = require('gulp');
const postcss = require('postcss');

gulp.task('sort', function () {
  return gulp.src('src/**/*.sss')
    .pipe(postcss(sugarss, { stringifier: css }))
    .pipe(gulp.dest('css'));
});
