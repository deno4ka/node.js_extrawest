const gulp = require('gulp');

const del = require('del');
gulp.task('del', function() {
    return (async () => {
        const deletedPaths = await del(['built/**']);

        console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
    })();
});

const tslint = require('gulp-tslint');
gulp.task('tslint', () =>
    gulp.src('src/**')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
);

const ts = require('gulp-typescript');
gulp.task('compile', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('built/local'));
});

gulp.task('all', gulp.series(['del', 'tslint', 'compile']));

gulp.task('default', gulp.series(['all']));