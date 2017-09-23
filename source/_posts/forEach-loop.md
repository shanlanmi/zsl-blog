----
title: forEach loop
date: 2016-11-06 09:52:39
tags:
- JavaScirpt
----
# The intuitive and powerful forEach loop in JavaScript 

forEach loops in JavaScripts are pretty great, here's how to use them with arrays, nodeLists, and HTMLCollections.

## Array.prototype.forEach() 

forEach loops as a concept are somehow more intelligible and easier to fathom than the traditional for loop, at least the syntax is cleaner.

Here’s the basics:

    var normalArray = [2, 3, 5, 7, 11];
    normalArray.forEach(function(el, i, arr) {
      console.log('Current ' + el + ', Index ' + i + ', Original array', arr);
    });
    

You can just paste that into devTools to see what it does.

Let’s boil that down line by line:

- var normalArray = [2, 3, 5, 7, 11];
Just a normal, boring, no-thrills array- normalArray.forEach(function(el, i, arr) {
Pass the array to the forEach function, the forEach takes a callback function, the callback in turn takes 3 parameters:  
1. el: the current array element  
2. i: index number of the current iteration  
3. arr: the original array if needed
What about [nodeList][0] or [HTMLCollection][1]?

### Looping HTMLCollection or a nodeList with forEach 

Here’s our super simple HTML that we’re gonna be working on:

    <div class="module"></div>
    <div class="module"></div>
    <div class="module"></div>
    

HTMLCollection or a nodeList are not arrays, per se, they’re “array-like objects”, and we can’t use forEach on them right out the box. But, what we can do is to call the Arrays forEach method directly, like so:

    var htmlCollectionArray = document.getElementsByClassName('module'),
    // You have to call the arrays forEach method
    Array.prototype.forEach.call(htmlCollectionArray, function(el, i) { 
        console.log(el.tagName);
    });
    

The Array.prototype can be truncated to a pair of brackets [], like so:

    [].forEach.call(htmlCollectionArray, function(el, i) { 
        console.log(el.tagName);
    });
    

Or you might just use the good old for loop:

    for (var i = 0; htmlCollectionArray.length < i; i++) {
        console.log(htmlCollectionArray[i].tagname);
    }
    

**Noteworthy thing:**getElementsByClassName() produces a [HTMLCollection][1], whereas querySelectorAll() produces a [nodeList][0].

Nice quote from Crockford:

> These return not arrays of nodes but nodeLists, which are freaky weird things… — [> Douglas Crockford][2]

## Things forEach can’t do 

There are things forEach can’t do. The two words “for” and “Each”, really mean that you’re about to iterate every single element in the array, break or continue can’t be done. Here’s a non working example:

    [2, 3, 5, 7].forEach(function(el, i) {
        if (i > 3) {
            // Does not work
            break;
            // Continue also will not work
            // continue;
        }
        console.log('Current ' + el + ', Index ' + i);
    });
    

You get an error: Uncaught SyntaxError: Illegal break statement.

This is where Array.prototype.some(some) might come handy, it’s very similar to forEach.

    function tester(el) {
        return el > 3;
    }
    
    [2, 3, 5, 7].some(tester)) {
        // Stops the loop when the counter hits 3
        console.log('Yup, over three');
    }
    

Or just use a good old for loop, don’t fall victim to the “shiny new tool” syndrome. I have a post about looping and manipulating objects that has a lot of good stuff related to this, [have look][3].

## Conclusions 

forEach is not a replacement for for loop, it’s annoying to iterate HTMLCollections or NodeLists with it, and the lack of breaking and continuing makes you want to use for or while. But it’s a really nice tool to make looping easier.

[0]: https://developer.mozilla.org/en/docs/Web/API/NodeList
[1]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
[2]: https://youtu.be/Fv9qT9joc0M?t=50m53s
[3]: http://clubmate.fi/javascript-manipulating-objects-with-object-keys/
