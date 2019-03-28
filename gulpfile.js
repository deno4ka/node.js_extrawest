require("@babel/register");

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
            outFile: 'output.js',
            module: 'system'
        }))
        .pipe(gulp.dest('built/local'));
});

gulp.task('all', gulp.series(['del', 'tslint', 'compile']));

const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

// gulp.task('babel', () =>
//     gulp.src('src/**/*.ts', '!src/lessons/**')
//         .pipe(sourcemaps.init())
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(concat('all.js'))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('dist'))
// );

const jasmine = require('gulp-jasmine');

gulp.task('default', () =>
    gulp.src('spec/**')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
        .pipe(jasmine())
);

// gulp.task('default', gulp.series(['all']));

// gulp.task('default', mock => { // empty task
//     mock();
// });
