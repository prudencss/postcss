const gulp = require('gulp');
const postcss = require('postcss');

gulp.task('sort', function () {
  return gulp.src('src/**/*.sss.md')
    .pipe(postcss([
      require('mdcss')({ theme: require('mdcss-theme-github') })
    ])
    .pipe(postcss(sugarss, { stringifier: css }))
    .pipe(gulp.dest('css'));
});
