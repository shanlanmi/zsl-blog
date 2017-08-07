----
title: Markdown语法概要
date: 2016-07-21 13:36:38
categories:
- Blog
----
## 基本语法

### 区块元素

#### 1. 段落和换行

- 段落间需有空行(仅用空格或制表符也视为空行)。
- 文本中的换行符在最终生中会自动删掉,若想强制换行,在插入处键入空格+空格+回车。
- 一般段落不需要用空格或换行符缩进。
- 段首单格缩:`&ensp;`,段首双格缩进:`&emsp;`。

#### 2. 标题

- Setext形式


- atx形式
	行首1~6个#标记对应等级标题。

#### 3.区块代码

引用可以嵌套



#### 4.列表

- 无序列表(-,+或*均可)

	`- word

- 有序的列表

	`1.word`

	序号数字在转入html时不会输出,所以数字序号并无影响。

- 列表项目下的段落,需要在它前面缩排4个空白或1个TAB。

- 列表支持缩进,最多缩进3格。

- 项目中的段落为代码区块时,需要缩进两次。

#### 5.代码

- 单行代码或行内代码用 \`word\`。

- 转化为代码模式:每行都缩进4个空格或是一个tab。

- 代码块
    
        {% raw %}
        &#96``language
        this is the code
        &#96;``
        {% endraw %}

#### 6.分隔线

可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。也可以在星号或是减号中间插入空格。

	* * *
	***
	- - -

### 区段元素

#### 1.链接

- 自动链接。

		<http://example.com/>

- 行内形式(title可选)。

		This is an [example link](http://example.com/ "With a Title").

- 参考形式(以下形式任意组合)。

		I get 10 times more traffic from [Google][1] than from [Yahoo][2] or [MSN][3].
		[1]: http://google.com/ "Google"
		[2]: <http://search.yahoo.com/> 'Yahoo Search'
		[3]: http://search.msn.com/ 
				(MSN Search)

- 隐式参考形式。

		I get 10 times traffic from [Google].
		[Google]: http://google.com/ "Google"

- 注:title 属性是可选，链接名称可以用字母、数字和空格，但是不分大小写。

#### 2.强调

	*Bold*,**Italic**,_Bold_,__Italic__

#### 3.图片

- 行内形式。

		![alt text](/path/to/img.jpg "Title")

- 参考形式。

		![alt text][id]
		[id]: /path/to/img.jpg "Title"

- 注:alt text 为图片替代文字。


## GFM(GitHub Flavored Markdown)特性

1.`_`不作为强调语法。

2.链接直接写入,自动转换。

3.`~~strikethrough~~`表示删除线。

4.代码高亮支持。

5.表格支持。

	| Left-Aligned  | Center Aligned  | Right Aligned |
	| :------------ |:---------------:|-----:|
	| col 3 is      | some text | $1600 |
	| col 2 is      | centered  |   $12 |
	| zebra | are neat        |    $1 |

6.直接插入换行符,强制换行。

7.任务列表。

	- [ ] project1
		- [x] project 1.1

8.创建的引用会被自动转为链接。

	* SHA: a5c3785ed8d6a35868bc169f07e40e889087fd2e
	* User@SHA: jlord@a5c3785ed8d6a35868bc169f07e40e889087fd2e
	* User/Repository@SHA: jlord/sheetsee.js@a5c3785ed8d6a35868bc169f07e40e889087fd2e
	* #Num: #26
	* GH-Num: GH-26
	* User#Num: jlord#26
	* User/Repository#Num: jlord/sheetsee.js#26

9.支持emoji<http://www.emoji-cheat-sheet.com>。

10.issue相关特殊符号:`r`,`@`,`#`。

## Hexo特性

### 标题

由于字体大小设定原因,推荐使用H2~H4设置标题。

### 引用

    {% raw %}
    {% blockquote [author[, source]] [link] [source_link_title] %}
    content
    {% endblockquote %}
    {% endraw %}

### code block

    {% raw %}
    {% codeblock [title] [lang:language] [url] [link text] %}
    code snippet
    {% endcodeblock %}
    
    &#96``[language][title][url][link text]
    code snippet
    &#96;``
    {% endraw %}
    
### Pull Quote

    ```
    {% pullquote [class] %}
    content
    {% endpullquote %}
    ```
    
### jsFiddle

    ```
    {% jsfiddle shorttag [tabs] [skin] [width] [height] %}
    ```
    
### Gist

    ```
    {% gist gist_id [filename] %}
    ```
    
### iframe

    ```
    {% iframe url [width] [height] %}
    ```

### Image

    ```
    {% img [class names] /path/to/image [width] [height] [title text [alt text]] %}
    ```

### Link

    ```
    {% link text url [external] [title] %}
    ```
    
### Include Code

插入source内的code file

    ```
    {% include_code [title] [lang:language] path/to/file %}
    ```
    
### Youtube
    
    ```
    {% youtube video_id %}
    ```
    
### Vimeo

    ```
    {% vimeo video_id %}
    ```
    
### 引用文章

    ```
    {% post_path slug %}
    {% post_link slug [title] %}
    ```
    
### 引用资源

    ```
    {% asset_path slug %}
    {% asset_img slug [title] %}
    {% asset_link slug [title] %}
    ```

### Raw

尝试使用Raw标签,以免发生解析异常。

    ``` 
    {% raw %}
    content
    {% endraw %}
    ```
    
### 使用相对路径引用

    ```
    {% asset_img example.jpg This is an example image %}
    ```
    
更多附加引用参见:<https://hexo.io/zh-cn/docs/asset-folders.html>    

### 数据复用
    
    ```
    {% for link in site.data.menu %}
      <a href="{{ link }}">{{ loop.key }}</a>
    {% endfor %}
    ```

更多数据复用参考:<https://hexo.io/zh-cn/docs/data-files.html>

## Kramdown特性

1.支持在html元素中加入markdown语法。

2.支持为header,code,link,image添加id或class属性。

    {% raw %}
    `[link](#header1)`
    
    `Header	{header}`

    &#96``{.html #example}
    &#96;``
    {% endraw %}
    
3.注脚。



4.支持dl,dt,abbr命令。

5.支持LaTex公式编辑显示。

* * *

## Pygments特性

{% raw %}
	{% highlight python linenos %}
		print "hello world!"
	{% endhighlight %}
{% endraw %}

也可以换成在raw和endraw之间添加代码。

* * *

## Haroopad特性

- `==hightlight==`文字高亮

- `[TOC]`文档目录

- `++Underlin++`下划线

* * *

## 其他图表

1.流程图[adrai/flowchart.js](http://adrai.github.io/flowchart.js/)

2.序列图[bramp/js-sequence-diagrams](http://bramp.github.io/js-sequence-diagrams/)

* * *

## 难输入的字符

- [ | ]  --> 丨(其他竖线符号)或`&#124;`

- [ \` ] --> `&#96;`

- [ &radic;] --> `&radic;`

## 本文相关
### 参考
[Wow!Ubuntu - Markdown 语法说明](http://wowubuntu.com/markdown/index.html)
[GitHub - Writing on GitHub](https://help.github.com/articles/writing-on-github)
[Alfred Sun - 讲解markdown](http://alfred-sun.github.io/blog/2015/01/10/markdown-syntax-documentation/)
[Hexo-标签插件](https://hexo.io/zh-cn/docs/tag-plugins.html)
### 修订
1. 2015-12-21:第一版
