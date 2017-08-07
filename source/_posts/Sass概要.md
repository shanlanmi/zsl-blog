----
title: Sass概要
date: 2016-07-21 18:38:44
categories:
- CSS
----
**要点：**
- Sass并不是css的替代品，它只是让css变得更加高效、可维护
- 永远不要去修改生成后的css
- 部署到线上的是生成的css文件，不是sass文件，sass的工作流如下图


工作流：
1. 书写`*.sass`和`*.scss`文件
1. 编译成*.css 文件
1. 部署

## 安装
1. 安装 Ruby
    ```bash
    brew install ruby
    ruby -v
    ```
1. 安装 sass
    ```bash
    gem install sass
    sass -v
    ```

## 文件编辑
### 文件类型
 sass 有两种书写格式，后缀分别为.sass 和.scss。

1. sass 文件
    特点：缩进式、格式严谨、无末尾分号

1. scss 文件
    特点：与 css 一致

### 编译单个文件

    sass test.scss test.css

### 编译风格

    sass --style compressed test.scss test.css

- **nested：**嵌套缩进的css代码（默认）
    ```
    .test {
      margin: 0;
      padding: 0;
      color: blue; }
    ```
- **expanded：**展开的多行css代码
    ```
    .test {
      margin: 0;
      padding: 0;
      color: blue; 
    }
    ```
- **compact：**简洁格式的css代码
    ```
    .test { margin: 0; padding: 0; color: blue; }
    ```
- **compressed：**压缩后的css代码

**CSS 转 Sass**


### 监视
监视 sass 文件的变化，实时编译 CSS 文件。
**watch单个文件**

    sass --watch test.scss:test.css

**watch文件夹**

    watch --watch src:src

## sass语法
### 变量
1. **普通变量**

    如果在字符串中引用变量，则需要将变量名写在#{}中。如：
    ```
    $img-dir: "public/images"
    
    .test 
      background-image: url("#{$img-dir}icon.png");
    ```

1. **默认变量**
    如果这个变量被声明赋值了，那就用它声明的值，否则就用默认值。


1. **多值变量**
多值变量类似js中的数组，声明时只需用空格将多个值隔开即可。如：

    - `length($colors)`: 获取多值变量的值的个数。
    - `nth($colors, index)`: 获取第index个位置的值, index的取值范围为1到length($colors)。

### 嵌套
- 嵌套可以省去书写大量重复选择器的时间，还能够让代码显得更有条理、更易维护。
- 嵌套代码中的&表示父元素选择器。
- 不建议嵌套层次太深，以免生成的css选择器过长。
- 除了选择器可以嵌套外，css属性也可以嵌套(用的相对较少)。

例子：
- 原 css 代码：

- 嵌套改写代码:

- 属性嵌套：

- 跳出嵌套用`@at-root`


### sass导入文件
**导入.sass或.scss文件**
- css有一个不太常用的特性，即@import导入功能，它允许在一个css文件中导入其他css文件。然而，结果是只有执行到@import规则时，浏览器才会去下载其他css文件，这会导致页面样式加载特别慢，从而容易出现页面闪的问题。
- sass也有@import导入规则，与css不同的是，sass中的@import规则会在生成css文件时，把相关的文件导入合并成一个文件，而无需浏览器去下载其他的文件。另外在被导入文件中定义的变量等也可以在导入文件中正常使用。
- 在使用@import导入sass文件时，可以省略sass文件的后缀名.sass或.scss

导入a.sass 文件：

编译后会生成总体的 style.css 和中间件 a.css，若不需要生成中间件时，则需要在中间件文件名前加上下划线`_`(即_a.sass)，sass编译的时候就会忽略这个文件，@import引用的时候可以加下划线引用，也可以不加。

### 导入css文件

如果符合以下三条中的任意一种情况，sass就会认为你想用css原生的@import:

- 被导入的文件名以.css结尾
- 被导入的文件是一个在线的url地址
- 以@import url(...)方式去导入文件

### 注释

- sass支持原生css的注释格式 `/* 注释内容 */` 和单行注释 `//` 注释内容。
- 对于单行注释，sass会在生成的css文件中删除单行注释，只保留css原生的注释内容。
- 如果你把多行注释写在原生css不允许的地方时，在编译生成css文件时，sass会将这些注释抹掉。


### 混合器 @mixin

1. **简单混合器**
    混合器一般用来解决大段代码重复的问题。


1. **带参数的混合器**
    混合器还可以传递参数，根据需要生成不同的css。这在跨浏览器的css3兼容方面尤为好用。


1. **带默认值的混合器**


1. **@content**
    `@content`相当于大参数


### 继承 @extend
1. **普通继承**
继承可以让一个选择器继承另一个选择器的所有样式，并联合声明, 用 `@extend` 调用。


1. **占位器继承**
占位选择器声明之后，如果不调用，则不会产生类似.text的多余css代码。 占位选择器通过`%`标识来定义，用 `@extend` 调用。


### 条件判断 @if
sass中的@if语句和js中的if很相似。可以单独使用，也可以配合@else使用。


### 三目运算判断
三目运算符的语法为：

例子：


### for 循环
1. from ... through
    from...throught 循环包括`<end>`。

1. from ... to
    from...to 循环**不**包括`<end>`。


### each循环
语法：

例子：



### 运算
Sass 可以进行四则运算。

1. **除法**
    `/`比较特殊，默认不会识别为除法，只有如下情况才会识别为除法：
    1. 调用了变量或函数。
    ```
    width: $width/2
    width：round(2)/2
    ```
    1. 数值被`()`括起来
    ```
    width: (200px/2)
    ```
    1. 数值是数学表达式的一部分。
    ```
    width: 100px+100px/2
    ```
1. **单位**
    单位数字和纯数字相计算，单位保留。
    两单位数字相除，结果无单位。

1. **颜色**
    颜色可以计算。
    ```
    color: #010203 + #010203  // color: #020406
    ```
1. **字符**
    字符串可以通过 `+` 来连接，只要有一个字符串含有`""`。
    ```
    content: "Hello " + World   //content: "Hello World"
    ```

### 函数
最常用的是颜色函数


***
## 本文相关
1. 参考
[Sass documentation](http://sass-lang.com/documentation/)
[Sass入门指南](http://riny.net/2014/sass-guide/)
1. 修订
2016:第一版

