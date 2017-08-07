var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
// var loadTask = function(dir) {
//   fs.readdirSync(dir).filter(function (file) {
//     return file.match(/js$/);
//   }).forEach(function (fileName) {
//     require('./' + dir + '/' + fileName)(gulp, common);
//   });
// };
// var discoverFolder = function() {
//   return fs.readdirSync(taskPath).filter(function (file) {
//     if (!file.match(/\./)) {
//       return file;
//     }
//   });
// };

var sourceDir = path.resolve(__dirname, "source", "_posts");
var topArticles = [
  "Error-code-design",
  "loopback部署方案",
  "个人github分支管理"
];

var isTop = function(dir) {
  var result = topArticles.find(function(title) {
    var reg = new RegExp(title + ".md$");
    return reg.test(dir);
  })
  if (result) return true;
  return false;
};

var dealArticle = function(dir) {
  var content;
  if (isTop(dir)) {
    content = fs.readFileSync(dir, 'utf8').replace('tags:', 'top: true\r\ncategories:');
  } else {
    content = fs.readFileSync(dir, 'utf8').replace('tags:', 'categories:');
  }
  fs.writeFileSync(dir, content, {encode: 'utf8'});
};

gulp.task('tags', function () {
  var articleDirs = fs.readdirSync(sourceDir);
  articleDirs.forEach(function(articleDir) {
    var dir = path.resolve(sourceDir, articleDir)
    if (!/md$/.test(dir)) return;
    dealArticle(dir);
  });

});

