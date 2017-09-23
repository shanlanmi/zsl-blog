----
title: Object 转化成 Array
date: 2017-01-22 16:46:56
tags:
- JavaScirpt
----
- object to array
  ```js
  var obj = {1: 11, 2: 22};
  var arr = Object.keys(obj).map(function (key) { return obj[key]; });
  ```