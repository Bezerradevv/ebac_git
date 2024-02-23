const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Tarefas individuais
function compileSass() {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
}

function compressImages() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
}

function compressJS() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Tarefa em paralelo
exports.default = gulp.parallel(compileSass, compressImages, compressJS);