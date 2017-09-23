----
title: HTML
date: 2016-07-21 18:38:44
tags:
- HTML
----
HTMl is a **markup language** for **describing** web documents(web pages).

## Simple Construction

Browser doesn't care about tabs, returns, and most spaces.
![HTML5][HTML5]=HTML5


**Nested**
	
	html
	|
	|-- head
	|   \-- title
	|-- body
	|   |-- p
	|   |   \-- q
	|   |   \-- em
	|   \-- h1

Abbreviation|Means
---|---
HTML|HyperText Markup Language
CSS|Cascading Style Sheets
href|Hypertext reference
URL|Uniforin Resource Locators
http|Hyper Text Transfer Protocol
W3C|World Wide Web Consortium
WHATWG|Web Hypertext Application Technology Working Group
ftp|File Transfer Protocol

## Basic Element
Block element = Opening Tag + Content + Closing Tag

Tag|Description
---|---
<a href="#doctype">&#60;!DOCTYPE&#62;</a>|Defines version of HTML
`<html>`</a>|Defines the whole document
`<title>`|Defines a title for the document
`<body>`|what you see in the browser
`<h1>` to `<h6>`|Defines headings
`<p>`|Defines a paragraph
`<br>`|Inserts a signle line break
`<hr>`|Creates a horizontal line
`<!-->`|Defines a comments

**<a id="doctype">&#60;!DOCTYPE&#62; Element**
All HTML documents must start with a type declaration:`<!DOCTYPE html>`.



类型|包含所有 HTML 元素和属性|包含展示性和弃用元素|允许框架集（Framesets）
---|:---:|:---:|:---:
HTML 4.01 Strict|&radic;|X|X
HTML 4.01 Transitional|&radic;|&radic;|X
HTML 4.01 Frameset|&radic;|&radic;|&radic;


Part|Mean
---|---
html|the first element
PUBLIC|the HTML standard is publicly available
"-//W3C//DTD HTML 4.01//EN"|the version of HTML,written in English
"http://www.w3.org/TR/html4/strict.dtd"|a URL pointing to the definition of HTML

Check out the W3C validator: [http://validator.w3.org./](http://validator.w3.org./)
Check out CSS validator: [http://jigsaw.w3.org/CSS-validator/](http://jigsaw.w3.org/CSS-validator/)

## Inline

### Inline Elements
Tag|Description
---|---
`<abbr>`|<abbr title="Abbreviation or acronym">ABBR</abbr> (using with `<title>`)
`<address>`|<address>information of a document or article</address>, usually with a line break
`<b>`|<b>Blod</b> text
[&#60;bdi&#62;][bdi]![HTML5][HTML5]|Isolates a part of text that might be formatted in a different direction from other text outside it
`<bdo>`|Bi-directional override, e.g.`<bdo dir="rtl">apple</bdo>`
`<del>`|<del>deleted</del> text
`<i>`|<i>Italic</i> text
`<ins>`|<ins>Inserted</ins> text
`<mark>`![HTML5][HTML5]|<mark>marked or highlighted</mark> text
[&#60;meter&#62;][meter]![HTML5][HTML5]|Defines a scalar measurement within a known range (a gauge)
`<pre>`|Defines preformatted text
`<progress>`![HTML5][HTML5]|Represents the progress of a task
`<q>`|<q>Inline</q> quotation
`<blockquote>`|<blockquote>Block quotation</blockquote>
`<rp>`![HTML5][HTML5]|Defines what to show in browsers that do not support ruby annotations
`<rt>`![HTML5][HTML5]|Defines an explanation/pronunciation of characters (for East Asian typography)
`<ruby>`![HTML5][HTML5]|Defines a ruby annotation (for East Asian typography)
`<s>`|Defines text that is no longer correct
`<small>`|<small>small</small> text
`<sub>`|<sub>Subscripted</sub> text
`<sup>`|<sup>Superscripted</sup> text
[&#60;time&#62;][time]</a>![HTML5][HTML5]|Defines a date/time
`<u>`|Defines text that should be stylistically different from normal text
`<wbr>`![HTML5][HTML5]|Defines a possible line-break

### Semantic Elements

Tag|Description
---|---
`<em>`|<em>emphasized</em> text
`<strong>`|<strong>strong</strong> text
`<dfn>`|Represents the defining instance of a term
`<code>`|A piece of programming <code>code</code><br>Use `<pre><code>` for blockcode
`<samp>`|Sample output from computer programs
`<kbd>`|<kbd>Keyboard</kbd> input
`<var>`|a <var>variable</var>
`<cite>`|the <cite>title</cite> of a work, usually in italic.


## Forms and Input



### Form Elements

Tag|Description
---|---
`<form>`|Defines an HTML form for user input
`<input>`|Defines an input control
`<textarea>`|Defines a multiline input control (text area)
`<button>`|Defines a clickable button
`<select>`|Defines a drop-down list
`<optgroup>`|Defines a group of related options in a drop-down list
`<option>`|Defines an option in a drop-down list
[&#60;label&#62;][label]|Defines a label for an `<input>` element
[&#60;fieldset&#62;][fieldset]|Groups related elements in a form
`<legend>`|Defines a caption for a `<fieldset>` element
`<datalist>`![HTML5][HTML5]|Specifies a list of pre-defined options for input controls
`<keygen>`![HTML5][HTML5]|Defines a key-pair generator field (for forms)
`<output>`![HTML5][HTML5]|Defines the result of a calculation

<a id="label">**&#60;label&#62; Element**
The `<label>` element can be used to attach albels to form elements.


<a id="fieldset">**&#60;fieldset&#62; and &#60;legend&#62; Element**
The `<fieldset>` element groups ralated data in a form.
The `<legend>` element defines a caption for the `<fieldset>` element.

### The Attributes of Form Element

Attribute|Description
---|---
accept-charset|Specifies the charset used (default: the page charset)
action|Specifies an address (url) to be peformed when submit the form<br>(default: current page)
autocomplete|Specifies if the browser should autocomplete the form (default: on).
enctype|Specifies the encoding of the submitted data (default: is url-encoded).
method|Specifies the HTTP method used when submitting the form (default: GET).
name|Specifies a name used to identify the form (for DOM usage: document.forms.name).
novalidate|Specifies that the browser should not validate the form.
target|Specifies the target of the address in the action attribute (default: _self).

**Different between POST and GET:**
	- POST: send data bebind the scenes to your server.
		http://wickedlysmart.com/hfhtmlCSS/contest.php
	- GET: appends data on the end of the URL before it sends a request to the server.
		http://wickedlysmart.com/hfhtmlCSS/contest.php?firstname=buckaroo&lastname=banzai

### Type Attributes

Input|Example
---|---
text<br><input type="text">|`<input type="text" name="fullname">`<br>`onkeyup="this.value=this.value.replace(/\D/g,'')"`<br>`onafterpaste="this.value=this.value.replace(/\D/g,'')"`
button<br><input type="button" value="button">|`<input type="button" name="name" value="true">`
submit<br><input type="submit">|`<input type="submit">`
radio(a single control)<br><input type="radio" name="hotornot" value="hot">single|`<input type="radio" name="hotornot" value="hot">`<br>`<input type="radio" name="hotornot" value="not">`
checkbox<br><input type="checkbox" name="spice" value="Salt">check|`<input type="checkbox" name="spice" value="Salt">`<br>`<input type="checkbox" name="spice" value="Pepper">`
textarea<br><textarea name="comments" rows="2" cols="18">text</textarea>|`<textarea name="name" rows="1" cols="4">``</textarea>`
select(a menu to select)<br><select name="characters"><option value="Buckaroo">Buckaroo Banzai</option><option value="Tommy">Perfect Tommy</option></select>|`<select name="characters">`<br>&#8195;`<option value="Buckaroo">Buckaroo Banzai</option>`<br>&#8195;`<option value="Tommy">Perfect Tommy</option>` <br>&#8195;`</select>`
number![HTML5][HTML5]<br><input type="number" name="num" min="1" max="10">|`<input type="number" name="num" min="0" max="20">`
range![HTML5][HTML5]<br><input type="range" min="0" max="20" step="5">|`<input type="range" min="0" max="20" step="5">`
color![HTML5][HTML5](<del>IE,Safari</del>)<br><input type="color">|`<input type="color">`
time/date/datetime-local/week/month<Br>HTML5(<del>IE,Firfox</del>)|`<input type="date">`
email![HTML5][HTML5](<del>Safari</del>)<br><input type="email">|`<input type="email">`
tel![HTML5][HTML5](only Safari)<br><input type="tel">|`<input type="tel">`
url![HTML5][HTML5]<br><input type="url">|`<input type="url">`
passwords![HTML5][HTML5]<br><input type="password" name="secret">|`<input type="password" name="secret">`
file<br><input type="file" name="doc">|`<input type="file" name="doc">`
Mulitiple selection<br><select name="characters" multiple><option value="Buckaroo">Buckaroo Banzai</option><option value="Tommy">Perfect Tommy</option><option value="Penny Priddy">Penny</option></select>|`<select name="characters" multiple>`<br>&#8195;`<option value="Buckaroo">Buckaroo Banzai</option>`<br>&#8195;`<option value="Tommy">Perfect Tommy</option>`<br>&#8195;`<option value="Penny Priddy">Penny</option>`<br>`</select>`
datalist![HTML5][HTML5](<del>Safari</del>)<br><input list="browsers"><datalist id="browsers"><option value="Firefox"><option value="Safari"></datalist>|`<input list="browsers">`<br>&#8195;`<datalist id="browsers">` <br>&#8195;`<option value="Firefox">` <br>&#8195;`<option value="Safari">`<br>`</datalist> `
keygen![HTML5][HTML5](<del>IE</del>)<br><form action="action_page.php">Username:<input type="text" name="user">Encryption: <keygen name="security"><input type="submit"></form>|`Username: <input type="text" name="user">` <br>`Encryption: <keygen name="security">` <br>`<input type="submit">`
output![HTML5][HTML5](<del>IE</del>)<br><form action="action_page.php" oninput="x.value=parseInt(a.value)+parseInt(b.value)"> <input type="text" id="a" name="a" value="50" style="width:50px"> + <input type="number" id="b" name="b" value="50" style="width:50px"> = <output name="x" for="a b"></output> </form>|`<form action="action_page.php"`<br> `oninput="x.value=parseInt(a.value)+parseInt(b.value)">` <br>&#8195;`<input type="text" id="a" name="a" value="50">+` <br>&#8195;`<input type="number" id="b" name="b" value="50">=` <br>&#8195;`<output name="x" for="a b"></output>` <br>`</form>`
url![HTML5][HTML5](<del>Safari</del>)|`<input type="url" name="name">`

### Other Attributes

Attribute|Description
---|---
accept|Specifies the types of files that the server accepts (only for type="file")<br>e.g. `accept="audio/*"` or `video/*` or `image/*` or `media_type` or file_extension
alt|Specifies an alternate text for images (only for type="image")<br>e.g. `alt="altText"`
checked|Specifies that an `<input>` element should be pre-selected when the page loads (for type="checkbox" or type="radio")<br>e.g. `checked="checked"`
name|Specifies the name of an `<input>` element<br>e.g. `name="name"`
src|Specifies the URL of the image to use as a submit button (only for type="image")
[value][value]|Specify the initial value<br>e.g.`value="John"`
readonly|readonly<br>e.g.`readonly`
disabled|un-usable and un-clickable<br>e.g.`disable`
size|specify the size<br>e.g.`size="40"`
maxlength|specify the maximum allowed<br>e.g.`maxlength="10"`
autofocus![HTML5][HTML5]|Get focus when the page loads<br>e.g.`autofocus`
[form][form]![HTML5][HTML5](<del>IE</del>)|specify more forms an input element belongs to
height and width![HTML5][HTML5]|specify the height and width with `<input type="image">`<br>e.g.`<input type="image" src="URL" alt="alt" width="8" height="8">`
list![HTML5][HTML5] (<del>Safari</del>)|refers to a `<datalist>` element that contains pre-defined options for an `<input>` element, e.g.<br> `<input list="browsers">` <br>`<datalist id="browsers">` <br>&#8195;`<option value="Internet Explorer">` <br>&#8195;`<option value="Firefox">` <br>&#8195;`<option value="Chrome">` <br>&#8195;`<option value="Opera">` <br>&#8195;`<option value="Safari">` <br>`</datalist>`
min and max![HTML5][HTML5] (<del>Firefox</del>)|Specify the minimun and maximun.<br>Work with: number, range, date, datetime-local, month, time, week.
multiple![HTML5][HTML5]|Allowed to enter more than one value.<br>e.g.`<input type="file" multiple>`
pattern (regexp)![HTML5][HTML5]|regular expression<br>e.g.`<input type="text" pattern="[A-Za-z]{3}">`
placeholder![HTML5][HTML5]|display a hint<br>e.g.`<input type="text" name="name" placeholder="Hint">`
required![HTML5][HTML5]|An input must be filled out before submitting<br>`<input type="text" required>`
step![HTML5][HTML5]|work with: number, range, date, datetime-local, month, time, week
autocomplete![HTML5][HTML5]|autocomplete values based on value that the user has entered before<br>Works with form, text, search, url, tel, email, password, datepickers, range, color<br>e.g.`autocomplete="on"`
novalidate![HTML5][HTML5]|Form data shouldn't bevalidated<br>e.g.`novalidate`
formaction![HTML5][HTML5]|override the action attribute
formenctype![HTML5][HTML5]|override the enctype attribute
formmethod![HTML5][HTML5]|override the method attribute
formnovalidate![HTML5][HTML5]|override the novalidate attribute
formtarget![HTML5][HTML5]|override the target attribute

**<a id="form-value">Value Attribute**
The value attribute is used differently for different input types:
- For "button", "reset", and "submit" - it defines the text on the button
- For "text", "password", and "hidden" - it defines the initial (default) value of the input field
- For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)
- The value attribute of "checkbox" and "radio" must be set.

**<a id="form-attribute">Form Attribute**
The form attribute specifies one or more forms an `<input>` element belongs to.
To refer to more than one form, use a space-separated list of form ids.


## Images
### Images Elements

Tag|Description
---|---
[&#60;img&#62;][img]</a>|Includ an image
`<map>`|Defines a client-side image-map
`<area>`|Defines an area inside an image-map
[&#60;canvas&#62;][canvas]![HTML5][HTML5]|Used to draw graphics, on the fly, via scripting (usually JavaScript)
`<figcaption>`![HTML5][HTML5]|Defines a caption for a <figure> element
`<figure>`![HTML5][HTML5]|Specifies self-contained content
[&#60;svg&#62;][svg]![HTML5][HTML5]|SVG graphics



**<a id="img">&#60;img&#62; Element**
`<img src="URL/File">`
In general,keep the width of image to less than 800 pixels wide.
Always specify the width and height of an image,prevent the page flicker while the image loads.

Diffrent|JPEG|PNG|GIF
---|---|---
works best|photographs|simple images|simple images
color|16 million|PNG-8:256(2^8)<br>PNG-24:16 million<br>PNG-32|256
file size|small|large|large
format|lossy|lossless|lossless
transparency|X|&radic;|&radic;
animation|X|X|&radic;

Attribute|Function|Emaxple
---|---|---
src|Specifies the URL|`src="URL"`
width|style image width|`width="104"`
height|style image height|`height="142"`<br>`style="width:48px;height:142px;"`
alt|display the alt text while a browser can't find an image|`alt="text"`

### Image Maps
An image-map is an image with clickable areas.

## Link

Tag|Description
---|---
[&#60;a&#62;][a]|make a link
`<link>`|link the CSS file
`<nav>`![HTML5][HTML5]|Defines navigation links

**<a id="a">&#60;a&#62; Element**

1. Make a url link.
	`<a href="URL/files">lanbel</a>`
	- The lanbel can be any other HTML element, `border: 0" to prevent IE9 displaying a border.
  - href="#" 返回本页面，无跳转；href="javascript:void(0);" 返回本页面，有跳转。
  

1. Create a destination.
	create:`<h2><a id="chai">Chai Tea, $1.85</a></h2>`
	link:`<a href="index.html#chai>See Chai Tea</a>`
	You can link destination in their HTML.
	You can't use a space with id name.

Attribute|Function
---|---
href|The link address
target="_self"|open in the same frame(default)
target="_blank"|open in new window
target="_parent"|open in the parent frame
target="_top"|open in the full body of the window
target="name"|open in a "name" frame

## List

### List ELements

Tag|Description
---|---
[&#60;ul&#62;][ul]|unordered list
[&#60;ol&#62;][ol]|ordered list
`<li>`|Defines a list item
[&#60;dl&#62;][dl]|Defines a description list
`<dt>`|Defines a term/name in a description list
`<dd>`|Defines a description of a term/name in a description list
`<menu>`|Defines a list/menu of commands
`<menuitem>`![HTML5][HTML5]|Defines a command/menu item that the user can invoke from a popup menu

### <a id="stylelist">Style of list

**Attribute**

Attribute|Value
---|---
list-style-type(unorder)|disc(default), circle, square, none
type(order)|1(default), A, a, I, i
list-style-image|url(images/backpack.gif);



**Horizontal List**
`li { display: inline; }`: display a list horizontally.


### nav:style list

HTML:


## Tables

HTML:
	


### Tables Elements

Tag|Description
---|---
`<table>`|Defines a table
`<caption>`|Defines a table caption
`<th>`|Defines a header cell in a table
`<tr>`|Defines a row in a table
`<td>`|Defines a data in a table
`<thead>`|Groups the header content in a table
`<tbody>`|Groups the body content in a table
`<tfoot>`|Groups the footer content in a table
`<col>`|Specifies column properties for each column within a `<colgroup>` element
`<colgroup>`|Applying sytles to entire columns,<br>must after `caption` and before `<thead>`, `<tbody>`,`<tfoot>`,`<tr>`

Tips:
1. `<td></td>`: empty cell.
1. put table heading to be left side: code `<th>` in the first cell in each row. 
1. You can put a table within a table.
1. Add a new rule to your CSS with`table table th {  }` to change the nested table.

### Tables Attributes

Attribute|Description
---|---
`rowspan`|Date spans rows
`colspan`|Date spans columns
 

### Tables CSS
	

 
CSS|mean
---|---
`border-collapse`|Collapse into one border
`border-spacing`|Specify the space between the cells
`caption-side`|Put caption on `bottom` or `top`
`caption`|caption
`tr:nth-child(odd)`|单数行tr的CSS
`tr:nth-child(even)`|双数行tr的CSS

## Audio & Video

### Audio/Vido Elements

Tag|Description
---|---
`<audio>`![HTML5][HTML5]|Defines sound content
`<video>`![HTML5][HTML5]|Defines a video or movie
`<source>`![HTML5][HTML5]|Defines multiple media resources for media elements
`<track>`![HTML5][HTML5]|Defines text tracks for media elements

### Audio
Before HTML5, there was no standard for playing audio files on a web page, audio files could only be played with a plug-in (like flash).


**Audio format**
Sound: Only MP3, WAV, and Ogg audio are supported by the newest HTML5 standard.

Format|Media Type|Browser
---|---|---
MP3|audio/mpeg|All browsers
Ogg|audio/ogg|Firefox, Chrome, Opera
Wav|audio/wav|Firefox, Chrome, Opera, Safari

### Video


Other attributes: loop, preload
 
**Video format**

Format|Video format|Audio format|Browser
---|---|---|---
MP4|H.264|AAC|All browsers
Ogg|Theora|Vorbis|Firefox, Chrome, Opera
WebM|VP8|Vorbis|Firefox, Chrome, Opera

Video: Only MP4, WebM, and Ogg video are supported by the newest HTML5 standard.

Juggle all those formats:


Or you can code more detail:


## Styles and Semantics

### Semantics Elements

Tag|Description
---|---
[&#60;style&#62;][style]|Defines style information
`<div>`|Defines a section in a document
`<span>`|Defines a section in a document
`<header>`![HTML5][HTML5]|Defines a header for a document or section
`<footer>`![HTML5][HTML5]|Defines a footer for a document or section
`<main>`![HTML5][HTML5]|Specifies the main content of a document
`<section>`![HTML5][HTML5]|Defines a section in a document
`<article>`![HTML5][HTML5]|Defines an article
`<aside>`![HTML5][HTML5]|Defines content aside from the page content
`<details>`![HTML5][HTML5]|Defines additional details that the user can view or hide
`<dialog>`![HTML5][HTML5]|Defines a dialog box or window
`<summary>`![HTML5][HTML5]|Defines a visible heading for a `<details>` element



### Semantics in HTML



## Meta Info

Tag|Description
---|---
`<head>`|information about the web page
[&#60;meta&#62;][meta]|specify page description, character, keywords...
`<base>`|Specify the base URL in `<head>`

## Frames

Tag|Description
---|---
[&#60;iframe&#62;][iframe]|Display a web page within a web page

## Programming

Tag|Description
---|---
`<script>`|Defines a client-side script
`<noscript>`|Display text when browser doesn't support script
[&#60;embed&#62;][embed]![HTML5][HTML5]|Defines a container for an external (non-HTML) application
[&#60;object&#62;][object]|Defines an embedded object
`<param>`|Defines a parameter for an object

**<a id="script">&#60;script&#62; Element**
Create executable content by JavaScript.

`<script src="myscript.js">`

**<a id="embed">&#60;embed&#62; element**
The `<embed>` element is supported in all major browsers.
Note that the `<embed>` element does not have a closing tag. It can not contain alternative text.


**<a id="object">&#60;object&#62; Element**
The `<object>` element is supported by all browsers.
It is used to embed plug-ins (like Java applets, PDF readers, Flash Players) in web pages.


## Attributes
- HTML elements can have attributes.
- Attributes are always specified in **the start tag**.
- Attributes: `name="value"`.


Attribute|Describtion
---|---
accesskey|Specifies a shortcut key to activate/focus an element
class|Specifies one or more classnames for an element (refers to a class in a style sheet)
contenteditable![HTML5][HTML5]|Specifies whether the content of an element is editable or not
contextmenu![HTML5][HTML5]|Specifies a context menu for an element. The context menu appears when a user right-clicks on the element
data-*![HTML5][HTML5]|Used to store custom data private to the page or application
dir|Specifies the text direction for the content in an element
draggable![HTML5][HTML5]|Specifies whether an element is draggable or not
dropzone![HTML5][HTML5]|Specifies whether the dragged data is copied, moved, or linked, when dropped
hidden|Specifies that an element is not yet, or is no longer, relevant
<a href="#id">id</a>|Specifies a unique id for an element
lang|Specifies the language of the element's content<br>e.g.`<html lang="en-US">`
spellcheck![HTML5][HTML5]|Specifies whether the element is to have its spelling and grammar checked or not
style|Specifies an inline CSS style for an element<br>e.g.`<h2 style="color: red;">heading</h2>`
tabindex|Specifies the tabbing order of an element
title|Specifies extra information about an element
translate![HTML5][HTML5]|Specifies whether the content of an element should be translated or not

**<a id="id">id Attribute**
You can add an id attribute to any element, but an element can has only one id.

Make a id tag: `<h2 id="chai">Chai Tea, $1.85</h2>`
Link a id tag: `<a href="index.html#chai">See Chai Tea</a>`
Link other website id:`<a href="URL#tag">label</a>`

id name:
1. Start with a letter(A-Z or a-z)
1. Follow with any letter,digit,hyphen,underscore,colon,period.
1. One element has only one id.

**class Attribute**
Use `id` to address a single element. Use `class` to address groups of elements.
Make a class tag: `<p class="greentea">`
Make more the one class tags: `<p class="greentea raspberry blueberry">`

**title Attribute**
How to return in title attribute?
1. Using `<CR>`.
  ```html
  <a href='#' title='line 1
  line 2
  line 3'>A link</a>
  ```
1. Using `&#13;`.
  ```html
  <a href='#' title='line 1&#13;line 2&#13;line 3'>A link</a>
  ```

**data-* Attribute**
Using the `data-*` Attribute:


## File construction


## Deploy website
### How to Deploy web page?

1. Find yourself a hosting company.
1. Choose a name for your site.
1. Find a way to get your files from your computer to a server at the hosting company.
1. Let's have fun.

### How to choose hosting company?

1. Technical support.
1. Data transfer.
1. Backups.
1. Domain names.
1. Reliability.
1. Goodies.

### Domain

Name|Part
---|---
http://www.starbuzzcoffee.com/index.html|URL
http|Protocol to retrieve the resource
www.starbuzzcoffee.com|Website name
www|Spcific server
starbuzzcoffee.com|Domain
com|End of domain
/index.html|Absolute path
"index.html" or "default.htm"**(no "l")**,<br>depend on hosting company|Default file

1. Input "http://www.starbuzzcoffee.com/" is the same as "http://www.starbuzzcoffee.com/index.html",so always better to leave default file off.(because it maybe changes)
1. To easy change website name, use relative links to link your own pages, use URL to link other sites.
1. File protocol.
	e.g.`file:///chapter4/starbuzz/index.html`
	Notice there is three `/`.
1. Port
	The default port is 80, but sometimes web server are configured to receive requests at a different port(like 8000).

## XHTML
### The Most Important Differences from HTML
1. Document Structure
	- XHTML DOCTYPE is **mandatory**.
	- The xmlns attribute in `<html>` is **mandatory**.
	- `<html>`, `<head>`, `<title>`, and `<body>` are **mandatory**.
1. XHTML Elements.
	- XHTML elements must be properly **nested.**
	- XHTML elements must always be **closed.**
	- XHTML elements must be in **lowercase.**
	- XHTML documents must have **one root element.**
1. XHTML Attributes.
	- Attribute names must be in **lower case.**
	- Attribute values must be **quoted.**
	- Attribute minimization is **forbidden.**

### How to Convert from HTML to XHTML
1. Add an XHTML `<!DOCTYPE>` to the first line of every page.
1. Add a xmlns attribute to the html element of every page.
1. Change all element names to lowercase.
1. Close all empty elements.
1. Change all attribute names to lowercase.
1. Quote all attribute values.


## Teach Old Browsers support HTML5 Elements
### Define HTML5 Elements as Block Elements


### Adding New Elements to HTML


### Problem With IE


### Migration from HTML4 to HTML5
1. Change to HTML DOCTYPE.
1. Change to HTML5 ENcoding.
1. Add the Shiv.
1. Add CSS for HTML5 Semantic Elements.
1. Change to HTML5 `<header>` and `<footer>`.
1. Change to HTML5 `<nav>`.
1. Change to HTML5 `<section>`.
1. Change to HTML5 `<article>`.
1. A Typical HTML5 Page.
	 Remove the `<head>` tags.




## Others
### Character Sets
**The HTML charset Attribute**



**Combining Diacritical Marks**

Mark|Characer|Construct|Result
:---:|:---:|:---:|:---:
&#768;|a|`a&#768;`|a&#768;
&#769;|a|`a&#769;`|a&#769;
&#770;|a|`a&#770;`|a&#770;
&#771;|a|`a&#771;`|a&#771;
***
## 本文相关
1. 参考
	[*Head.First.HTML.and.CSS*](http://www.baidu.com/link?url=Of1cxhU6uvQgdpge9Bl3LVAzOkQVnvf1eG866ayfmDjlqDBafF493zpTEK6Jwhhfthoy2BU-dZRfGKMcVP8ucK&wd=&eqid=8b33082a00015eab0000000556a9c6ad)
	[HTML Tutorial - w3schools.com](http://www.w3schools.com/html/default.asp)
1. 修订
	2016-01-28:第一版
	2016-02-15:整合了 *w3schools.com* 部分内容。

[HTML5]:/image/HTML5.png "HTML5"
[bdi]:http://www.w3school.com.cn/tags/tag_bdi.asp
[meter]:http://www.w3schools.com/tags/tag_meter.asp
[time]:http://www.w3schools.com/tags/tag_time.asp
[label]:#label
[fieldset]:#fieldset
[form]:#form-attribute
[img]:#img
[canvas]:http://www.w3schools.com/html/html5_canvas.asp
[svg]:http://www.w3schools.com/html/html5_svg.asp
[a]:#a
[ul]:http://www.w3schools.com/tags/tag_ul.asp
[ol]:http://www.w3schools.com/tags/tag_ol.asp
[dl]:http://www.w3schools.com/tags/tag_dl.asp
[style]:#style
[meta]:http://www.w3schools.com/tags/tag_meta.asp
[iframe]:http://www.w3schools.com/tags/tag_iframe.asp
[embed]:#embed
[object]:#object
[value]:#form-value
[titile]:
