----
title: AngularJS- Ready
date: 2016-07-21 18:38:44
tags:
- AngularJS
----
在 AngularJS中，监听 DOM 是否加载完，方便执行后续函数操作。

1. 使用$timeout延迟加载
  ```js
  $timeout(function() {
    //Your code goes here.
  });
  ```
2. 使用ng-repeat时，我们可以获取到当前队列的$index, $first, $middle 和 $last属性，所以我们也可以使用scope.$last来判断
  ```js
  angular.module('myApp', [])
  .directive('ngRepeatDirective', function() {
    return function(scope, element, attrs) {
      if (scope.$last){ // 这里是重点
        //Your code goes here.
      }
    };
  })
  ```
3. angular提供了angular.element(document).ready()方法，当文档加载完成之后回调，类似于jQuery
  ```js
  angular.element(document).ready(function () {
    //Your code goes here.
  });
  ```
***
**本文相关**
1. 参考
[Angular DOM Ready - 珍惜生命，远离编程](http://chenbin92.github.io/blog/2015/10/27/angularjs-dom-ready/)
1. 修订
2016:第一版
