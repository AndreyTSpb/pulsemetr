const gulp         = require('gulp');
const browserSync  = require('browser-sync');
const sass         = require('gulp-sass');
const cleanCSS     = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require("gulp-rename");
const htmlmin      = require('gulp-htmlmin');
const imagemin     = require('gulp-imagemin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/scss/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});
/**
 * Watch to change
 */
gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.+(scss|sass)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('minify'));
    gulp.watch("src/css/*").on('change', gulp.parallel('css'));
})
/**
 *  Compreaaed html pages
 */
gulp.task('minify', ()=>{
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});
/**
 *  Transfer js to dist
 */
gulp.task('script', ()=>{
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});
/**
 *  Transfer css to dist
 */
gulp.task('css', ()=>{
    return gulp.src('src/css/**/*')
        .pipe(gulp.dest('dist/css'));
});
/**
 *  Transfer font to dist
 */
gulp.task('font', ()=>{
    return gulp.src('src/font/**/*')
        .pipe(gulp.dest('dist/font'));
});

/**
 * compressed images
 */
gulp.task("imageminimize", ()=>{
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});
/**
 * Compressed icons
 */
gulp.task("iconsmize", ()=>{
    return gulp.src('src/icons/**/*')
        .pipe(gulp.dest('dist/icons'))
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'iconsmize', 'imageminimize', 'script', 'font', 'minify', 'css'));