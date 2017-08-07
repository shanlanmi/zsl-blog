----
title: CSS
date: 2016-07-21 18:38:44
categories:
- CSS
----
## CSS Selector
Syntax: `Selector { Property:Value; Property:Value; }`

**Tag Seletor**

Use `id` to address a **single** element. Use `class` to address **groups** of elements.
Better, use `id` to address an element for JavaScript, use `class` to address some elements for css. 

Selector|Example|Example description|CSS
---|---|---|---
`.class`|`.intro`|Selects all elements with class="intro"|1
`#id`|`#firstname`|Selects the element with id="firstname"|1
`*`|`*`|Selects all elements|2

**Element Selector**

Selector|Example|Example description|CSS
---|---|---|---
`element`|`p`|Selects all `<p>` elements|1
`element,element`|`div, p`|Selects all `<div>` elements and all `<p>` elements|1
`element element`|`div p`|Selects all `<p>` elements inside `<div>` elements|1
`element>element`|`div > p`|Selects all `<p>` elements that are immediate children of `<div>` elements|2
`element+element`|`div + p`|Selects all `<p>` elements that are placed immediately after `<div>` elements|2
`element1~element2`|`p ~ ul`|Selects every `<ul>` element that are placed after `<p>` element|3


助记：
1. `>`，有包含的意思，作为cild selector。
1. `+`，横线代表后面的意思，竖线代表一个的意思，意为选择紧接着后面的一个。
1. `~`，仅有横线，意为选择后面所有。

**Attribute**

Selector|Example|Example description|CSS
---|---|---|---
`[attribute]`|`[target]`|Selects all elements with a target attribute|2
`[attribute=value]`|`[target=_blank]`|Selects all elements with target="_blank"|2
`[attribute~=value]`|`[title~=flower]`|Selects all elements with a title attribute containing **the word** "flower"|2
`[attribute*=value]`|`a[href*="w3schools"]`|Selects every `<a>` element whose href attribute value contains the **string** "w3schools"|3
`[attribute丨=value]`|`[lang丨=en]`|Selects all elements with a lang attribute value **starting with** "en" **word**|2
`[attribute^=value]`|`a[href^="https"]`|Selects every `<a>` element whose href attribute value **begins with** "https" **string**|3
`[attribute$=value]`|`a[href$=".pdf"]`|Selects every `<a>` element whose href attribute value **ends with** ".pdf" **word**|3

Diffrents:
- `~=`: Contain the word
- `*=`: Contain the string
- `|=`: Start with the word
- `^=`: Start with the string
- `$=`: End with the word

Note: A whole word, either alone, like class="top", or followed by a hyphen( - ), like class="top-text".

Using attribute selector to styling Forms:


**Pseudo Classes**

Selector|Example|Example description|CSS
---|---|---
:active|a:active|Selects the active link|1
:checked|input:checked|Selects every checked `<input>` element|3
:disabled|input:disabled|Selects every disabled `<input>` element|3
:empty|p:empty|Selects every `<p>` element that has no children|3
:enabled|input:enabled|Selects every enabled `<input>` element|3
:first-child|p:first-child|Selects every `<p>` elements that is the first child of its parent|2
:first-of-type|p:first-of-type|Selects every `<p>` element that is the first `<p>` element of its parent|3
:focus|input:focus|Selects the `<input>` element that has focus|2
:hover|a:hover|Selects links on mouse over|1
:in-range|input:in-range|Selects `<input>` elements with a value within a specified range|3
:invalid|input:invalid|Selects all `<input>` elements with an invalid value|3
:lang(language)|p:lang(it)|Selects every `<p>` element with a lang attribute value starting with "it"|2
:last-child|p:last-child|Selects every `<p>` elements that is the last child of its parent|3
:last-of-type|p:last-of-type|Selects every `<p>` element that is the last `<p>` element of its parent|3
:link|a:link|Selects all unvisited links|1
:not(selector)|:not(p)|Selects every element that is not a `<p>` element|3
:nth-child(n)|p:nth-child(2)|Selects every `<p>` element that is the second child of its parent|3
:nth-last-child(n)|p:nth-last-child(2)|Selects every `<p>` element that is the second child of its parent, counting from the last child|3
:nth-last-of-type(n)|p:nth-last-of-type(2)|Selects every `<p>` element that is the second `<p>` element of its parent, counting from the last child|3
:nth-of-type(n)|p:nth-of-type(2)|Selects every `<p>` element that is the second `<p>` element of its parent|3
:only-of-type|p:only-of-type|Selects every `<p>` element that is the only `<p>` element of its parent|3
:only-child|p:only-child|Selects every `<p>` element that is the only child of its parent|3
:optional|input:optional|Selects `<input>` elements with no "required" attribute|3
:out-of-range|input:out-of-range|Selects `<input>` elements with a value outside a specified range|3
:read-only|input:read-only|Selects `<input>` elements with a "readonly" attribute specified|3
:read-write|input:read-write|Selects `<input>` elements with no "readonly" attribute|3
:required|input:required|Selects `<input>` elements with a "required" attribute specified|3
:root|root|Selects the document's root element|3
:target|#news:target|Selects the current active #news element (clicked on a URL containing that anchor name)|3
:valid|input:valid|Selects all `<input>` elements with a valid value|3
:visited|a:visited|Selects all visited links|1

**Link style**
- Unvisited state: `a:link { color: green; }`
- Visited state: `a:visited { color: red; }`
- Hover state: `a:hover { color: yellow; }`
- Focus state: `a:focus { color: blue; }`
- Active state: `a:active { color: white; }`
Some browers don't support *focus* and *active*.
If links be in multiple states at the same time, the right ordering is *link, visited, focus, hover, active.*

**Pseudo Elements**

Selector|Example|Example description|CSS
---|---|---|---
::after|p::after|Insert content after every `<p>` element|2
::before|p::before|Insert content before every `<p>` element|2
::first-letter|p::first-letter|Selects the first letter of every `<p>` element|1
::first-line|p::first-line|Selects the first line of every `<p>` element|1
::selection|p::selection|Selects the portion of an element that is selected by a user|-

Example:


## CSS Properties

**initial, inherit**
### Color Properties

Property|Description|CSS
---|---|---
[color][color]|Sets the color of text|1
opacity|Sets the opacity level for an element<br><a>*Value: number, %*|3

**<a id="color">Color Value**
1. Color names
	e.g. `background-color: color-name;`
	HTML supports [140 standard color names](http://www.w3schools.com/colors/colors_names.asp).
1. RGB Colors
	RGB(Red, Green, Blue) color values can be rgb(0,0,0) ~ rgb(255,255,255) or rgb(0,0,0) ~ rgb(100%,100%,100%).
	e.g. `background-color: rgb(201,102,0)`
1. RGBA Colors
	RGBA(Red, Green, Blue, alpha) color values can be rgba(0,0,0,0.0) to rgba(255,255,255,1.0).
1. Hexadecimal Colors
	Hex color values in the form: #RRGGBB (R=red, G=green, B=Blue).
	Hex color values betwwen 00 and FF (same as 0-255).
	e.g. `background-color: #cc6600`
1. HSL Colors
	HSL(Hue, Saturation, Lightness) color value can be hsl(0,0,0) to hsl(360,100%,100%).
	Hue Value:
	- 0 (or 360) is red
	- 120 is green
	- 240 is blue
1. HSLA Colors
	HSLA(Hue, Saturation, Lightness, alpha) color value can be hsla(0,0,0,0.0) to hsla(360,100%,100%,1.0).

**How to get rgb from hex code?**
1. #cc6600 <==> rgb(cc, 66, 00)
1. c=12,cc=12*16+12=204;66=16*6+6=102
1. #cc6600 <==> rgb(204, 102, 0)

**Opacity**
opacity:0.0(fully transparent) ~ 1.0(fully opaque).

### Background Properties

Property|Description|CSS
---|---|---
background|A shorthand for background properties<br><a>*Order:color, image, position/size, repeat, origin, clip, attachment*|1
background-attachment|Sets whether a image is fixed or scrolls<br><a>*Value: scroll, fixed, local*|1
[background-blend-mode][back1]|Specifies the blending mode of each background layer (color/image)|3 
background-color|Specifies the background color of an element<br><a>*Value: color, transparent*|1
background-image|Specifies one or **more** background images for an element<br><a>*Value: url(top.gif), url(bottom.gif)*|1
background-position|Specifies the position of a background image<br><a>*Value: two of direction, x% y%, xpos ypos*|1
background-repeat|Sets how a background image will be repeated<br><a>*Value: no-repeat, repeat-x, repeat-y, inherit*|1
background-clip|Specifies the painting area of the background<br><a>*Value: border-box, padding-box, content-box*|3
background-origin|Specifies where the background image(s) is/are positioned<br><a>*Value: border-box, padding-box, content-box*|3
background-size|Specifies the size of the background image(s)<br><a>*Value: auto, 10px 10px, 50% 50%, cover, contain*|3

### Border Properties

Property|Description|CSS
---|---|---
border|Sets all the border properties in one declaration<br><a>*Order: width style color*|1
border-width|Sets the width of the four borders<br><a>*Value: medium, thin, thick, length*|1
border-style|Sets the style of the four borders<br><a>*Value: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset*|1
border-color|Sets the color of the four borders<br><a>*Value: color, transparent*|1
border-radius|A shorthand property for setting all the four radius properties<br><a>*Value: length, %*|3
border-bottom<br>(top, left, right)|Sets all the bottom border properties in one declaration*|1
border-bottom-width/style/color|The same as border-width/style/color*|1
border-bottom/top-left/right-radius|Defines the shape of the border of the corner<br><a>*Value: 1px, 10%, 1em*|3
border-image|A shorthand property for setting all the border-image properties<br><a>*Value: source slice width outset repeat*|3
border-image-source|Specifies the path to the image to be used as a border<br><a>*Value: url(border.png)*|3
border-image-slice|Specifies how to slice the border image<br><a>*Value: 10, 30%, 30% fill*|3
border-image-width|Specifies the widths of the image-border<br><a>*Value: 1px 1px, 1 2, 20% 20%, auto*|3
border-image-outset|Specifies the border image area extends beyond the border box<br><a>*Value: 1px 1px, 1 0*|3
border-image-repeat|Specifies whether the border image should be repeated or others<br><a>*Value: stretch, repeat, round, space*|3
[box-shadow][shadow]|Attaches one or more drop-shadows to the box<br><a>*Value: h-shadow v-shadow blur spread color, inset*|3


### Margin and Padding Properties

Property|Description|CSS
---|---|---
margin|Sets all the margin properties in one declaration<br><a>*Order: auto, length, %*|1
margin-top/right/bottom/left|Sets the top/right/bottom/left margin of an element<br><a>*Value: auto, length, %*|1
padding|Sets all the padding properties in one declaration<br><a>*Value: length, %*|1
padding-top/right/bottom/left|Sets the top padding of an element<br><a>*Value: lenght, %*|1

content < padding < border < margin < outline
The size of the collapsed margin is the largest margin.

### Basic Box Properties

Property|Description|CSS
---|---|---
clear|No floating elements allowed on the side of a specified<br><a>*Value: none, left, right, both*|1
clip|Clips an absolutely positioned element<br><a>*Value: auto, rect(top, right, bottom, left)*|2
[display][display]|Specifies how a certain HTML element should be displayed|1
visibility|Specifies whether or not an element is visible<br><a>*Value: visible, hidden, collapse*|2
float|Specifies whether or not a box should float<br><a>*Value: none, left, right*|1
height|Sets the height of an element<br><a>*Value: auto, length, %*|1
width|Sets the width of an element<br><a>*Value: auto, length, %*|1
top/right/bottom/left|Specifies the top/right/bottom/left position of a positioned element<br><a>*Value: auto, length, %*|2
[position][position]|Specifies the type of positioning method used for an element<br><a>*Value: static, relative, absolute, fixed*|2
vertical-align|Sets the vertical alignment of an element<br><a>*Value: baseline, sub, super, top, middle, bottom, text-top, text-bottom, length, %*|1
[z-index][zindex]|Sets the stack order of a positioned element<br><a>*Value: auto, number*|2
max-height|Sets the maximum height of an element<br><a>*Value: none, length, %*|2
max-width|Sets the maximum width of an element<br><a>*Value: none, length, %*|2
min-height|Sets the minimum height of an element<br><a>*Value: auto, length, %*|2
min-width|Sets the minimum width of an element<br><a>*Value: auto, length, %*|2

**<a id="positon">position:**
- Static(default): not affected by the top, bottom, left, and right properties.
- relative: positioned relative to its normal position, affected by the top, bottom, left, right properties.
- fixed: positioned relative to the viewport.
- absolute: positioned relative to the nearest positioned ancestor.

**<a id="zindex">z-index**
- Larger z-index element placed on the top.
- Only elements which positioned with CSS using absolute, relative, or fixed positioning can have z-index.
- z-index can be -1

### Overflow Properties

Property|Description|CSS
---|---|---
overflow|Specifies what happens if content overflows an element's box<br><a>*Value: visible, hidden, scroll, auto*|2
overflow-x|Specifies whether or not to clip the left/right edges of the content<br><a>*Value: visible, hidden, scroll, auto*|3
overflow-y|Specifies whether or not to clip the top/bottom edges of the content<br><a>*Value: visible, hidden, scroll, auto*|3


### Text Properties
Property|Description|CSS
---|---|---
hanging-punctuation|Specifies whether a punctuation character may be placed outside the line box|3
hyphens|Sets how to split words to improve the layout of paragraphs|3
letter-spacing|Increases or decreases the space between characters in a text<br><a>*Value: normal, length*|1
line-break|Specifies how/if to break lines|3
line-height|Sets the line height<br><a>*Value: normal, number, length, %*|1
tab-size|Specifies the length of the tab-character<br><a>*Value: number, length*|3
text-align|Specifies the horizontal alignment of text<br><a>*Value: left, right, center, justify*|1
text-align-last|Describes how the last line of a block or a line right before a forced line break<br> is aligned when text-align is "justify"<br><a>*Value: auto, left, right, center, justify, start, end*|3
text-combine-upright|Specifies the combination of multiple characters into the space of a single character|3
text-indent|Specifies the indentation of the first line in a text-block<br><a>*Value: length, %*|1
text-justify|Specifies the justification method used when text-align is "justify"|3
text-transform|Controls the capitalization of text<br><a>*Value: none, capitalize, uppercase, lowercase*|1
white-space|Specifies how white-space inside an element is handled<br><a>*Value: normal, nowrap, pre, pre-line, pre-wrap*|1
word-break|Specifies line breaking rules for non-CJK scripts<br><a>*Value: normal, break-all, keep-all*|3
word-spacing|Increases or decreases the space between words in a text<br><a>*Value: normal, length*|1
word-wrap|Allows long, unbreakable words to be broken and wrap to the next line<br><a>*Value: normal, break-word*|3


### Text Decoration Properties

Property|Description|CSS
---|---|---
text-decoration|Specifies the decoration added to text<br><a>*Value: none, underline, overline, line-through*|1
text-decoration-color|Specifies the color of the text-decoration<br><a>*Value: color*|3
text-decoration-line|Specifies the type of line in a text-decoration<br><a>*Value: none, underline, overline, line-through*|3
text-decoration-style|Specifies the style of the line in a text decoration<br><a>*Value: solid, double, dotted, dashed, wavy*|3
[text-shadow][textshadow]|Adds shadow to text<br><a>*Value: h-shadow v-shadow blur-radius color*|3
text-underline-position|Specifies the position of the underline|3

### Font Properties

Property|Description|CSS
---|---|---
[@font-face][fontface]|A rule that allows websites to download and use fonts other than the "web-safe" fonts<br><a>*Value: font-family src*|3
@font-feature-values|Allows authors to use a common name in font-variant-alternate for feature activated differently in OpenType|3
font|Sets all the font properties in one declaration<br><a>*Order: font-style, font-variant, font-weight, font-size/line-height, font-family*|1
font-style|Specifies the font style for text<br><a>*Value: normal, italic, oblique*|1
font-weight|Specifies the weight of a font<br><a>*Value: normal, bold, bolder, lighter, number*|1
[font-family][font-family]|Specifies the font family for text|1
font-feature-settings|Allows control over advanced typographic features in OpenType fonts|3
font-kerning|Controls the usage of the kerning information (how letters are spaced)|3
font-language-override|Controls the usage of language-specific glyphs in a typeface|3
font-size|Specifies the font size of text<br><a>*Value: xx-small, x-small, small, medium, large, x-large, xx-large, smaller, larger, length*|1
font-size-adjust|Preserves the readability of text when font fallback occurs|3
font-stretch|Selects a normal, condensed, or expanded face from a font family|3
font-synthesis|Controls which missing typefaces (bold or italic) may be synthesized by the browser|3
font-variant|Specifies whether or not a text should be displayed in a small-caps font<br><a>*Value: normal, small-caps*|1
font-variant-alternates|Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values|3
font-variant-caps|Controls the usage of alternate glyphs for capital letters|3
font-variant-east-asian|Controls the usage of alternate glyphs for East Asian scripts (e.g Japanese and Chinese)|3
font-variant-ligatures|Controls which ligatures and contextual forms are used in textual content of the elements it applies to|3
font-variant-numeric|Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers|3
font-variant-position|Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font|3


**Using Your Font：**


Font Formats:
- TTF (TrueType Fonts)
- OTF (OpenType Fonts)
- WOFF (The Web Open Font Format)
- WOFF 2.0 (The Web Open Font Format)
- EOT (Embedded OpenType Fonts)
- SVG Fonts

Font format|IE|Chrome|Firefox|Safari|Opera
---|---|---|---|---|---					
TTF/OTF|9.0*|4.0|3.5|3.1|10.0
WOFF|9.0|5.0|3.6|5.1|11.1
WOFF2|X|36.0|35.0*|X|26.0
SVG|X|4.0|X|3.2|9.0
EOT|6.0|X|X|X|X

**<a id="font-family">font-family**

There are 5 font families: sans-serif, serif, monospace, cursive, fantasy.
Each font-family contains a set of fonts that share common characterisitcs.


1. Style font-family:

		body { font-family: Verdana, Geneva, Arial, sans-serif; }
					    	----------------------   -----------
								    	|				|
		A list of fonts from the same family	Always put family name

	The order of using:Verdana > Geneva > Arial > the default sans-serif

1. How to add a Web Font to your page?

	1. Find a font.
	1. Make sure you have all the formats of the font you need.
	1. Place your font files on the Web.
		1. Place your font files on the Web.
		1. use font services coming online.(like: http://www.wickedlysmart.com/)
	1. Add the @font-face property to your CSS.
		```CSS
		@font-face {
		  font-family: "Your Font Name";
		  src: url("http://wickedlysmart.com/xxx.ttf"),
		       url("http://wickedlysmart.com/xxx.ttf");
		```

1. What is diffrent between font-families?

Font families|Diffrent
---|---
serif|newspaper print
sans-serif|more readable on computer screens
monospace|same width characters
cursive|handwritten
fantasy|decorative


**<a id="font-size">font-size**

`font-size: 14px;` means font-size should be 14 pixels high.
`font-size: 150%;` means font-size should be 150% of parent font size.
`font-size: 1.2em;` means font size should be 1.2 times parent font size.
`font-size: small;` font-size has xx-small, x-small, small, medium, large, x-large, xx-large, is about 20% larger than the previous size.

Specify font size:
1. Choose samll or medium in your body rule.
1. Choose percentages or em in other elements.
1. Be careful not to use pixel sizes, because some browsers have problems resizing those.(like IE)

Default font size:
1. Default body font size is 16 pixels.
1. `<h1>`:200% default font size.
1. `<h2>`:150% default font size.
1. `<h3>`:120% default font size.
1. `<h4>`:100% default font size.
1. `<h5>`:90% default font size.
1. `<h6>`:60% default font size.

**Set the size of font in placeholder**


### Writing Modes Properties

Property|Description|CSS
---|---|---
direction|Specifies the text direction/writing direction<br><a>*Value: ltr, rtl*|2
text-orientation|Defines the orientation of the text in a line|3
text-combine-upright|Specifies the combination of multiple characters into the space of a single character|3
unicode-bidi|Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document<br><a>*Value: normal, embed, bidi-override*|2


### Table Properties

Property|Description|CSS
---|---|---
border-collapse|Specifies whether or not table borders should be collapsed<br><a>*Value: separate, collapse*|2
border-spacing|Specifies the distance between the borders of adjacent cells<br><a>*Value: length*|2
caption-side|Specifies the placement of a table caption<br><a>*Value: top, bottom*|2
empty-cells|Specifies whether or not to display borders and background on empty cells in a table<br><a>*Value: show, hide*|2
table-layout|Sets the layout algorithm to be used for a table<br><a>*Value: auto, fixed*|2
width/height|sets the width/height of the table<br><a>*Value: length, %*|2

- 使用 collapse 后，只能单独设置 border-bottom 和 border-right（因为覆盖顺序问题）。
- 若把 border 属性设置在 td 元素内，则无法单独设置 th 样式。

### Lists and Counters Properties

Property|Description|CSS
---|---|---
[counter-increment][counterincrement]|Increments one or more counters|2
counter-reset|Creates or resets one or more counters<br><a>*Value: none, name, number*|2
list-style|Sets all the properties for a list in one declaration<br><a>*Value: list-style-type list-style-position list-style-image*|1
list-style-image|Specifies an image as the list-item marker<br><a>*Value: none, url*|1
list-style-position|Specifies if the list-item markers should appear inside or outside the content flow<br><a>*Value: *|1
list-style-type|Specifies the type of list-item marker<br><a>*Value: inside, outside*|1

Hoverable Table
`tr:hover {background-color: #f5f5f5}`

Striped Tables
`tr:nth-child(even) { background-color: #f2f2f2 }`

horizontal scroll bar


### Animation Properties

Property|Description|CSS
---|---|---
[@keyframes][keyframes]|Specifies the animation code<br>Syntax: @keyframes animationname {keyframes-selector {css-styles;}}|3
animation|A shorthand property for all the animation properties (except animation-play-state and animation-fill-mode)<br><a>*Value: name duration timing-function delay iteration-count direction fill-mode play-state*|3
animation-delay|Specifies a delay for the start of an animation<br><a>*Value: time*|3
animation-direction|Specifies whether or not the animation should play in reverse on alternate cycles<br><a>*Value: normal, reverse, alternate, alternate-reverse*|3
animation-duration|Specifies how many seconds or milliseconds an animation takes to complete one cycle<br><a>*Value: time*|3
animation-fill-mode|Specifies a style for the element when the animation is not playing (when it is finished, or when it has a delay)<br><a>*Value: none, forwards, backwards, both*|3
animation-iteration-count|Specifies the number of times an animation should be played<br><a>*Value: number, infinite*|3
animation-name|Specifies the name of the @keyframes animation<br><a>*Value: keyframename, none*|3
animation-play-state|Specifies whether the animation is running or paused<br><a>*Value: paused, running*|3
animation-timing-function|Specifies the speed curve of an animation<br><a>*Value: linear, ease, ease-in, ease-out, ease-in-out, step-start, step-end, steps(int,start, end), cubic-bezier(n,n,n,n)*|3

### Transform Properties

Property|Description|CSS
---|---|---
backface-visibility|Defines whether or not an element should be visible when not facing the screen<br><a>*Value: visible, hidden*|3
perspective|Specifies the perspective on how 3D elements are viewed<br><a>*Value: length*|3
perspective-origin|Specifies the bottom position of 3D elements<br><a>*Value: x-axis y-axis*|3
[transform(2d)][transform]|Applies a 2D transformation to an element<br><a>*Value: translate(), rotate(), scale(), skew(), skewX(), skewY(), matrix(scaleX,skewY,skewX,scaleY,translateX,translateY)*|3
[transform(3d)][transform]|Applies a 3D transformation to an element<br><a>*Value: translate3d(), translateX(), translateY(), translateZ(), rotate3d(), rotateX(), rotateY(), rotateZ(), scale3d(), scaleX(), scaleY(), scaleZ(), matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)*|3
transform-origin|Allows you to change the position on transformed elements<br><a>*Value: x-axis y-axis z-axis*|3
transform-style|Specifies how nested elements are rendered in 3D space<br><a>*Value: flat, preserve-3d*|3

### Transitions Properties

Property|Description|CSS
---|---|---
transition|A shorthand property for setting the four transition properties<br><a>*Value: property duration timing-function delay*|3
transition-property|Specifies the name of the CSS property the transition effect is for<br><a>*Value: none, all, property*|3
transition-duration|Specifies how many seconds or milliseconds a transition effect takes to complete<br><a>*Value: time*|3
[transition-timing-function][transitiontimingfunction]|Specifies the speed curve of the transition effect|3
transition-delay|Specifies when the transition effect will start<br><a>*Value: time*|3

### Basic User Interface Properties

Property|Description|CSS
---|---|---
box-sizing|Tells the browser what the sizing properties (width and height) should include<br><a>*Value: content-box, border-box*|3
content|Used with the :before and :after pseudo-elements, to insert generated content<br><a>*Value: normal, none, counter, attr, string, open-quote, close-quote, no-open-quote, no-close-quote, url*|2
cursor|Specifies the type of cursor to be displayed<br><a>*Value: value*|2
ime-mode|Controls the state of the input method editor for text fields|3
nav-up/right/down/left|Specifies where to navigate when using the arrow-up/right/down/left navigation key|3
nav-index|Specifies the tabbing order for an element|3
outline|Sets all the outline properties in one declaration<br><a>*Value: color, style, width*|2
outline-color|Sets the color of an outline<br><a>*Value: invert, color*|2
outline-offset|Offsets an outline, and draws it beyond the border edge<br><a>*Value: length*|3
outline-style|Sets the style of an outline<br><a>*Value: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset*|2
outline-width|Sets the width of an outline<br><a>*Value: medium, thin, thick, length*|2
resize|Specifies whether or not an element is resizable by the user<br><a>*Value: none, both, horizontal, vertical*|3
text-overflow|Specifies what should happen when text overflows the containing element<br><a>*Value: clip, ellipsis, string*|3

### Multi-column Layout Properties

Property|Description|CSS
---|---|---
break-after|Specifies the page-, column-, or region-break behavior after the generated box|3
break-before|Specifies the page-, column-, or region-break behavior before the generated box|3
break-inside|Specifies the page-, column-, or region-break behavior inside the generated box|3
column-count|Specifies the number of columns an element should be divided into<br><a>*Value: auto, number*|3
column-fill|Specifies how to fill columns|3
column-gap|Specifies the gap between the columns<br><a>*Value: length, normal*|3
column-rule|A shorthand property for setting all the column-rule properties<br><a>*Value: column-rule-width column-rule-style column-rule-color*|3
column-rule-color|Specifies the color of the rule between columns<br><a>*Value: color*|3
column-rule-style|Specifies the style of the rule between columns<br><a>*Value: none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset*|3
column-rule-width|Specifies the width of the rule between columns<br><a>*Value: medium, thin, thick, length*|3
column-span|Specifies how many columns an element should span across<br><a>*Value: 1, all*|3
column-width|Specifies the width of the columns<br><a>*Value: auto, length*|3
columns|A shorthand property for setting column-width and column-count<br><a>*Value: auto, column-width column-count*|3
widows|Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element|2

### Paged Media

Property|Description|CSS
---|---|---
orphans|Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element|2
page-break-after|Sets the page-breaking behavior after an element<br><a>*Value: auto, always, avoid, left, right*|2
page-break-before|Sets the page-breaking behavior before an element<br><a>*Value: auto, always, avoid, left, right*|2
page-break-inside|Sets the page-breaking behavior inside an element<br><a>*Value: auto, avoid*|2

### Generated Content for Paged Media

Property|Description|CSS
---|---|---
marks|Adds crop and/or cross marks to the document|3
quotes|Sets the type of quotation marks for embedded quotations<br><a>*Value: none, string*|2

### Filter Effects Properties

Property|Description|CSS
---|---|---
[filter][filter]|Defines effects (e.g. blurring or color shifting) on an element before the element is displayed|3

### Image Values and Replaced Content

Property|Description|CSS
---|---|---
image-orientation|Specifies a rotation in the right or clockwise direction that a user agent applies to an image (This property is likely going to be deprecated and its functionality moved to HTML)|3
image-rendering|Gives a hint to the browser about what aspects of an image are most important to preserve when the image is scaled|3
image-resolution|Specifies the intrinsic resolution of all raster images used in/on the element|3
object-fit|Specifies how the contents of a replaced element should be fitted to the box established by its used height and width|3
object-position|Specifies the alignment of the replaced element inside its box|3

**The  images width Property**
`width: 100%;`: The image can be sacled up to be larger than its orignal size.
`max-width: 100%;`: The image will scale donw, but never scale up to be larger than its original size.
`min-device-width`: Only checks the device width.
`min-width`: Checks the device width and the browser window width.



### Masking Properties

Property|Description|CSS
---|---|---
mask||3
mask-type||3

### Speech Properties

Property|Description|CSS
---|---|---
mark|A shorthand property for setting the mark-before and mark-after properties|3
mark-after|Allows named markers to be attached to the audio stream|3
mark-before|Allows named markers to be attached to the audio stream|3
phonemes|Specifies a phonetic pronunciation for the text contained by the corresponding element|3
rest|A shorthand property for setting the rest-before and rest-after properties|3
rest-after|Specifies a rest or prosodic boundary to be observed after speaking an element's content|3
rest-before|Specifies a rest or prosodic boundary to be observed before speaking an element's content|3
voice-balance|Specifies the balance between left and right channels|3
voice-duration|Specifies how long it should take to render the selected element's content|3
voice-pitch|Specifies the average pitch (a frequency) of the speaking voice|3
voice-pitch-range|Specifies variation in average pitch|3
voice-rate|Controls the speaking rate|3
voice-stress|Indicates the strength of emphasis to be applied|3
voice-volume|Refers to the amplitude of the waveform output by the speech synthesises|3

### Marquee Properties

Property|Description|CSS
---|---|---
marquee-direction|Sets the direction of the moving content|3
marquee-play-count|Sets how many times the content move|3
marquee-speed|Sets how fast the content scrolls|3
marquee-style|Sets the style of the moving content|3

## Some Syntax
### Comments


### Cascade

The color property in element is judged on the top of specificity.
To calculate the specificity:
1. If the selector have any ids, +100
1. If the selector have any classes or pseudo-classes, +10
1. If the selector have any element name, +1

### Short hand

	padding-top: 0px;
	padding-right: 20px;
	padding-buttom: 30px;
	padding-left: 10px;
		||
		\/
	padding: 0px 20px 30px 10px;
	顺时针顺序
	
	margin-top: 0px;
	margin-right: 20px;
	margin-bottom: 0px;
	margin-left: 20px;
		||
		\/
	margin: 0px 20px; 
	/* 0px(top+bottom) and 20px(right+left) */
	
	border-width: thin;
	border-style: solid;
	border-color: #007e7e;
		||
		\/
	border: thin solid #007e7e;
	border: width style color;

Long form more readable,shorthands less typing.

### Counters
- `counter-reset` - Creates or resets a counter
- `counter-increment` - Increments a counter value
- `content` - Inserts generated content
- `conter()` or `counters()` function - Adds the value of counter to an element


## Some Example
### Navigation Bar

There are two ways to create a horizontal navigation bar.
1. Inline List Items
`li { display: inline; }`
1. Floating List Items
`li { float: left; }`




Border Dividers
`li { border-right: 1px solid #bbb; }`
`li:last-child { border-right: none; }`

Basic Dropdown


### Tooltip
**Basic Tooltip**


**Positioning Tooltips**



**Tooltip Arrows**

**Fade In Tooltip**


## Gradients
Gradients let you display smooth transitions between two or more specified colors.
### Linear Gradients
- Basic
	- Syntax: `background: linear-gradient(direction, color1, color2);`
	- e.g. `background: linear-gradient(to right, blue, yellow);`
	- `to bottom` is default.
- Diagonal
	- Syntax: `background: linear-gradient(diagonal, color1, color2);`
	- e.g. `background: linear-gradient(to bottom right, blue, yellow);`
- Angles
	- Syntax: `background: linear-gradient(angle, color1, color2);`
	- e.g. `background: linear-gradient(-90deg, blue, yellow);`
- Multiple
	- Syntax: `background: linear-gradient(direction, color1, color2, color3...);`
	- e.g. `background: linear-gradient(left, red, orange, yellow, green, blue, indigo, violet);`
- Transparency
	- Syntax: `background: linear-gradient(direction, rbga1, rbga2);`
	- e.g. `background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));`
- Repeating
	- Syntax: `background: repeating-linear-gradient(angle, color1, color2 %, color3 %);`
	- e.g. `background: repeating-linear-gradient(45deg, red, yellow 7%, green 10%);`

**Note:** `background: red;` For browsers that do not support gradients.

### Radial Gradients
- Basic
	- Syntax: `background: radial-gradient(shape size at position, color1 %, color2 %,...);`
	- e.g. `background: radial-gradient(red 5%, yellow 15%, green 60%);`
- Shape
	- Syntax: `background: radial-gradient(circle/ellipse, color1 %, color2 %,...);`
- Diffrent Size Keywords
	- Syntax: `background: radial-gradient(Size, color1 %, color2 %,...);`
	- Size: closest-side, farthest-side, closest-corner, farthest-corner
- Repeating
	- Syntax: `background: repeating-radial-gradient(color1, color2, color3...);`
	- e.g. `background: repeating-radial-gradient(red, yellow 10%, green 15%);`

## Responsive Web Design

RWD makes your web page look good on all devices.
RWD uses only HTML and CSS.
RWD is not a program or a JavaScript.
### Add CSS to HTML elements in 3 ways:
1. Inline - using a **style attribute**.


1. Internal - using a `<style>` element in `<head>` section.


1. External - using **external CSS files**
	You can link more than one CSS file.


Part|Mean
---|---
link|Link in external information.
type|A CSS stylesheet(in HTML5,it's optional).
rel|The relationship between the HTML file and the thing you're linking to.
href|The href of stylesheet.

### Link to diffrent CSS file
1. Link the stylesheet by width.
	1. Syntax:
		`<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">`
	1. Smartphone:
		`<link rel="stylesheet" href="smartphone.CSS"`<br>`media="screen and (max-device-width: 480 px)">`
	1. Tablet with portrait:
		`<link rel="stylesheet" href="tablet-portrait.CSS" `<br>`media="screen and (max-device-width: 1024px) and (orientation:portrait)">`
	1. Tablet with landscape:
		`<link rel="stylesheet" href="tablet-landscape.CSS" `<br>`media="screen and (max-device-width: 1024px) and (orientation:landscape)">`
	1. TV:
		`<link rel="stylesheet" href="tv.CSS" `<br>`media="screen and (max-device-width: 2650px)">`

1. Link the styelsheet by devices.
	`<link type="text/CSS" href="CSSfile.CSS" rel="stylesheet" media="screen">`
	1. `all`: all media type devices
	1. `screen`: computer screen
	1. `handheld`: smartphone
	1. `print`: printer

### Media Query


[Media Reference][media]

### Vendor-specific CSS properties
Specific CSS by diffrent browser.


### Cascading Order
Cascading order high to low:
1. Inline styl
1. External and internal style sheets
	The stylesheets on the bottom taking precedence.
1. Browser default

### The Viewport
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
1. Do NOT use large fixed width elements
	For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.

2. Do NOT let the content rely on a particular viewport width to render well
	Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.

3. Use CSS media queries to apply different styling for small and large screens
	Setting large absolute CSS widths for page elements, will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.

### [Grid-Vies][gridvies]
Split the veiw into 12 columns.


***
## 本文相关
1. 参考
	[*Head.First.HTML.and.CSS*](http://www.baidu.com/link?url=Of1cxhU6uvQgdpge9Bl3LVAzOkQVnvf1eG866ayfmDjlqDBafF493zpTEK6Jwhhfthoy2BU-dZRfGKMcVP8ucK&wd=&eqid=8b33082a00015eab0000000556a9c6ad)
	[CSS Tutorial - w3schools.com](http://www.w3schools.com/css/default.asp)
1. 修订
	2016-01-28:第一版
	2016-02-15:整合了 *w3schools.com* 部分内容
  2016-03-25:flex 部分从本文中移除，作为单独主题重写。

[back1]:http://www.w3schools.com/cssref/pr_background-blend-mode.asp
[shadow]:http://www.w3schools.com/cssref/css3_pr_box-shadow.asp
[display]:http://www.w3schools.com/cssref/pr_class_display.asp
[textshadow]:http://www.w3schools.com/cssref/css3_pr_text-shadow.asp
[fontface]:http://www.w3schools.com/cssref/css3_pr_font-face_rule.asp
[counterincrement]:http://www.w3schools.com/cssref/pr_gen_counter-increment.asp
[keyframes]:http://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp
[transform]:http://www.w3schools.com/cssref/css3_pr_transform.asp
[transitiontimingfunction]:http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp
[filter]:http://www.w3schools.com/cssref/css3_pr_filter.asp
[gridvies]:http://www.w3schools.com/css/tryit.asp?filename=tryresponsive_col-s
[color]:#color
[font-family]:#font-family
[position]:#position
[zindex]:#zindex
[media]:http://www.w3schools.com/cssref/css3_pr_mediaquery.asp
