----
title: AngularJS大漠视频笔记
date: 2016-07-21 12:44:34
tags:
- AngularJS
----
## 第1章 快速上手
### 课程简介 
### 快速上手 
4大核心特性
1. MVC
1. 模块化
  一切都从 module 开始的
1. 指令系统
  指令系统类似于标签库
1. 双向数据绑定

### 开发、调试、测试工具
1. 代码编辑工具
  - sublime
  - webstrom
1. 断点调试工具
  - chrome + Batarang
1. 版本管理工具
  - Git
1. 代码合并和混淆工具
  - grunt
    - uglify  代码混淆
    - concat  合并文件
    - watch   监控文件
1. 依赖管理工具
  - Bower
  - http-server
1. 单元测试工具
  - karma
  - Jasmine
1. 集成测试工具
  - Protractor

### 文件结构

## 第2章 基本概念和用法
### MVC 
- MVC 的意义
  - 代码规模越来越大，切分职责是大势所趋
  - 复用
  - 方便后期维护，修改一块功能不影响其他功能
  - 终极目的：模块化 + 复用
- 前端 MVC 的困难
  - 操作 DOM 代码必须等待整个页面全部加载完成
  - 浏览器加载 JS 的方式不同，多个JS 文件之间如果出现相互依赖，程序员必须自己解决
  - JS 的原形继承也给前端编程带来了很多困难
- AngularJS 如何实现 MVC

#### Controller 
- 不要试图去复用 Controller，一个控制器一般只负责一小块试图
- 不要在 Controller 中操作 DOM，这不是控制器的职责
- 不要在 Controller 里面做数据格式化，ng 有很好的表单控件
- 不要做 Controller 里面做数据过滤操作，ng 有￥filter 服务
- 一般来说， Controller 是不会相互调用的，控制器中间的交互通过事件进行

#### scope
- AngularJS 的 MVC 全部借助于$scope实现的。
- $rootscope: 顶层 scope
- $scope 是一个 POJP(Plain Old JavaScript Object)
- $scope 提供了一些工具方法$ watch()/$apply()
- $scope 是表达式的执行环境(或者叫作用域)
- $scope 是树型结构,与 DOM 标签平行
- 子$scope 对象会继承父$ scope 上的属性和方法
- 每一个AngularJS 应用只有一个$rootscope 对象
- $scope 可以传播事件,类似 DOM 事件,可上可下
  - $emit: 事件向上传播
  - $broadcast: 事件向下传播
    ```HTML
    <div ng-app="demo" ng-controller="Ctrl">
      <p ng-model="count">Root scope MyEvent count: {{count}}</p>
      <div ng-controller="Ctrl">
        <button ng-click="$emit('clickBtn')">$emit</button>
        <button ng-click="$broadcast('clickBtn')">$broadcast</button>
        <p>Middle scope MyEvent count: {{count}}</p>
        <div ng-controller="Ctrl">
          <p>Leaf scope MyEvent count: {{count}}</p>
          <p>Leaf scope MyEvent count: {{count}}</p>
        </div>
      </div>
    </div>
   <script>
    var app = angular.module('demo',[]);
    app.controller('Ctrl', function($scope) {
      $scope.count = '0';
      $scope.$on('clickBtn', function() {
        $scope.count++;
      });
    });
   </script>
   ```
- $scope不仅是 MVC 的基础，也是实现双向数据绑定的基础
- 可以用 angular.element($0).scope()调试

### 路由、模块、依赖注入 
#### 项目文件结构

#### 路由
路由的意义：
- Ajax 请求不能留下 History
- 用户不能通过 URL 进入应用中的指定页面
- 不能 SEO

**页面切换原理浅析:**
1. 通过修改 url 来控制页面切换。
1. 通过`#`来区别页面内切换和 url 地址服务请求。
1. 获取 templateUrl 的 html 片段并加载到 ng-view 中。

**用内建路由切换页面的流程：**
1. 在 head 中添加 ng-router 模块。
  ```HTML
  <script src="framework/X.Y.Z/angular-route.js"></script>
  ```
1. 在 index.html 中定义ng-app 和 ng-view。
  ```HTML
  <!-- index.html -->
  <html ng-app="bookStoreApp">
  <body>
    <div ng-view></div>   <!-- 视图展示区域 -->
  </body>
  </html>
  ```
1. 写 app.js。
  1. 申明 module 并注入需要的依赖控件。
  1. 中定义 $routeProvider。
  1. 定义路由页面的 url, html 片段和 controller。
  1. 定义默认页面的 url
  ```JavaScript
  // app.js
  bookStoreApp.config(function($routeProvider) {
      $routeProvider.when('/hello', {
          templateUrl: 'tpls/hello.html',
          controller: 'HelloCtrl'
      }).when('/list',{
        templateUrl:'tpls/bookList.html',
        controller:'BookListCtrl'
      }).otherwise({
          redirectTo: '/hello'
      })
  });
  ```

**用 ui-route 路由切换页面的流程：**
1. 在head 中添加ui-router 模块。
  ```HTML
  <script src="js/angular-ui-router.min.js"></script>
  ```
1. 在 index.html 中定义 ng-app 和 ui-view，ui-view 可以有多个。
  ```HTML
  <div ui-view></div>
  <a ui-sref="state1">state1</a>
  <a ui-sref="state2">state2</a>
  <ui-view></ui-view>
  <div class="ui-view"></div>
  ```
1. 写 app.js。
  1. 申明 module 并注入需要的依赖控件。
  1. 中定义 $routeProvider。
  1. 定义路由页面的 url, html 片段和 controller。
  1. 定义默认页面的 url
  ```JavaScript
  // app.js
  var myUIRoute = angular.module('MyUIRoute', ['ui.router', 'ngAnimate']);
  myUIRoute.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
      .state('state1', {
        url: "/state1",
        templateUrl: "tpls/state1.html"
      })
      .state('state1.list', {
        url: "/list",
        templateUrl: "tpls/state1.list.html",
        controller: function($scope) {
          $scope.items = ["A", "List", "Of", "Items"];
        }
      })
      .state('state2', {
        url: "/state2",
        templateUrl: "tpls/state2.html"
      })
      .state('state2.list', {
        url: "/list",
        templateUrl: "tpls/state2.list.html",
        controller: function($scope) {
          $scope.things = ["A", "Set", "Of", "Things"];
        }
      });
  });
  ```

[ui-router 文档](https://angular-ui.github.io/ui-router/)
#### 模块
app.js一般作为启动点，加载对应的依赖模块。

**模块切分方式:**
1. 加载模块
  ```HTML
  <script src='js/bookStoreCtrls'></script>
  ```
1. 设置 module，加载各种依赖模块
  ```JavaScript
  // app.js
  var bookStoreApp = angular.module('bookStoreApp', [
      'ngRoute', 'ngAnimate', 'bookStoreCtrls', 'bookStoreFilters',
      'bookStoreServices', 'bookStoreDirectives'
  ]);
  ```
1. 写对应的模块
  ```JavaScript
  // bookStoreCtrls.js
  var bookStoreCtrls = angular.module('bookStoreCtrls', []);

  bookStoreCtrls.controller('HelloCtrl', ['$scope',
  ]);

  bookStoreCtrls.controller('BookListCtrl', ['$scope',
  ]);
  ```

#### 依赖注入
- 加载到 modeul 时，浏览器会自动检测各种注入的模块。
- 模块`ng-*`为 AngularJS 的内建模块。
- 当检测到模块全部加载完毕时，才执行下面的内容。
- AngularJS 没有采用异步加载，异步方案可以考虑 requirejs

### 双向数据绑定 
view和 model 的数据双向绑定。
#### 表达式和 ng-bind 指定
在 index.html 中不要用表达式,避免出现{&#123;表达式}&#125;。

#### 动态样式控制
1. 利用原生 class 
  1. 设定 html
    ```HTML
    <p class="text{{color}}">CSS</p>
    ```
  1. 通过修改 module 里面的变量 color 来修改样式。
1. 利用 ng-class
  1. 设定 html
    ```HTML
    <p ng-class="{error: redStyle, warning: yellowStyle}"></p>
    ```
  1. 通过设定变量 error 或 warning 为 true 来修改样式。

#### ngAnimation



### 指令 
#### 解析：匹配模式 restrict
- A
  ```HTML
  <div my-menu></div> 
  ```
- E
  ```HTML
  <my-menu></my-menu>
  ```
- C
  ```HTML
  <div class="my-menu"></div>
  ```
- M
  ```HTML
  <!-- directive:my-menu -->
  <div></div>
  ```


#### 解析：template，templateUrl，$templateCache
- template：加载片段代码
- templateUrl：加载 html 文件
- $templateCache：加载缓存代码
  ```JavaScript
  var myModule = angular.module("MyModule", []);
  //注射器加载完所有模块时，此方法执行一次
  myModule.run(function($templateCache){
    $templateCache.put("hello.html","<div>Hello everyone!!!!!!</div>");
  });
  myModule.directive("hello", function($templateCache) {
      return {
          restrict: 'AECM',
          template: $templateCache.get("hello.html"),
          replace: true
      }
  });
  ```
#### 解析：replace 和 transclude
`replace:true`: 指令会替换元素内部的内容
`transclude:true`: 将元素内部的内容嵌套在 ng-transclude 处
  ```JavaScript
  myModule.directive("hello", function($templateCache) {
      return {
          restrict: 'AECM',
          template: "<div>Hello everyone!<div ng-transclude></div></div>"
          transclude: true
      }
  });
  ```
#### comile 和 link 操作元素，添加 CSS 样式，绑定时间
1. 加载阶段
  1. 加载 angular.js, 找到 ng-app, 确定应用的边界
1. 编译阶段
  1. 遍历 DOM, 找到所有指令
  1. 根据指定中的 template,replace,transclude 转换 DOM 结构
  1. 若存在 compile 函数,则调用(会覆盖原先的 compile 函数)
1. 链接阶段
  1. 对每一条指定运行 link 函数
  1. link 函数一般用来操作 DOM，绑定事件

注意：
1. compile 函数用来对模板的自身进行转换，而 link 函数浮躁在模型和视图之间进行动态关联
1. 作用域在链接阶段才会被绑定到编译之后的 link 函数上
1. compile函数仅仅在编译阶段运行一次，而指令的每一个实例，link 函数都会执行一次
1. compile 可以返回 preLink 和 postLink 函数，而 link 函数只会返回 postLink 函数
1. 如果需要修改 DOM 结构，应该在 postLink 中来做这件事，而如果在 preLink 中做这件事会导致错误
1. 大多数时候我们只需要编写 link 函数即可

#### 指定与控制器之间的交互




#### 指令间的交互



#### Scope 的类型与独立 scope


#### scope 的绑定策略

类型|功能
---|---
@|把当前属性作为**字符串**传递。<br>你还可以绑定来自外层 scope 的值，在属性值中插入`{&#123:&#125;}`即可
=|与父 scope 中的属性进行双向绑定,传递对象
&|传递一个来自父 scope 的函数，稍后调用

- `@`的用法
  ```HTML
  <drink flavor="{{ctrlFlavor}}"></drink>
  ```
  ```JavaScript
  // app.js
  var myModule = angular.module("MyModule", []);
  myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.ctrlFlavor="百威";
  }])
  myModule.directive("drink", function() {
      return {
        restrict:'AE',
          scope:{
            flavor:'@'
          },
          template:"<div>{{flavor}}</div>"
          //,
          //link:function(scope,element,attrs){
          //  scope.flavor=attrs.flavor;
          //}
      }
  });
  ```

- `=`的用法
  ```HTML
  <input type="text" ng-model="ctrlFlavor">
  <drink flavor="ctrlFlavor"></drink>  <!-- 不用花括号 -->
  ```
  ```JavaScript
  // app.js
  var myModule = angular.module("MyModule", []);
  myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.ctrlFlavor="百威";
  }]);
  myModule.directive("drink", function() {
      return {
        restrict:'AE',
          scope:{
            flavor:'='
          },
          template:'<input type="text" ng-model="flavor"/>'
      }
  });
  ```

- `&`的用法
  ```HTML
  <greeting greet="sayHello(name)"></greeting>
  ```
  ```JavaScript
  // app.js
  var myModule = angular.module("MyModule", []);
  myModule.controller('MyCtrl', ['$scope', function($scope){
    $scope.sayHello=function(name){
      alert("Hello "+name);
    }
  }])
  myModule.directive("greeting", function() {
      return {
        restrict:'AE',
          scope:{
            greet:'&'
          },
          template:'<input type="text" ng-model="userName" /><br/>'+
               '<button class="btn btn-default" ng-click="greet({name:userName})">Greeting</button><br/>'
      }
  });
  ```
#### AngularJS 内置的指令
form 指令
1. HTML 原生的 form 表单不能嵌套,而 Angular封装之后的 form 可以嵌套
1. AngularJS 为 form 扩展了自动效验，防止重复提交等功能
1. AngularJS 为 input元素的 type 进行了扩展，一共提供了以下10种类型
  text, number, url, email, radio, checkbox, hidden, button, submit, reset
1. AngularJS 为表单内置了4种 CSS 样式
  ng-valid，ng-invalid, ng-pristine, ng-dirty
1. 内置效验器
  require, minlength, maxlength



### 自定义指令

#### 解析 Accordion
require
`^`: 在当前元素和父元素中查找
``：在当前元素中查找
`^^`：在父元素中查找



### Service与Provider 
#### 使用 $http 服务

#### 创建自己的 Service

#### Service 的特性
- Service 都是单例
- Service 由$injector 负责实例化,不用 new
- Service 在整个应用的生命周期中存在，可以用来共享数据
- 在需要使用的地方利用依赖注入机制注入 Service
- 自定义的 Service 需要写在内置的 Service 后面
- 内置 Service 的命令以$符号开头,自定义 Service 应该避免

#### Service, Factory, Provider 本质上都是 Provider
- Service， Provider， Factory 本质上都是 Provider，只是写法不同
- Provider 模式就是“策略模式” + “抽象工程模式”的混合体

#### 使用 $filter 服务
- $filter 是用来进行数据格式化的专用服务
- 内置的9个 filter
    currency, date, json, limitTo, lowercase, number, orderBy, uppercase
- filter 可以嵌套使用（用管线符号|）
- filter 可以传递参数
- 用户可以定义自己的 filter

**使用内置 filter**


**使用自定义 filter**





### 综合应用BookStore 
#### 开发流程
1. 界面原型设计
1. 切分功能模块并建立目录结构
1. 使用 angular-ui 和 Bootstrap 编写 UI
1. 编写 Controller
1. 编写 Service
1. 编写 Filter
1. 单元测试和集成测试
## 第3章 核心原理解析
### 第三章简介 
### AngularJS的启动过程 
### AngularJS的启动过程 
### Provider与Injector 
### Provider与Injector 
### 指令的执行过程分析 
### 指令的执行过程分析 
### $scope与双向数据绑定机制分析 
### $scope与双向数据绑定机制分析 
## 第4章 用AngularJS开发移动APP
### 用AngularJS开发移动APP 
### 用AngularJS开发移动APP 
### 用AngularJS开发移动APP 
## 第5章 前端自动化测试
TDD: Test-Driven Development
先写测试用例，在开发
Unti Testing
E2E Testing: End To End Testing
### 前端自动化测试 
### 前端自动化测试 
***
**本文相关**
