// Importar os módulos do Gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilar o SASS
function compilarSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Comprimir as imagens
function comprimirImagens() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
}

// Comprimir o código JavaScript
function comprimirJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

// Tarefas do Gulp
gulp.task('sass', compilarSass);
gulp.task('imagemin', comprimirImagens);
gulp.task('uglify', comprimirJS);

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
