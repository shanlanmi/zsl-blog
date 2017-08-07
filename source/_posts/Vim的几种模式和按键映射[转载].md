----
title: Vim的几种模式和按键映射[转载]
date: 2016-07-21 18:29:45
categories:
- Editor
----
## vim的几种模式和按键映射

Map是Vim强大的一个重要原因，可以自定义各种快捷键，用起来自然得心应手。  
vim里最基本的map用法也就是



这里把c映射成了a，在map生效的情况下，按下c就等同于按下了a  
当然，常用的Ctrl,Shift,Alt自然也是支持的。

* 令Ctrl+a对应到a
  ```
  :map <C-a> a
  ```

* 令Alt+a对应到a
  ```
  :map <A-a> a
  ```

* 令Ctrl+Alt+a对应到a
  ```
  :map <C-A-a> a
  ```
* 令 Cmd+a 对应到a
  ```
  :map <D-a> a
  ```

到此，我们已经可以做很多事情了。  
但是map命令远不只这一种，在不同的模式下，同一组按键可以被映射到不同的组合上。  
Vim的模式众多，但是一般被提及的也就是这么几种:

1. Normal Mode
  也就是最一般的普通模式，默认进入vim之后，处于这种模式。
1. Visual Mode
  一般译作可视模式，在这种模式下选定一些字符、行、多列。在普通模式下，可以按v进入。
1. Insert Mode
  插入模式，其实就是指处在编辑输入的状态。普通模式下，可以按 i 进入。
1. Select Mode
  在gvim下常用的模式，可以叫作选择模式吧。用鼠标拖选区域的时候，就进入了选择模式。  
和可视模式不同的是，在这个模式下，选择完了高亮区域后，敲任何按键就直接输入并替换选择的文本了。  
  和windows下的编辑器选定编辑的效果一致。普通模式下，可以按gh进入。
1. Command-Line/Ex Mode
  就叫命令行模式和Ex模式吧。两者略有不同，普通模式下按冒号(:)进入Command-Line模式，可以输入各种命令，使用vim的各种强大功能。普通模式下按Q进入Ex模式，其实就是多行的Command-Line模式。

对于Map，有几个基本的概念

* **命令的组合**
  同Vim下的其他命令一样，命令的名字往往由好几段组成。前缀作为命令本身的修饰符，微调命令的效果。对于map而言，可能有这么几种前缀

Command<br> 命令|Normal<br> 常规模式  |Visual<br> 可视化模式|Operator Pending<br> 运算符模式|Insert Only<br> 插入模式|Command Line<br> 命令行模式
---|---|---|---|---|---
:map|y|y|y||
:nmap|y||||
:vmap||y|||
:omap|||y||
:map!||||y|y
:imap||||y|
:cmap|||||y

* **Recursive** **Mapping**
  递归的映射。其实很好理解，也就是如果键a被映射成了b，c又被映射成了a，如果映射是递归的，那么c就被映射成了b。

  ```
  :map a b
  :map c a
  ```

  对于c效果等同于

  ```
  :map c b
  ```

  默认的map就是递归的。如果遇到[nore]这种前缀，比如:noremap，就表示这种map是非递归的。

* **unmap**
  unmap后面跟着一个按键组合，表示删除这个映射。

  ```
  :unmap c
  ```

  那么在map生效模式下，c不再被映射到a上。

  同样，unmap可以加各种前缀，表示影响到的模式。
* mapclear
  mapclear直接清除相关模式下的所有映射。  
  同样，mapclear可以加各种前缀，表示影响到的模式。

  这里列出常用的一些map命令，默认map命令影响到普通模式和可视模式。

  :map  :noremap  :unmap  :mapclear  
  :nmap :nnoremap :nunmap :nmapclear  
  :vmap :vnoremap :vunmap :vmapclear  
  :imap :inoremap :iunmap :imapclear  
  :cmap :cnoremap :cunmap :cmapclear

可以试试这些命令

1. 命令行模式下建一个mapping 

  ```
  nmap b a
  ```
1. 现在普通模式下，按b，可以进入插入模式，随便输入一些字符
1. 命令行模式下建一个mapping 

  ```
  vmap b d
  ```
1. 现在普通模式下，按V，进入了可视模式，并且选定了一整行，按下b，可以删除整行
1. 命令行模式下建一个mapping 

  ```
  imap b a
  ```
1. 现在试着给正在编辑的这个文件输入一个字符"b"吧 :p
1. 命令行模式下建一个mapping 

  ```
  cmap b c
  ```
1. 命令行模式下， 按下b，会出来一个a

好了，到此vim的按键已经被你弄得乱七八糟了，试着用unmap和mapclear清除这些mapping吧。


### 查找按键缩写
```
:help key-codes
```
***
**本文相关**
1. 参考
1. 修订
2016:第一版
[0]: http://haoxiang.org
[1]: http://haoxiang.org/2011/09/vim-modes-and-mappin/
[2]: http://haoxiang.org/category/solution/
[3]: http://haoxiang.org/
[4]: ./pic-1460207995480.png
[5]: http://haoxiang.org/2013/11/vim-replace-by-line-number/
[6]: http://opjasee.com/
[7]: http://www.laoqinshuo.com/vim%e8%ae%be%e7%bd%ae.html
[8]: http://haoxiang.org/tag/editor/
[9]: http://haoxiang.org/tag/mapping/
[10]: http://haoxiang.org/tag/mode/
[11]: http://haoxiang.org/tag/vim/
[12]: http://independentpublisher.me
[13]: http://wordpress.org/
