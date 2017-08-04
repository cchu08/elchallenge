var gulp = require('gulp');
var merge = require('gulp-merge-json');

gulp.task("default", function() {
  gulp.src('lab_results/*.json')
      .pipe(merge(
        {
        concatArrays: true,
        fileName: 'allLabResults.json',
        startObj: [],
      }))
      .pipe(gulp.dest('./'))
});