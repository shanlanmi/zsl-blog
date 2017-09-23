----
title: JavaScript Style Guid
date: 2016-07-21 06:40:40
tags:
- JavaScirpt
----
## Strict Mode
### Declaring Strict Mode
- Adding `"use strict";` to the beginning of a JavaScript or a JavaScript function.
- Declared at the beginning of a JavaScript file, it has global scope.
- Declared inside a function, it has local scope.
- Strict mode makes it easier to write "secure" JavaScript

### Note Allowed in Strict Mode
1. Using a variable or object **without** **declaring** it, is not allowed.
1. **Deleting** a variable/object/function, is not allowed.
	```JavaScript
	delete x;
	```
1. Duplicating a parameter name, is not allowed.
	```JavaScript
	function x (p1, p1) { };
	```
1. Octal numeric literals, is not allowed.
	```JavaScript
	var x = 010;
	```
1. Escape character, is not allowed.
	```JavaScript
	var x =\010;
	```
1. Writing to a read-only property, is not allowed.
	```JavaScript
	var obj = {};
	Object.defineProperty(obj, "x", {value:0, writable:false});
	obj.x = 3.14;            // This will cause an error
	```
1. Writing to get-only property, is not allowed.
	```JavaScript
	var obj = {get x() {return 0} };
	obj.x = 3.14;
	```
1. Deleting an undeletable property, is not allowed.
	```JavaScript
	delete Object.prototype;
	```
1. The string "eval"/"arguments" cann't be used as a variable, is not allowed.
	```JavaScript
	var eval = 3.14;
	```
1. The `with` statement, is not allowed.
	```JavaScript
	with (Math) {x = cos(2)};
	```
1. Using `eval()` to create variables in the scope from which it was called, is not allowed.
	```JavaScript
	eval ("var x = 2");
	alert (x);
	```
1. In function calls like f(), the this value was the **global** **object**. In strict mode, it is now **undefined**.
1. Future reserved keywords are not allowed in strict mode. These are: implements , interface , let , package , private , protected , public , static , yield

## JavaScript Style Guide
- Always use the same coding conventions for all your JavaScript projects.
- Coding conventions are style guidelines for programming:
	- Naming and declaration rules for variables and functions.
	- Rules for the use of white space, indentation, and comments.
	- Programming practices and principles
	Coding conventions secure quality:
	- Improves code readability
	- Make code maintenance easier

### Variable Names
- At W3schools we use **camelCase** for identifier names (variables and functions).
- All names start with a letter.

### Spaces Around Operators
Always put spaces around operators ( = + - * / ), and after commas:

### Code Indentation
Always use **4** spaces for indentation of code blocks:

### Statement Rules
1. General rules for **simple** statements:
	1. Always end a simple statement with a semicolon`;`.
1. General rules for **complex** (compound) statements:
	1. Put the opening bracket`{` at the end of the first line.
	1. Use one space before the opening bracket.
	1. Put the closing bracket`}` on a new line, without leading spaces.
	1. Do not end a complex statement with a semicolon.
	```JavaScript 
	if (time < 20) {
	    greeting = "Good day";
	} else {
	    greeting = "Good evening";
	}
	```

### Object Rules
General rules for object definitions:
	1. Place the opening bracket`{` on the same line as the object name.
	1. Use colon`,` plus one space between each property and its value.
	1. Use quotes`"` around string values, not around numeric values.
	1. Do **not** add a comma`;` after the last property value pair.
	1. Place the closing bracket`}` on a new line, without leading spaces.
	1. Always end an object definition with a semicolon`;`.
		```JavaScript
		var person = {
		    firstName: "John",
		    lastName: "Doe",
		    age: 50,
		    eyeColor: "blue"
		};
		```
	1. Short objects can be written compressed, on one line, using spaces only between properties, like this:
		```JavaScript
		var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
		```

### Line Length < 80
- For readability, avoid lines longer than 80 characters.
- If a JavaScript statement does not fit on one line, the best place to break it, is after an **operator** or a **comma**`,`.

### Naming Conventions
Always use the same naming convention for all your code. For example:
- Variable and function names written as **camelCase**
- Global variables written in **UPPERCASE** (We don't, but it's quite common)
- Constants (like PI) written in **UPPERCASE**

### Loading JavaScript in HTML
Use simple syntax for loading external scripts (the type attribute is not necessary):


### File Extensions
- HTML files should have a **.html** extension (not .htm).
- CSS files should have a **.css** extension.
- JavaScript files should have a **.js** extension.

### Use Lower Case File Names
Most web servers are case sensitive about file names, but some webservers are not, To avoid these problems, always use lower case file names (if possible).

## JavaScript Best Practices
### Avoid Global Variables
- Global variables and functions can be overwritten by other scripts.
- Use local variables instead, and learn how to use **closure**.
	```JavaScript
	var add = (function () {
	    var counter = 0;
	    return function () {return counter += 1;}
	})();
	
	add();
	add();
	add();   // the counter is now 3
	```

### Always Declare Local variables
### Declarations on Top
This will:
- Give cleaner code.
- Provide a single place to look for local variables.
- Make it easier to avoid unwanted (implied) global variables.
- Reduce the possibility of unwanted re-declarations.

### Initialize Variables
This will:
- Give cleaner code.
- Provide a single place to initialize variables.
- Avoid undefined values.

### Never Treat Number, String or Boolean as Objects
### Don't Use new Object()
- Use `{}` instead of new Object()
- Use `""` instead of new String()
- Use `0` instead of new Number()
- Use `false` instead of new Boolean()
- Use `[]` instead of new Array()
- Use `/()/` instead of new RegExp()
- Use `function (){}` instead of new Function()

### Beware of Automatic Type Conversions

### Use === Comparison


### Use Parameter Defaults
- If a function is called with a missing argument, the value of the missing argument is set to undefined.
- Undefined values can break your code. It is a good habit to assign default values to arguments.
	```JavaScript
	function myFunction(x, y) {
	    if (y === undefined) {
	        y = 0;
	    }
	}
	```

### End Your Switches with Defaults
### Avoid Using eval()

## JavaScript Performance
### Reduce Activity in Loops
Each statement in a loop, including the for statement, is executed for each iteration of the loop.

### Reduce DOM Access
- Accessing the HTML DOM is very slow, compared to other JavaScript statements.
- If you expect to access a DOM element several times, access it once, and use it as a local variable:

### Reduce DOM Size
Keep the number of elements in the HTML DOM small.

### Avoid Unnecessary Variables

### Delay JavaScript Loading
- Putting your scripts at the bottom of the page body, lets the browser load the page first.
- While a script is downloading, the browser will not start any other downloads. In addition all parsing and rendering activity might be blocked.
- If possible, you can add your script to the page by code, after the page has loaded:
	```JavaScript
	<script>
	window.onload = downScripts;
	
	function downScripts() {
	    var element = document.createElement("script");
	    element.src = "myScript.js";
	    document.body.appendChild(element);
	}
	</script>
	```
### Avoid Using with
- It has a negative effect on speed.
- It also clutters up JavaScript scopes.
- It is not allowed in strict mode.

## JavaScript Mistakes
### Accidentally Using the Assgnment
Programmer accidentally uses an assignment operator (=), instead of a comparison operator (==).

### Expecting Loose Comparison
It is a common mistake to forget that switch statements use strict comparison.

### Confusing Addition & Concatenation
In JavaScript, both addition and concatenation use the same `+` operator.
### Misunderstanding Floats
All numbers in JavaScript are stored as 64-bits Floating point numbers(Floats).

### Breaking a JavaScript String
breaking a statement in the middle of a string will not work, you must use `\` to break in a string.


### Misplacing Semicolon(;)

### Breaking a Return Statement
JavaScript will close the return statement at the end of the line, because it is a complete statement.

### Accessing Arrays with Named Indexes
In JavaScript, **arrays** use numbered indexes, **object** use named indexes.
    
### Ending an Array/Object Definition with a Comma

### Expecting Block Level Scope
JavaScript does not create a new scope for each code block.


## JavaScript Reserved Words
In JavaScript, some identifiers are reserved words and cannot be used as variables or function names.
[Reserved Words][keyword]


***
## 本文相关
1. 参考
[w3schools - JavaScript Tutorial](http://www.w3schools.com/js/default.asp)

[keyword]:http://www.w3schools.com/js/js_reserved.asp

