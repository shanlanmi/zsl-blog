----
title: AngularJS
date: 2016-07-21 18:38:44
tags:
- AngularJS
----
## Intro
- AngularJS is a **JavaScript** **framework**. It can be added to an HTML page with a `<script>` tag.
- AngularJS extends HTML attributes with **Directives**, and binds data to HTML with **Expressions**.

## Modules
- An AngularJS module **defines** an application.
- The module is a container for the different **parts** of an application.
- The module is a container for the application **controllers**.
- Controllers **always** belong to a module.
- AngularJS MVVM
![](https://s-media-cache-ak0.pinimg.com/736x/03/b8/b1/03b8b1f37dd3b9327fcd9025f2f33a51.jpg)

### Load the Library
It is recommended that you load the AngularJS library either in the `<head>` or at the start of the `<body>`.
AngularJS starts **automatically** when the web page has loaded.


### Define a a module

- The [] parameter in the module definition can be used to define dependent modules.
- Without the [] parameter, you are **not** creating a new module, but retrieving an existing one.

### Modules and Controllers in Files
It is common in AngularJS applications to put the **module** and the **controllers** in JavaScript files.


### Functions can Pollute the Global Namespace
Global functions should be avoided in JavaScript. They can easily be overwritten or destroyed by other scripts.
AngularJS modules reduces this problem, by keeping **all** functions **local** to the module.

### Controller


## AngularJS Directives
<http://shanlanmi.top/2016/04/07/WebDevelop-2016-05-21-angularjsDirective/>

## AngularJS Expressions
- AngularJS expressions are much like JavaScript expressions: They can contain **literals**, **operators**, and **variables**.

### Writing
1. &#123;{ expression }&#125;
1. `ng-bind="expression"`



### Difference between AngularJS and JavaScript

Support|AngularJS|JavaScript 
---|---|---
Contain literals, operators, and variables|&radic;|&radic;
Can be written inside HTML|X|&radic;
Conditionals, loops, and exceptions|&radic;|X
Filters|&radic;|X

## Angular Controllers
AngularJS controllers **control** the data of AngularJS applications.
AngularJS controllers are regular JavaScript **Objects**.

### AngularJS Controllers
AngularJS applications are controlled by controllers.
The ng-controller directive defines the application controller.
A controller is a **JavaScript** **Object**, created by a standard JavaScript **object** **constructor**.


- `ng-app="myApp"`: Defines a AngularJS application, the application runs inside the element.
- `ng-controller`: Defines a AngularJS controller.
- `myCtrl`: The `myCtrl` function is a JavaScript **function**.
- `$scope`: The owner of application variables and functions.

### Controller Methods
A controller can also have methods (variables as functions):


### Angular Scopes
The scope is the binding part between the HTML (view) and the JavaScript (controller).
The scope is an **object** with the available properties and methods.

**How to Use the Scope?**
When you make a controller in AngularJS, you pass the $scope object as an **argument**:

**Understanding the Scope**
If we consider an AngularJS application to consist of:
- View, which is the HTML.
- Model, which is the data available for the current view.
- Controller, which is the JavaScript function that makes/changes/removes/controls the data.
Then the scope is the Model.The scope is a JavaScript object with properties and methods, which are available for both the view and the controller.



**Root Scope**

If a variable has the same name in both the current scope and in the rootScope, the application use the one in the **current** scope.



## Angular Filters
### Filters Reference
Filters can be added in AngularJS to **format** data.

Filter|Description
---|---
currency|Format a number to a currency format.
date|Format a date to a specified format.
filter|Select a **subset** of items from an **array**.
json|Format an object to a JSON string.
limitTo|Limits an array, or a string, into a specified number of **elements**/characters.
lowercase|Format a string to lower case.
number|Format a number to a string.
orderBy|Orders an array by an expression.
uppercase|Format a string to upper case.

### Adding Filter
- **Adding Filters to Expressions**
  Using the pipe character `|`, followed by a filter.
  ```HTML
  <div ng-app="myApp" ng-controller="personCtrl">
  <p>The name is {{ lastName | uppercase }}</p>
  </div>
  ```
- **Adding Filters to Directives**
  ```HTML
  <div ng-app="myApp" ng-controller="namesCtrl">
  <ul>
    <li ng-repeat="x in names | orderBy:'country'">
      {{ x.name + ', ' + x.country }}
    </li>
  </ul>
  </div>
  ```
- **The currency Filter**
  ```HTML
  <div ng-app="myApp" ng-controller="costCtrl">
  <h1>Price: {{ price | currency }}</h1>
  </div>
  ```
- **The filter Filter**
  The filter filter selects a subset of an array.
  The filter filter can **only** be used on arrays, and it returns an array containing only the matching items.
  ```HTML
  <div ng-app="myApp" ng-controller="namesCtrl">
  <ul>
    <li ng-repeat="x in names | filter : 'i'">
      {{ x }}
    </li>
  </ul>
  </div>
  ```

### Filter Input
- **Filter an Array Based on User Input**
  Type a letter in the input field, and the list will shrink/grow depending on the match:
  ```HTML
  <div ng-app="myApp" ng-controller="namesCtrl">
  <p><input type="text" ng-model="test"></p>
  <ul>
    <li ng-repeat="x in names | filter : test">
      {{ x }}
    </li>
  </ul>
  </div>
  ```
- **Sort an Array Based on User Input**
  By adding the `ng-click` directive on the table headers, we can run a function that changes the sorting order of the array:
  ```HTML
  <div ng-app="myApp" ng-controller="namesCtrl">
  <table border="1" width="100%">
    <tr>
      <th ng-click="orderByMe('name')">Name</th>
      <th ng-click="orderByMe('country')">Country</th>
    </tr>
    <tr ng-repeat="x in names | orderBy:myOrderBy">
      <td>{{x.name}}</td>
      <td>{{x.country}}</td>
    </tr>
  </table>
  </div>
  <script>
  angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
      {name:'Jani',country:'Norway'},
      {name:'Carl',country:'Sweden'},
      {name:'Margareth',country:'England'},
      {name:'Hege',country:'Norway'},
      {name:'Joe',country:'Denmark'},
      {name:'Gustav',country:'Sweden'},
      {name:'Birgit',country:'Denmark'},
      {name:'Mary',country:'England'},
      {name:'Kai',country:'Norway'}
    ];
    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }
  });
  </script>
  ```

### Custom Filters
You can make your own filters by registering a new filter factory function with your module:


## AngularJS HTML ELement
### Angular Tables
**Display the Table Index ($index)**
To display the table index, add a <td> with $index: 
AngularJS Example

**Using $even and $odd**


### Angular Forms
**Input Controls**
Input controls are the HTML input elements:
- input elements
- select elements
- button elements
- textarea elements

**Data-Binding**
Input controls provides data-binding by using the `ng-model` directive.


### Angular Select
1. **Using ng-options to create a select**

1. **Using ng-repeat to create a select**

Dropdowns made with ng-options allows the selected value to be an **object**, while dropdowns made from ng-repeat has to be a **string**.

**The Data Source as an Object**
Using an object as the data source, x represents the key, and y represents the value:

The selected value will still be the value in a key-value pair, only this time it is an object:

### Radiobuttons
Radio buttons with the same ng-model can have different values, but only the selected one will be used.


### Selectbox


**An AngularJS Form Example**
First Name:
Last Name:
RESET
form = {"firstName":"John","lastName":"Doe"}
master = {"firstName":"John","lastName":"Doe"}
Application Code

### Angular Validation
AngularJS can validate input data.
**Form Validation**
Client-side validation cannot alone secure user input. Server side validation is also necessary.

**E-mail**
Use the HTML5 type email to specify that the value must be an e-mail:


**Form State and Input State**
They are all properties of the input/form field, and are either true or false.
**Input** fields have the following states:
- `$untouched`: The field has not been touched yet
- `$touched`: The field has been touched
- `$pristine`: The field has not been modified yet
- `$dirty`: The field has been modified
- `$invalid`: The field content is not valid
- `$valid`: The field content is valid

**Forms** have the following states:
- `$pristine`: No fields have been modified yet
- `$dirty`: One or more have been modified
- `$invalid`: The form content is not valid
- `$valid`: The form content is valid
- `$submitted`: The form is submitted

Show an error message if the field has been touched AND is empty:


**CSS Classes**
1. **Input** fields:
  1. `ng-untouched`: The field has not been touched yet
  1. `ng-touched`: The field has been touched
  1. `ng-pristine`: The field has not been  modified yet
  1. `ng-dirty`: The field has been modified
  1. `ng-valid`: The field content is valid
  1. `ng-invalid`: The field content is not valid
  1. `ng-valid-key`: One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
  1. `ng-invalid-key`: Example: ng-invalid-required

1. **Forms**:
  1. `ng-pristine`: No fields has not been modified yet
  1. `ng-dirty`: One or more fields has been modified
  1. `ng-valid`: The form content is valid
  1. `ng-invalid`: The form content is not valid
  1. `ng-valid-key`: One key for each validation. Example: ng-valid-required, useful when there are more than one thing that must be validated
  1. `ng-invalid-key`: Example: ng-invalid-required

The classes are removed if the value they represent is **false**.


**Custom Validation**
To create your own validation function is a bit more tricky. You have to add a new **directive** to your application, and deal with the validation inside a function with certain specified arguments.
The field will only be valid if the value contains the character "e":


## Angular DOM
AngularJS has directives for binding application data to the attributes of HTML DOM elements.
### the ng-disabled directive
the ng-disabled directive binds angularjs application data to the **disabled** **attribute** of html elements.


### The ng-show Directive
The ng-show directive shows or hides an HTML element.


### The ng-hide Directive
The ng-hide directive hides or shows an HTML element.


## Angular Events
**AngularJS Events**
AngularJS has its own HTML events directives.

Directive|Description
---|---
ng-blur|Specifies a behavior on blur events.
ng-change|Specifies an expression to evaluate when content is being changed by the user.
ng-click|Specifies an expression to evaluate when an element is being clicked.
ng-copy|Specifies a behavior on copy events.
ng-cut|Specifies a behavior on cut events.
ng-dblclick|Specifies a behavior on double-click events.
ng-focus|Specifies a behavior on focus events.
ng-keydown|Specifies a behavior on keydown events.
ng-keypress|Specifies a behavior on keypress events.
ng-keyup|Specifies a behavior on keyup events.
ng-mousedown|Specifies a behavior on mousedown events.
ng-mouseenter|Specifies a behavior on mouseenter events.
ng-mouseleave|Specifies a behavior on mouseleave events.
ng-mousemove|Specifies a behavior on mousemove events.
ng-mouseover|Specifies a behavior on mouseover events.
ng-mouseup|Specifies a behavior on mouseup events.
ng-paste|Specifies a behavior on paste events.

An AngularJS event will **not** **overwrite** an HTML event, both events will be executed.

**Mouse Events**


**The ng-click Events**


**Toggle, True/False**


**$event Object**
You can pass the $event object as an argument when calling the function.
The $event object contains the browser's event object:


## Angular SQL
**Server Code Examples**
The following section is a listing of the server code used to fetch SQL data.
1. Using PHP and MySQL. Returning JSON.
1. Using PHP and MS Access. Returning JSON.
1. Using ASP.NET, VB, and MS Access. Returning JSON.
1. Using ASP.NET, Razor, and SQL Lite. Returning JSON.

**Cross-Site HTTP Requests**
Requests for data from a different server (than the requesting page), are called **cross**-**site** HTTP requests.
In modern browsers, cross-site HTTP requests **from** **scripts** are restricted to **same** **site** for security reasons.
1. Server Code PHP and MySQL

2. Server Code PHP and MS Access

3. Server Code ASP.NET, VB and MS Access

4. Server Code ASP.NET, Razor C# and SQL Lite


## Angular Services
### location service
The $location service has methods which return information about the location of the current web page:

- the $location service need to passed in to the controller as an argument. In order to use the service in the controller, it must be defined as a dependency.

### The $http Service
- $http is an AngularJS service for reading data from remote servers.
- The AngularJS $http service makes a **request** to the server, and returns a **response**.


#### Methods
- `.delete()`
- `.get()`
- `.head()`
- `.jsonp()`
- `.patch()`
- `.post()`
- `.put()`


#### Properties
The response from the server is an object with these properties:
- `.config`: the object used to generate the request.
- `.data`: a string, or an object, carrying the response from the server.
- `.headers`: a function to use to get header information.
- `.status`: a number defining the HTTP status.
- `.statusText`: a string defining the HTTP status.

To handle errors, add one more functions to the .then method:


#### JSON

$http is an **XMLHttpRequest** **object** for requesting external data.

### The $timeout Service
The $timeout service is AngularJS' version of the window.setTimeout function.


### The $interval Service
The $interval service is AngularJS' version of the window.setInterval function.


### Create Your Own Service
To create your own service, connect your service to the module:
Create a service named hexafy:


### Use a Custom Service Inside a Filter
Once you have created a service, and connected it to your application, you can use the service in any controller, directive, filter, or even inside other services.
To use the service inside a filter, add it as a dependency when defining the filter:
The service hexafy used in the filter myFormat:


### A Suctom Service for localStorage


## Angular API
API stands for Application Programming Interface.
The AngularJS Global API is a set of global JavaScript functions for performing common tasks like:
- Comparing objects
- Iterating objects
- Converting data

### AngularJS Global API

#### Converting

API|Description
---|---
angular.lowercase()|Converts a string to lowercase
angular.uppercase()|Converts a string to uppercase
angular.copy()|Creates a deep copy of an object or an array
angular.forEach()|Executes a function for each element in an object or array

**angular.lowercase()**

#### Comparing

API|Description
---|---
angular.isArray()|Returns true if the reference is an array
angular.isDate()|Returns true if the reference is a date
angular.isDefined()|Returns true if the reference is defined
angular.isElement()|Returns true if the reference is a DOM element
angular.isFunction()|Returns true if the reference is a function
angular.isNumber()|Returns true if the reference is a number
angular.isObject()|Returns true if the reference is an object
angular.isString()|Returns true if the reference is a string
angular.isUndefined()|Returns true if the reference is undefined
angular.equals()|Returns true if two references are equal

#### JSON

API|Description
---|---
angular.fromJSON()|Deserializes a JSON string
angular.toJSON()|Serializes a JSON string

#### Basic

API|Description
---|---
angular.bootstrap()|Starts AngularJS manually
angular.element()|Wraps an HTML element as an jQuery element
angular.module()|Creates, registers, or retrieves an AngularJS module
Below is a list of some common API functions:

API|Description
---|---
angular.lowercase()|Converts a string to lowercase
angular.uppercase()|Converts a string to uppercase
angular.isString()|Returns true if the reference is a string
angular.isNumber()|Returns true if the reference is a number


## Angular Includes
With AngularJS, you can include HTML from an external file.

Include the file in your web page, and all AngularJS code will be executed, even the code inside the included file

**Include Cross Domains**
By default, the ng-include directive does **not** allow you to include files from other domains.
To include files from another domain, you can add a whitelist of legal files and/or domains in the config function of your application:

## Angular Animations
AngularJS provides animated transitions, with help from CSS.


**AngularJS Animate library:**

refer to the ngAnimate module in your application:
1. Your application: has no name
  ```HTML
  <body ng-app="ngAnimate">
  ```
1. Your application has a name
  ```HTML
  <body ng-app="myApp">
  <h1>Hide the DIV: <input type="checkbox" ng-model="myCheck"></h1>
  <div ng-hide="myCheck"></div>
  <script>
  var app = angular.module('myApp', ['ngAnimate']);
  </script>
  ```

What Does ngAnimate Do?
The ngAnimate module adds and removes classes.
The ngAnimate module does **not** animate your HTML elements, but when ngAnimate notice certain events, like hide or show of an HTML element, the element gets some pre-defined classes which can be used to make animations.
The directives in AngularJS who add/remove classes are:
- `ng-show`: Adds a ng-hide class value.
- `ng-hide`: Removes a ng-hide class value.
- `ng-class`
- `ng-view`
- `ng-include`
- `ng-repeat`
- `ng-if`
- `ng-switch`

In addition, during the animation, the HTML element will have a set of class values, which will be removed when the animation has finished. Example: the ng-hide directive will add these class values:
- `ng-animate`
- `ng-hide-animate`
- `ng-hide-add (if the element will be hidden)`
- `ng-hide-remove (if the element will be showed)`
- `ng-hide-add-active (if the element will be hidden)`
- `ng-hide-remove-active (if the element will be showed)`


***
**本文相关**
1. 参考
[AngularJS Reference - w3schools.com](http://www.w3schools.com/angular/angular_ref_directives.asp)
[AngularJS API Docs - AngularJS](https://docs.angularjs.org/api)
1. 修订
2016:第一版

