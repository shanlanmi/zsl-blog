----
title: webpack 概要
date: 2016-07-21 18:38:44
categories:
- Project
----
## webpack 的功能

- 模块加载
  - 支持 commonJS, AMD, CMD, ES6 模块形式
  - 支持多种文件的加载器
- 预处理
  - sass，less
  - 图片转 base64
- 打包
  - 混淆

为什么需要模块化？可以参考这篇文章：[前端模块化开发的价值](https://github.com/seajs/seajs/issues/547)

## webpack 的安装
1. 安装 node.js(略)
1. 全局安装(首次安装)
  ```JavaScript
  $ npm install -g webpack
  ```
1. 本地安装
  ```JavaScript
  $ npm init
  $ npm install webpack --save-dev
  ```
1. 开发工具安装(可选)
  ```JavaScript
  $ npm install webpack-dev-server --save-dev
  ```
1. 安装 loader (可选)
  ```JavaScript
  $ npm install --save-dev style-loader css-loader sass-loader
  $ npm install --save-dev jsx-loader
  $ npm install --save-dev url-loader
  ```

## 配置
每个项目下需要一个配置文件 webpack.config.js


- entry支持多个入口，参考 [multiple entry points](https://webpack.github.io/docs/multiple-entry-points.html)
- 更多配置：[configuration](http://webpack.github.io/docs/configuration.html)
## 模块加载
### CommonJS: synchronous require
用`require`同步加载模块，并返回导出接口，每个 module 可以指定接口数据。
此规范多通过 node.js运行在服务端。


- 优点
  - 支持服务端
  - 多种第三方 module
  - 简单易用
- 缺点
  - 网络多为异步，所以对网络不友好
  - 不支持多模块并行
- 支持
  - node.js
  - browserify
  - modules-webmake
  - wreq

[lwebpack - commonjs](https://webpack.github.io/docs/commonjs.html)

### AMD(Asynchronous Module Definition)


- 优点
  - 在网络中支持异步
  - 支持多模块并行加载

- 缺点
  - 代码可读性和书写性不友好。
  - Seems to be some kind of workaround.

- 支持
  - require.js - client-side
  - curl - client-side

[amd](https://webpack.github.io/docs/amd.html)

### ES6 modules

- 优点
  - 易于静态分析
  - ES 标准

- 缺点
  - 需要时间等待浏览器原生支持
  - module 少

## loader: 预处理加载器
[webpack - loaders](https://webpack.github.io/docs/loaders.html)
[webpack - list of loaders](https://webpack.github.io/docs/list-of-loaders.html)
### babel-loader：预处理 ES2015

1. 安装 Babel 和 presets
  ```JavaScript
  $ npm install --save-dev babel-core babel-preset-es2015
  ```
1. 安装 babel-loader
  ```JavaScript
  $ npm install --save-dev babel-loader
  ```
1. 在`.babelrc`文件中配置 presets
  ```JavaScript
  { "presets": ["es2015"] }
  ```
1. 配置`webpack.config.js`文件，设置`.js`文件通过`babel-loader`预处理
  ```JavaScript
  module.exports = {
      entry: './src/app.js',
      output: {
          path: './bin',
          filename: 'app.bundle.js',
      },
      module: {
          loaders: [{
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
          }]
      }
  }
  ```
1. 配置 libraries（jquery）
  ```JavaScript
  $ npm install --save jquery babel-polyfill
  ```
1. 编辑入口文件
  ```JavaScript
  import 'babel-polyfill';
  import cats from './cats';
  import $ from 'jquery';
 
  $('<h1>Cats</h1>').appendTo('body');
  const ul = $('<ul></ul>').appendTo('body');
  for (const cat of cats) {
      $('<li></li>').text(cat).appendTo(ul);
  }
  ```
1. 打包
  ```JavaScript
  webpack
  ```

## 使用 plugins
  ```JavaScript
  const webpack = require('webpack');

  module.exports = {
      entry: './src/app.js',
      output: {
          path: './bin',
          filename: 'app.bundle.js',
      },
      module: {
          loaders: [{
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel',
          }]
      },

      // 配置 plugins，这里用的 uglify
      plugins: [
          new webpack.optimize.UglifyJsPlugin({
              compress: {
                  warnings: false,
              },
              output: {
                  comments: false,
              },
          }),
      ]
  }
  ```

[webpack - list of plugins](http://webpack.github.io/docs/list-of-plugins.html)

## 执行 webpack
- 打包
  ```JavaScript
  $ webpack
  ```

- 打包时显示错误信息
  ```JavaScript
  $ webpack --display-error-details
  ```

- 指定配置文件打包
  ```JavaScript
  $ webpack --config XXX.js
  ```

- 监听文件变动自动打包
  ```JavaScript
  $ webpack --watch
  $ webpack -w
  ```

- 混淆压缩
  ```JavaScript
  $ webpack -p
  ```

- 生成 map 映射文件
  ```JavaScript
  $ webpack -d 
  ```
## 引入模块
### HTML
直接引入 webpack 生成的 js 文件。
### JS
在入口 JS 文件中添加 require


## webpack-dev-server
监听文件变化，并自动刷新页面。

1. 配置 webpack.config.js
  ```JavaScript
  var path = require("path");
  module.exports = {
    entry: {
      app: ["./app/main.js"]
    },
    output: {
      path: path.resolve(__dirname, "build"),
      // 设置默认相对路径，需要在相对路径下创建 index.html 文件（可选）
      publicPath: "/assets/",
      filename: "bundle.js"
    }
  };
  ```
1. 执行
  - 启动监听刷新页面服务(Iframe mode)
    ```JavaScript
    webpack-dev-server
    ```
    - 不需要设置代码,直接打开`http://localhost:8080/webpack-dev-server/index.html`
    - 顶部有信息栏。
    - app 里面的 url 变化，**不会**显示在浏览器 url 地址中。
  - 启动监听刷新页面服务(Inline mode)
    ```JavaScript
    webpack-dev-server --inline
    ```
    - 需要增加`--inline`参数，网址为`http://localhost:8080/index.html`
    - 服务信息写在 log 中。
    - app 里面的 url 变化会在浏览器 url 地址中显示。
  - 指定默认页面目录
    ```JavaScript
    webpack-dev-server --content-base dir/
    ```

[webpack dev server](http://webpack.github.io/docs/webpack-dev-server.html)

***
**本文相关**
1. 参考
[webpack 官网](https://webpack.github.io/docs/)
[一小时包教会 —— webpack 入门指南](http://www.cnblogs.com/vajoy/p/4650467.html)
1. 修订
2016:第一版
