var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var ghPages = require('gulp-gh-pages');
var del = require('del');

var paths = {
  files: 'doc/*.md',
  dest: 'output'
};

gulp.task('md', function() {
  return gulp.src(paths.files)
    .pipe(pandoc({
      // bug https://github.com/jgm/pandoc/issues/1841
      from: 'markdown-markdown_in_html_blocks',
      to: 'html',
      ext: '.html',
      args: ['--template=tpl.html']
    }))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function(cb) {
  del(paths.dest, cb);
});

gulp.task('css', function() {
  return gulp.src('css/*')
  .pipe(gulp.dest(paths.dest + '/css'));
});

gulp.task('img', function() {
  return gulp.src('img/*')
  .pipe(gulp.dest(paths.dest + '/img'));
});

gulp.task('watch', function() {
  gulp.watch('css/*', ['css']);
  gulp.watch(paths.files, ['md']);
});

gulp.task('deploy', function() {
  return gulp.src(paths.dest + '/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['css', 'img', 'md']);
