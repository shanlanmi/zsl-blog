----
title: 用 CSS 实现 Tabs 标签切换
date: 2016-07-21 18:38:44
tags:
- CSS
----
### 前言
用纯 CSS 来实现基本的 Tabs 标签页面切换。总体的思想是利用`radio`的特点来实现标签页，用`display:none`和`:checked`来实现样式和内容的切换。

### html 代码


注意元素的顺序为 li > input + label + div ，input 需为 li 的 first-child，方便等下样式控制。

### 写基本样式

基本样式中，要把 tab 的未选中样式写好。
注意`z-index`必须要`position`为`absolute`, `relative`, `fixed`的元素，这里的`z-index`等会儿解释。

### 写 tab 切换样式（重点）
1. 隐藏`radio`和tab 页面对应的内容。
    ```css
    [type="radio"] { display: none; }
    
    .tabContent { display: none; }
    ```
1. 利用`:checked`来制作点击效果。
    ```css
    [type="radio"]:checked ~ .tabContent { display: block; }
    
    [type="radio"]:checked ~ label {
      border: 2px solid #ccc;
      border-radius: 4px 4px 2px 2px;
      border-bottom: 2px solid white;
      background-color: white;
      z-index: 1;
    }
    ```
    利用`z-index`来让激活的 tab 覆盖.contentPane,覆盖宽度为 border 宽度。    
  
 

***
## 本文相关
1. 参考
1. 修订
2016:第一版
