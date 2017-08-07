----
title: Ionic+webpack+gulp 工程化
date: 2016-07-21 18:38:44
categories:
- AngularJS
----
## 工程化思路
总结下 Ionic 开发过程中采用的工程化方案：
1. 采用 webpack 对 sass, coffee，html 等文件进行处理，打包。
1. 采用 gulp 作为 watch，监视文件修改并实时打包。
1. 采用 ionic 自带的 seerve 来实时刷新页面，方便调试。
## webpack
因为项目中采用了 sass，coffee，pug 等预处理工具，也方便模块化开发，所以采用了 webpack。
### webpack.config.js配置

### template 的处理
由于打包后不方便使用`templateUrl`,所以采用了`template`，然后用 raw-loader 来加载。
拿路由来举例说明：

## gulp
因为 webpack 默认监视入口文件对应 require 的文件是否改动，而 ionic 默认监视 www 目录下的文件是否改动（也许可以修改，我暂时没研究），而我需要同时监视未打包前的 app 目录和打包后的目录 www，所以打算采用 gulp 来作为 watch，并可以做一些其他的工作流任务。
### gulpfile.js 的配置


## ionic
配置完 webpack 和 gulp 后，配置 ionic.project，让 ionic serve 启动时，开启文件监视。

### ionic.project 的配置


***
**本文相关**
1. 参考
[cmackay/ionic-webpack: Ionic Webpack Starter](https://github.com/cmackay/ionic-webpack)
[Coderwall | Executing custom Gulp tasks when using the Ionic server](https://coderwall.com/p/5vpvyw/executing-custom-gulp-tasks-when-using-the-ionic-server)
1. 修订
2016:第一版
