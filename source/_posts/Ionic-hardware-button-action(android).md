----
title: Ionic hardware button action(android)
date: 2016-10-09 17:24:27
tags:
- AngularJS
----
通过 run.coffee 文件配置 hardware action，把所有特殊动作都指向$ionicGoBack 函数，例如：
```JS
$ionicPlatform.registerBackButtonAction () ->
  switch $location.path()
    when '/app/start'
      # do nothing
      return
    when'/app/tab/home', '/app/tab/assessment', '/app/tab/me', '/intro', '/login'
      # double click to exit app
      if $rootScope.doubleBack
        ionic.Platform.exitApp()
      else
        $rootScope.doubleBack = true
        $timeout (->
          $rootScope.doubleBack = false), 2000
    when '/app/career_assessment/index', '/app/career_assessment/recommendations', '/app/career_assessment/spider_result', '/app/career/filter', '/app/career/search', '/app/career/ranking', '/app/news/list', '/app/career/category'
      $rootScope.$ionicGoBack()
    else
      $ionicHistory.goBack()
, 100
```

在具体页面的 scope 中定义具体的动作，例如：

```JavaScript
$rootScope.$ionicGoBack =
  if $stateParams.recommendations
    goMe
  else if $stateParams.assessment
    goHome
  else
    goHome
```
