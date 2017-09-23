----
title: Canvas
date: 2016-07-21 18:38:44
tags:
- HTML
----
## Canvas Home
- he HTML `<canvas>` element is used to draw graphics on a web page.
- The `<canvas>` element is only a container for graphics. You must use a script to actually draw the graphics.


## Basic Canvas Drawing

HTML parts:
- The width and height attribute is necessary to define the size of the canvas.
- By default, the `<canvas>` element has no border and no content.

JS parts:
1. Find the Canvas Element
1. Create a Drawing Object
  The getContext() is a built-in HTML object, with properties and methods for drawing:
1. Draw on the Canvas


## Canvas Coordinates
### Canvas Coordinates
- The HTML canvas is a two-dimensional grid.
- The upper-left corner of the canvas has the coordinates (0,0)

#### Draw a Line


#### Draw a Circle

arc(x,y,r,startangle,endangle,clockwise) - creates an arc/curve. 
- x/y: x/y-coordinates
- r: radius
- clockwise[option]: true or false, the drawing should be counterclockwise or clockwise
- startangle/endangle

**Note:** Need `ctx.beginPath()` for each geometry path.
![alt angle](http://www.w3schools.com/tags/img_arc.gif)

## Canvas Gradients
There are two different types of gradients:
1. createLinearGradient(x,y,x1,y1) - creates a linear gradient
1. createRadialGradient(x,y,r,x1,y1,r1) - creates a radial/circular gradient

The addColorStop() method specifies the color stops, and its position along the gradient. Gradient positions can be anywhere between 0 to 1.
To use the gradient, set the fillStyle or strokeStyle property to the gradient, then draw the shape (rectangle, text, or a line).

### Using createLinearGradient()
Create a linear gradient. Fill rectangle with the gradient:

### Using createRadialGradient():
Create a radial/circular gradient. Fill rectangle with the gradient:

## Canvas Text
### Using fillText()

### Using strokeText()

### Add Color and Center Text


## Canvas Images

You cannot draw the image before the image has loaded. Call the function from window.onload().

## Canvas Reference
### Colors, Styles, and Shadows

Property|Description
---|---
fillStyle|Sets or returns the color, gradient, or pattern used to fill the drawing
strokeStyle|Sets or returns the color, gradient, or pattern used for strokes
shadowColor|Sets or returns the color to use for shadows
shadowBlur|Sets or returns the blur level for shadows
shadowOffsetX|Sets or returns the horizontal distance of the shadow from the shape
shadowOffsetY|Sets or returns the vertical distance of the shadow from the shape

Method|Description
---|---
createLinearGradient()|Creates a linear gradient (to use on canvas content)
createPattern()|Repeats a specified element in the specified direction
createRadialGradient()|Creates a radial/circular gradient (to use on canvas content)
addColorStop()|Specifies the colors and stop positions in a gradient object

### Line Styles

Property|Description
---|---
lineCap|Sets or returns the style of the end caps for a line
lineJoin|Sets or returns the type of corner created, when two lines meet
lineWidth|Sets or returns the current line width
miterLimit|Sets or returns the maximum miter length

### Rectangles

Method|Description
---|---
rect()|Creates a rectangle
fillRect()|Draws a "filled" rectangle
strokeRect()|Draws a rectangle (no fill)
clearRect()|Clears the specified pixels within a given rectangle

### Paths

Method|Description
---|---
fill()|Fills the current drawing (path)
stroke()|Actually draws the path you have defined
beginPath()|Begins a path, or resets the current path
moveTo()|Moves the path to the specified point in the canvas, without creating a line
closePath()|Creates a path from the current point back to the starting point
lineTo()|Adds a new point and creates a line to that point from the last specified point in the canvas
clip()|Clips a region of any shape and size from the original canvas
quadraticCurveTo()|Creates a quadratic Bézier curve
bezierCurveTo()|Creates a cubic Bézier curve
arc()|Creates an arc/curve (used to create circles, or parts of circles)
arcTo()|Creates an arc/curve between two tangents
isPointInPath()|Returns true if the specified point is in the current path, otherwise false

### Transformations

Method|Description
---|---
scale()|Scales the current drawing bigger or smaller
rotate()|Rotates the current drawing
translate()|Remaps the (0,0) position on the canvas
transform()|Replaces the current transformation matrix for the drawing
setTransform()|Resets the current transform to the identity matrix. Then runs transform()

### Text

Property|Description
---|---
font|Sets or returns the current font properties for text content
textAlign|Sets or returns the current alignment for text content
textBaseline|Sets or returns the current text baseline used when drawing text

Method|Description
---|---
fillText()|Draws "filled" text on the canvas
strokeText()|Draws text on the canvas (no fill)
measureText()|Returns an object that contains the width of the specified text

### Image Drawing

Method|Description
---|---
drawImage()|Draws an image, canvas, or video onto the canvas

### Pixel Manipulation

Property|Description
---|---
width|Returns the width of an ImageData object
height|Returns the height of an ImageData object
data|Returns an object that contains image data of a specified ImageData object

Method|Description
---|---
createImageData()|Creates a new, blank ImageData object
getImageData()|Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
putImageData()|Puts the image data (from a specified ImageData object) back onto the canvas

### Compositing

Property|Description
---|---
globalAlpha|Sets or returns the current alpha or transparency value of the drawing
globalCompositeOperation|Sets or returns how a new image are drawn onto an existing image

### Other

Method|Description
---|---
save()|Saves the state of the current context
restore()|Returns previously saved path state and attributes
createEvent()| 
getContext()| 
toDataURL()| 


***
**本文相关**
1. 参考
[canvas - w3schools](http://www.w3schools.com/tags/ref_canvas.asp)
1. 修订
2016:第一版
