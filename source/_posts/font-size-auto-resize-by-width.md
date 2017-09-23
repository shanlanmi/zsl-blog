----
title: font-size auto resize by width
date: 2016-11-01 18:21:12
tags:
- CSS
----

通过 JS 来计算两个 element 的width 差值，故得到 zoom 的例子，在通过 JS 对 element 的 zoom 属性赋值。

```html
<div id="box">
    <p id="content">可1222</p>
</div>
```

```JavaScript
$(function() {
    var $box = $('#box')
    var $content = $('#content')
    
    // 通过 zoom 来调节文字大小
    var zoom = $box.width() / $content.width()
    
    $content.css('zoom', zoom)
})
```

```css
#box {
    width: 100%;
}

#content {
    display: inline-block;
    white-space: nowrap;
    font-size: 32px;
}
```
