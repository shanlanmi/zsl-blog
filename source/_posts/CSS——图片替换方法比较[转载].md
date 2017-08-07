----
title: CSS——图片替换方法比较[转载]
date: 2016-07-21 18:38:44
categories:
- CSS
----
图片替换主要是指将文字替换成图片的技术，即在html语句中使用文字，浏览器显示时用对应的图片显示。其意义在于便于做网站优化（SEO），文字才是搜索引擎寻找的主要对象。
经典的替换方法：
- Fahrner图片替换法（FIR）
  ```HTML
  <h1 id="fir"><span>Fahrner Image Replacement</span></h1>
  #fir {
  width: 287px;
  height: 29px;
  background: url(fir.gif) no-repeat;
  }
  #fir span {
  display: none;
  }
  ```
  首先添加一个`<span>`标签，然后使用`<span>`标签的display属性把文字隐藏起来，最后指定`<h1>`的背景图片。
  优点：使用CSS而不是标记语法提供图片，更改图片只需更改CSS。
  缺点：（1）需要一组不具备任何语义的`<span>`标签才能运作（2）display属性影响屏幕阅读器使用者（3）关闭浏览器显示图片，同时启用CSS支持时，文字图片均不可显示。

- Leahy/Langridge图片替换法（LIR）
  ```HTML
  <h1 id="lir">Leahy/Langridge Image Replacement</h1>
  #lir {
  padding-top:image height;
  overflow:hidden;
  background:url(lir.gif) no repeat;
  height:0 !important;  //针对大多数浏览器
  height:image height; //针对IE5
  ```
  首先将padding-top设置为图片高度，将h1高度设置为0（IE5下设置为图片高度），根据盒子模型可知，文字内容将被排挤到指定高度之外，同时设置overflow：hidden将溢出文字隐藏。
  优点：（1）去掉冗余的`<span>`标签（2）不影响屏幕阅读器使用者
  缺点：（1）关闭浏览器显示图片，同时启用CSS支持时，文字图片均不可显示（2）要为IE5 for Windows使用盒模型Hack。

- phark图片替换法（推荐）
  ```HTML
  <h1 id="phark">The Phark Method</h1>
  #phark {
  height: image height;
  text-indent: -5000px;
  background: url(phark.gif) no-repeat;
  }
  ```
  解释：设置text-indent属性为很大的负值，将文字显示在屏幕之外，达到隐藏的效果。
  优点：（1）不需要额外标签（2）不影响屏幕阅读器使用者
  缺点：关闭浏览器显示图片，同时启用CSS支持时，文字图片均不可显示

文本地址：<http://www.yanyulin.info/pages/2014/10/28312964047107.html>
***
## 本文相关
1. 参考
1. 修订
2016:第一版
