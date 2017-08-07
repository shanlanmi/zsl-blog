----
title: javascript, block
date: 2017-02-23 14:57:08
categories:
- JavaScirpt
----
```js
var wait = function(delay) {
  var now = new Date();
  var time = now.setTime(now.getTime() + Number(delay));
  while (new Date() < time) {
  }
};
```

