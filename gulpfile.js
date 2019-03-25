function defaultTask(test) {
    // place code for your default task here
    console.log('defaultTask');

    const gulp = require('gulp');

    // delete required files & folders
    const del = require('del');
    (async () => {
        const deletedPaths = await del(['target/**']);

        console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
    })();

    // const tslint = require('gulp-tslint');
    // gulp.task("tslint", () =>
    //     gulp.src("source.ts")
    //         .pipe(tslint({
    //             formatter: "verbose"
    //         }))
    //         .pipe(tslint.report())
    // );

    test();
}

exports.default = defaultTask;