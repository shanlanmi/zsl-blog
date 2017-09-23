----
title: 集成测试 - Angular + protractor
date: 2016-07-21 18:38:44
tags:
- Test
----
## 简介
- Protractor是一个建立在WebDriverJS基础上针对 AngularJS 的 End To End 应用程序测试框架。
- Protractor全自动化真实的模拟用户在真正的浏览器中操作、运行并测试开发者的应用程序。

## 安装
1. 安装 Node.js(略)
1. 安装 protractor
  ```JavaScript
  npm install -g protractor
  ```
1. 安装 webdirver-manager
  ```JavaScript
  webdriver-manager update
  ```
## 命令
1. 配置设置文件 conf.js
  ```JavaScript
  // conf.js
  exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js']
  }
  ```
1. 建立测试代码文件 spec.js
  ```JavaScript
  // spec.js
  describe('Protractor Demo App', function() {
    it('should have a title', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');

      expect(browser.getTitle()).toEqual('Super Calculator');
    });
  });
  ```
1. 启动 Selenium 测试服务器
  ```JavaScript
  webdriver-manager start
  ```
1. 运行测试 protractor conf.js
  ```JavaScript
  protractor conf.js
  ```
## 实例
Selenium 语法在 protractor 中同样适用。
[Protractor - API](http://www.protractortest.org/#/api)
[Protractor - Tutorial](http://www.protractortest.org/#/tutorial)
***
**本文相关**
1. 参考
1. 修订
2016:第一版
