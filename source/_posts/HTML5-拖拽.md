----
title: HTML5 拖拽
date: 2016-07-21 18:38:44
categories:
- HTML
----
## 拖拽概述
在HTML中，除了图片、超链接以及被选中区域，其它元素默认是不可拖拽的。
所有的XUL元素也都是可以拖拽的。
兼容性：<http://caniuse.com/#feat=dragndrop>

## 元素属性
### draggable 属性
draggable属性的值如下：

属性值|说明
---|---
true|内容可被拖动。
false|内容不可被拖动。
auto|内容执行默认的浏览器行为

注意：于可拖拽元素，元素中的文字不可用鼠标直接选中，可通过 Alt+鼠标选择文字。

### Dragzone 属性
dropzone可以创建一个放置区域。

属性值|作用
---|---
copy|将拖拽数据复制到目标元素上
move|将数据移动到目标元素上
link|将链接数据到目标元素上

dropzone属性可以使用过滤器（filter），如：f:/img/png 表明只有png格式的图片文件才可以放置在此区域。

## 事件属性

## 拖放事件属性

源元素属性|意义
---|---
ondragstart|开始拖拽时
ondrag|拖拽中
ondragend|完成拖拽时

目标元素属性|意义
---|---
ondragenter|拖拽源元素进入目标元素时
ondragover|拖拽源元素在目标元素内时
ondragleave|拖拽源元素离开目标元素时
ondrop|释放拖拽元素时

### 事件次序

1. draggable - 源元素（必选）
1. dropzone - 目标元素
1. ondragstart - 源元素（必选）
    主要设置传输数据。
1. ondrag - 源元素
1. ondragenter - 目标元素
1. ondragover - 目标元素（必选）
    主要是取消目标元素默认操作。
1. ondragleave - 目标元素
1. ondrop - 目标元素（必选）
    主要设置处理接收到的数据。
1. drapend - 源元素

### 定义目标元素
定义目标元素，需要重写ondragenter,ondragover.



- Firefox 3.5+ 中，放置事件的默认行为是打开放到目标上的URL。
- drag和dragover是持续触发的。
- 拖放文件到浏览器中时，默认是在浏览器中打开文件，需要在dragover和drop事件处理器中阻止默认行为。
- 在被拖元素上触发dragstart事件后，则该元素的mousemove,mouseover,mouseenter,mouseleave,mouseout事件均不会被触发了。

### dataTransfer - 数据传输
#### 属性
属性|描述
---|---
dropEffect|获取或设置被拖动元素能够执行哪中放置行为，不同的行为显示相应的光标。
effectAllowed|表示允许拖动元素的哪种 dropEffect。
files|返回被拖放文件的FileList对象。
types|返回ondragstart事件中传递的数据类型的类似数组的集合。

dropEffect的属性值分别有：
1. none：不能放置拖动元素（除文本框以外所有元素的默认值）；
1. move：应该把元素移动到放置目标；
1. copy：应该把拖动元素复制到放置目标；
1. link：应该在放置目标上打开拖动元素（拖动元素必须是有 URL 的链接）。

effectAllowed的属性值分别有：
1. uninitialized：被拖动元素没有设置放置行为；
1. none：被拖动元素不允许有任何行为；
1. copy：只允许 copy 值的 dropEffect；
1. move：只允许 move 值的 dropEffect；
1. copeLink：copy 和 link 值的 dropEffect；
1. copeMove：copy 和 move 值的 dropEffect；
1. linkMove：link 和 move 值的 dropEffect；
1. all：允许任意 dropEffect。

使用dropEffect属性时必须在ondragenter中针对放置目标设置，只有搭配effectAllowed属性时才有用。必须在ondragstart中设置 effectAllowed。
#### 方法

方法|说明
---|---
clearData(format)|清除以特定格式保存的数据 。
getData(format)|从 dataTransfer 对象中读取指定类型的值，参数是 MIME 类型。
setData(format, data)| 为 dataTransfer 对象指定特定格式的数据，这些数据只能在 ondrop 处理程序中读取。
setDragImage(element, x, y)| 指定一个元素拖动发生时显示在光标下方，三个参数分别是要显示的 HTML元素和光标在显示元素中的x、y坐标。
addElement(element)| 为拖动操作添加一个元素（即增加作为拖动源而响应的回调对象）。如果想要让某个元素跟随被拖拽元素一同被拖拽，可使用该方法。

#### 格式

- text/html：HTML代码格式；
- text/plain：文本文字格式；
- text/xml：XML字符格式；
- text/url-list：URL格式列表；

IE只定义了“text”和“URL”两种有效的数据类型，而HTML5则对此加以扩展，允许指定各种MIME类型。考虑到向后兼容，HTML5也支持“text”和“URL”，但这两种类型会被映射为“text/plain”和“text/uri-list”。

## 实践
### 拖放移动

***
**本文相关**
1. 参考
[HTML5 拖放API](https://www.zybuluo.com/dengzhirong/note/186019)
1. 修订
2016:第一版
