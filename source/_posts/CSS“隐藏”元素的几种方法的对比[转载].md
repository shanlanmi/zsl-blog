----
title: CSS“隐藏”元素的几种方法的对比[转载]
date: 2016-07-21 18:38:44
tags:
- CSS
----
## 概要
CSS 隐藏元素方法：
1. display: none
1. visibility: hidden
1. opacity: 0
1. height: 0, width: 0

## 原文
一说起CSS隐藏元素，我想大部分小伙伴们都会想到的第一种方法就是设置display为none。这是最为人所熟知也是最常用的方法。我相信还有不少人想到使用设置visibility为hidden来隐藏元素，这种方式也是常用的方法，而且也有很多人知道两者的不同。除了这两种方法，本文还总结了一些比较不常用的方法，比较了这几种“隐藏”元素方法的区别和优缺点，欢迎大家交流！！


### 几种方法的简单介绍

首先我们分别来说说到底有哪几种隐藏元素的方法，有一些方法是众所周知的，还有一些算是一种技巧。



设置元素的display为none是最常用的隐藏元素的方法。



将元素设置为display:none后，元素在页面上将彻底消失，元素本来占有的空间就会被其他元素占有，也就是说它会导致浏览器的重排和重绘。



设置元素的visibility为hidden也是一种常用的隐藏元素的方法，和display:none的区别在于，元素在页面消失后，其占据的空间依旧会保留着，所以它只会导致浏览器重绘而不会重排。



visibility:hidden适用于那些元素隐藏后不希望页面布局会发生变化的场景



opacity属性我相信大家都知道表示元素的透明度，而将元素的透明度设置为0后，在我们用户眼中，元素也是隐藏的，这算是一种隐藏元素的方法。



这种方法和visibility:hidden的一个共同点是元素隐藏后依旧占据着空间，但我们都知道，设置透明度为0后，元素只是隐身了，它依旧存在页面中。

设置height，width等盒模型属性为0

这是我总结的一种比较奇葩的技巧，简单说就是将元素的margin，border，padding，height和width等影响元素盒模型的属性设置成0，如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素，这算是一种奇技淫巧。



这种方式既不实用，也可能存在着着一些问题。但平时我们用到的一些页面效果可能就是采用这种方式来完成的，比如jquery的slideUp动画，它就是设置元素的overflow:hidden后，接着通过定时器，不断地设置元素的height，margin-top，margin-bottom，border-top，border-bottom，padding-top，padding-bottom为0，从而达到slideUp的效果。


### 元素隐藏后的事件响应

如果被隐藏的元素绑定了一些事件，我们执行了相关操作后，这些事件是否会被响应并执行呢，看看下面的代码：


$(".none").click();

<style>
          width: 100px;
        height: 100px;
        background: red;
        margin: 15px;
        padding: 10px;
        border: 5px solid green;
        display: inline-block;
        overflow: hidden;
        transition: all linear 2s; 
  </style> 

<div class="none"></div>
<div class="hidden"></div>
<div class="opacity0"></div>
<div class="height0">aa</div> 

<script src="/Scripts/jquery-1.10.2.min.js"></script>
<script>
$(".none").on("click", function    console.log("none clicked"    $().css("display", "none"  $(".hidden").on("click", function    console.log("hidden clicked"    $().css("visibility", "hidden"  $(".opacity0").on("click", function    console.log("opacity0 clicked"    $().css("opacity", 0  $(".height0").on("click", function    console.log("height0 clicked"    $().css({
        "height": 0  </script>

.fadeOut { visibility: visible; opacity:; transition: all linear 2s; }
    .fadeOut:hover { visibility: hidden; opacity:; }
    ```

应该同时设置元素的visibility和opacity属性。


本文总结说明了“隐藏”元素的几种方式，其中最常用的还是display:none和visibility:hidden。其他的方式只能算是奇技淫巧，并不推荐使用它们来隐藏元素，它们的真正用途应该不在隐藏元素，而是通过了解这些方法的特点，挖掘出其真正的使用场景。欢迎大家交流！！


来自评论区小伙伴们补充的技巧：

1、设置元素的position与left，top，bottom，right等，将元素移出至屏幕外

2、设置元素的position与z-index，将z-index设置成尽量小的负数

本文地址：http://luopq.com/2016/02/15/tricks-of-hide-element/，转载请注明
***
**本文相关**
1. 参考
1. 修订
2016:第一版
