----
title: Standards for HTML
date: 2016-07-22 09:26:41
tags:
- HTML
----
Standards for developing flexible, durable, and sustainable HTML and CSS.
>Golden rule:
Enforce these, or your own, agreed upon guidelines at all times. Small or large, call out what's incorrect. For additions or contributions to this Code Guide, please open an issue on GitHub.
Every line of code should appear to be written by a single person, no matter the number of contributors.

## HTML
### Syntax
- Use soft tabs with *two* spaces.
- Nested elements should be indented once(two spaces).
- Always use *double quotes*, on attributes.
- Don't include a trailiing slash in self-closing elements(e.g.`<img/>`).
- Don't omit optional closing tags(e.g.`</li>`).
- Not nested:html, head, body and the elements which nested body tag.

### HTML5 doctype
- Put this simple `<!DOCTYPE html>` at the beginning of every HTML page.

### Language attribute
- Specify a lang attribute on the root html element.(e.g.`<html lang="en-us">)
- Head to Sitepoint for a [list of language codes][1].

### IE compatibility mode
- Unless circumstances require otherwise, use the latest supported mode with **edge mode**.(e.g.`<meta http-equiv="X-UA-Compatible" content="IE=Edge">`)

### Character encoding
- Declaring an explicit character encoding(e.g.`<meta charset="UTF-8">).

### CSS and JavaScript includes
- There is no need to specify a `type` when including CSS and JavaScript files.
example:
	1. `<link rel="sytlesheet" href="code-guide.css">`
	2. `<style> ... </style>`
	3. `<script src="code-guide.js">...</script>`

### Practicality over purity
- Use the least amout of markup when possible.

### Attribute order
- HTML attributes should come in this particular order.
	1. `class`
	1. `id`, `name`
	1. `data-*`
	1. `src`, `for`, `type`, `href`, `value`
	1. `title`, `alt`
	1. `role`, `aria-*`

e.g.`<a class="..." id="..." data-toggle="modal" href="#">`

### Boolean attributes
- Declared a boolean attribute needs no add a value.
- The presence of the boolean attribute represents the true value.
- The absence of the boolean attribute represents the false value.

### Reducing markup
Avoid superfluous parent elements.

### JavaScript generated markup
Writing markup in a JavaScript file makes the content easier to find,easier to edit, and more performant.