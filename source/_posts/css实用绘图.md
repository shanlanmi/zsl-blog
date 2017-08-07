----
title: css实用绘图
date: 2016-07-21 18:38:44
categories:
- CSS
----
title: css实用绘图
date: 2016-03-23
### 三角形

- 利用单边 border 画三角形，用`transparent`属性来隐藏不需要的 border。
- 可以调节边 boder 的宽度来调节三角形形状。
- 若设置 width 或 height 数值，可以画梯形。
- 若设置某一边 border 的宽度为0，可以画直角三角形。

<div style="display:flex;">
  <p style="border-color:transparent transparent transparent #9a8b7b;border-width:20px 20px 20px 40px;border-style:solid;width:0;height:0;"></p>
  <p style="border-color:transparent transparent transparent #9a8b7b;border-width:20px 20px 0 40px;border-style:solid;width:0;height:0;"></p>
</div>

[三角形生成器][1]

### 圆形


<div style="display:flex;">
  <p style="width:40px;height:40px;border-bottom-left-radius:40px;background-color:#9a8b7b;"></p>
  <p style="width:40px;height:40px;margin-left:20px;border-radius:20px;background-color:#9a8b7b;"></p>
</div>

### 椭圆

<div style="display:flex;">
  <p style="width: 80px; height: 40px; background-color: #9a8b7b; border-radius: 80px/40px;"></p>
</div>

### 斜矩形

<div style="display:flex;">
  <p style="width: 80px; height: 40px; -webkit-transform: skew(20deg); -moz-transform: skew(20deg); -o-transform: skew(20deg); background: #9a8b7b;"></p>
</div>



## 本文相关
1. 参考
[The Shapes of CSS](https://css-tricks.com/examples/ShapesOfCSS/)
1. 修订
2016:第一版

[1]:http://apps.eky.hk/css-triangle-generator/zh-hant
