var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');

gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'));
});

gulp.task('css', function() {
    gulp.src(['bower_components/skeleton/css/normalize.css',
        'bower_components/skeleton/css/skeleton.css',
        'src/css/chessboard-0.3.0.min.css',
        'src/css/main.css'])
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('css'));
    gulp.src(['bower_components/skeleton/css/normalize.css',
        'bower_components/skeleton/css/skeleton.css',
        'src/css/tournament.css'])
        .pipe(minifyCSS())
        .pipe(concat('tournament.min.css'))
        .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    gulp.src(['src/js/chess.js',
        'src/js/chessboard-0.3.0.min.js',
        'src/js/custom.js'])
        .pipe(concat('page.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js'));
    gulp.src('src/js/play_chess.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/css/**/*.css', ['css']);
    gulp.watch('src/js/**/*.js', ['js']);
})

gulp.task('default', function(callback) {
  runSequence('less', 'css', 'js', 'watch', callback);
})