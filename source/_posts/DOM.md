----
title: DOM
date: 2016-07-21 18:38:44
tags:
- JavaScirpt
----
## What is DOM?
- DOM = Document Object Model
- DOM is a W3C standard.
- DOM standard is separated into 3 different parts:
	- Core DOM - standard model for all document types
	- XML DOM - standard model for XML documents
	- HTML DOM - standard model for HTML documents
	The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
		- The HTML elements as objects
		- The properties of all HTML elements
		- The methods to access all HTML elements
		- The events for all HTML elements

**What JavsScript can do in HTML?**
- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

- In the DOM, all HTML elements are a **node** which defined as **objects**.
	- A property is a value that you can get or set (like changing the content of an HTML element).
	- A method is an action you can do (like add or deleting an HTML element).

## Document
### **Finding HTML Elements**

Method|Description
---|---
getELement*|
document.getElementById(id)|Find an element by element id
document.getElement*s*ByTagName(name)|Find elements by tag name, and return a *live* *HTMLCollection*
document.getElement*s*ByClassName(name)|Find elements by class name, and return a *live* *HTMLCollection*
document.getElement*s*ByName()|Returns a *live* *NodeList* containing all elements with a specified name
document.activeElement|Returns the currently focused element in the document
querySelector*|
document.querySelector()|Returns the *first* element that matches a specified CSS selector(s) in the document
document.querySelectorAll()|Returns a *static* *NodeList* containing all elements that matches a specified CSS selector(s) in the document

- Finding HTML elements by id
	```JS Finds the element with id="intro"
	var myElement = document.getElementById("intro");
	```
	- If the element is found, the method will return the element as an object in myElement.
	- If the element is not found, myElement will contain null.
- Finding HTML elements by tag name
	```JS Finds all p element inside id="main"
	var x = document.getELementById("main");
	var y = document.getElementByTagName("p");
	```
- Finding HTML elements by class name
	```JS Finds all elements with class="intro"
	var x = document.getElementsByClassName("intro");
	```
- Finding HTML elements by CSS selectors
	If you want to find all HTML elements that matches a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
	```JS Finds all p elements with class="intro"
	var x = document.querySelectorAll("p.intro");
	document.querySelectorAll("p.intro")[0].innerHTML = "Good";

  $ = function (e) { return document.querySelector(e); };
  $('#idName').onclick = function;
	```
- Fnding HTML elements by HTML object collections
	```JS Displays all element in the form "frm1"
	var x = document.forms["frm1"];
	var text = "";
	var i;
	for (i = 0; i < x.length; i++) {
	    text += x.elements[i].value + "<br>";
	}
	document.getElementById("demo").innerHTML = text;
	```

### **Changing HTML Elements**

Method|Description
---|---
element.innerHTML =  new html content|Change the inner HTML of an element
element.attribute = new value|Change the attribute value of an HTML element
element.setAttribute(attribute, value)|Change the attribute value of an HTML element
element.style.property = new style|Change the style of an HTML element
document.write()|Writes HTML expressions or JavaScript code to a document
document.writeln()|Same as write(), but adds a newline character after each statement

Never use `document.write()` after the document is loaded. It will overwrite the document.


[HTML DOM Style Object][domStyle]

### **Adding and Deleting Elements**

Method|Description
---|---
document.adoptNode()|Adopts a node from another document
document.createElement(element)|Create an HTML element
document.createAttribute()|Creates an attribute node
document.createComment()|Creates a Comment node with the specified text
document.createDocumentFragment()|Creates an empty DocumentFragment node
document.createTextNode()|Creates a Text node
document.importNode()|Imports a node from another document
document.normalize()|Removes empty Text nodes, and joins adjacent nodes
document.normalizeDocument()|Removes empty Text nodes, and joins adjacent nodes
document.appendChild(element)|Add an HTML element
document.removeChild(element)|Remove an HTML element
document.replaceChild(element)|Replace an HTML element
document.write(text)|Write into the HTML output stream
document.open()|Opens an HTML output stream to collect output from document.write()
document.close()|Closes the output stream previously opened with document.open()
document.renameNode()|Renames the specified node

### **Finding HTML Objects**

Property|Description|DOM
---|---
document.anchors|Returns all `<a>` elements that have a name attribute|1
document.applets|Returns all `<applet>` elements (Deprecated in HTML5)|1
document.baseURI|Returns the absolute base URI of the document|3
document.body|Returns the `<body>` element|1
document.cookie|Returns the document's cookie|1
document.doctype|Returns the document's doctype|3
document.documentElement|Returns the `<html>` element|3
document.documentMode|Returns the mode used by the browser|3
document.documentURI|Returns the URI of the document|3
document.domain|Returns the domain name of the document server|1
document.domConfig|Obsolete. Returns the DOM configuration|3
document.embeds|Returns all `<embed>` elements|3
document.forms|Returns all `<form>` elements|1
document.head|Returns the `<head>` element|3
document.hasFocus()|Returns a Boolean value indicating whether the document has focus|3
document.querySelector()|Returns the first element that matches a specified CSS selector(s) in the document|3
document.querySelectorAll()|Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document|3
document.images|Returns all `<img>` elements|1
document.implementation|Returns the DOM implementation|3
document.inputEncoding|Returns the document's encoding (character set)|3
document.lastModified|Returns the date and time the document was updated|3
document.links|Returns all `<area>` and `<a>` elements that have a href attribute|1
document.readyState|Returns the (loading) status of the document|3
document.referrer|Returns the URI of the referrer (the linking document)|1
document.scripts|Returns all `<script>` elements|3
document.strictErrorChecking|Returns if error checking is enforced|3
document.title|Returns the `<title>` element|1
document.URL|Returns the complete URL of the document|1

[DOM-document][domDocument]

## Elements

Property / Method|Description
---|---
element.clientHeight|Returns the height of an element, including padding
element.clientLeft|Returns the width of the left border of an element
element.clientTop|Returns the width of the top border of an element
element.clientWidth|Returns the width of an element, including padding
element.offsetHeight|Returns the height of an element, including padding, border and scrollbar
element.offsetWidth|Returns the width of an element, including padding, border and scrollbar
element.offsetLeft|Returns the horizontal offset position of an element
element.offsetParent|Returns the offset container of an element
element.offsetTop|Returns the vertical offset position of an element
element.scrollHeight|Returns the entire height of an element, including padding
element.scrollLeft|Sets or returns the number of pixels an element's content is scrolled horizontally
element.scrollTop|Sets or returns the number of pixels an element's content is scrolled vertically
element.scrollWidth|Returns the entire width of an element, including padding
|
element.getElementsByClassName()|Returns a collection of all child elements with the specified class name
element.getElementsByTagName()|Returns a collection of all child elements with the specified tag name
element.querySelector()|Returns the first child element that matches a specified CSS selector(s) of an element
element.querySelectorAll()|Returns all child elements that matches a specified CSS selector(s) of an element
element.children|Returns a collection of an element's child element (excluding text and comment nodes)
element.childNodes|Returns a collection of an element's child nodes (including text and comment nodes)
element.firstChild|Returns the first child node of an element
element.firstElementChild|Returns the first child element of an element
element.lastChild|Returns the last child node of an element
element.lastElementChild|Returns the last child element of an element
element.nextSibling|Returns the next node at the same node tree level
element.nextElementSibling|Returns the next element at the same node tree level
element.parentNode|Returns the parent node of an element
element.parentElement|Returns the parent element node of an element
element.previousSibling|Returns the previous node at the same node tree level
element.previousElementSibling|Returns the previous element at the same node tree level
element.ownerDocument|Returns the root element (document object) for an element
element.hasAttribute()|Returns true if an element has the specified attribute, otherwise false
element.hasAttributes()|Returns true if an element has any attributes, otherwise false
element.hasChildNodes()|Returns true if an element has any child nodes, otherwise false
|
element.accessKey|Sets or returns the accesskey attribute of an element
element.attributes|Returns a NamedNodeMap of an element's attributes
element.childElementCount|Returns the number of child elements an element has
element.classList|Returns the class name(s) of an element
element.className|Sets or returns the value of the class attribute of an element
element.getAttribute()|Returns the specified attribute value of an element node
element.getAttributeNode()|Returns the specified attribute node
element.nodeName|Returns the name of a node
element.nodeType|Returns the node type of a node
element.nodeValue|Sets or returns the value of a node
element.id|Sets or returns the value of the id attribute of an element
element.innerHTML|Sets or returns the content of an element
element.lang|Sets or returns the value of the lang attribute of an element
element.namespaceURI|Returns the namespace URI of an element
|
element.appendChild()|Adds a new child node, to an element, as the last child node
element.insertBefore()|Inserts a new child node **before** a specified, existing, child node
element.insertAdjacentHTML('afterend', htmlString)|Inserts a new child node **after** a specified, existing, child node
element.addEventListener()|Attaches an event handler to the specified element
element.blur()|Removes focus from an element
element.click()|Simulates a mouse-click on an element
element.cloneNode()|Clones an element
element.compareDocumentPosition()|Compares the document position of two elements
element.contains()|Returns true if a node is a descendant of a node, otherwise false
element.contentEditable|Sets or returns whether the content of an element is editable or not
element.dir|Sets or returns the value of the dir attribute of an element
element.focus()|Gives focus to an element
element.getFeature()|Returns an object which implements the APIs of a specified feature
element.isContentEditable|Returns true if the content of an element is editable, otherwise false
element.isDefaultNamespace()|Returns true if a specified namespaceURI is the default, otherwise false
element.isEqualNode()|Checks if two elements are equal
element.isSameNode()|Checks if two elements are the same node
element.isSupported()|Returns true if a specified feature is supported on the element
element.normalize()|Joins adjacent text nodes and removes empty text nodes in an element
element.removeAttribute()|Removes a specified attribute from an element
element.removeAttributeNode()|Removes a specified attribute node, and returns the removed node
element.removeChild()|Removes a child node from an element
element.replaceChild()|Replaces a child node in an element
element.removeEventListener()|Removes an event handler that has been attached with the addEventListener() method
element.setAttribute()|Sets or changes the specified attribute, to the specified value
element.setAttributeNode()|Sets or changes the specified attribute node
element.style|Sets or returns the value of the style attribute of an element
element.tabIndex|Sets or returns the value of the tabindex attribute of an element
element.tagName|Returns the tag name of an element
element.textContent|Sets or returns the textual content of a node and its descendants
element.title|Sets or returns the value of the title attribute of an element
element.toString()|Converts an element to a string
nodelist.item()|Returns the node at the specified index in a NodeList
nodelist.length|Returns the number of nodes in a NodeList
[].indexOf.call(obj.parentNode.children, obj)|Returns the index of the obj in the parentNode

[DOM-element][domElement]

## Animations
- The container element should be created with style = "position: relative".
- The animation element should be created with style = "position: absolute".



## Events
Events:
- An element is clicked on
- The page has loaded
- Input fields are changed

### Reacting to Events

Example of HTML events:
- When a user clicks the mouse
- When a web page has loaded
- When an image has been loaded
- When the mouse moves over an element
- When an input field is changed
- When an HTML form is submitted
- When a user strokes a key

### Assign Events

- Assigning 2 不要`()`。
- Assigning 2 在低版本的浏览器中不支持。
- `oclick = displayDate` 意为将**函数内容**附在 click 事件上，待触发后执行。
- `oclick = displayDate()` 意为将**函数运行结果**附在 click 事件上，待触发后执行。

### The Onload Events
The onload event can be used to check the visitor's browser type and browser version, and load the proper version of the web page based on the information.
The onload and onunload events can be used to deal with cookies.

### The Onchange Event

### The Mouse and Keyboard Events
- onmouseover
- onmouseout
- onmousedown
- onmouseup
- onclick
- onfocus
- onkeydown

### Pass the Event Object
When the event call a function, it will passes an event object.

The `target` property tells us what element generated the event. 

[DOM Event Object][domEvent]

## EventListener
### The addEventListener() method

- The **addEventListener**() method attaches an event handler to the specified element.
- The **addEventListener**() method attaches an event handler to an element without **overwriting** **existing** event handlers.
- You can add many event handlers to one element.
- You can add many event handlers of the **same** **type** to one element, i.e two "click" events.
- You can add event listeners to any DOM object not only HTML elements. i.e the window object.
- The **addEventListener**() method makes it easier to control how the event reacts to bubbling.
- When using the **addEventListener**() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
- You can easily remove an event listener by using the **removeEventListener**() method.

### Syntax

The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
Note that you don't use "on" prefix for event, use "click" instead of "onclick".
### Add an Evenet Handler to the Window Object

### Passing Parameters

### Event Bubbling or Event Capturing?
- Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
- Bubbling(default): the inner event is handled first and then the outer.
- Capturing: the outer event is handled first and then the inner
- With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:
	```JS
	addEventListener(event, function, useCapture);
	```

### The removeEventListener() method

### Browser Support

[DOM Event Object Reference][domEventObject]

## Navigation
### Nodes
Everything in an HTML document is a node
With the HTML DOM, all nodes in the node tree can be access by JavaScript
New nodes can be created, and all nodes can be modified or deleted.
### Node Relationships
Relationships:
- Root: the top node in node tree.
- Every node has exactly one parent, except the root.
- A node can have a number of children.
- Siblings are nodes with the same parent


- `<html>` is the root node, and it has no parent.
- `<html>` is the parent of `<head>` and `<body>`.
- `<head>` is the first child of `<html>`.
- `<body>` is the last child of `<html>`.
- `<h1>` and `<p>` are siblings.
- `<h1>` is the previous sibling of `<p>`, and `<p>` is the next sibling of `<h1>`.

### Navigating Between Nodes
You can use the following node properties to navigate between nodes with JavaScript:
- parentNode
- childNodes[nodeNumber]
- firstChild
- lastChild
- nextSibling
- previousSibling

The value of the text node can be accessed by the node's **innerHTML** property or the **nodeValue**.
### Child Nodes and Node Values

### Root Nodes
There two special properties that allow access to the full document:
- document.body - The body of the document
- document.documentElement - The full document

### The nodeName Property
The nodeName property specifies the name of a node.
- nodeName is read-only
- nodeName of an element node is the same as the tag name
- nodeName of an attribute node is the attribute name
- nodeName of a text node is always #text
- nodeName of the document node is always #document
Note: nodeName always contains the uppercase tag name of an HTML element.

### The nodeValue Property
The nodeValue property specifies the value of a node.
- nodeValue for element nodes is undefined
- nodeValue for text nodes is the text itself
- nodeValue for attribute nodes is the attribute value

### The nodeType Property
The nodeType property returns the type of node. nodeType is read only.
The most important node types are:

Element type|NodeType
---|---
Element|1
Attribute|2
Text|3
Comment|8
Document|9

## Nodes
### Creating New HTML ELements (Nodes)

### Creatint New HTML Elements (InsertBefore)

### Removing Existing HTML Elements
To remove an HTML element, you must know the parent of the element.

The method `node.remove()` is implemented in the DOM 4 specification.
But because of poor browser support, you should not use it.
A common way to find parent

### Replacing HTML Elements



## Nodelist
### HTML DOM Node List
The `getElementsByTagName()` method returns a **node** **list**.

### HTML DOM Node List Length

- A node list is not an array!
- A node list may look like an array, but it is not. You can loop through the node list and refer to its nodes like an array. However, you cannot use Array Methods, like valueOf() or join() on the node list.
- Using Array methods like: `[].indexOf.call(array,str);`

## Attributes

Property / Method|Description
---|---
attr.isId|Returns true if the attribute is of type Id, otherwise it returns false
attr.name|Returns the name of an attribute
attr.value|Sets or returns the value of the attribute
attr.specified|Returns true if the attribute has been specified, otherwise it returns false
|
nodemap.getNamedItem()|Returns a specified attribute node from a NamedNodeMap
nodemap.item()|Returns the attribute node at a specified index in a NamedNodeMap
nodemap.length|Returns the number of attribute nodes in a NamedNodeMap
nodemap.removeNamedItem()|Removes a specified attribute node
nodemap.setNamedItem()|Sets the specified attribute node (by name)

[DOM-Attribute][domAttribute]

## 本文相关
1. 参考
[w3schools - JavaScript Tutorial](http://www.w3schools.com/js/default.asp)
1. 修订
2016:第一版

[domStyle]:http://www.w3schools.com/jsref/dom_obj_style.asp
[domEvent]:http://www.w3schools.com/jsref/dom_obj_event.asp
[domEventObject]:http://www.w3schools.com/jsref/dom_obj_event.asp
[domDocument]:http://www.w3schools.com/jsref/dom_obj_document.asp
[domElement]:http://www.w3schools.com/jsref/dom_obj_all.asp
[domAttribute]:http://www.w3schools.com/jsref/dom_obj_attributes.asp

