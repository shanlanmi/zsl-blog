----
title: 单元测试 - Karma + Jasmine
date: 2016-07-21 18:38:44
categories:
- Test
----
## 简介
前端测试包含 API 测试和 GUI 测试，而单元测试是针对业务稳定部分的逻辑做 API 测试的。
[Karma][karma] 是一个基于 Node.js的测试管理工具。
[Jasmine][jasmine] 是一个用于测试 JS 的 BDD 单元测试框架。

## 安装
1. 安装 Node.js (略)
1. 安装 Karma
  - 全局安装，方便直接调用`karma`命令
    ```JavaScript
    npm install -g karma-cli
    ```

  - 安装到本地，这样此项目其他开发者只需要运行`npm install`就可以安装这些依赖。
    ```JavaScript
    // 建立 npm 项目
    npm init

    // 安装 Karma
    npm install karma --save-dev

    // 安装 Karma 需要的插件
    npm install karma-chrome-launcher --save-dev
    ```


[Karma - Installation](http://karma-runner.github.io/0.13/intro/installation.html)
1. 安装 Jasmine
  ```JavaScript
  // 安装 Karma 需要的插件
  npm install jasmine-core karma-jasmine --save-dev
  ```

1. 若要测试 AngularJS 项目，安装对应模块
  ```JavaScript
  npm install angular --save
  npm install angular-mocks --save-dev
  ```

## karma 命令
### 配置 karma
karma 命令需要输入`./node_modules/karma/bin/karma start`, 在全局安装后，可以直接使用`karma`来启动本地 karma。
开始一个测试项目前，需要初始化 karma。

接下来根据向导生成配置文件，也可以手写配置文件或者从其他项目复制过来。

### 设置js files


### 执行 karma
- 执行当前项目测试
  ```JavaScript
  karma start
  ```
- 执行指定配置文件处的项目测试
  ```JavaScript
  karma start karma.conf.js
  ```
- karma help 文档
  ```JavaScript
  karma start -help
  ```

## AngularJS - controller 单元测试


## AngularJS - filter 单元测试



## AngularJS - service 单元测试



## Jasmine的一些断言库

断言命令|意义
---|---
expect(x).toBe(y)| x === y
expect(x).toEqual(y)| x == y
expect(x).toMatch(pattern)| x符合正则表达式规则
expect(x).toBeDefined()| x !== undefined
expect(x).toBeUndefined()| x === undefined
expect(x).toBeNull()| x === null
expect(x).toBeTruthy()| x === true
expect(x).toBeFalsy()| x === false
expect(x).toContain(y)| x（array） 包含 y
expect(x).toBeLessThan(y)| x < y 
expect(x).toBeGreaterThan(y)| x > y
expect(x).toBeCloseTo(y)| x 在精度内趋近于 y
expect(x).toThrow()| 抛出异常
expect(x).toThrowError(y)| 抛出异常 y

**断言的否定**


***
**本文相关**
1. 参考
[Angularjs 基于karma和jasmine的单元测试 - williamwood - ÂçöÂÆ¢Âõ≠](http://www.cnblogs.com/williamwood/p/5339229.html)
1. 修订
2016:第一版


[karma]:http://karma-runner.github.io/0.13/index.html
[jasmine]:http://jasmine.github.io/2.4/introduction.html
