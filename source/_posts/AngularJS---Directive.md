----
title: AngularJS - Directive
date: 2016-07-21 18:38:44
categories:
- AngularJS
----
## 什么时候用 directive？
由于 AngularJS 采用了双向数据绑定（model 和 view），所以多数情况下可以直接对数据做处理，无需操作 DOM。但是一定还是存在需要操作 DOM 的时候，我理解directive 为直接和 DOM 打交道而存在的。
几种使用 directive 的情况：
1. 各种操作 DOM。
1. 绑定各种数据（通用指令）。
1. 使用第三方组件。

## directive
## 内置 directive
### 内置directive 列表

Directive|Description
---|---
ng-app|Defines the root element of an application.
ng-bind|Binds the content of an HTML element to application data.
ng-bind-html|Binds the innerHTML of an HTML element to application data, <br>and also removes dangerous code from the HTML string.
ng-bind-template|Specifies that the text content should be replaced with a template.
ng-checked|Specifies if an element is checked or not.
ng-class|Specifies CSS classes on HTML elements.
ng-class-even|Same as ng-class, but will only take effect on even rows.
ng-class-odd|Same as ng-class, but will only take effect on odd rows.
ng-cloak|Prevents flickering when your application is being loaded.
ng-controller|Defines the controller object for an application.
ng-csp|Changes the content security policy.
ng-disabled|Specifies if an element is disabled or not.
ng-form|Specifies an HTML form to inherit controls from.
ng-hide|Hides or shows HTML elements.
ng-href|Specifies a url for the <a> element.
ng-if|Removes the HTML element if a condition is false.
ng-include|Includes HTML in an application.
ng-init|Defines initial values for an application.
ng-jq|Specifies that the application must use a library, like jQuery.
ng-list|Converts text into a list (array).
ng-model|Binds the value of HTML controls to application data.
ng-model-options|Specifies how updates in the model are done.
ng-non-bindable|Specifies that no data binding can happen in this element, or it's children.
ng-open|Specifies the open attribute of an element.
ng-options|Specifies `<options>` in a `<select>` list.
ng-pluralize|Specifies a message to display according to en-us localization rules.
ng-readonly|Specifies the readonly attribute of an element.
ng-repeat|Defines a template for each data in a collection.
ng-required|Specifies the required attribute of an element.
ng-selected|Specifies the selected attribute of an element.
ng-show|Shows or hides HTML elements.
ng-src|Specifies the src attribute for the `<img>` element.
ng-srcset|Specifies the srcset attribute for the `<img>` element.
ng-style|Specifies the style attribute for an element.
ng-submit|Specifies expressions to run on onsubmit events.
ng-switch|Specifies a condition that will be used to show/hide child elements.
ng-transclude|Specifies a point to insert transcluded elements.
ng-value|Specifies the value of an input element.

#### The ng-init Directive
- 初始化 AngularJS 的变量。
- 多数情况下，用 controller 或 module 来定义变量更好。


#### The ng-model Directive
`ng-model`指令同时提供：

- view 和 model 的双向数据绑定
  - 用`ng-bind`绑定元素的 innerHTML 
    ```HTML
    <p ng-bind="firstname"></p>
    ```
  - 用&#123;{ }&#125; 作为表达式来绑定
    ```HTML
    <p>First name: {{firstname}}</p>
    ```
  - `ng-model`指令绑定 HTML 控件到应用数据。（input，select，textarea）
    ```HTML
    <div ng-app="myApp" ng-controller="myCtrl">
        Name: <input ng-model="name">
    </div>
    <div>{{name}}</div>
    <script>
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.name = "John Doe";
    });
    </script>
    ```
  - 强制刷新双向绑定数据（用于由非 angular 库内函数修改数据，未同步刷新的情况）
    ```JavaScript
    angular.element(document.getElementById("myid")).scope().val = 999;
    ```
    ```JavaScript
    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, false);
    el.dispatchEvent(event);
    ```
- 格式合法性检查（number，email，require）
  ```HTML
  <form ng-app="" name="myForm">
      Email:
      <input type="email" name="myAddress" ng-model="text">
      <span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
  </form>
  ```
- 数据状态检查（invalid，dirty，touched，error）
  ```HTML
  <form ng-app="" name="myForm" ng-init="myText = 'post@myweb.com'">
      Email:
      <input type="email" name="myAddress" ng-model="myText" required>
      <h1>Status</h1>
      {{myForm.myAddress.$valid}}
      {{myForm.myAddress.$dirty}}
      {{myForm.myAddress.$touched}}
  </form>
  ```
  - Valid: Boolean，检查值是否符合规则。
  - Dirty: Boolean，值是否变过。
  - Touched: Boolean，检查值是否被 focus 过。
- 为HTML element 提供 CSS 的 class
  ```HTML
  <style>
  input.ng-invalid {
      background-color: lightblue;
  }
  </style>
  <body>
  <form ng-app="" name="myForm">
      Enter your name:
      <input name="myAddress" ng-model="text" required>
  </form>
  ```
  - ng-empty
  - ng-not-empty
  - ng-touched
  - ng-untouched
  - ng-valid
  - ng-invalid
  - ng-dirty
  - ng-pending
  - ng-pristine
- 绑定 HTML element HTML forms

### ng-repeat
- The ng-repeat directive actually **clones** HTML elements once for each item in a collection.
- AngularJS is perfect for database CRUD (Create Read Update Delete) applications. Just imagine if these objects were records from a database.


- `ng-repeat`会自动生成`$$hashKey`，此变量为 AngularJS 的私有变量，几种应对它的方法：
  1. 在使用`ng-repeat`时，消除`$$hashKey`的产生。
    ```
    ng-repeat=“item in listName track by $index"
    ```
  1. 利用`delete obj.property`来手动删除`$$hashKey`
  1. 在 post 请求时，用`angular.toJson(obj)` 代替 `JSON.stringify(obj)` 来消除 `$$hashKey`.

### ng-form
1. HTML 原生的 form 表单不能嵌套,而 Angular封装之后的 form 可以嵌套
1. AngularJS 为 form 扩展了自动效验，防止重复提交等功能
1. AngularJS 为 input元素的 type 进行了扩展，一共提供了以下10种类型
  text, number, url, email, radio, checkbox, hidden, button, submit, reset
1. AngularJS 为表单内置了4种 CSS 样式
  ng-valid，ng-invalid, ng-pristine, ng-dirty
1. 内置效验器
  require, minlength, maxlength


### ng-class
1. Using String Syntax
  ```JavaScript
  <input type='text' ng-model='textType'>
  <div ng-class='textType'>Look! I'm Words!</div>
  ```
1. Using Array Syntax
  ```JavaScript
  <input type="text" ng-model="styleOne">
  <input type="text" ng-model="styleTwo">
  <div ng-class="[styleOne, styleTwo]">Look! I'm Words!</div>
  ```
1. Using Evaluated Expression
  若变量或表达式为 true，则前面的 class 类名生效。
  ```JavaScript
  <input type="checkbox" ng-model="awesome"> Are You Awesome?
  <input type="checkbox" ng-model="giant"> Are You a Giant?

  <!-- add the class 'text-success' if the variable 'awesome' is true -->
  <div ng-class="{ 'text-success': awesome, 'text-large': giant }">
  ```
1. Using the Ternary Operator
  ```JavaScript
  ng-class="$even ? 'even-row' : 'odd-row'"
  ng-class="{ 'text-info': $even, 'text-danger': $odd }"
  ```
1. ngClass as a class
  ```HTML
  <div class="item ng-class:type;">Stuff Goes Here</div>

  <div class="item ng-class:[styleOne, styleTwo];">Stuff Goes Here</div>

  <div class="item ng-class:{ 'text-error': wrong };">Stuff Goes Here</div>
  ```
1. ngClass as a attribute
  ```HTML
  <div class="item" ng-class="type">Stuff Goes Here</div>
  <div class="item" ng-class="[styleOne, styleTwo]">Stuff Goes Here</div>
  <div class="item" ng-class="{ 'text-error': wrong }">Stuff Goes Here</div>
  ```

### ng-style

```html
<h1 ng-style="myObj">Welcome</h1>
```
```JS
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.myObj = {
        "color" : "white",
        "background-color" : "coral",
        "font-size" : "60px",
        "padding" : "50px"
    }
});
```


## 自定义 directive
### 创建指令
- 用`.directive`创建指令。
- 不要命令指令为`ng-*`，会很内置指令重复。
- 尽量不要用单个单词命令指令，避免重复和升级标准后的冲突。

Defined|Also Can|Best Practice
---|---|---
DOM|someName|some-name
Attribute|some-name|some-name
JavaScript|somename|someName



### 召唤指令
- Element name
  ```HTML
  <w3-test-directive></w3-test-directive>
  ```
- Attribute
  ```HTML
  <div w3-test-directive></div>
  ```
- Class
  ```HTML
  <div class="w3-test-directive"></div>
  ```
- Comment
  ```HTML
  <!-- directive: w3-test-directive -->
  ```

### 指令属性
#### Restrict
限定指令的召唤类型
- A: Attribute (default)
  ```HTML
  <div my-menu></div> 
  ```
- E: Element name (default)
  ```HTML
  <my-menu></my-menu>
  ```
- C: Class
  ```HTML
  <div class="my-menu"></div>
  ```
- M: Comment
  ```HTML
  <!-- directive:my-menu -->
  <div></div>
  ```



#### replace 和 transclude
- `replace:true`: 指令会替换元素内部的内容
- `transclude:true`: 将元素内部的内容嵌套在 ng-transclude 处
  ```JavaScript
  myModule.directive("hello", function($templateCache) {
      return {
          restrict: 'AECM',
          transclude: true
          template: "<div>Hello everyone!<div ng-transclude></div></div>"
      }
  });
  ```

#### template，templateUrl，$templateCache
- template：加载片段代码
  ```JavaScript
  template: "<div>app</div>",
  ```
- templateUrl：加载 html 文件
  ```JavaScript
  templateUrl: "app.html",
  templateUrl:function(tElement, tAttrs) { return tAttrs.xx+"xx.html" },
  ```
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

#### compile 和 link 操作元素，添加 CSS 样式，绑定时间
- **compile 和 link 的工作顺序**
  1. 加载阶段
    1. 加载 angular.js, 找到 ng-app, 确定应用的边界
  1. 编译阶段
    1. 遍历 DOM, 找到所有指令
    1. 根据指定中的 template,replace,transclude 转换 DOM 结构
    1. 若存在 compile 函数,则调用(会覆盖原先的 compile 函数)
  1. 链接阶段
    1. 对每一条指定运行 link 函数
    1. link 函数一般用来操作 DOM，绑定事件

- **compile**
在compile函数内部，只对DOM进行操作，返回函数等效于使用link配置，返回对象的话包含两个函数：
  - preLink会在编译阶段之后、指令连接到子元素之前运行
  - postLink会在所有子元素指令都链接之后才运行


- **link**
link函数会访问scope对象，其返回一个postLink函数。如果在compile中返回了post，那么link选项就会被忽略


- **注意：**
1. compile 函数用来对模板的自身进行转换，而 link 函数负责在模型和视图之间进行动态关联
1. 作用域在链接阶段才会被绑定到编译之后的 link 函数上
1. compile函数仅仅在编译阶段运行一次，而指令的每一个实例，link 函数都会执行一次
1. compile 可以返回 preLink 和 postLink 函数，而 link 函数只会返回 postLink 函数
1. 如果需要修改 DOM 结构，应该在 postLink 中来做这件事，而如果在 preLink 中做这件事会导致错误
1. 大多数时候我们只需要编写 link 函数即可

#### Scope
设置和父级 scope 的绑定关系，默认值为 false
**独立作用域**
  ```JavaScript
  scope: {},    // 独立作用域
  ```
**scope 的绑定策略**

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

#### require
依赖其他指令，其他指令可以作为 link 的第四个参数
require 的前缀：
- 无前缀：在当前元素中查找控制器
- `^`: 在当前元素和父元素中查找控制器
- `^^`：在父元素中查找控制器
- `?`: 在当前指令中找控制器，若没有找到，返回 null
- `?^`: 组合使用`?`和`^`

#### priority
- 多个指令的优先级，值为 number。
- `ng-repeat`的优先级为1000
- `ng-init`的优先级为450；

#### controller
可以向控制器中注入如下服务,让指令和指令之间可以交互.
- controller 为 sting，则将字符串作为控制器函数的名称。
  ```JavaScript
  angular.module('myApp', []) 
  .directive('myDirective', function() { 
  restrict: 'A', // 始终需要
  controller: 'SomeController' 
  }) 
  // 应用中其他的地方，可以是同一个文件或被index.html包含的另一个文件
  angular.module('myApp') 
  .controller('SomeController', function($scope, $element, $attrs, $transclude) { 
  // 控制器逻辑放在这里
  });
  ```
- controller 为 function，则定义为匿名函数可以注入任何服务
  ```JavaScript
  angular.module('myApp',[]) 
  .directive('myDirective', function() { 
  restrict: 'A', 
  controller: 
  function($scope, $element, $attrs, $transclude) { 
  // 控制器逻辑放在这里
  } 
  });
  ```
- 一些特殊服务的注入：
  - $scope: 与指令元素相关联的当前作用域
  - $element: 当前指令对应的元素
  - $attrs: 由当前元素的属性组成的对象
  - $transclude: 嵌入链接函数会与对应的嵌入作用域进行预绑定。transclude链接函数是实际被执行用来克隆元素和操作DOM的函数。

## 交互

### 指定与控制器之间的交互




### 指令间的交互


## 一个 Accordion 的实例

***
**本文相关**
1. 参考
[指令详解 | 天镶的读书笔记](http://read.lingyu.wang/the-complete-book-on-angularjs/directive-detail.html)
[你知道用AngularJs怎么定义指令吗？ - 雷锋叔叔Touch - 博客园](http://www.cnblogs.com/cunjieliu/p/4055519.html)
[AngularJS Directive 隔离 Scope 数据交互 - Coding 博客](https://blog.coding.net/blog/angularjs-directive-isolate-scope)
1. 修订
2016:第一版
