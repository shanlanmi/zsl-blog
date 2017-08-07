----
title:  JS中的复制和引用
date: 2016-07-21 18:38:44
categories:
- JavaScirpt
----
### JS 中的复制和引用

#### 几个概念
- 基本数据
  - 包括：null, undefined, string, number, booleann
  - 赋值：复制型，深复制
- 复杂数据
  - 包括：array，object等
  - 赋值：引用型，浅复制


- **浅复制：**
  - 将数据的**地址**赋值给对应变量
  - 变量会随数据值的变化而变化
- **深复制：**
  - 产生一个新数据，并赋值给对应的变量
  - 变量**不**随原数据值变化而变化
- **单层复制：**
  - 复制数据属性，引用对象属性
  
#### 基本数据深的复制


#### 复杂数据的浅复制



#### 单层复制
1. Array: `slice()`
  ```
  var a = [1, 2, 3];
  var b = a.slice(0);
  // b = a.concat([]);同样
  ```
2. Object: `Object.assign()`
  ```
  var a = { a: 1, b: 2};
  var b = Object.assgin({}, a);
  ```



#### 复杂数据的深复制
1. **递归法**



1. **Propertype法**



1. **JSON法**


***
**本文相关**
1. 参考

[js 对象深复制，创建对象和继承](http://www.cnblogs.com/codetker/p/4672135.html)
1. 修订
2016:第一版
