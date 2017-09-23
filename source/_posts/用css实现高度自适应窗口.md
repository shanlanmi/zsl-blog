----
title: 用css实现高度自适应窗口
date: 2017-09-13 09:29:39
tags:
- CSS
----
## HTML

```html
<div id="main">
<div id="nav">nav</div>
<div id="content">content</div>
</div>
```

## 要求
1. 不能出现纵向滚动条。
2. 顶部的`#nav`元素固定高度。
3. 底部的`#content`元素高度随窗口自适应。

## CSS
```
html, body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

#main {
background-color: #999;
height: 100%;
} 


#nav {
  background-color: blue;
  height: 50px;
}
```

## 利用`float`来解决
```
html, body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
#main {
  background-color: #999;
  height: 100%;
} 
#nav {
background-color: #85d989;
  width: 100%;
  height: 50px;
  float: left;
}
#content {
  background-color: #cc85d9;
  height:100%;
}
```

## 利用`top`和`bottom`定义盒模型来解决(推荐)
```CSS
#nav {
  background-color: #85d989;
  width: 100%;
  height: 50px;
}
#content {
background-color: #cc85d9;
  width: 100%;
  position: absolute;
  top: 50px;
  bottom: 0px;
  left: 0px;
}
```
