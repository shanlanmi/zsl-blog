----
title: CSS 布局
date: 2016-07-21 18:38:44
categories:
- CSS
----
### width 和 height
- width和height的值为百分比的时候，参照的是包含块的width和height。

- 盒模型大小计算规则
    - 非替换行内元素
        - 宽度 = 内容宽度 + 左右内边距 + 边框 + 左右外边距
        - 高度 = 内容高度 + 上下内边距 + 边框 （上下内边距无效）
          内容宽度或高度加上内边距和外边距（margin的top和bottom无效）
    - 没有设置大小的替换行内元素/没有设置大小的行内块级元素
        - 宽度 = 内容宽度 + 左右内边距 + 边框 + 左右外边距
        - 高度 = 内容高度 + 上下内边距 + 边框 + 上下内边距
    - 没有设置大小的块级元素
        - 宽度 = 父节点内容宽度
        - 高度 = 内容高度 + 上下内边距 + 边框 + 上下内边距
    - 有设置大小的元素
        - 默认盒模型/box-sizing=content-box
            - 内容宽度 = width
            - 内容高度 = height
            - 宽度 = width + 左右外边距 + 边框 + 左右内边距
            - 高度 = 类似宽度
        - IE怪异模式/box-sizing=border-box
            - 内容宽度 = width属性 - 左右外边距 - 边框 - 左右内边距
            - 内容高度 = 类似内容宽度
            - 宽度 = width
            - height = height

### Display

- 每个元素都有一个默认的 display 值，这与元素的类型有关。
- 对于大多数元素它们的默认值通常是 block（块级元素） 或 inline （行内元素）或 none（如script）。
- `display: none` 不会保留元素本该显示的空间，但是`visibility:hidden` 会保留。
- 元素分类
  - 行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
  - 块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
  - 空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img
- [display 值列表][displayvalue]

### inline-block
- inline-block 同样可以达到浮动的目的，而其他元素不会环绕，不用`clear`,可以用来做横向菜单列表。
- vertical-align 属性会影响到 inline-block 元素，你可能会把它的值设置为 top 。
- 你需要设置每一列的宽度。
- 如果HTML源代码中元素之间有空白符（比如换行符），那么列与列之间会产生空隙，可以设置 ul 的`font-size:0`来解决空白符的问题。
  ```
  ul, li { 
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 0;
  }
  li {
    display: inline-block;
    border: 1px solid black;
    width: 100px;
    text-align: center;
    font-size: 12px;
  }
  ```  

### margin:auto;
利用 margin 属性来水平居中。

margin-top/bottom:auto,则计算值为0
margin 可以为负值。
margin 的折叠：
- 垂直方向距离取两边距最大值，水平方向距离取两边距之和。
-  float 元素和 absolute 元素不与任何margin发生折叠。
- 设置了属性overflow且值不为visible的块级元素，将不与它的子元素发生margin折叠；
- 根元素的margin不与其它任何margin发生折叠；

### box-sizing
box-sizing 有 content-box(default) 和 border-box 两个值。

content-box: width = content
border-box: width = content + padding + border

### position
1. static(default)
  - 不会被特殊定位。
  - 宽度参考父元素内容宽度。

1. relative
  - 参考父元素来定位，会被top，right，bottom，left 影响，但是其他元素不会弥补空隙位置。
  - 宽度参考父元素内容宽度。

1. fixed
  - 相对视窗来定位。
  - 移动浏览器对 fixed 的支持较差。
  - 宽度参考内容宽度。

1. absolute
  - 相对于最近的非 static 父元素来定位，若不存在，则相对于 body。
  - 宽度参考内容宽度。

top 和 left 优先于 right 和 bottom。

### float
可用于实现文件环绕图片。

### clear
clear 属性可以避免因为其他元素的浮动而自动环绕。
`clear: right;` 可以避免因右侧有元素浮动而自动环绕，值left，both 同理。

### clearfix
若浮动元素超过了父元素，可以在父元素中加入`overflow:auto;`来修正。

### Responsive Design


### column
实现文字多列排布

### flexbox
<http://zh.learnlayout.com/flexbox.html>


* * *
## 本文相关
1. 参考
  - [Learn CSS Positioning in Ten Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)
  - [学习CSS 布局](http://zh.learnlayout.com/display.html)
1. 修订
2016:第一版

[displayvalue]:https://developer.mozilla.org/en-US/docs/Web/CSS/display
