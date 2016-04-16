import gulp from 'gulp'
import babel from 'gulp-babel'
import util from 'gulp-util'
import run from 'gulp-run'
import rename from 'gulp-rename'
import path from 'path'
import { constant } from 'lodash'

gulp.task('compile', () => {
    return gulp.src('./src/**.js')
        .pipe(babel())
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', ['solve'], () => {
    gulp.watch('src/**', ['solve'])
});

const fileOptions = constant(util.env['f'])

gulp.task('solve', ['compile'], () => {
    const f = fileOptions()
    const { name } = path.parse(f)
    return run(`node ./build < ${f}`).exec()
        .pipe(rename({
            dirname: './result',
            basename: name,
            extname: '.out'
        }))
        .pipe(gulp.dest('./'))
})

gulp.task('build', ['compile'])
gulp.task('default', ['watch'])
