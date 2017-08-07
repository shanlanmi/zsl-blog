----
title: BOM
date: 2016-07-21 18:38:44
categories:
- JavaScirpt
----
## Browser BOM
- BOM = Browser Object Model = allows JS to "talk to" the browser.
- All global JavaScript objecs, function, variables automatically become members of the window object.

## Window Object
The window object represents an **open** **window** in a browser.
### Window Object Properties

Property|Description
---|---
closed|Returns a Boolean value indicating whether a window has been closed or not
defaultStatus|Sets or returns the default text in the statusbar of a window
document|Returns the Document object for the window (See Document object)
frameElement|Returns the `<iframe>` element in which the current window is inserted
frames|Returns all `<iframe>` elements in the current window
history|Returns the History object for the window (See History object)
innerHeight|Returns the inner height of a window's content area (not including toolbars and scrollbars)
innerWidth|Returns the inner width of a window's content area (not including toolbars and scrollbars)
length|Returns the number of `<iframe>` elements in the current window
localStorage|Returns a reference to the local storage object used to store data. Stores data with no expiration date
location|Returns the Location object for the window (See Location object)
name|Sets or returns the name of a window
navigator|Returns the Navigator object for the window (See Navigator object)
opener|Returns a reference to the window that created the window
outerHeight|Returns the outer height of a window, including toolbars/scrollbars
outerWidth|Returns the outer width of a window, including toolbars/scrollbars
pageXOffset|Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window
pageYOffset|Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window
parent|Returns the parent window of the current window
screen|Returns the Screen object for the window (See Screen object)
screenLeft|Returns the horizontal coordinate of the window relative to the screen
screenTop|Returns the vertical coordinate of the window relative to the screen
screenX|Returns the horizontal coordinate of the window relative to the screen
screenY|Returns the vertical coordinate of the window relative to the screen
sessionStorage|Returns a reference to the local storage object used to store data. Stores data for one session (lost when the browser tab is closed)
scrollX|An alias of pageXOffset
scrollY|An alias of pageYOffset
self|Returns the current window
status|Sets or returns the text in the statusbar of a window
top|Returns the topmost browser window

**A cross-browser solution (using clientWidth and clientHeight for IE8 and earlier):**


### Window Object Methods

Method|Description
---|---
alert()|Displays an alert box with a message and an OK button
atob()|Decodes a base-64 encoded string
blur()|Removes focus from the current window
btoa()|Encodes a string in base-64
close()|Closes the current window
confirm()|Displays a dialog box with a message and an OK and a Cancel button
createPopup()|Creates a pop-up window
focus()|Sets focus to the current window
getComputedStyle()|Gets the current computed CSS styles applied to an element
getSelection()|Returns a Selection object representing the range of text selected by the user
matchMedia()|Returns a MediaQueryList object representing the specified CSS media query string
moveBy()|Moves a window relative to its current position
moveTo()|Moves a window to the specified position
open()|Opens a new browser window
print()|Prints the content of the current window
prompt()|Displays a dialog box that prompts the visitor for input
resizeBy()|Resizes the window by the specified pixels
resizeTo()|Resizes the window to the specified width and height
scroll()|Deprecated. This method has been replaced by the scrollTo() method.
scrollBy()|Scrolls the document by the specified number of pixels
scrollTo()|Scrolls the document to the specified coordinates
setInterval()|Calls a function or evaluates an expression at specified intervals (in milliseconds)
clearInterval()|Clears a timer set with setInterval()
setTimeout()|Calls a function or evaluates an expression after a specified number of milliseconds
clearTimeout()|Clears a timer set with setTimeout()
stop()|Stops the window from loading

[BOM Window Object Reference][bomWindow]

## Screen Object
- The screen object contains information about the visitor's **screen**.
- The **window.screen** object can be written without the window prefix.

**Screen Object Properties**

Property|Description
---|---
width|Returns the total width of the screen
height|Returns the total height of the screen
availWidth|Returns the width of the screen (excluding the Windows Taskbar)
availHeight|Returns the height of the screen (excluding the Windows Taskbar)
colorDepth|Returns the bit depth of the color palette for displaying images
pixelDepth|Returns the color resolution (in bits per pixel) of the screen

[BOM Screen Object Reference][bomScreen]

## Location Object
The location object contains information about the **current** **URL**.
### Location Object Properties

Property|Description
---|---
hash|Sets or returns the anchor part (#) of a URL
host|Sets or returns the hostname and port number of a URL
hostname|Sets or returns the hostname of a URL
href|Sets or returns the entire URL
origin|Returns the protocol, hostname and port number of a URL
pathname|Sets or returns the path name of a URL
port|Sets or returns the port number of a URL
protocol|Sets or returns the protocol of a URL
search|Sets or returns the querystring part of a URL

### Location Object Methods

Method|Description
---|---
assign()|Loads a new document
reload()|Reloads the current document
replace()|Replaces the current document with a new one

[BOM Location Object Reference][bomLocation]

## History Object
The history object contains the URLs **visited** by the user (within a browser window).
### History Object Properties

Property|Description
---|---
length|Returns the number of URLs in the history list

### History Object Methods

Method|Description
---|---
back()|Loads the previous URL in the history list
forward()|Loads the next URL in the history list
go()|Loads a specific URL from the history list

[BOM History Object Reference][bomHistory]

## Navigator Object
The navigator object contains information about the **browser**.
### Navigator Object Properties

Property|Description
---|---
appCodeName|Returns the code name of the browser
appName|Returns the name of the browser
appVersion|Returns the version information of the browser
cookieEnabled|Determines whether cookies are enabled in the browser
geolocation|Returns a Geolocation object that can be used to locate the user's position
language|Returns the language of the browser
onLine|Determines whether the browser is online
platform|Returns for which platform the browser is compiled
product|Returns the engine name of the browser
userAgent|Returns the user-agent header sent by the browser to the server

Warning: The information from navigator object can often be missleading, and should not be used to detect browser versons.

### Navigator Object Methods
Method|Description
---|---
javaEnabled()|Specifies whether or not the browser has Java enabled
taintEnabled()|Removed in JavaScript version 1.2. Specifies whether the browser has data tainting enabled

[BOM Navigator Object Referece][bomNavigator]

## Popup Alert
JavaScript has three kind of popup boxed: Alert box, Confirm box and Prompt box.
### Alert Box
An alert box is often used if you want to make sure information comes through to the user.
When an alert box pops up, the user will have to click "OK" to proceed.

### Confirm Box
A confirm box is often used if you want the user to verify or accept something.
When a confirm box pops up, the user will have to click either "OK"(return turn) or "Cancel"(return false) to proceed.

### Prompt Box
A prompt box is often used if you want the user to input a value before entering a page.
When a prompt box pops up, the user will have to click either "OK"(return the input value) or "Cancel"(return null) to proceed after entering an input value.

### Line Breaks
To display line breaks inside a popup box, use a back-slash followed by the character n.


## Timing Events
The window object allows execution of code at specified time intervals with two method.
### The setTimeout() Method

Executes a function, after waiting a specified number of milliseconds.
The first parameter is a function to be executed.
The second parameter indicates the number of milliseconds before execution.

### The clearTimeout() Method

### The setInterval() Method

The setInterval() method repeats the execution of the function at every given time-interval.
The first parameter is the function to be executed.
The second paramter indicates the length of the time-interval between each execution.
### The clearInterval() Method


## JS Cookies
- Cookies are data, stored in small text files, on your computer.
- Cookies will store user's name, and help the server remember the user.

### Create a Cookie with JavaScript

You can change the cookie the same way as create it.
### Read a Cookie with JavaScript

document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

### Delete a Cookie with JavaScript
Setting the expires parameter to a pass date to delete a cookie.

### JavaScript Cookie Example

## 本文相关
1. 参考
[w3schools - JavaScript Tutorial](http://www.w3schools.com/js/default.asp)
1. 修订
2016-03-01:第一版

[bomWindow]:http://www.w3schools.com/jsref/obj_window.asp
[bomNavigator]:http://www.w3schools.com/jsref/obj_navigator.asp
[bomScreen]:http://www.w3schools.com/jsref/obj_screen.asp
[bomHistory]:http://www.w3schools.com/jsref/obj_history.asp
[bomLocation]:http://www.w3schools.com/jsref/obj_location.asp

