----
title: Flex布局[转载]
date: 2016-07-21 18:38:44
categories:
- CSS
----
## Flex 布局教程：语法篇
作者： 阮一峰

### 一、Flex布局是什么？

Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

- 任何一个容器都可以指定为Flex布局。
  ```css
  display: flex;
  ```
- 行内元素也可以使用Flex布局。
  ```css
  display: inline-flex;
  ```
- Webkit内核的浏览器，必须加上`-webkit`前缀。
  ```css
  display: -webkit-flex; /* Safari */
  display: flex;
  ```
  注意，设为Flex布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

### 二、基本概念

采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。

![pic-1458719526631.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

### 三、容器的属性
#### 3.1 flex-direction属性

`flex-direction`属性决定主轴的方向（即项目的排列方向）。

![pic-1458719526632.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png)

它可能有4个值。

*  row （默认值）：主轴为水平方向，起点在左端。
*  row-reverse ：主轴为水平方向，起点在右端。
*  column ：主轴为垂直方向，起点在上沿。
*  column-reverse ：主轴为垂直方向，起点在下沿。

#### 3.2 flex-wrap属性

默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。

![pic-1458719526632.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png)

它可能取三个值。

- `nowrap`（默认）：不换行。
![pic-1458719526632.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png)
- `wrap`：换行，第一行在上方。
![pic-1458719526633.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg)
- `wrap-reverse`：换行，第一行在下方。
![pic-1458719526633.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg)

#### 3.3 flex-flow

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

#### 3.4 justify-content属性

`justify-content`属性定义了项目在主轴上的对齐方式。

![pic-1458719526633.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)

它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

*  flex-start （默认值）：左对齐
*  flex-end ：右对齐
*  center ： 居中
*  space-between ：两端对齐，项目之间的间隔都相等。
*  space-around ：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

#### 3.5 align-items属性

`align-items`属性定义项目在交叉轴上如何对齐。

![pic-1458719526634.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png)

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

*  flex-start ：交叉轴的起点对齐。
*  flex-end ：交叉轴的终点对齐。
*  center ：交叉轴的中点对齐。
*  baseline : 项目的第一行文字的基线对齐。
*  stretch （默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

#### 3.6 align-content属性

`align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

![pic-1458719526634.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)

该属性可能取6个值。

*  flex-start ：与交叉轴的起点对齐。
*  flex-end ：与交叉轴的终点对齐。
*  center ：与交叉轴的中点对齐。
*  space-between ：与交叉轴两端对齐，轴线之间的间隔平均分布。
*  space-around ：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
*  stretch （默认值）：轴线占满整个交叉轴。

### 四、项目的属性
#### 4.1 order属性
`order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

![pic-1458719526634.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png)

#### 4.2 flex-grow属性
`flex-grow`属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

![pic-1458719526634.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

#### 4.3 flex-shrink属性
`flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

![pic-1458719526635.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png)

如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。

负值对该属性无效。

#### 4.4 flex-basis属性

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。

#### 4.5 flex属性
`flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为0 1 auto。后两个属性可选。

该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

#### 4.6 align-self属性
`align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为auto，表示继承父元素的`align-items`属性，如果没有父元素，则等同于stretch。

![pic-1458719526635.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)

该属性可能取6个值，除了auto，其他都与align-items属性完全一致。



## Flex 布局教程：实例篇

### 一、骰子的布局

骰子的一面，最多可以放置9个点。

![pic-1458719523604.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071328.png)

下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到[codepen][5]查看Demo。

![pic-1458719523604.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071329.png)

如果不加说明，本节的HTML模板一律如下。

上面代码中，div元素（代表骰子的一个面）是Flex容器，span元素（代表一个点）是Flex项目。如果有多个项目，就要添加多个span元素，以此类推。

#### 1.1 单项目

首先，只有左上角1个点的情况。Flex布局默认就是首行左对齐，所以一行代码就够了。

![pic-1458719523605.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071301.png)

设置项目的对齐方式，就能实现居中对齐和右对齐。

![pic-1458719523605.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071302.png)

![pic-1458719523605.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071303.png)

设置交叉轴对齐方式，可以垂直移动主轴。

![pic-1458719523606.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071304.png)

![pic-1458719523606.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071305.png)

![pic-1458719523606.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071306.png)

![pic-1458719523608.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071307.png)

#### 1.2 双项目

![pic-1458719523608.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071308.png)

![pic-1458719523610.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071309.png)

![pic-1458719523611.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071310.png)

![pic-1458719523612.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071311.png)

![pic-1458719523613.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071312.png)

![pic-1458719523614.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071313.png)

#### 1.3 三项目（略）
#### 1.4 四项目（略）
#### 1.5 六项目（略）
#### 1.6 九项目

![pic-1458719523616.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071320.png)


### 二、网格布局

#### 2.1 基本网格布局

最简单的网格布局，就是平均分布。在容器里面平均分配空间，跟上面的骰子布局很像，但是需要设置项目的自动缩放。

![pic-1458719523616.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071321.png)

HTML代码如下。

CSS代码如下。


#### 2.2 百分比布局

某个网格的宽度为固定的百分比，其余网格平均分配剩余的空间。

![pic-1458719523617.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071322.png)
HTML代码如下。


### 三、圣杯布局

[圣杯布局][17]（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。

![pic-1458719523617.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071323.png)

HTML代码如下。



CSS代码如下。


如果是小屏幕，躯干的三栏自动变为垂直叠加。


### 四、输入框的布局

我们常常需要在输入框的前方添加提示，后方添加按钮。

![pic-1458719523617.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071324.png)

HTML代码如下。


CSS代码如下。


### 五、悬挂式布局

有时，主栏的左侧或右侧，需要添加一个图片栏。

![pic-1458719523618.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071325.png)

HTML代码如下。


CSS代码如下。


#### 六、固定的底栏

有时，页面内容太少，无法占满一屏的高度，底栏就会抬高到页面的中间。这时可以采用Flex布局，让底栏总是出现在页面的底部。

![pic-1458719523619.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071326.png)

HTML代码如下。


CSS代码如下。


#### 七，流式布局

每行的项目数固定，会自动分行。

![pic-1458719523620.png](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071327.png)

CSS的写法。




***
## 本文相关
1. 参考
[阮一峰 - Flex 布局教程]:http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool
1. 修订
2016-03-23:第一版

[0]: http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
[2]: http://davidwalsh.name/flexbox-dice
[3]: http://philipwalton.github.io/solved-by-flexbox/
[5]: http://codepen.io/LandonSchropp/pen/KpzzGo
[17]: https://en.wikipedia.org/wiki/Holy_Grail_(web_design)
