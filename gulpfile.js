// require('@babel/register');
// import 'reflect-metadata';

const gulp = require('gulp');
const del = require('del');
const tslint = require('gulp-tslint');

const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const jasmine = require('gulp-jasmine');

gulp.task('del', () => {
    return (async () => {
        await del(['built/**']);
    })();
});

gulp.task('tslint', () => {
    return gulp.src('src/**', '!src/itvdn_lessons/**', '!src/extrawest/')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('compile', () => {
    return gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts.createProject('tsconfig.json')())
        .pipe(babel({
            ignore: [
                '**/*.d.ts'
            ],
            'presets': [
                [
                    '@babel/env',
                    {
                        'targets': {
                            'node': 'current'
                        }
                    }
                ]
            ],
            sourceMap: 'both'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('built/local'));
});

gulp.task('copy', () => {
    gulp.src('src/resources/**').pipe(gulp.dest('built/local/resources'));
    gulp.src('src/extrawest/lesson#6_express_js/views/**').pipe(gulp.dest('built/local/extrawest/lesson#6_express_js/views/'));
    return gulp.src('src/extrawest/lesson#7_db/views/**').pipe(gulp.dest('built/local/extrawest/lesson#7_db/views/'));
});

gulp.task('jasmine', () => {
    return gulp.src('built/**/*[sS]pec.js')
        .pipe(jasmine());
});

// gulp.task('all', gulp.series(['del', 'tslint', 'compile', 'jasmine']));

// gulp.task('default', gulp.series(['all']));
gulp.task('default', gulp.series(['del', 'tslint', 'copy', 'compile']));

// gulp.task('default', mock => { // empty task
//     mock();
// });
