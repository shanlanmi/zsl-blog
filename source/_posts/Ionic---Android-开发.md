----
title: Ionic - Android 开发
date: 2016-07-21 12:44:34
tags:
- AngularJS
----
## 开发环境搭设

1. 安装 JAVA
  ```JavaScript
  $ brew install java
  $ java -version
  ```
1. 安装 SDK
  简单科普下
  - Eclipse：IDE，针对 java 做得比较好。
  - ADT(Android Develop Tools)：Eclipse 的 Android 开发插件。
  - SDK(Software Development Kit):  Android 的开发工具集合，包括库文件和其他开发工具。
  - ADT Bundle：一个 Eclipse+SDK 的打包方案。
  在官网没找到 adt bundle，所以在这个网站下载的：<http://www.haomou.net/2015/07/21/2015_android/>
  在.zshrc(或者 bash)中加入环境变量
  ```JavaScript
  export ANDROID_HOME=/path/to/sdk
  PATH=$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools
  /*
  $ export ANDROID_HOME=Android/Sdk
  $ export PATH=$PATH:sdk/platform-tools
  $ export PATH=$PATH:sdk/tools
  */
  $ adb version
  ```

1. 安装 ANT
  ant 是 cordova 的编译测试工具。
  ```JavaScript
  $ brew install ant
  ant -version
  ```
  在.zshrc(或者 bash)中加入环境变量
  ```JavaScript
  ANT_HOME=/path/to/ant
  PATH=$ANT_HOME/bin/:$PATH
  ```
1. 安装 NodeJS

1. 安装 phonegap 和 cordova
  ```JavaScript
  npm install -g phonegap
  phonegap -v
  npm install -g cordova
  cordova -v
  ```
  
## 生成一个项目
### 生成步骤

1. 新建项目
  ```JavaScript
  $ ionic start myapp blank // 空白项目
  $ ionic start myapp tabs // 范例项目
  $ cd myapp  

  // 添加android运行平台
  $ ionic platform add android  

  // 编译apk
  $ ionic build android   

  // 在PC端的模拟器上调试
  $ ionic emulate android  
  // 在 genymotion 上调试
  $ ionic run -lsc
  // 在手机端上调试
  $ ionic run -target=phoneNumber android  
  // 在PC 端的浏览器中调试
  $ ionic serve
  // 在 Lab 模式中调试
  $ ionic serve --lab
  ```
1. 集成 Crosswalk
  ```
  android
  ```
  安装Extras 目录下的`Android Support Repository` 和 `Google Repository`
  ```JavaScript
  // 集成
  $ ionic browser add crosswalk
  // 卸载
  $ ionic browser remove crosswalk
  // 卸载(或)
  $ ionic browser revert android
  ```
  
### 文件结构


## app
在 www 目录下创建 index.html 文件

ionic.css(必要): Ionic 的 css 文件。
ionic.bundle.js(必要): Ionic的 JS 文件和 AngularJS 的核心 JS 文件，其他模块需要在 lib/js 中调用。
cordova.js 是在使用 Cordova/PhoneGap 创建应用时生成的，不需要手动引入。

## 模拟器
genymotion
