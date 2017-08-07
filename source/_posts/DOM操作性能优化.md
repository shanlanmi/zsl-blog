----
title: DOM操作性能优化
date: 2016-07-21 18:38:44
categories:
- JavaScirpt
----
## 为什么要减少 DOM 请求？
1. **简单的网页呈现步骤：**
  1. 生成网页结构。
  1. 计算各元素布局。
  1. 渲染。

  计算布局和渲染都是耗时的步骤，但是又不可避免，所以尽量减少计算布局和渲染的次数以提高性能。

1. **触发浏览器重新布局的操作：**
  - 通过js获取**需要计算**的DOM属性
  - 添加或删除DOM元素
  - resize浏览器窗口大小
  - css伪类的激活，比如:hover
  - 通过js修改DOM元素样式且该样式涉及到尺寸的改变

1. **需要计算的 DOM 属性：**
  - Element
      clientHeight, clientLeft, clientTop, clientWidth, focus(), getBoundingClientRect(), getClientRects(), innerText, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, outerText, scrollByLines(), scrollByPages(), scrollHeight, scrollIntoView(), scrollIntoViewIfNeeded(), scrollLeft, scrollTop, scrollWidth
  - Frame, Image
      height, width
  - Range
      getBoundingClientRect(), getClientRects()
  - SVGLocatable
      computeCTM(), getBBox()
  - SVGTextContent
      getCharNumAtPosition(), getComputedTextLength(), getEndPositionOfChar(), getExtentOfChar(), getNumberOfChars(), getRotationOfChar(), getStartPositionOfChar(), getSubStringLength(), selectSubString()
  - SVGUse
      instanceRoot
  - window
      getComputedStyle(), scrollBy(), scrollTo(), scrollX, scrollY, webkitConvertPointFromNodeToPage(), webkitConvertPointFromPageToNode()

## 如何优化？
1. 批量读写
  特别注意循环中的读写。
  ```js
  h1 = element1.clientHeight; 
  h2 = element2.clientHeight; 
  h3 = element3.clientHeight;
  
  element1.style.height = (h1 * ) + ; 
  element2.style.height = (h2 * ) + ; 
  element3.style.height = (h3 * ) + ;
  ```
1. 批量操作 DOM
  - 采用documentFragment批量 DOM 操作   
    在`documentFragment`中应用所有的 DOM 操作，再讲它写入 window.document 中。
    ```js
    var fragment = document.createDocumentFragment();  
    for (var i=0; i < items.length; i++){  
      var item = document.createElement("li");
      item.appendChild(document.createTextNode("Option " + i);
      fragment.appendChild(item);
    }
    list.appendChild(fragment);
    ```
  - 采用`innerHTML`来更新大段的 HTML。
  - CSS样式优化
    - 合并属性
      ```
      element.style.cssText += 'border: 1px solid #f00;';
      ```
    - 添加 CSS 类
        建立一个含有所有CSS 属性的 class，然后为目标元素添加此 class
      ```
      element.className += 'empty';
      ```
  - DOM 元素隐藏修改
      ```
      var myElement = document.getElementById('myElement');
      myElement.style.display = 'none';
      // 一些基于myElement的大量DOM操作
      
      myElement.style.display = 'block';
      ```
  - cloneNode
    ```
    var old = document.getElementById('myElement');
    var clone = old.cloneNode(true);
    // 一些基于clone的大量DOM操作
    
    old.parentNode.replaceChild(clone, old);
    ```

1. 动画
    动画的每一帧都会导致layout，这是无法避免的，但是为了减少动画带来的layout的性能损失，可以将动画元素绝对定位，这样动画元素脱离文本流，layout的计算量会减少很多。

1. 使用requestAnimationFrame
    在现实项目中，代码按模块划分，很难像上例那样组织批量读写。那么这时可以把写操作放在requestAnimationFrame的callback中，统一让写操作在下一次paint之前执行。
  ```js
  // Read
  h1 = element1.clientHeight;
  
  // Write
  requestAnimationFrame(function() { 
    element1.style.height = (h1 * ) + ;
  });
  
  // Read
  h2 = element2.clientHeight;
  
  // Write
  requestAnimationFrame(function() { 
    element2.style.height = (h2 * ) + ;
  });
  ```
1. 避免用`querySelector`和`querySelectorAll`

***
**本文相关**
1. 参考

[为什么说DOM操作很慢](https://leozdgao.me/why-dom-slow/)
[前端页面卡顿？或是DOM操作惹的祸，需优化代码](http://developer.51cto.com/art/201504/473422.htm)
1. 修订
2016:第一版
