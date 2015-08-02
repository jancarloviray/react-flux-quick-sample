var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpif = require('gulp-if');
var streamify = require('gulp-streamify');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');

var production = process.env.NODE_ENV === 'production';

var dependencies = [
    'alt',
    'react',
    'react-router',
    'underscore'
];

// combine all bower libraries into a single file
gulp.task('vendor', function() {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/pace/pace.min.js'
    ]).pipe(concat('vendor.js'))
        .pipe(gulpif(production, uglify({mangle: false})))
        .pipe(gulp.dest('public/js'));
});

// compile third-party dependencies separately (npm-loaded)
gulp.task('browserify-vendor', function() {
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendor.bundle.js'))
        .pipe(gulpif(production, streamify(uglify({mangle: false}))))
        .pipe(gulp.dest('public/js'));
});

// compile project files, excluding third-party dependencies
gulp.task('browserify', ['browserify-vendor'], function() {
    return browserify('app/main.js')
        // prevent dependencies from being loaded here
        .external(dependencies)
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulpif(production, streamify(uglify({mangle: false}))))
        .pipe(gulp.dest('public/js'));
});

// compiles projects files, plus watches for changes and re-compiles then
gulp.task('browserify-watch', ['browserify-vendor'], function() {
    var bundler = watchify(browserify('app/main.js', watchify.args));
    bundler.external(dependencies);
    bundler.transform(babelify);
    bundler.on('update', rebundle);
    return rebundle();

    function rebundle() {
        var start = Date.now();
        return bundler.bundle()
            .on('error', function(err) {
                gutil.log(gutil.colors.red(err.toString()));
            })
            .on('end', function() {
                gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
            })
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('public/js/'));
    }
});

// compiles less stylesheets
gulp.task('styles', function() {
    return gulp.src('app/stylesheets/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulpif(production, cssmin()))
        .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    gulp.watch('app/stylesheets/**/*.less', ['styles']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch']);
gulp.task('build', ['styles', 'vendor', 'browserify']);
