'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'styles'] ,function () {
  gulp.watch('src/{app,components}/**/*.scss', ['styles']);
  gulp.watch('src/{app,components}/**/*.js', ['scripts']);
  gulp.watch('src/{app,components}/**/*.jade', ['partials', 'scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('src/*.jade', ['jad']);
  gulp.watch('bower.json', ['wiredep']);
});
