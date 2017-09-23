----
title: Standards for CSS
date: 2016-07-21 18:38:44
tags:
- CSS
----
title: Standards for HTML and CSS
date: 
Standards for developing flexible, durable, and sustainable HTML and CSS.
>Golden rule:
Enforce these, or your own, agreed upon guidelines at all times. Small or large, call out what's incorrect. For additions or contributions to this Code Guide, please open an issue on GitHub.
Every line of code should appear to be written by a single person, no matter the number of contributors.

## CSS
### CSS syntax
- Use soft tabs with *two spaces*.
- When grouping selectors,keep individual selectors to a single line.

- Include one space before the opening brace of declaration blocks for legibility.
- Place closing braces of declaration blocks on a new line.
- Include one space after `:` for each declaration.
- Each declaration should appear on its own line for more accurate error reporting.
- End all declarations with a semi-colon`;`.

- Comma-separated property value should include a space after each comma(e.g.`, box-shadow`).
- Don't include spaces after commas within `rgb()`,`rgba()`,`hsl()`,`hsla()`,or`rect()`values.This helps diffrentiate multiple color values from multiple property values.(e.g. `rgb(0,0,0,.5);`)
- Don't prefix property values or color parameters with a leading zero(e.g.`.5`, `-.5px`).
- Lowercase all hex values(e.g.`#fff`)
- Use shorthand hex values where available(e.g.`#ffffff` ==> `#fff`).
- Quote attribute values in selector(e.g.`input[type="text"]`).
- Avoid specifying units for zero values(e.g.`margin: 0px;;` ==> `margin: 0;`)

### Declaration order
Following the order:
1. Positioning
1. Box mode
3. Typographic
1. Visual


For a complete list of properties and their order, please see [Recess][2]

### Don't use @import
Compared to `<link>`s, `@import` is slower, adds extra page requests, and can cause other unforeseen problems. Avoid them and instead opt for an alternate approach:
1. Use multiple <link> elements
1. Compile your CSS with a preprocessor like Sass or Less into a single file
1. Concatenate your CSS files with features provided in Rails, Jekyll, and other environments### Media query placement

### Media query placement
Place media queries as close to their relevant rule sets whenever possible.


### Prefixed properties
When using vendor prefixed properties, indent each property such that the declaration's value lines up vertically for sasy multi-line editing.

### Single declarations
- Single declaration on one line.

- Multiple declartion should be split to separate lines.


### Shorthand notation
Strive to limit use of shorthand declarations to instances where you must explicitly set all the available values(e.g.`margin:0 0 10px;` ==> `margin-bottom: 10px;`).

### Nesting in Less and Sass
Avoid unnecessary nesting.

### Operators in Less and Sass
Wrap all math operations in parentheses with a single space betwwen values, variables, and operators.


### Class names
- Keep classes lowercase and use dashes`-`(not underscores`_` or camelCase).
- Avoid excesssive and arbitrary shorthand notation.
- Keep classes as short and succinct as possible.
- Use meaningful names; use structural or puerposeful names over presentational.
- Prefix classes based on the closest parent or base class.
- Use `.js-*` classes to denote behavior (as opposed to style), but keep these classes out of your CSS.

### Selectors
- Use classes over generic element tag for optimum rendering performance.
- Avoid using several attribute selectors (e.g.,`[class^="..."]) on commonly occuring components.
- Keep selectors short and strive to limit the number of elements in each selector to three.
- Scope classes to the closest parent only when necessary(e.g., when not using prefixed classes).

### Organization
- Organize sections of code by component.
- Develop a consistent commenting hierarchy.
- Use consistent white space to your advantage when separeting sections of code for scanning larger documents.
- when using multiple CSS files, break them down by component instead of page. Pages can be rearranged and components moved.

## Editor
- Use soft-tabs set to two spaces.
- Trim trailling white space on save.
- Set encoding to UTF-8
- Add new line at end of files.

***
## 本文相关
1. 参考
[1]:http://reference.sitepoint.com/html/lang-codes
[2]:http://twitter.github.io/recess/

1. 修订
2016-01-30:第一版
