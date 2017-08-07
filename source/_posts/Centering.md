----
title: Centering
date: 2016-07-21 18:38:44
categories:
- CSS
----
## Horizontally
### Inline Element


### Block Element


### Some Block Elements In A Line
1. **margin: 0 auto;**
1. **inline-block**
  ```css
  .parent { font-size: 0; } /* 取消html元素间空白符的空间占用 */
  .block { display: inline-block; }
  ```

## Vertically
### Inline ELement
1. **A single line**
  1. Setting equal padding above and below.
    ```css
    .line {
      padding-top: 30px;
      padding-bottom: 30px;
    ```
  1. Making the `line-height` equal to the height.
    ```css
    .line {
      height: 100px;
      line-height: 100px;
      white-space: nowrap;  /* 防止跳到下一行 */
    }
    ```
1. **Multiple lines**
  1. Setting equal padding above and below.
  1. Using `vertical-align`
    ```css
    .line { vertical-align: middle; }
    ```
  1. Using flexbox
    ```css
    .parent {
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 400px;  /* Need has a fixed height */
    ```
  1. Using pseudo element
    ```css
    .line { position: relative; }

    .line::before {
      content: " ";
      display: inline-block;
      height: 100%;
      width: 1%;
      vertical-align: middle;
    }

    .line p {
      display: inline-block;
      vertical-align: middle;
    }
    ```

### Block-level Element
1. **Know the height**
  There are lots of reasons to change the height, but if you know the height, you can do this.
  ```css
  .parent { position: relative; }

  .child {
    position: absolute;
    top: 50%;
    height: 100px;
    margin-top: -50px;  /* half of height */
  }
  ```
1. **Don't know the height**
  ```css
  .parent { position: relative; }
  
  .child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  ```
1. **Using flexbox**
  ```css
  .parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ```

## Both Horizontally and Vertically
### Having fixed width and height

Making centering in window:

### Unknow width and height

### Using flexbox


### Using JavaScript


***
## 本文相关
1. 参考
  - [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
  - [CSS 实现垂直居中的常用方法](http://www.cnblogs.com/yugege/p/5246652.html)
1. 修订
2016-03-14:第一版。
2016-03-18:重新总结居中的写法。

