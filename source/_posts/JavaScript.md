----
title: JavaScript
date: 2016-07-21 18:38:44
categories:
- JavaScirpt
----
## JavaScript
1. JavaScript statements are separated by semicolons(;).
1. JavaScript statements = Values + Operators + Expressions + Keywords + Comments
1. Value = Fixed value (**literals**) + variable values (**variables**)
1. Literals = Numbers + Strings
1. There are six basic types of values: numbers, strings, booleans, objects, functions, undefined values.

### Place the JavaScript code
1. **Placing in HTML page with script element**
  ```javascript
  <script>
  document.getElementById("demo").innerHTML = "Text";
  </script>
  ```
  1. `<script type="text/javascript">` is **not** required.
  1. Script can placed in body or head.
  1. Keeping all code at the bottom of the body element is a good habit, because script compilation can slow down the display.
	
1. **Placing in External files**
	```JS
	<script src="myscript.js"></script>
	```
	1. You can place an external script reference in `<head>` or `<body>` as you like.
	1. External script cannot contain `<script>` tags.
	
	Placing JavaScripts in external files has some advantages:
	1. Separates HTML and code.
	1. Easier to read and maintain.
	1. Speed up page loads.
	
## Variable - Number


### Precision
- JavaScript numbers are always 64-bit floating point.
- Integers are considered accurate up to **15 digits**.
- The maximum number of **decimals is 17**, but floating point arithmetic is not always 100% 


### Special numbers
- `Infinity` and `-Infinity`
- `NaN`: Not A Number
The type of `Infinity` and `NaN` are "number".


### Hexadecimal
- Hexadecimal: `var x = 0xFF;`
- Never write a number with a **leading** **zero**, some JS interpret numbers as **octal**.
- Using `toString(n)` method to change between base 16(hex), base 8(octal), base 2(binary).

### Properties and Methods

**Number Properties**

Property|Description
---|---
constructor|Returns the function that created JavaScript's Number prototype
MAX_VALUE|Returns the largest number possible in JavaScript
MIN_VALUE|Returns the smallest number possible in JavaScript
NEGATIVE_INFINITY|Represents negative infinity (returned on overflow)
NaN|Represents a "Not-a-Number" value
POSITIVE_INFINITY|Represents infinity (returned on overflow)
prototype|Allows you to add properties and methods to an object

**Number Methods**
All number methods return a new value. They do not change the original variable.

Method|Description
---|---
isFinite()|Checks whether a value is a finite number
isInteger()|Checks whether a value is an integer
isNaN()|Checks whether a value is Number.NaN
isSafeInteger()|Checks whether a value is a safe integer
toExponential(x)|Converts a number into an exponential notation
toFixed(x)|Formats a number with x numbers of digits after the decimal point
toPrecision(x)|Formats a number to x length
toString()|Converts a number to a string
valueOf()|Returns the primitive value of a number

[Number Reference][number]

## Variable - String
- Strings can be compared.

### Special Character

Code|Outputs
---|---
\\|Backslash
\'|Single quote
\"|Double quote
\n|New line
\r|Return
\t|Tab
\b|Backsapace
\f|Form feed

### Breaking Code Lines

**Note**: Can not break up a code line with a backslash.

### Accessing a String as an Array

- It does not work in all browsers (not in IE5, IE6, IE7)
- It makes strings look like arrays (but they are not)
- str[0] = "H" does **not** give an error (but does not work)
- Using `string.charAt(n)` is better.

### Properties and Methods
**String Properties**

Property|Description
---|---
constructor|Returns the function that created the String object's prototype
length|Returns the length of a string
prototype|Allows you to add properties and methods to an object

**String Methods**

- All string methods return a new string. They don't modify the original string.
- Strings are immutable: Strings cannot be changed, only replaced.

Method|Description
---|---
charAt()|Returns the character at the specified index (position), note: don't use `charAt[]`
charCodeAt()|Returns the Unicode of the character at the specified index
concat()|Joins two or more strings, and returns a new joined strings
endsWith()|Checks whether a string ends with specified string/characters
fromCharCode()|Converts Unicode values to characters
includes()|Checks whether a string contains the specified string/characters
indexOf()|Returns the position of the first found occurrence of a specified value in a string, e.g. `string.indexOf(char)`
lastIndexOf()|Returns the position of the last found occurrence of a specified value in a string
localeCompare()|Compares two strings in the current locale
match()|Searches a string for a match against a **regular** **expression**, and returns the matches
repeat()|Returns a new string with a specified number of copies of an existing string
[replace()][replace]|Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
search()|Searches a string for a specified value, or regular expression, and returns the position of the match
slice()|Extracts a part of a string and returns a new string
[split()][split]|Splits a string into an array of substrings
startsWith()|Checks whether a string begins with specified characters
substr()|Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
substring()|Extracts the characters from a string, between two specified indices
toLocaleLowerCase()|Converts a string to lowercase letters, according to the host's locale
toLocaleUpperCase()|Converts a string to uppercase letters, according to the host's locale
toLowerCase()|Converts a string to lowercase letters
toString()|Returns the value of a String object
toUpperCase()|Converts a string to uppercase letters
trim()|Removes whitespace from both ends of a string
valueOf()|Returns the primitive value of a String object

**<a id="replace">replace()**
- The replace() method does not change the string it is called on. It returns a new string.
- Supports regular expression.
- The replace() function replaces only the first match.
- To replace all matches, use a regular expression with a g flag (for global match):


**<a id="split">split()**
Syntax: `string.split("separator");`
- If the separator is omitted, the returned array will contain the whole string in index [0].
- If the separator is "", the returned array will be an array of single characters:

### Transform String to Num
1. **Function: parseInt() and parseFloat()**
  ```JS
  parseInt("1234blue");       // returns 1234
  parseInt("22.5");           // returns 22
  parseInt("blue");           // returns NaN
  parseFloat("22.34.5");      // returns 22.34
  ```
1. **Type casting: Boolean(), Number() and String()**
  ```JS
  Number(false)               // 0
  Number(true)                // 1
  Number(undefined)           // NaN
  Number(null)                // 0
  Number("5.5 ")              // 5.5
  Number("56 ")               // 56
  Number("5.6.7")             // NaN
  ```
1. **Arithmetic**
  ```
  var str = '012.345 ';
  var x = str - 0;
  x = x * 1
  ```

[String Reference][string]

## Variable - Boolean
Only **true** or **false** in JS' Boolean  date.
**Special** **false**: 0, -0, "", undefined, null, false, NaN

[Boolean Reference][boolean]

## Variable - Object
In JavaScript, almost "everything" is an object:
- **Booleans**, **Numbers**, **Strings** can be objects (or primitive data treated as objects)
- **Dates**, **Maths**, **Regular Expressions**, **Array**, **Functions**, **Objects** are always objects
- All values, except primitive values, are objects.
	Primitive values are: strings ("John Doe"), numbers (3.14), true, false, null, and undefined.  

Objects can contain one value or many values.
- An object has **properties** and **methods**.
- The values are written as **name:value** pairs.
- **Properties**, the name of values.
- **Methods**, actions that can be proformed on objects.
- An object **method** is an object property containing a **function** **definition**.
- All objects have the **same** properties, but the property values **differ** from object to object.
- All objects have the **same** methods, but the methods are performed at **different** times.

### Defining
There are different ways to create new objects:
- Define and create a single object, using an object literal.
	```JS
	var person = {firstName:"John", lastName:"Doe"};
	```
- Define and create a single object, with the keyword `new`.
	```JS
	var person = new Object()
	person.firstName = "John";
	person.lastName = "Doe";
	```
- Define an object constructor, and then create objects of the constructed type.
	```JS
	function Person(first, last, age, eye) {
	    this.firstName = first;
	    this.lastName = last;
	    this.age = age;
	    this.eyeColor = eye;
	}
	var myFather = new person("John", "Doe", 50, "blue");
	var myMother = new person("Sally", "Rally", 48, "green");
	```
- Identifying constructor names start with a **capital letter**, they can easily identify which functions are construcotor.
- In ECMAScript 5, an object can also be created with the function `Object.create()`.

**The "This" Keyword**
In JavaScript, `this` is the object that "owns" the JavaScript code.
`this` is not a variable. It is a keyword. You cannot change the value of this.

**Built-in JavaScript Constructors**

There is no reason to create complex objects. Primitive values execute much faster.

**JavaScript Objects are Mutable**

The object x is not a **copy** of y, it **is** y. Both x and y point to the same object.

### Object Properties
- **Accessing Properties**
	```JS
	objectName.property          // person.age
	objectName["property"]       // person["age"]
	objectName[expression]       // x = "age"; person[x]
	```

- **Property Attributes**
	- Attributes: values, enumerable, configurable, writable.
	- These attributes define how the property can be accessed.
	- All attributes can be read, but only the value attribute can be changed (and only if the property is writable).

- **Prototype Properties**
	- JavaScript objects inherit the properties of their prototype.
	- The `delete` keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

[Object Properties and Methods Reference][objectProperties]
### Object Methods
- **Accessing Object Methods**
	- **Creat an object method**
		```JS
		methodName : function() { code }
		```
	- **Access an object method**
		```JS
		objectName.methodName();
		```
	- **Access an object method function definition**
		```JS
		objectName.methodName;
		```

**Methods of the Object constructor**

Function|Description
---|---
Object.assign(target, ...sources)|Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.(单层 clon)
Object.create()|Creates a new object with the specified prototype object and properties.
Object.defineProperty(obj, prop, descriptor)|Adds the named property described by a given descriptor to an object.
Object.defineProperties(obj, props)|Adds the named properties described by the given descriptors to an object.
Object.entries()|Returns an **array** of a given object's own enumerable property **[key, value]** pairs.
Object.freeze()|Freezes an object: other code can't delete or change any properties.
Object.getOwnPropertyDescriptor(obj, prop)|Returns a property descriptor for a named property on an object.
Object.getOwnPropertyNames()|Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols()|Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf()|Returns the prototype of the specified object.
Object.is(value1, value2)|Compares if two values are distinguishable (ie. the same)
Object.isExtensible()|Determines if extending of an object is allowed.
Object.isFrozen()|Determines if an object was frozen.
Object.isSealed()|Determines if an object is sealed.
Object.keys()|Returns an **array** containing the **names** of all of the given object's own enumerable properties.
Object.preventExtensions()|Prevents any extensions of an object.
Object.seal()|Prevents other code from deleting properties of an object.
Object.setPrototypeOf()|Sets the prototype (i.e., the internal [[Prototype]] property)
Object.values()|Returns an array of a given object's own enumerable values.

**Converting Object to Array**
```
let arr = Object.keys(obj).map((k) => obj[k])
```

### Object Prototypes
- **About Prototypes**
	- Every JavaScript object has a prototype. The prototype is also an object.
	- All JavaScript objects inherit their properties and methods from their prototype.
	- All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

- **Creating a Proptotype**
	1. Using an object constructor function
		```JS
		function person(first, last, age, eyecolor) {
		    this.firstName = first;
		    this.lastName = last;
		    this.age = age;
		    this.eyeColor = eyecolor;
		}
		```
	1. Using `new` keyword to create new objects from the same prototype
		```JS
		var myFather = new person("John", "Doe", 50, "blue");
		var myMother = new person("Sally", "Rally", 48, "green");
		```
		The constructor function is the prototype for your person objects.

	1. To add a new property or method to a constructor, you must add it to the constructor function:
		```JS
		//Adding a property
		person.prototype.nationality = "English";
		
		//Adding a method
		person.prototype.name = function() {
		    return this.firstName + " " + this.lastName;
		};
		```
		Note: Only modify your **own** prototypes. **Never** modify the prototypes of standard JavaScript objects.
	1. `Object.create`: To create an object with a specific prototype.
		```javascript
		var protoRabbit = {
		  speak: function(line) {
		    console.log("The" + this.type + "rabbit says'" + line + "'");
		  }
		};
		var killerRabbit = Object.create(protoRabbit);
		killerRabbit.type = "killer";
		killerRabbit.speak("SKREEEE!");
		//- The killer rabbit says 'SKREEEE!'
		```
	1. `Object.getPrototypeOf`: returns the prototype of an object

### Global Properties and Functions

- Accessing object **properties** with `objectName.propertyName` or `objectName["propertyName"]`.
- Accessing object **methods** with `objectName.methodName()` or `name = objectName.method();`.
- If you access the fullName property, **without** (), it will return the function definition.
- Almost all Javascript values have properties, except **null** and **undefined**.

**JavaScript Global Properties**

Property|Description
---|---
Infinity|A numeric value that represents positive/negative infinity
NaN|"Not-a-Number" value
undefined|Indicates that a variable has not been assigned a value

**JavaScript Global Functions**

Function|Description
---|---
decodeURI()|Decodes a URI
decodeURIComponent()|Decodes a URI component
encodeURI()|Encodes a URI
encodeURIComponent()|Encodes a URI component
escape()|Deprecated in version 1.5. Use encodeURI() or encodeURIComponent() instead
eval()|Evaluates a string and executes it as if it was script code
isFinite()|Determines whether a value is a finite, legal number
isNaN()|Determines whether a value is an illegal number
Number()|Converts an object's value to a number
parseFloat()|Parses a string and returns a floating point number
parseInt()|Parses a string and returns an integer
String()|Converts an object's value to a string
unescape()|Deprecated in version 1.5. Use decodeURI() or decodeURIComponent() instead

**Adding New Properties**


**Deleting Properties**

- The **delete** keyword deletes both the value of the property and the property itself.
- The **delete** operator is designed to be used on **object** properties. It has no effect on **variables** or **functions**.
- The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

**Find an property**



[Global Reference][global]

## Variable - Array
- You can have different objects in one array.
- You can have variables of different types (object, function, array) in the same Array.

### Defining

### Accessing

Note: [0] is the first element in an array. [1] is the second. Array indexes start with 0.

### Compare With Object
Arrays are a **special** **kind** of objects, with numbered indexes.

**When to Use Arrays or Objects?**
- You should use objects when you want the element names to be strings (text).
- You should use arrays when you want the element names to be numbers.

**How to Recognize an Array?**
- Solution 1:
	```JS
	Array.isArray(fruits);     // returns true
	```
	The problem with this solution is that ECMAScript 5 is not supported in older browsers.

- Solution 2:
	To solve this problem you can create your own isArray() function:
	```JS
	function isArray(x) {
	    return x.constructor.toString().indexOf("Array") > -1;
	}
	```
	Note: The function returns true if the argument is an array, or the object prototype contains the word "Array".

- Solution 3:
	The instanceof operator returns true if an object is created by a given constructor:
	```
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	fruits instanceof Array     // returns true
	```

### Properties and Methods
**Array Properties**

Property|Description
---|---
constructor|Returns the function that created the Array object's prototype
length|Sets or returns the number of elements in an array
prototype|Allows you to add properties and methods to an Array object

**Array Methods**

Method|Description
---|---
concat()|Joins two or more arrays, and returns a copy of the joined arrays<br>e.g. arr1.concat(arr2, arr3);
copyWithin()|Copies array elements within the array, to and from specified positions
every()|Checks if every element in an array pass a test
fill()|Fill the elements in an array with a static value
filter()|Creates a new array with every element in an array that pass a test
find()|Returns the value of the first element in an array that pass a test
findIndex()|Returns the index of the first element in an array that pass a test
forEach()|Calls a function for each array element
indexOf()|Search the array for an element and returns its position
isArray()|Checks whether an object is an array
join()|Joins all elements of an array into a string
lastIndexOf()|Search the array for an element, starting at the end, and returns its position
map()|Creates a **new array** with the result of calling a function for each array element
reduce()|Reduce the values of an array to a single value (going left-to-right)
reduceRight()|Reduce the values of an array to a single value (going right-to-left)
reverse()|Reverses the order of the elements in an array
some()|Checks if any of the elements in an array pass a test
sort()|Sorts the elements of an array
toString()|Converts an array to a string, and returns the result
valueOf()|Returns the primitive value of an array
|
slice()|Selects a part of an array, and returns the new array<br>e.g. slice(n1, n2);
push()|Adds new elements to the end of an array, and returns the new length
pop()|Removes the last element of an array, and returns that element
unshift()|Adds new elements to the beginning of an array, and returns the new length
shift()|Removes the first element of an array, and returns that element
splice()|Adds/Removes elements from an array<BR>e.g. array.splice(n, 0, "Element1", "Element2");

- **<a id="sort">sort()**
	This method changes the original array.

	Numeric Sort
	You can find the Highest (or Lowest) Value with this way:
	```JS
	points.sort(function(a, b){return a-b});
	points.sort(function(a, b){return b-a});

  // object can be sorted
	points.sort(function(a, b){return a.value-b.value});
	```
- **<a id="filter">filter()</a>**
  - filter() does **not** execute the function for array elements without values.
  - filter() does **not** change the original array.
  ```js Example
  ages = [32, 33, 16, 40];
  var newArr = ages.filter( function(age) {
      return age >= 18;
  };
  ```
- **Adding array element**
	- `array.push("element");`
	- `array[10] = "element";`
	- `array[array.length] = "element";`

- **Looping Array Elements**
	The best way to loop through an array, is using a "for" loop:
	```JS
	var index;
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	for	(index = 0; index < fruits.length; index++) {
	    text += fruits[index];
	}
	```

[Array Reference][array]

## Variable - Date
### Defining
A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.
Date objects are created with the `new Date()` constructor.
There are 4 ways of initiating a date:
- new Date()
- new Date(milliseconds)
- new Date(dateString)
- new Date(year, month, day, hours, minutes, seconds, milliseconds)




### Date Formats
**JavaScript Date Input**
There are generally 4 types of JavaScript date formats:
1. ISO Dates
	```JS
	var d = new Date("2015-03-25");
	var d = new Date("2015-03");
	var d = new Date("2015");
	var d = new Date("2015-03-25T12:00:00");
	```
	The T in the date string, between the date and time, indicates UTC time.
1. Long Dates
	```JS
	var d = new Date("Mar 25 2015");
	var d = new Date("25 Mar 2015");
	var d = new Date("January 25 2015");
	var d = new Date("Jan 25 2015");
	var d = new Date("JANUARY, 25, 2015");
	```
	Month can be written in full (January), or abbreviated (Jan):
	Commas are ignored. Names are case insensitive:
1. Short Dates
	```JS
	var d = new Date("03/25/2015");
	var d = new Date("2015/03/25");
	```
1. Full Format
	```JS
	var d = new Date("Wed Mar 25 2015 01:00:00 GMT+0100");
	```
	JavaScript will accept date strings in "full JavaScript format":

**JavaScript Date Output**
Independent of input format, JavaScript will (by default) output dates in full text string format.
JavaScript counts months from 0 to 11. January is 0. December is 11.

**Time Zone**

Time Zone|Description
---|---
UTC|Coordinated Universal Time
GMT|Greenwich Mean Time
EDT|(US) Eastern Daylight Time
CDT|(US) Central Daylight Time
MDT|(US) Mountain Daylight Time
PDT|(US) Pacific Daylight Time
EST|(US) Eastern Standard Time
CST|(US) Central Standard Time
MST|(US) Mountain Standard Time
PST|(US) Pacific Standard Time

The browser's time zone is default.


### Compare Dates
The following example compares today's date with January 14, 2100:


### Properties and Methods
**Date Object Properties**

Property|Description
---|---
constructor|Returns the function that created the Date object's prototype
prototype|Allows you to add properties and methods to an object

**Get Date Methods**

Method|Description
---|---
getDate()|Returns the day of the month (from 1-31)
getDay()|Returns the day of the week (from 0-6),0 for Sunday, 1 for Monday
getFullYear()|Returns the year (four digits)
getYear()|Deprecated. Use the getFullYear() method instead
getHours()|Returns the hour (from 0-23)
getMilliseconds()|Returns the milliseconds (from 0-999)
getMinutes()|Returns the minutes (from 0-59)
getMonth()|Returns the month (from 0-11)
getSeconds()|Returns the seconds (from 0-59)
getTime()|Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
getTimezoneOffset()|Returns the time difference between UTC time and local time, in minutes
now()|Returns the number of milliseconds since midnight Jan 1, 1970
parse()|Parses a date string and returns the number of milliseconds since January 1, 1970
valueOf()|Returns the primitive value of a Date object

**Get the last day of the month**


**Get UTC Date Methods**

Method|Description
---|---
getUTCDate()|Returns the day of the month, according to universal time (from 1-31)
getUTCDay()|Returns the day of the week, according to universal time (from 0-6)
getUTCFullYear()|Returns the year, according to universal time (four digits)
getUTCHours()|Returns the hour, according to universal time (from 0-23)
getUTCMilliseconds()|Returns the milliseconds, according to universal time (from 0-999)
getUTCMinutes()|Returns the minutes, according to universal time (from 0-59)
getUTCMonth()|Returns the month, according to universal time (from 0-11)
getUTCSeconds()|Returns the seconds, according to universal time (from 0-59)
UTC()|Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time

**Set Date Methods**

Method|Description
---|---
setDate()|Sets the day of the month of a date object
setFullYear()|Sets the year (four digits) of a date object
setHours()|Sets the hour of a date object
setMilliseconds()|Sets the milliseconds of a date object
setMinutes()|Set the minutes of a date object
setMonth()|Sets the month of a date object
setSeconds()|Sets the seconds of a date object
setTime()|Sets a date to a specified number of milliseconds after/before January 1, 1970

**Set UTC Date Methods**

Method|Description
---|---
setUTCDate()|Sets the day of the month of a date object, according to universal time
setUTCFullYear()|Sets the year of a date object, according to universal time (four digits)
setUTCHours()|Sets the hour of a date object, according to universal time
setUTCMilliseconds()|Sets the milliseconds of a date object, according to universal time
setUTCMinutes()|Set the minutes of a date object, according to universal time
setUTCMonth()|Sets the month of a date object, according to universal time
setUTCSeconds()|Set the seconds of a date object, according to universal time
setYear()|Deprecated. Use the setFullYear() method instead

**Converts Format Methods**

Method|Description
---|---
toDateString()|Converts the date portion of a Date object into a readable string
toGMTString()|Deprecated. Use the toUTCString() method instead
toISOString()|Returns the date as a string, using the ISO standard
toJSON()|Returns the date as a string, formatted as a JSON date
toLocaleDateString()|Returns the date portion of a Date object as a string, using locale conventions
toLocaleTimeString()|Returns the time portion of a Date object as a string, using locale conventions
toLocaleString()|Converts a Date object to a string, using locale conventions
toString()|Converts a Date object to a string
toTimeString()|Converts the time portion of a Date object to a string
toUTCString()|Converts a Date object to a string, according to universal time

- `new Date`: Mon Feb 13 2017 00:00:00 GMT+0800 (CST)
- `toDateString`: Mon Feb 13 2017
- `toGMTString`: Sun, 12 Feb 2017 16:00:00 GMT
- `toISOString`: 2017-02-12T16:00:00.000Z
- `toJSON`: 2017-02-12T16:00:00.000Z
- `toLocaleDateString`: 2/13/2017
- `toLocaleTimeString`: 12:00:00 AM
- `toLocaleString`: 2/13/2017, 12:00:00 AM
- `toString`: Mon Feb 13 2017 00:00:00 GMT+0800 (CST)
- `toTimeString`: 00:00:00 GMT+0800 (CST)
- `toUTCString`: Sun, 12 Feb 2017 16:00:00 GMT



**Add days with setDate() method**


[Date Reference][date]

## Variable - Math
Math has no constructor. No methods have to create a Math object first.

**Math Object Properties**

Property|Description
---|---
Math.E|Returns Euler's number (approx. 2.718)
Math.LN2|Returns the natural logarithm of 2 (approx. 0.693)
Math.LN10|Returns the natural logarithm of 10 (approx. 2.302)
Math.LOG2E|Returns the base-2 logarithm of E (approx. 1.442)
Math.LOG10E|Returns the base-10 logarithm of E (approx. 0.434)
Math.PI|Returns PI (approx. 3.14)
Math.SQRT1_2|Returns the square root of 1/2 (approx. 0.707)
Math.SQRT2|Returns the square root of 2 (approx. 1.414)

**Math Object Methods**

Method|Description
---|---
Math.abs(x)|Returns the absolute value of x
Math.acos(x)|Returns the arccosine of x, in radians
Math.asin(x)|Returns the arcsine of x, in radians
Math.atan(x)|Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
Math.atan2(y,x)|Returns the arctangent of the quotient of its arguments
Math.ceil(x)|Returns x, rounded upwards to the nearest integer
Math.cos(x)|Returns the cosine of x (x is in radians)
Math.exp(x)|Returns the value of Ex
Math.floor(x)|Returns x, rounded downwards to the nearest integer
Math.log(x)|Returns the natural logarithm (base E) of x
Math.max(x,y,z,...,n)|Returns the number with the highest value
Math.min(x,y,z,...,n)|Returns the number with the lowest value
Math.pow(x,y)|Returns the value of x to the power of y
Math.random()|Returns a random number between 0 and 1
Math.round(x)|Rounds x to the nearest integer
Math.sin(x)|Returns the sine of x (x is in radians)
Math.sqrt(x)|Returns the square root of x
Math.tan(x)|Returns the tangent of an angle

[Math Reference][math]

## Variable - Undefined and Null
### Undefined
- **Undefined** is for variables, properties, and methods.
- Both the value, and the data type, of a variable with no value is **undefined**.

**Test if a variable are undefined**


### Null
- Null is for objects, It is supposed to be something that doesn't exist.
- To be null, an object has to be defined, otherwise it will be undefined.
	```JS
	//Incorrect
	if (myObj !== null && typeof myObj !== "undefined")
	
	//Correct
	if (typeof !== "undefined" && myObj !== null)
	```
- Differenc Between Undefined and Null
	```JS
	typeof undefined    // undefined
	typeof null         // object
	null === undefined  // false
	null == undefined   // true
	```

## Variable - Function
### Definitions
- **There are two way to defining:**
	1. Function **Declaration**
		```javascript
		function name(parameter1, parameter2) {
		    code
		}
		```
		- Because of hoisting, JavaScript functions can be called **before** the declared.
		- Function declaration is **not** an executable statement, it is **not** end with a semicolon`;`.
	1. Function **Expression**
		```javascript
		var variableName = function(parameter) {
		    code
		};
		```
		- Function are Invoked using the variable name.
		- Inside the function, the arguments behave as **local** **variable**.

- **About Return**
	1. When JS reaches a return statement, the function will stop executing.
	1. The return value is returned back to the "caller".

- **Functions are Objects**
	JavaScript functions have both properties and methods.
	- The arguments `length` property returns the number of arguments received when the function was invoked:
		```JS
		function myFunction(a, b) {
		    return arguments.length;
		}
		```
	- The `toString()` method returns the function as a string:
		```JS
		function myFunction(a, b) {
		    return a * b;
		}
		
		var txt = myFunction.toString();
		```

- **There ars two way to use functions**
	1. Avoid writing very similar code multiple times.
	1. You need some functionality that you haven't wrtten yet, and you'll start by naming the funcion.

### Parameters
- **Undefined Arguments**
	- A JavaScript function does **not** perform any checking on parameter values (arguments).
	- If a function is called with **missing** **arguments** (less than declared), the missing values are set to **undefined**
	```JS Assign a default value
	function myFunction(x, y) {
	    if (y === undefined) {
	          y = 0;
	    } 
	}
	```
- **Uncountable Arguments**
	If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
	```JS Find Maximum
	x = findMax(1, 123, 400);
	function findMax() {
	    var i;
	    var max = -Infinity;
	    for (i = 0; i < arguments.length; i++) {
	        if (arguments[i] > max) {
	            max = arguments[i];
	        }
	    }
	    return max;
	}
	```

- **The arguments object**
	Argument use as an array.
	```javascript
	function argumentCounter() {
	  console.log("You gave me", arguments.length, "arguments.");
	}
	argumentCounter("Straw man", "Tautology", "Adhominem");
	//- You gave me 3 arguments.
	```

- **Passing**
	- Arguments are Passed by **Value**.
		If a function changes an argument's value, it does **not** **change** the parameter's original value.
		Changes to arguments are **not** visible (reflected) outside the function.
	- Objects are Passed by **Reference**
		If a function changes an object property, it changes the **original** value.
		Changes to object properties are visible (reflected) outside the function.

### Invocation
The keyword `this` is the object that "owns" the current code.
Accessing a function **without** `()` will return the function difinition.
Accessing a function **with** `()` will run the funcion **immediately** and return the **result** of funciton.

1. **Invoking a Function as a Function**
	- In JavaScript,the function is always a default **global** **object**.
	- In HTML, the function above "belongs" to the **HTML** **page**.
	- In a browser, the function above automatically becomes a **window** **function**, so `myFunction()` and `window.myFunction()` is the same function.

1. **Invoking a Function as a Method**
	```JS
	var myObject = {
	    firstName:"John",
	    lastName: "Doe",
	    fullName: function () {
	        return this.firstName + " " + this.lastName;
    }
	}
	myObject.fullName();         // Will return "John Doe"
	```

1. **Invoking a Function with a Function Constructor**
	```JS
	// This is a function constructor:
	function myFunction(arg1, arg2) {
	    this.firstName = arg1;
	    this.lastName  = arg2;
	}
	
	// This	creates a new object
	var x = new myFunction("John","Doe");
	x.firstName;                             // Will return "John"
	```
1. **Invoking a Function with a Function Method**

	- Both `call()` and `apply()` are methods that can be used to invoke a function.
	- Both methods must have the owner object as **first** **parameter**.
	- The only difference is that `call()` takes the function arguments **separately**, and `apply()` takes the function arguments in an **array**.
	call()
	```JS
	function myFunction(a, b) {
	    return a * b;
	}
	myObject = myFunction.call(myObject, 10, 2);
	```
	apply()
	```JS
	function myFunction(a, b) {
	    return a * b;
	}
	myArray = [10, 2];
	myObject = myFunction.apply(myObject, myArray);
	```
	- Strict Mode
		- Strict mode: the first argument becomes the value of **this** in the invoked function, even if the argument is not an object.
		- Non-strict mode: if the value of the first argument is null or undefined, it is replaced with the global object.
	- With `call()` or `apply()` you can set the value of this, and invoke a function as a new method of an existing object.

1. **Self-lnvoking Functions**
	A self-invoking expression is invoked (started) automatically, without being called.
	```JS
	(function () {
	    var x = "Hello!!";      // I will invoke myself
	})();
	```

### Closures
- This feature—being able to reference a specific instance of local variables in an enclosing function—is called **closure**.A function that “closes over” some local variables is called a **closure**. 
	```javascript Example 1
	function multiplier(factor) {
	  return function(number) {
	    return number * factor;
	  };
	}
	
	var twice = multiplier(2);
	console.log(twice(5));
	// → 10
	```
	例子中 mulitiplier 函数只能返回一个缺少参数 *number* 的 function 函数，而twice 提供的参数则再供 function 函数使用。

- This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
	```JS Example 2
	var add = (function () {
	    var counter = 0;
	    return function () {return counter += 1;}
	})();
	
	add();
	add();
	add();   // the counter is now 3
	```

- Another way to make a JavaScript closure. Making the function executes **twice** is the key.
  ```JS Example 3
  function makeCounter() {
      var count = 0;
      function counter() {
          count++;
          return count;
      }
      return counter;
  }
  var doCounter = makeCounter();
  
  console.log(doCounter());
  console.log(doCounter());
  console.log(doCounter());
  console.log(doCounter());
  ```

- The closure contains the actual environment, not a copy
  ```JS
  function setTimer(doneMessage, n) {
      setTimeout (function() {
          alert(doneMessage);
      }, n);

      doneMessage = "OUCH!";
  }
  
  setTimer("Cookies are done!", 1000);
  ```

- Creating a closure with an event handler
  ```JS
  window.onload = function() {
      counter = 0;
      function click() {
          counter++;
          document.getElementById("message").innerHTML = 
              "You clicked me " + counter + " times!"
      }
      var button = document.getElementById("clickme")
      button.onclick = click;
  }
  ```

### Recursion
A function that calls itself is called *recursive*, but it **slower** than the loopling version. 


1. 以加5和乘5为两个维度作数据的历遍，找到公式。
1. 自我引用的函数，要弄清楚 return 返回到哪个函数中了，容易混淆。

## Variable - Named
- **Variable Name:**
	1. Names contain: letter, digits, `_`, `$`
	1. Must start with: letter, `_`, `$`, must **not** start with a digit.
	1. Case sensitive
	1. Not include spaces.
	1. Don't used Keywords and reserved words as a variable name.

- **Joining multiple words into one variable name:**
	1. Hyphens (not allowed in JS): first-name, last-name
	1. Underscore: first_name, last_name
	1. Camel Case: FirstName, LastName
	1. Camel Case in **JS**: firstName, lastName

## Variable - Declare
1. Declare a variable: `var x;`
1. Declare some variable with value: `var x = 1, y = 2, z = 3;`
1. Do arithmetic with declare: `var x = 5 + 2;`
1. Add strings with declare: `var x = "John" + "Doe";`
1. Declare with lines:
	```JS
	var x = 1,
	y = 2,
	z = 3;
	```
1. A variable declared without a value will have the value **undefined**.
1. Re-declare a variable will **not** lose its value.

## Variable - Scope
In JavaScript, scope is the set of variables, objects, and functions you have access to.
### Local variables
- Local variables declared within a function, only be accessed within the function.
- Variables with the same name can be used in different functions.
- Local variables are created when a function starts, and deleted when the function is completed. 
- Function arguments work as local variable.

### Global variables
- Global scope: All scripts and function on a web page can asscess it.
- A variable declared outside a function, becomes Global.
- Assign a value to a variable that has **not** been declared, it will automatically become a global variable.
- Global variables are created when it is declared, and deleted when you close the page.
- In HTML, the global scope is the window object: All global variables belong to the window object.

## Variable - Type
### Check Data Types
1. **Using typeof Operator**
	```JS
	typeof variable
	```
	- In JavaScript, a variable without a value, has the value **undefined**. The typeof is also **undefined**.
	- The value of empty string is "", the typeof is string.

1. **Using the Constructor Property**
	The constructor property returns the constructor function for all JavaScript variables.
	Syntax: `Variable.constructor`
	```JS Check the type of Array or Date
	function isArray(myArray) {
	    return myArray.constructor.toString().indexOf("Array") > -1;
	}
	```

### Type Conversion
1. **Convert with Global Method**
 	- String(x): Convert to strings.
 	- Number(x): Cnvert to numbers.

1. **Convert with Number Method**
 	- toString(): Convert to strings.

1. **<a id="convertType">Convert with Operator**

Original Value|to Number|to String|to Boolean
---|---|---|:---:
false|0|"false"|false
true|1|"true"|true
0|0|"0"|false
1|1|"1"|true
"0"|0|"0"|true
"1"|1|"1"|true
NaN|NaN|"NaN"|false
Infinity|Infinity|"Infinity"|true
-Infinity|-Infinity|"-Infinity"|true
""|**0**|""|**false**
"20"|20|"20"|true
"twenty"|NaN|"twenty"|true
[ ]|**0**|""|true
[20]|**20**|"20"|true
[10,20]|NaN|"10,20"|true
["twenty"]|NaN|"twenty"|true
["ten","twenty"]|NaN|"ten,twenty"|true
function(){}|NaN|"function(){}"|true
{ }|NaN|"[object Object]"|true
null|**0**|"null"|false
undefined|NaN|"undefined"|false

If the variable **cannot** be converted, it will still become a number, but with the value NaN (Not a number)

## Operator
### Operators and Precedence

**Arithmetic Operators**

Operator|Description|Example|Result in y|Result in x
---|---|---|---|---
+|Addition|x = y + 2|y = 5|x = 7
-|Subtraction|x = y - 2|y = 5|x = 3
*|Multiplication|x = y * 2|y = 5|x = 10
/|Division|x = y / 2|y = 5|x = 2.5
%|Modulus (division remainder)|x = y % 2|y = 5|x = 1
++|Increment|x = ++y|y = 6|x = 6
||x = y++|y = 6|x = 5
--|Decrement|x = --y|y = 4|x = 4
||x = y--|y = 4|x = 5

**Assignment Operators**

Operator|Example|Result in y|Result in x
---|---|---|---
=|x = y|x = y|x = 5
+=|x += y|x = x + y|x = 15
-=|x -= y|x = x - y|x = 5
*=|x *= y|x = x * y|x = 50
/=|x /= y|x = x / y|x = 2
%=|x %= y|x = x % y|x = 0

**String Operators**

Operator|Example|text1|text2|text3
---|---|---|---|---
+|text3 = text1 + text2|"Good "|"Morning"| "Good Morning"
+=|text1 += text2|"Good "|"Morning"|""

**Comparison Operators**

Operator|Description
---|---
==|equal to
===|equal value and equal type
!=|not equal
!==|not equal value or not equal type
>|greater than
<|less than
>=|greater than or equal to
<=|less than or equal to


**Conditional Operator**

Syntax|Example
---|---
variablename = (condition) ? value1:value2|voteable = (age < 18) ? "Too young":"Old enough";

**Logical Operators**

Operator|Description|Example
---|---|---|---|---
&&|and|(x < 10 && y > 1) is true
丨丨|or|(x === 5丨丨y === 5) is false
!|not|!(x === y) is true

- `!` convert a value to Boolean type before negating it, and all strings except "" convert to true.

Short-circuiting of logical operators

- 当 || 无法转化成 Boolean value 时，若左侧值能被转化成 **true**，则显示左侧值，反之则显示右侧值。所以可以利用这个特性将右侧值设置为 default value。
- && 与 || 用法相似，当左侧值能被转化成 **false** 时，则显示左侧之，反之显示右侧值。
- "", null 不能转化成 ture。

**Bitwise Operators**
- Bit operators work on 32-bit numbers.
- Any numeric operand in the operation is converted into a 32-bit number.
- The result is converted back to a JavaScript number.

Operator|Description|Example|Same as|Result|Decimal
---|---|---|---|---|---
&|AND|x = 5 & 1|0101 & 0001|0001| 1
丨|OR|x = 5丨1|0101丨0001|0101| 5
~|NOT|x = ~ 5| ~0101|1010| 10
^|XOR|x = 5 ^ 1|0101 ^ 0001|0100| 4
<<|Left shift|x = 5 << 1|0101 << 1|1010| 10
>>|Right shift|x = 5 >> 1|0101 >> 1|0010|  2

Note: The examples above use 4 bits unsigned examples. But JavaScript uses 32-bit signed numbers.
Because of this, in JavaScript, ~ 5 will not return 10. It will return -6.

**Typeof Operator**

**Delete Operator**
- The `delete` operator deletes both the value of the property and the property itself.
- The `delete` operator **cann't** be used on variables or functions.
- The `delete` operator should **not** be used on predefined JavaScript object properties. It can crash your application.


**In Operator**
The in operator returns true if the specified **property** is in the specified **object**, otherwise false


**Instanceof Operator**
- The `instanceof` operator returns true if the **specified** **object** is an instance of the specified object.
- The `instanceof` operator can check an object was created by the **constructor**.

**Void Operator**
The **void** operator evaluates an expression and returns **undefined**.


**Precedence**

Value|Operator|Description
:---:|---|---
19|`( )`|Expression grouping
18|`.`, `[]`|Member
17|`()`, `new`|
16|`++`, `--`, `++`, `--`|Postfix Increment or Decrement
15|`!`|Logical not
15|`typeof`|Return the type
14|`*`, `/` , `%` , `**`|Arithmetic
13|`+`, `-`|Addition, Subtraction
12|`<<`, `>>`|Shift
11|`<`, `<=`, `>`, `>=`|Greater than or Less than
10|`==`, `===`, `!=`, `!==`|Equal and Unequal
6|`&&`|And
5|`丨丨`|Or
3|`=`, `+=`, `-=`, `*=`, `/=`|Assignment

### Comparison
Both number and string can comparison.

Comparing Different Types

1. When comparing a string with a number, JavaScript will convert the string to a number
1. Operator `===` and `!==` will **not** automatic convert type.

[More information abour convert type][convertType]


## Statements
### Conditional Statements
- **IF...else Statements**
	Marks a block of statements to be executed depending on **a** condition
	```JS The if Statement
	if (condition) {
	    // if condition is true => executed
	}
	```
	```JS The else Statement
	if (condition) {
	    // if condition is true => executed
	} else { 
	    // if condition is false => executed
	}
	```
	```JS The else if Statement
	if (condition1) {
	    // if condition 1 is true => executed
	} else if (condition2) {
	    // if condition 2 is true => executed
	} else {
	    // if condition 2 is false => executed
	}
	```
- **Swith Statements**
	Use the switch statement to select **one of many** blocks of code to be executed.
	```JS Syntax
	switch(expression) {
	    case value1:
	        code block
	        break;
	    case value2:
	        code block
	        break;
	    default:
	        default code block
	}
	```
	```JS Common Code and Fall-Through
	switch (new Date().getDay()) {
	    case 1:
	    case 2:
	    case 3:
	    default: 
	        text = "Looking forward to the Weekend";
	        break; 
	    case 4:
	    case 5:
	       text = "Soon it is Weekend";
	        break; 
	    case 0:
	    case 6:
	       text = "It is Weekend";
	}
	```
	- If default is not the last case in the switch block, remember to end it with a **break**.
	- Don't forget (:).

### Loop Statements
- **The For Loop**
	Loops through a block of code a number of times
	```JS Syntax
	for (statement 1; statement 2; statement 3) {
	    code block to be executed
	}
	```
	```JS Example
	for (i = 0; i < 5; i++) {
	    text += "The number is " + i + "<br>";
	}
	```
	- Statement 1 (optional): Executed before the loop starts.
		- You can initiate many values in statement 1, separated by comma.
		- When your values are set before the loop starts, you can omit statement 1.
	- Statement 2 (optional): Defines the condition for running the loop.
		- If you omit statement 2, you must provid a **break** avoid loop will never end.
	- Statement 3 (optional): Executed each time after the loop has been executed.
		- When you increment your values inside the loop, you can omit statement 3.


- **The For/In Loop**
	Loops through the properties of an **object**
	```JS
	var person = {fname:"John", lname:"Doe", age:25}; 
	
	var text = "";
	var x;
	for (x in person) {
	    text += person[x];
	}
	```

- **While Loop Statements**
	Loops through a block of code while a specified condition is true	
	- **While Loop**
		```JS While Loop
		while (cndition) {
		  code
		}
		```
		If you forget to increase the variable used in the condition, the loop will never end.
		```javascript A example for While Loop
		var number = 0;
		while (number <= 12) {
		  console.log(number);
		  number = number + 2;
		}
		```
	- **Do/While Loop**
		```JS Do/While Loop
		do {
		  code
		}
		while (condition);
		```
		Do/While Loop will always be executed at least once.
		A while loop is much the same as a for loop, with statement 1 and statement 3 omitted.
		```javascript A example for Do/While loop
		do {
		  var name = prompt("Who are you?");
		} while (!name);
		console.log(name);
		```

### Keyword
- **Break**
	- The break statement "jumps out" of a loop.
	- The continue statement "jumps over" one iteration in the loop.
- **Labels**
	- The continue statement (with or without a label reference) can only be used to skip one loop iteration.
	- The break statement, without a label reference, can only be used to jump out of a loop or a switch.
	- With a label reference, the break statement can be used to jump out of any code block:
	```JS Syntax
	break labelname;
	continue labelname;
	```
	```JS Example
	var text = "";
	var i, j;
	
	Loop1: // The first for loop is labeled "Loop1"
	for (i = 0; i < 3; i++) {
	text += "<br>" + "i = " + i + ", j = ";
	
	    Loop2: // The second for loop is labeled "Loop2"
	    for (j = 10; j < 15; j++) {
	        if (j === 12) {
	            continue Loop2;
	        }
	        document.getElementById("demo").innerHTML = text += j + " ";
	    }
	}
	```

## Other Keywords
### Error
debugger	Stops the execution of JavaScript, and calls (if available) the debugging function


- **Try and Catch **
	- **try**: Test a block of code for errors.
	- **catch**: Handle the error.
	```JS try and catch
	try {
	    adddlert("Welcome guest!");
	}
	catch(err) {
	   document.getElementById("demo").innerHTML = err.message;
	}
	```

- **Throw and Finally**
	- **throw**: Create custom errors.
	- **finally**: Execute code, after try and catch, regardless of the result.
	```JS throw and finally
	function myFunction() {
	    var message, x;
	    message = document.getElementById("message");
	    message.innerHTML = "";
	    x = document.getElementById("demo").value;
	    try { 
	        if(x == "") throw "empty";
	        if(isNaN(x)) throw "not a number";
	        x = Number(x);
	        if(x < 5) throw "too low";
	        if(x > 10) throw "too high";
	    }
	    catch(err) {
	        message.innerHTML = "Input is " + err;
	    }
	    finally {       //To be executed regardless of the result
	        document.getElementById("demo").value = "";
	    }
	}
	```

- **Debugger**
	The `debugger` statement stops the execution of JavaScript, and calls the debugging function.
	```JS
	debugger;
	```

### Display Data
1. Writing into an *alert box*, using `window.alert()`.
	```JS
	<script>window.alert(5 + 6);</script>
	```
1. Writing into the *HTML output* using `document.write()`.
	```JS
	<script>document.write(5 + 6);</script>
	```
	Using document.write() after an HTML document is fully loaded, will **delete all existing HTML**, so usually used this method only for testing.
1. Writing into an *HTML element*, using `innerHTML`.(in most cases)
	```JS
	<script>document.getElementById("demo").innerHTML = 5 + 6;</script>
	```
1. Writing into the *browser console*, using `console.log()`.
	```JS
	<script>console.log(5 + 6);</script>
	```

### Comments


### Hoisting
1. Hoisting is JavaScript's default behavior of moving declarations to the top.
1. In JavaScript, a variable can be declared after it has been used.
1. JavaScript **only** hoists declarations, **not** initializations.
	- Declare: `var x;`
	- Initialize: `var x = 5;`
1. Always declared all variables at the beginning of every scope is a good rule.


## JS JSON
JSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.

### What is JSON?
- JSON = **J**ava**S**crip **O**bject **N**otation
- JSON is lightweight data interchange format
- JSON is language independent `*`
- JSON is "self-describing" and easy to understand

`*` The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

### JSON Example


### JSON Syntax Rules
- Data is in name/value pairs.
- Data is separated by commas`,`.
- Curly braces`{` hold objects.
- Square brackets`[` hold arrays.
- JSON names require double quotes. JavaScript names don't.

### Converting to Object
**Converting with `JSON.parse()` Methods**

1. First, create a JavaScript string containing JSON syntax:

1. Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

1. Finally, use the new JavaScript object in your page:


**Converting with `JSON.stringify()` Methods**


## JS Forms
### Form Validation
If a form field (fname) is empty, the required attribute prevents this form from being submitted



### HTML Constraint Validation
HTML5 introduced a new HTML validation concept called constraint validation.
HTML constraint validation is based on:
- Constraint validation HTML Input Attributes
- Constraint validation CSS Pseudo Selectors
- Constraint validation DOM Properties and Methods

Constraint Validation HTML Input Attributes

Attribute|Description
---|---
disabled|Specifies that the input element should be disabled
max|Specifies the maximum value of an input element
min|Specifies the minimum value of an input element
pattern|Specifies the value pattern of an input element
required|Specifies that the input field requires an element
type |Specifies the type of an input element

Constraint Validation CSS Pseudo Selectors

Selector|Description
---|---
:disabled|Selects input elements with the "disabled" attribute specified
:invalid|Selects input elements with invalid values
:optional|Selects input elements with no "required" attribute specified
:required|Selects input elements with the "required" attribute specified
:valid|Selects input elements with valid values

### Forms API

Property|Description
---|---
checkValidity()|Returns true if an input element contains valid data.
setCustomValidity()|Sets the validationMessage property of an input element.


**Constraint Validation DOM Properties**

Property|Description
---|---
validity|Contains boolean properties related to the validity of an input element.
validationMessage|Contains the message a browser will display when the validity is false.
willValidate|Indicates if an input element will be validated.

**Validity Properties**

Property|Description
---|---
customError|Set to true, if a custom validity message is set.
patternMismatch|Set to true, if an element's value does not match its pattern attribute.
rangeOverflow|Set to true, if an element's value is greater than its max attribute.
rangeUnderflow|Set to true, if an element's value is less than its min attribute.
stepMismatch|Set to true, if an element's value is invalid per its step attribute.
tooLong|Set to true, if an element's value exceeds its maxLength attribute.
typeMismatch|Set to true, if an element's value is invalid per its type attribute.
valueMissing|Set to true, if an element (with a required attribute) has no value.
valid|Set to true, if an element's value is valid.




***
## 本文相关
1. 参考
[w3schools - JavaScript Tutorial](http://www.w3schools.com/js/default.asp)
1. 修订
2016-03-02:第一版
2016-04-07:正则表达式部分移除，单独重写

[replace]:#replace
[split]:#split
[string]:http://www.w3schools.com/jsref/jsref_obj_string.asp
[number]:http://www.w3schools.com/jsref/jsref_obj_number.asp
[math]:http://www.w3schools.com/jsref/jsref_obj_math.asp
[date]:http://www.w3schools.com/jsref/jsref_obj_date.asp
[array]:http://www.w3schools.com/jsref/jsref_obj_array.asp
[boolean]:http://www.w3schools.com/jsref/jsref_obj_boolean.asp
[keyword]:http://www.w3schools.com/js/js_reserved.asp
[domStyle]:http://www.w3schools.com/jsref/dom_obj_style.asp
[domEvent]:http://www.w3schools.com/js/js_htmldom_events.asp
[domEventObject]:http://www.w3schools.com/jsref/dom_obj_event.asp
[global]:http://www.w3schools.com/jsref/jsref_obj_global.asp
[sort]:#sort
[convertType]:#convertType
[filter]:#filter
[objectProperties]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
