const gulp = require('gulp');
const postcss = require('postcss');

gulp.task('sort', function () {
  return gulp.src('sugarss/**/*.sss')
    .pipe(postcss(sugarss, { stringifier: css }))
    .pipe(gulp.dest('css'));
});
