const gulp = require("gulp"),
  fileinclude = require("gulp-file-include"),
  gulpIf = require("gulp-if"),
  minify = require("gulp-minify"),
  less = require("gulp-less"),
  cleanCSS = require("gulp-clean-css"),
  del = require("del"),
  plumber = require("gulp-plumber"),
  // imagemin = require("gulp-imagemin"),
  // imageminAdvpng = require("imagemin-advpng"),
  // imageminJpegRecompress = require("imagemin-jpeg-recompress"),
  changed = require("gulp-changed"),
  browserSync = require("browser-sync").create();

const PATHS = {
  SRC: "./src",
  DIST: "./dist",
  HTML_EN: "./src/en/**/*.html",
  HTML_ZH: "./src/zh/**/*.html",
  HTML_EN_INCLUDE: "./src/includes/en/**/*.html",
  HTML_ZH_INCLUDE: "./src/includes/zh/**/*.html",
  JS: ["./src/data/*.js", "./src/js/*.js", "./src/lib/*.js"],
  STYLE: "./src/style/*.less",
  IMG: "./src/resource/**/@(*.png|*.PNG|*.jpg|*.jpeg|*.JPG|*.JPEG)",
  OTHER_RES: "./src/resource/**/!(*.png|*.PNG|*.jpg|*.jpeg|*.JPG|*.JPEG)"
};

const ENV = process.env.NODE_ENV;

const isProd = (() => ENV === "production")();

gulp.task("clean", () => del(PATHS.DIST));

gulp.task("html_en", () => {
  return gulp
    .src(PATHS.HTML_EN, { base: PATHS.SRC })
    .pipe(plumber())
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        indent: true
      })
    )
    .pipe(gulp.dest(PATHS.DIST))
    .pipe(browserSync.stream());
});

gulp.task("html_zh", () => {
  return gulp
    .src(PATHS.HTML_ZH, { base: PATHS.SRC })
    .pipe(plumber())
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
        indent: true
      })
    )
    .pipe(gulp.dest(PATHS.DIST))
    .pipe(browserSync.stream());
});

gulp.task("style", () => {
  return gulp
    .src(PATHS.STYLE)
    .pipe(plumber())
    .pipe(less())
    .pipe(gulpIf(isProd, cleanCSS()))
    .pipe(gulp.dest(`${PATHS.DIST}/css`))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src(PATHS.JS, { base: PATHS.SRC })
    .pipe(plumber())
    .pipe(gulpIf(isProd, minify()))
    .pipe(gulp.dest(PATHS.DIST))
    .pipe(browserSync.stream());
});

gulp.task("img", () => {
  return gulp
    .src(PATHS.IMG, { base: PATHS.SRC })
    .pipe(plumber())
    .pipe(changed(PATHS.DIST))
    .pipe(gulp.dest(PATHS.DIST))
    .pipe(browserSync.stream());
});

gulp.task("copy_other_res", () => {
  return gulp
    .src(PATHS.OTHER_RES, { base: PATHS.SRC })
    .pipe(plumber())
    .pipe(changed(PATHS.DIST))
    .pipe(gulp.dest(PATHS.DIST))
    .pipe(browserSync.stream());
});

gulp.task("build", ["clean"], () =>
  gulp.start(["html_en", "html_zh", "style", "js", "img", "copy_other_res"])
);

gulp.task("dev_watch", ["build"], () => {
  browserSync.init({
    port: 8089,
    server: {
      baseDir: PATHS.DIST
    },
    startPath: `/zh`
  });

  gulp.watch([PATHS.HTML_EN, PATHS.HTML_EN_INCLUDE], ["html_en"]);
  gulp.watch([PATHS.HTML_ZH, PATHS.HTML_ZH_INCLUDE], ["html_zh"]);
  gulp.watch(PATHS.STYLE, ["style"]);
  gulp.watch(PATHS.JS, ["js"]);
  gulp.watch(PATHS.IMG, ["img"]);
  gulp.watch(PATHS.OTHER_RES, ["copy_other_res"]);
});
