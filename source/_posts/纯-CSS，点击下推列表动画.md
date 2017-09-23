----
title: 纯 CSS，点击下推列表动画
date: 2016-10-26 17:47:20
tags:
- CSS
----
1. 采用 transition 属性来做。
1. 动画对 opacity 属性有影响。
1. 若想对 height 属性有影响，则需要 height 有固定值。
1. 若页面不确定 height 的固定值，则可以采用 max-height 属性来 hack，不过在动画时间上有些不完美。
1. 可以考虑用 JS 来取 height 值，解决上面的高度位置问题。
1. overflow 属性可以避免高度为0后，childNode 依旧显示的问题。

```css
.default
  max-height: 0 // height：0
  transition-duration: 1s
  transition-property: all
  transition-timing-function: ease
  overflow: hidden
  padding: 0px

.open
  max-height: 600px //height：600px
```
