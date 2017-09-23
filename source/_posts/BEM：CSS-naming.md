----
title: BEM：CSS naming
date: 2016-08-15 17:27:03
tags:
- CSS
----
## BEM: CSS naming
```
BEM = .`Block`__`Element`--`Modifier`
```

### Block
- Blocks can be nested inside any other blocks.
- Blocks is arbitrary placement.
- Blocks can be re-use

### Element
Element is a constituent part of a block that can't be used outside of it.
- 每个Class Name 中只有一个 element name。 
- 每个 block 内的 element name 是不嵌套的。

### Modifier
Modifier is defines the appearance and behavior of a `block` or an `element`.

### Google 的 Material Design Lite 规则
- - BEM 实体名称全部是小写字母或数字。名称中的不同单词用单个连字符`-`分隔。
- BEM 元素名称和块名称之间通过两个下划线`__`分隔。
- 布尔修饰符和其所修饰的实体名称之间通过两个连字符`--`来分隔。
- 不使用名值对修饰符。

### 要求
1. BEM 不考虑结构性。
1. Class Name 具有唯一性。
1. 避免使用深层次的后代选择器。
1. Block是 css 的作用域。

1. 尽可能使用双单词作为名字，用驼峰命名法。
