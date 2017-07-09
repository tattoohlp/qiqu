var gulp = require("gulp");
var path = require('path');				//nodejs默认modules
var less = require("gulp-less");


gulp.task("lesstocss",function(){
	return gulp.src("./www/less/*.less")
	.pipe(less())
	.pipe(gulp.dest('./www/dist/css'));
})


gulp.task("watch",function(){
	gulp.watch('./www/less/*.less',["lesstocss"]);
});