----
title: 关于 HTML5中语义标签的理解
date: 2016-07-21 18:38:44
tags:
- HTML
----
title: 关于 HTML5中语义标签的理解
date: 2016-03-14
### HTML5
HTML5中新增的语义标签元素意在不通过 css 的帮助就能清晰的表达页面的各分部的意义。

### header
- header 元素表示一组引导性的帮助，可能包含标题元素、logo、分节头部、搜索表单等。
- header 元素描述最近的父级区块。
- header 元素不会引入新的分节到大纲中。

### footer
- footer 表示最近一个章节内容或者根节点元素的页脚，包含该章节作者、版权数据或者与文档相关的链接等信息。
- footer 元素内的作者信息应包含在 address 元素中。
- footer 元素不会引入新的分节到大纲中。

### aside
- aside 元素包含于页面其他部分不同的、独立的一部分信息，如广告、个人资料、其他链接、web 应用等。

### nav
- nav 元素描绘一个含有多个超链接的区域，这个区域包含转到其他页面，或者页面内部其他部分的链接列表。
- 不常用的链接不必放入 nav 元素中，如 footer 元素就常用来在页面底部。
- 一个网页也可能含有多个 nav 元素,如一个是网站内的导航列表,另一个是本页面内的导航列表.
- 对于屏幕阅读障碍的人,可以使用这个元素来确定是否忽略初始内容.

### section
- Section 元素表示文档中的一个区域或节,讲述同一个主题，若可以分成多个部分则应该用 article 元素括起来。
- 一般来说会有包含一个 heading 元素。
- Section 元素可以嵌套。

### article
- article 元素表示文档、页面、应用或网站中可独立分配或复用的**独立结构**，如论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。
- 当 article 元素嵌套使用时，则该元素代表与外层元素**有关**的文章，如评论可以嵌套在文章元素中。
- article 元素的作者信息可通过 **address** 元素提供，但是**不适用**于嵌套的 article 元素。
- article 元素的发布日期和时间可通过 **time** 元素的pubd ate 属性表示。

### h1~h6
每个 section 可以包含自己的一套 heading 元素。
  ```html
  <section>
    <h1>Heading</h1>
    
    <section>
      <h1>Heading 1</h1>
      <p>Content</p>
    </section>

    <section>
      <h1>Heading 2</h1>
      <p>Content</p>
    </section>

    <section>
      <h1>Heading 3</h1>
      <p>Content</p>
    </section>
  </section>
  ```
  Leads:
  ```
  1. Heading
    1.1 Heading 1
    1.2 Heading 2
    1.3 Heading 3
  ```
[More About Headings Reference][heading]

***
## 本文相关
1. 参考
[MDN - HTML5的文档节段和纲要](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
[Semantic HTML - 顾轶灵](http://justineo.github.io/slideshows/semantic-html/#/)

1. 修订
2016-03-14:第一版
[heading]:https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines
