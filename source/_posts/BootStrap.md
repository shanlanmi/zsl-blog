----
title: BootStrap
date: 2016-07-21 18:38:44
tags:
- CSS
----
## Basic Bootstrap Page
A Basic Bootstrap Pages:

- Require the HTML5 doctype
  ```html
  <!DOCTYPE html>
  ```
- Mobile-first styles
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
  `width=device-width`: sets the width of the page to follow the **screen**-**width** of the device.
  `initial-scale=1`: sets the initial **zoom** **level** when the page is first loaded by the browser.
- Latest compiled and minified CSS
  ```html
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <!-- Bootstrap中文网加速服务 -->
  <link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css">
  ```
- jQuery library, need include **before** `bootstrap.min.js`
  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <!-- Bootstrap中文网加速服务 -->
  <script src="http://cdn.bootcss.com/jquery/1.12.1/jquery.min.js"></script>
  ```
- Latest compiled JavaScript
  ```html
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <!-- Bootstrap中文网加速服务 -->
  <script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  <script src="http://cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  ```
- Containers
  Bootstrap also requires a containing element to wrap site contents.
  There are two container classes to choose from:
  1. `.container` class provides a responsive **fixed** **width** container
  1. `.container-fluid` class provides a **full** **width** container, spanning the entire width of the viewport
  Note: Containers are **not** **nestable**.

[BootCDN加速服务][cdn]
## Grids
**System**
- Bootstrap's grid system allows up to **12** **columns** across the page.
- You can group the columns together to create wider columns.
- Bootstrap's grid system is responsive.
- Grid columns should add up to **twelve** for a row.

**Grid Classes**
- xs (for phones)
- sm (for tablets)
- md (for desktops)
- lg (for larger desktops)

Tip: Each class scales up, so if you wish to set the same widths for xs and sm, you only need to specify xs. 

**Grid System Rules**
- Rows must be placed within a `.container` (fixed-width) or `.container-fluid` (full-width) for proper alignment and padding
- Use `.row` to create horizontal groups of columns
- Content should be placed within columns, and only columns may be **immediate** children of rows
- Predefined classes like `.row` and `.col-sm-4` are available for quickly making grid layouts
- Columns create gutters (gaps between column content) via padding. That padding is offset in rows for the first and last column via negative margin on `.row`s
- Grid columns are created by specifying the number of 12 available columns you wish to span. For example, three equal columns would use three `.col-sm-4`

**Basic Structure of a Bootstrap Grid**


**Grid Options**

 |Extra small devices<br>Phones (<768px)|Small devices<br>Tablets (>=768px)|Medium devices<br>Desktops (>=992px)|Large devices<br>Desktops (>=1200px)
---|---|---|---|---
Grid behaviour|Horizontal at all times|Collapsed to start, horizontal above breakpoints|Collapsed to start, horizontal above breakpoints|Collapsed to start, horizontal above breakpoints
Container width|None (auto)|750px|970px|1170px
Class prefix|.col-xs-|.col-sm-|.col-md-|.col-lg-
Number of columns|12|12|12|12
Column width|Auto|~62px|~81px|~97px
Gutter width|30px (15px on each side of a column)|30px (15px on each side of a column)|30px (15px on each side of a column)|30px (15px on each side of a column)
Nestable|Yes|Yes|Yes|Yes
Offsets|Yes|Yes|Yes|Yes
Column ordering|Yes|Yes|Yes|Yes

**Nested Columns**


**Clear Floats**


**Offsetting Columns**
Move columns to the right using `.col-md-offset-*` classes.
These classes increase the left margin of a column by * columns. 

**Push And Pull - Change Column Ordering**
Change the order of the grid columns with `.col-md-push-*` and `.col-md-pull-*` classes.
## Components
### Typography
**Default Setting**
  ```css
  * {
  font-size: 14px;
  line-height: 1.428;
  }
  p { margin-bottom: 10px; }
  ```
[Bootstrap CSS Typography Reference][typography]

### Tables
**`<table>` Classes**

Class|Description
---|---
.table|Adds basic styling (light padding and only horizontal dividers) to any `<table>`
.table-striped|Adds zebra-striping to any table row within `<tbody>` (not available in IE8)
.table-bordered|Adds border on all sides of the table and cells
.table-hover|Enables a hover state on table rows within a `<tbody>`
.table-condensed|Makes table more compact by cutting cell **padding** in **half**

**`<tr>`, `<th>` and `<td>` Classes**

Class|Description
---|---
.active|Applies the hover color to a particular row or cell
.success|Indicates a successful or positive action
.info|Indicates a neutral informative change or action
.warning|Indicates a warning that might need attention
.danger|Indicates a dangerous or potentially negative action

**Responsive Tables**
The table will then **scroll** **horizontally** on small devices (under 768px). When viewing on anything larger than 768px wide, there is no difference:


### Images
**`<img>` Classes**

Class|Description
---|---
.img-rounded|Adds rounded corners to an image (not available in IE8)
.img-circle|Shapes the image to a circle (not available in IE8)
.img-responsive|Applies max-width: 100%, height: auto, and display:block to the image

**Responsive Embeds**
- Also let videos or slideshows scale properly on any device.
- Classes can be applied directly to `<iframe>`, `<embed>`, `<video>`, and `<object>` elements.

### Jumbotron

Class|Description
---|---
.jumbotron|Creates a grey box with some information
.page-header|Creates a page header

Example:


### Wells

Class|Description
---|---
.well|Adds a **rounded** border around an element with a **gray** background color and some padding
.well-sm|Change the size to small
.well-lg|Change the size to lager

### Alerts
**The Alert Plugin Classes**

Class|Description
---|---
.alert|Creates an alert message **box**
.alert-success|Indicates a successful or positive action
.alert-info|Contextual button for informational alert messages
.alert-warning|Indicates caution should be taken with this action
.alert-danger|Indicates a dangerous or potentially negative action
.close|Styles the close button for the alert message (floats right with a specified font-size, color, etc.)
.fade in|adds a fading effect when closing the alert message

**Closing Alerts**

[Bootstrap JS Alert][alert]

### Buttons
The classes below can be used to style any `<a>`, `<button>`, or `<input>` element:

Class|Description
---|---
.btn|Adds basic styling to any button
<span style="background-color:white;">.btn-default</span>|Indicates a default/standard button
<span style="background-color:#327ab7;color:white;">.btn-primary</span>|Provides extra visual weight and identifies the primary action in a set of buttons
 <span style="background-color:#5cb85c;color:white;">.btn-success</span>|Indicates a successful or positive action
 <span style="background-color:#5bc0de;color:white;">.btn-info</span>|Contextual button for informational alert messages
 <span style="background-color:#f0ad4e;color:white;">.btn-warning</span>|Indicates caution should be taken with this action
 <span style="background-color:#d9534f;color:white;">.btn-danger</span>|Indicates a dangerous or potentially negative action
.btn-link|Makes a button look like a link (will still have button behavior)
|
.btn-lg|Makes a large button
.btn-md|Makes a medium button
.btn-sm|Makes a small button
.btn-xs|Makes an extra small button
|
.btn-lg|Makes a large button
.btn-block|Makes a block-level button (spans the full width of the parent element)
|
.active|Makes the button appear pressed
.disabled|Makes the button disabled

### Button Groups
**Creat a button group**

Use class `.btn-group-*` to style the all bottons in the group.

Class|Description
---|---
.btn-group-vertical|Create a vertical botton group
.btn-group-justified|Span the entire width of the screen

**Note**: For `<button>` elements with `btn-group-justified`, you must wrap each button in a .btn-group class:


**Nesting Button Group & Dropdown Menus**


**Split Button Dropdowns**


### Glyphicons
Syntax:


[Glyphicons Reference][glyphicon]

### Badges/Labels
**Badges**
Badges are numerical indicators of how many items are associated with a link
Syntax:


**labels**
Syntax:

Label classes: default, primary, success, info, warning, danger

### Progress Bars
**Basic Progress Bar**

- `aria-*` attributes will help peolpe using screen readers.

**Bar With Label**

- Colored bar:
  - `.progress-bar-success`
  - `.progress-bar-info`
  - `.progress-bar-warning`
  - `.progress-bar-danger`


Class|Description
---|---
.progress-bar-striped|Adds stripes to the progress bars
.active|Animates the progress bar

**Stacked Progress Bars**


### Pagination
Breadcrumb and Pagination

Class|Description
---|---
.pagination|Provides pagination links
.active|Indicates the **current** page
.disabled|Indicates an **unclickable** link
.pager|Provides simple pagination links (Previous/Next)
.previous|Aligns the .pager previous button to the **left**
.next|Aligns the .pager next button to the **right**
.pagination-sm|Used together with the .pagination class to provide smaller pagination links
.pagination-lg|Used together with the .pagination class to provide larger pagination links
.breadcrumb|Makes a breadcrumb

[Pagination Reference][pagination]
### List Groups
Syntax:

- The items in a list group can also be hyperlinks, use `<div>` instead of `<ul>` and `<a>` instead of `<li>`.
- Supports: `.badge`, `.active`, `.disabled`, `.list-group-item-success`, `list-group-item-info`, `list-group-item-warning`, `.list-group-item-danger`, `.list-group-item-heading`, `.list-group-item-text`

### Panels
Syntax:

- Supports: `.panel-heading`, `.panel-footer`, `.panel-default`, `.panel-primary`, `.panel-success`, `.panel-info`, `.panel-warning`, `.panel-danger`

**Panel Group**


### Dropdowns

**Basic Dropdowns**

Class|Description
---|---
.dropdown|Indicates a dropdown menu
.dropdown-menu|Builds the dropdown menu
.dropdown-menu-right|Right-aligns a dropdown menu
.dropdown-header|Adds a header inside the dropdown menu
.dropup|Indicates a dropup menu
.disabled|Disables an item in the dropdown menu
.divider|Separates items inside the dropdown menu with a horizontal line

- Supports: `dropdown-header`, `dropdown-disabled`

Example:


**Via data-* Attributes**


**Dropdown Accessibility**


[Dorpdown Reference][dorpdown]

### Collapse
**Basic Collapse**
Syntax:


- For `<a>` element, using `href` install of the `data-target`.
  ```html
  <a href="#demo" data-toggle="collapse">Collapsible</a>
  ```
- Setting show the content by dafault by add the `.in` class.
  ```html
  <div id="demo" class="collapse in">
  ```

**Collapsible Panel**


**Accordion**
Use the `data-parent` attribute to make sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.


[Collapse Reference][collapse]

### Tabs and Pills

**Tabs and Pills Classes**

Class|Description
---|---
.nav nav-tabs|Creates navigation tabs
.nav nav-pills|Creates navigation pills
.nav nav-pills nav-stacked|Creates vertical navigation pills
.nav-justified|Makes navigation tabs/pills equal widths of their parent,<br>at screens wider than 768px. On smaller screens, the nav tabs/pills are stacked
.disabled|Indicates a disabled (unclickable) tab/pill
.tab-content|Together with `.tab-pane` and `data-toggle="tab"` (`data-toggle="pill"` for pills), it makes the tab/pill toggable
.tab-pane|Together with `.tab-content` and `data-toggle="tab"` (`data-toggle="pill"` for pills), it makes the tab/pill toggable

On a small screen, the pills will automatically adjust itself into a single-column layout.

**Tabs With Dropdown Menu**


**Toggleable / Dynamic Tabs/Pills**


[Tabs and Pills Reference][tabPill]

### Navbar
Example:


Class|Description
---|---
.navbar-inverse|Sets the style of navigation to black
.navbar-fixed-top|Makes the navigation bar fixed at the top
.navbar-fixed-bottom|Makes the navigation bar stay at the bottom
.navbar-right|Places the bar button at right side

**Collapsing The Navigation Bar**


### Forms
All textual `<input>`, `<textarea>`, and `<select>` elements with class .form-control have a width of 100%.

- Bootstrap provides three types of form layouts:
  - Vertical form (this is default)
  - Horizontal form
    - Add class `.form-horizontal` to the `<form>` element
    - Add class `.control-label` to the `<label>` element
  - Inline form 
    - Add class `.form-inline` to the `<form>` element
- Standard rules for all three form layouts:
  - Always use `<form role="form">` (helps improve accessibility for people using screen readers)
  - Wrap labels and form controls in `<div class="form-group">` (needed for optimum spacing)
  - Add class `.form-control` to all textual `<input>`, `<textarea>`, and `<select>` elements


**Bootstrap Form Control**

Class|Description
---|---
.form-control|input element
.comment|textarea element
.checkbox|checkbox element
.checkbox-inline|checkbox element
.radio|radio element
.radio-inline|radico element
.form-control-static|Inserts plain text next to a form label within a horizontal form

**Select List**



**Bootstrap Form Control States**

- Input Focus - The outline of the input is removed and a box-shadow is applied on focus
- Disabled Inputs - Add a `disabled` attribute to disable an input field
- Disabled Fieldsets - Add a `disabled` attribute to a fieldset to disable all controls within
- Readonly Inputs - Add a `readonly` attribute to an input to prevent user input
- Validation States - Bootstrap includes validation styles for error, warning, and success messages. To use, add `.has-warning`, `.has-error`, or `.has-success` to the parent element
- Icons - You can add feedback icons with the `.has-feedback` class and an icon
- Hidden Labels - Add a `.sr-only` class on non-visible labels

**Bootstrap Input Sizing**
- Height: .`input-lg`, `.input-sm`
- Width: `.col-lg-*`, `.col-sm-*`

**Help Text**
Use the `.help-block` class to add a block level help text in forms.

### Carousel

[Carousel Reference][carousel]

### Modal
**The Modal Plugin Classes**

Class|Description
---|---
.modal|Creates a modal
.modal-content|Styles the modal properly with border, background-color, etc. Use this class to add the modal's header, body, and footer.
.modal-header|Defines the style for the header of the modal
.modal-body|Defines the style for the body of the modal
.modal-footer|Defines the style for the footer in the modal.<br> Note: This area is right-aligned by default. To change this, overwrite CSS with text-align:left/center
.modal-sm|Specifies a small modal, add with class `.modal-dialog`
.modal-lg|Specifies a large modal, add with class `.modal-dialog`
.fade|Adds an animation/transition effect which fades the modal in and out

**Example**


[Modal Reference][modal]

### Tooltip
The Tooltip plugin is small pop-up box that appears when the user moves the mouse **pointer** **over** an element.
**Create a Tooltip**


**Positioning Tooltips**
- data-placement="top"
- data-placement="bottom"
- data-placement="left"
- data-placement="right"
- data-placement="auto left"

[Tooltip Reference][tooltip]

### Popover
The Poppver is a pop-up box that appears when the user clicks on an element.
**Create a Popover**


**Positioning Popovers**
- data-placement="top"
- data-placement="bottom"
- data-placement="left"
- data-placement="right"
- data-placement="auto left"

**Closing Popovers**
- `data-trigger="focus"`: Close the popover when clicking outside the element
- `data-trigger="hover"`: Displays the popover when the mouse pointer over the element

[Popover Reference][popover]

### Scrollspy
The Scrollspy plugin is used to automatically update links in a navigation list based on scroll position.



[Scrollspy Reference][scrollspy]

### Affix
[Affix Reference][affix]

***
### 本文相关
1. 参考
[Bootstrap](http://getbootstrap.com/components/)
[W3Schools - Bootstrap](http://www.w3schools.com/bootstrap/default.asp:)
1. 修订
2016:第一版

[typography]:http://www.w3schools.com/bootstrap/bootstrap_ref_css_text.asp
[alert]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_alert.asp
[glyphicon]:http://www.w3schools.com/bootstrap/bootstrap_ref_comp_glyphs.asp
[pagination]:http://www.w3schools.com/bootstrap/bootstrap_ref_comp_navs.asp
[dorpdown]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_dropdown.asp
[collapse]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_collapse.asp
[tabPill]:http://www.w3schools.com/bootstrap/bootstrap_ref_comp_navs.asp
[carousel]:http://www.w3schools.com/bootstrap/bootstrap_carousel.asp
[modal]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
[tooltip]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_tooltip.asp
[popover]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_popover.asp
[scrollspy]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
[affix]:http://www.w3schools.com/bootstrap/bootstrap_ref_js_affix.asp
[cdn]:http://www.bootcdn.cn
