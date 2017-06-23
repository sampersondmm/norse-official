var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    
    browserSync.init({
        notify: false,
        server: {
        baseDir: "app"
            }
    });
    
    watch('./app/index.html', function() {
         browserSync.reload();
     });
     
    watch('./app/assets/styles/**/*.css', function () {
         gulp.start('cssInject');
     });
    
    watch('./app/sketch.js', function () {
         gulp.start('sketchReload');
     });    
});

gulp.task('sketchReload', function() {
    return gulp.src('./app/sketch.js')
        .pipe(browserSync.stream());
})


gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});

