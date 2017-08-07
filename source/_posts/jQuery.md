----
title: jQuery
date: 2016-07-21 18:38:44
categories:
- JavaScirpt
----
## jQuery Library
1. **Download with host jQuery**
  ```HTML
  <head>
  <srcipt src="jquery-1.12.0.min.js></scirpt>
  </head>
  ```
- The jQuery library is a single JavaScript file, you need reference it.
- Place the downloaded file in the same directory as the pages where you wish to use it.

1. **Includde from Google CDN**
  - CDN = Content Delivery Network
  - Using the hosted jQuery from Google or Microsoft will leads to **faster** loading time.
  ```HTML
  <head>
  <srcipt src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js">
  </srcip>
  </head>
  ```

1. **Includde from Miscrosoft CDN**
  ```HTML
  <head>
  <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.0.min.js"></script>
  </head>
  ```

## jQuery Base Syntax
- **Syntax**:
  ```javascript
  $(selector).action()
  $(selector).action(function(){
      $("selector").method();
  });
  ```
- To prevent any jQuery code from running before the document is finished loading (is ready).
  ```javascript
  $(document).ready(function() {
      //jQuery methods go here...
  });
  ```
- The **shorter** method for the document ready event:
  ```javascript
  $(function(){
     // jQuery methods go here...
  });
  ```
- You can put your jQuery functions in a separate .js file.

## jQuery Selectors
jQuery selectors are based on the existing CSS Selectors, and it has some own custom selectors.

Selector|Example|Descript
---|---|
*|$("*")|**All** elements
&#35;id|$("#lastname")|The element with id="lastname"
.class|$(".intro")|All elements with class="intro"
.class,.class|$(".intro,.demo")|All elements with the class "intro" **or** "demo"
element|$("p")|All `<p>` elements
el1,el2,el3|$("h1,div,p")|All `<h1>`, `<div>` **and** `<p>` elements
 | | 
:first|$("p:first")|The first `<p>` element
:last|$("p:last")|The last `<p>` element
:even|$("tr:even")|All even `<tr>` elements
:odd|$("tr:odd")|All odd `<tr>` elements
 | | 
:first-child|$("p:first-child")|All `<p>` elements that are the **first** **child** of their parent
:first-of-type|$("p:first-of-type")|All `<p>` elements that are the **first** `<p>` element of their parent
:last-child|$("p:last-child")|All `<p>` elements that are the **last** **child** of their parent
:last-of-type|$("p:last-of-type")|All `<p>` elements that are the **last** `<p>` element of their parent
:nth-child(n)|$("p:nth-child(2)")|All `<p>` elements that are the 2nd **child** of their parent
:nth-last-child(n)|$("p:nth-last-child(2)")|All `<p>` elements that are the 2nd **child** of their parent, counting from the last child
:nth-of-type(n)|$("p:nth-of-type(2)")|All `<p>` elements that are the 2nd `<p>` **element** of their parent
:nth-last-of-type(n)|$("p:nth-last-of-type(2)")|All `<p>` elements that are the 2nd `<p>` **element** of their parent, counting from the last child
:only-child|$("p:only-child")|All `<p>` elements that are the **only** child of their parent
:only-of-type|$("p:only-of-type")|All `<p>` elements that are the only child, of its **type**, of their parent
 | | 
parent > child|$("div > p")|All `<p>` elements that are a **direct** **child** of a `<div>` element
parent descendant|$("div p")|All `<p>` elements that are **descendants** of a `<div>` element
element + next|$("div + p")|The `<p>` element that are **next** to each `<div>` elements
element ~ siblings|$("div ~ p")|All `<p>` elements that are **siblings** of a `<div>` element
 | | 
:eq(index)|$("ul li:eq(3)")|The fourth element in a list (index starts at **0**)
:gt(no)|$("ul li:gt(3)")|List elements with an index **greater** than 3
:lt(no)|$("ul li:lt(3)")|List elements with an index **less** than 3
:not(selector)|$("input:not(:empty)")|All input elements that are **not** empty
 | | 
:header|$(":header")|All header elements `<h1>`, `<h2>` ...
:animated|$(":animated")|All animated elements
:focus|$(":focus")|The element that currently has focus
:contains(text)|$(":contains('Hello')")|All elements which contains the text "Hello"
:has(selector)|$("div:has(p)")|All `<div>` elements that have a `<p>` element
:empty|$(":empty")|All elements that are empty
:parent|$(":parent")|All elements that are a parent of another element
:hidden|$("p:hidden")|All hidden `<p>` elements
:visible|$("table:visible")|All visible tables
:root|$(":root")|The document's root element
:lang(language)|$("p:lang(de)")|All `<p>` elements with a lang attribute value starting with "de"
 | | 
[attribute]|$("[href]")|All elements with a href attribute
[attribute=value]|$("[href='default.htm']")|All elements with a href attribute value equal to "default.htm"
[attribute!=value]|$("[href!='default.htm']")|All elements with a href attribute value not equal to "default.htm"
[attribute$=value]|$("[href$='.jpg']")|All elements with a href attribute value ending with ".jpg"
[attribute丨=value]|$("[title丨='Tomorrow']")|All elements with a title attribute value equal to 'Tomorrow', or starting with 'Tomorrow' followed by a hyphen`-`
[attribute^=value]|$("[title^='Tom']")|All elements with a title attribute value starting with "Tom"
[attribute~=value]|$("[title~='hello']")|All elements with a title attribute value containing the **specific** word "hello"
[attribute*=value]|$("[title*='hello']")|All elements with a title attribute value containing the word "hello"
 | | 
:input|$(":input")|All input elements
:text|$(":text")|All input elements with type="text"
:password|$(":password")|All input elements with type="password"
:radio|$(":radio")|All input elements with type="radio"
:checkbox|$(":checkbox")|All input elements with type="checkbox"
:submit|$(":submit")|All input elements with type="submit"
:reset|$(":reset")|All input elements with type="reset"
:button|$(":button")|All input elements with type="button"
:image|$(":image")|All input elements with type="image"
:file|$(":file")|All input elements with type="file"
:enabled|$(":enabled")|All enabled input elements
:disabled|$(":disabled")|All disabled input elements
:selected|$(":selected")|All selected input elements
:checked|$(":checked")|All checked input elements

**Example:**


[More jQuery Selectors Reference][selector]

## jQuery Events

### Event Reference

Method / Property|Description
---|--
*Document Events*|
focus()|Attaches/Triggers the focus event
blur()|Attaches/Triggers the blur event
focusin()|Attaches an event when an element (or any elements inside it) gets focus. 
focusout()|Attaches an event when an element (or any elements inside it) loses focus.
off()|Removes event handlers attached with the on() method
one()|Adds one or more event handlers to selected elements. This handler can only be triggered once per element
$.proxy()|Takes an existing *function* and returns a new one with a particular context
ready()|Specifies a function to execute when the DOM is fully loaded
resize()|Attaches/Triggers the resize event
scroll()|Attaches/Triggers the scroll event
select()|Attaches/Triggers the select event
submit()|Attaches/Triggers the submit event
trigger()|Triggers all events bound to the selected elements
triggerHandler()|Triggers all functions bound to a specified event for the selected elements, <br>triggerHandler() will *prevent* the default action.
unbind()|Removes an added event handler from selected elements
undelegate()|Removes an event handler to selected elements, now or in the future
unload()|*Deprecated in version 1.8*. Attaches an event handler to the unload event
*Mouse Events*|
click()|Attaches/Triggers the click event
dblclick()|Attaches/Triggers the double click event
hover()|Attaches two event handlers to the hover event
mousedown()|Attaches/Triggers the mousedown event
mouseenter()|Attaches/Triggers the mouseenter event
mouseleave()|Attaches/Triggers the mouseleave event
mousemove()|Attaches/Triggers the mousemove event
mouseout()|Attaches/Triggers the mouseout event
mouseover()|Attaches/Triggers the mouseover event
mouseup()|Attaches/Triggers the mouseup event
*Keyboard Events*|
change()|Attaches/Triggers the change event
keydown()|Attaches/Triggers the keydown event
keypress()|Attaches/Triggers the keypress event
keyup()|Attaches/Triggers the keyup event
*Property*|
event.currentTarget|The current DOM element within the event bubbling phase
[event.data][eventData]|Contains the optional data passed to an event method when the current executing handler is bound
[on()][methodOn]|Attaches event handlers to elements, use `on()` instead of `bind()` or `delegate()`
event.delegateTarget|Returns the element where the currently-called jQuery event handler was attached
event.preventDefault()|Prevents the default action of the event
event.isDefaultPrevented()|Returns whether event.preventDefault() was called for the event object
event.stopImmediatePropagation()|Prevents other event handlers from being called
event.isImmediatePropagationStopped()|Returns whether event.stopImmediatePropagation() was called for the event object
event.stopPropagation()|Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event
event.isPropagationStopped()|Returns whether event.stopPropagation() was called for the event object
[event.namespace][eventNamespace]|Returns the namespace specified when the event was triggered
event.pageX|Returns the mouse position relative to the left edge of the document
event.pageY|Returns the mouse position relative to the top edge of the document
event.relatedTarget|Returns which element being entered or exited on mouse movement.
event.result|Contains the last/previous value returned by an event handler triggered by the specified event
event.target|Returns which DOM element triggered the event
event.timeStamp|Returns the number of milliseconds since January 1, 1970, when the event is triggered
event.type|Returns which event type was triggered
event.which|Returns which keyboard key or mouse button was pressed for the event
*Removed*|
die()|*Removed in version 1.9.* Removes all event handlers added with the live() method
error()|*Deprecated in version 1.8*. Attaches/Triggers the error event
live()|*Removed in version 1.9*. Adds one or more event handlers to current, or future, selected elements
load()|*Deprecated in version 1.8*. Attaches an event handler to the load event
toggle()|*Removed in version 1.9*. Attaches two or more functions to toggle between for the click event


<a id="eventData">**The event.data Property**


<a id="eventDelegateTarget">**The event.delegateTarget Property**


<a id="stopPropagation">**The event.stopPropagation Property**

多重 event 触发，只触发 stopPropagation 标记的动作。

<a id="evnetNamespace">**The event.namespace Property**


[More jQuery Events Reference][events]

### Attaches an event handler


### <a id="methodOn">Attaches more event handler - on( ) Method
Syntax:
  ```javascript
  $(selector).on(event,childSelector,data,function,map)
  ```
Example:
  ```javascript
  // one method
  $("p").on("click", function(){
      $(this).hide();
  });
  Try it yourself »
  Attach multiple event handlers to a <p> element:
  
  // more methods
  $("p").on({
      mouseenter: function(){
          $(this).css("background-color", "lightgray");
      }, 
      mouseleave: function(){
          $(this).css("background-color", "lightblue");
      }, 
      click: function(){
          $(this).css("background-color", "yellow");
      } 
  });
  ```

## jQuery Effects
- Syntax:
  ```javascript
  $(selector).effect(speed,callback);
  ```
- Speed Value: "slow", "fast", milliseconds.
- Callback function is executed after the current effect is finished.
  ```javascript
  $("buttom").click(function(){
      $("p").hide("slow", function(){
          alert("The paragraph is now hidden.");
      });
  });
  ```
- Method Chaining
  ```javascript
  $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  ```
 

Method|Description
---|---
hide()|Hides the selected elements
show()|Shows the selected elements
toggle()|Toggles between the hide() and show() methods
fadeIn()|Fades in the selected elements
fadeOut()|Fades out the selected elements
fadeTo()|Fades in/out the selected elements to a given opacity, fadeTo(speed,opacity,callback);
fadeToggle()|Toggles between the fadeIn() and fadeOut() methods
slideDown()|Slides-down (shows) the selected elements
slideUp()|Slides-up (hides) the selected elements
slideToggle()|Toggles between the slideUp() and slideDown() methods
[animate()][animate]|Runs a custom animation on the selected elements
stop()|Stops the currently running animation for the selected elements, <br>stop(stopAll, goToEnd);
finish()|Stops, removes and completes all queued animations for the selected elements
queue()|Shows the queued functions on the selected elements
clearQueue()|Removes all remaining queued functions from the selected elements
delay()|Sets a delay for all queued functions on the selected elements
dequeue()|Removes the next function from the queue, and then executes the function

[jQuery Effect Methods][effect]

<a id="animate">**The Animation Effect**
- Syntax:
  ```javascript 
  $(selector).animate({params},speed,callback);
  ```
  - By default, all HTML elements have a static position, remember to set the position property before before moved animation.
  - All property names must be camel-cased, e.g. paddingLeft, marginRight.
  - If you want to animate color, you need to download the [Color Animations Plugin][colorAnimations].
- Multiple Properties
  ```javascript
  $("buttom").click(function(){
      $("div").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px', 
          width: '150px'
      });
  });
  ```
- Relative Values by `+=` or `-=`
  ```javascript
  $("buttom").click(function(){
      $("div").animate({
          left: '250px',
          height: '+=150px',
          width: '+=150px'
      });
  });
  ```
- Pre-defined Values as "slow", "hide", or "toggle"
  ```javascript
  $("buttom").click(function(){
      $("div").animate({
          height: 'toggle'
      });
  });
  ```  
- Queue Functionality one by one
  ```javascript
  $("button").click(function(){
      var div = $("div");
      div.animate({height: '300px', opacity: '0.4'}, "slow"); 
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({heigh: '100px', opacity: '0.4'), "slow");
      div.animate({widht: '100px', opacity: '0.8'), "slow");
  });
  ```

### Callback Functions
- A callback function is executed after the current effect is 100% finished.
JavaScript statements are executed line by line. However, with effects, the next line of code can be run even though the effect is not finished. This can create errors.
To prevent this, you can create a callback function.
A callback function is executed after the current effect is finished.
Typical syntax:


### Chaining
- Chaining allows us to run multiple jQuery methods (on the same element) within a single statement.
- To chain an action, you simply append the action to the previous action.
- This way, browsers do not have to find the same element(s) more than once.


**Too Long Line**
When chaining, the line of code could become quite long. However, jQuery is **not** very strict on the syntax; you can format it like you want, including line breaks and indentations.

alert("Text: " + $("#test").text());
alert("HTML: " + $("#test").html());
alert("Value: " +$("test").val());
alert($("#test").attr("href"));

$("#btn1").click(function(){
    $("#test1").text(function(i, origText){
        return "Old text: " + origText + " New text: Hello world!
        (index: " + i + ")"; 
    });
});

$("#btn2").click(function(){
    $("#test2").html(function(i, origText){
        return "Old html: " + origText + " New html: Hello <b>world!</b>
        (index: " + i + ")"; 
    });
});

$("button").click(function(){
    $("#w3s").attr({
        "href" : "http://www.w3schools.com/jquery",
        "title" : "W3Schools jQuery Tutorial"
    });
});

$("button").click(function(){
    $("#w3s").attr("href", function(i, origValue){
        return origValue + "/jquery"; 
    });
});

function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("p").append(txt1, txt2, txt3);         // Append the new elements 
}

$("p").remove(".test");
$("p").remove(".test, .demo");

css({"propertyname":"value","propertyname":"value",...});
$("p").css({"background-color": "yellow", "font-size": "200%"})

$(selector).load(URL,data,callback);

$("button").click(function(){
    $("#div1").load("demo_test.txt #p1", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
});

$.get(URL,callback);

$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$.post(URL,data,callback);

$("button").click(function(){
    $.post("demo_test_post.asp",
    {
        name: "Donald Duck",
        city: "Duckburg"
    },
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

$.noConflict();
jQuery(document).ready(function(){
    jQuery("button").click(function(){
        jQuery("p").text("jQuery is still working!");
    });
});

var jq = $.noConflict();
jq(document).ready(function(){
    jq("button").click(function(){
        jq("p").text("jQuery is still working!");
    });
});

$.noConflict();
jQuery(document).ready(function($){
    $("button").click(function(){
        $("p").text("jQuery is still working!");
    });
});