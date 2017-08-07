----
title: Vim - Plugin
date: 2016-07-21 06:39:42
categories:
- Editor
----
## Vim 插件与命令记录
### Vundle：插件管理
**项目地址**：<https://github.com/VundleVim/Vundle.vim>

命令|功能
---|---
:PluginList      |lists configured plugins
:PluginInstall   |installs plugins; append `!` to update or just :PluginUpdate
:PluginSearch foo|searches for foo; append `!` to refresh local cache
:PluginClean     |confirms removal of unused plugins; append `!` to auto-approve removal
:h vundle        |help

### ctrlp.vim
项目地址：<https://github.com/kien/ctrlp.vim>


启动命令|启动模式
---|---
:CtrlP                    |搜索当前目录文件
:CtrlPBuffer or :CtrlPMRU |搜索最近打开文件
:CtrlPMixed               |同时搜索当前目录和最近打开目录
:help ctrlp-commands|命令帮助
:help ctrlp-extensions|选项帮助
..|搜索上一级菜单（需要 Mix 模式）


窗口命令|功能
---|---
&#60;F5&#62;|刷新文件结构
&#60;C-f&#62; 和 &#60;C-b&#62;|模式切换
&#60;C-d&#62;|仅搜索文件名
&#60;C-r&#62;|开启正则表达式模式
&#60;C-j&#62;, &#60;C-k&#62; |上下选择文件 
&#60;C-t&#62; , &#60;C-v&#62;, &#60;C-x&#62;|在新 tab，窗口中打开选择的文件
&#60;C-n&#62;, &#60;C-p&#62;|找之前，之后查找的字符串
&#60;C-y&#62;|创建一个新的文件
&#60;C-z&#62;|标记多文件后&#60;C-o&#62;打开

### syntastic

命令|功能
---|---
:help syntastic|帮助
:SyntasticToggleMode|自动模式，手动模式切换
:SyntasticCheck [语法检查器]|手动检查语法
:SyntasticInfo|当前检查器信息
:SyntasticReset|重置错误列表
:SyntasticSetLoclist|输出错误只至 quick-fix

**屏蔽 angular 的报错**
若 jshint 不识别 angularJS 的语法而报错，在项目目录下加入`.jshintrc`文件，文件内容为：


### vim-coffee-script
gtihub 地址：[kchmck/vim-coffee-script: CoffeeScript support for vim](https://github.com/kchmck/vim-coffee-script#install-using-vundle)
#### Compile to JavaScript
- 自动编译 coffee 为 js 文件
  ```JavaScript
  :[silent] make[!] fileName.js [options]
  ```
- 切换自动模式为手动模式
  ```JavaScript
  :compiler coffee
  ```
- 显示 quickfix, coffee compiler 的错误记录在里面
  ```JavaScript
  :cw
  ```
- 编译并显示
  ```JavaScript
  :[range] CoffeeCompile [vert]  
  ```
- 实时预览 Coffee 编译
  ```JavaScript
  :CoffeeWatch [vert]
  // 同步滚动
  :setl scrollbind
  ```
- 编译运行 Coffee
  ```JavaScript
  :[range] CoffeeRun [options]
  ```
- Coffee语法检查
  ```JavaScript
  :[range] CoffeeLint[!] [options] | cw
  ```


## CtrlSF
<https://github.com/dyng/ctrlsf.vim>

Cmd && ShortKey                     | Feature
:-----------------------------------|:--
`:CtrlSF [pattern]` or `<C-F>f`     | It will split a new window to show search result
`:CtrlSFOpen`                       | Reopen CtrlSF window when you have closed CtrlSF window
`:CtrlSFToggle` or `<C-F>t`         | Reopen or close the CtrlSF window
`:CtrlSFVwordPath` or `<C-F>f`      | Input the current visual selected word
`:CtrlSFVwordExec` or `<C-F>F`      | Input the current visual selected word and exec
`<Plug>CtrlSFCwordPath` or `<C-F>n` | Input the word under the cursor
`:CtrlSFQuickfix [pattern]`         | Open a quickfix window to show search result
`Enter`                             | Open corresponding file
`<C-O>`                             | Open file in a horizontal split window.
`t`                                 | Like Enter but open file in a new tab.
`p`                                 | Like Enter but open file in a preview window.
`P`                                 | Like Enter but open file in a preview window and switch focus to it.
`O`                                 | Like Enter but always leave CtrlSF window opening.
`T`                                 | Like t but focus CtrlSF window instead of new opened tab.
`q`                                 | Quit CtrlSF window.
`<C-J>`                             | Move cursor to next match.
`<C-K>`                             | Move cursor to previous match.

* `-R`: Use regular expression pattern.
* `-I`: Search case-insensitively
* `-S`: Search case-sensitively
* `-C`, `-A`, `-B`: Specify how many context lines to be printed, identical to their counterparts in Ag/Ack.



## indentLine:缩进竖线提示
打开/关闭提示


## ultisnips:snipt plugin
github地址：<https://github.com/sirver/ultisnips>
通用 snipt optional：'honza/vim-snippets'



## YouCompleteMe:自动补全
Install:

```
cd ~/.vim/bundle/YouCompleteMe
./install.py --tern-completer
```

Key | Function
:-|:-
`<c-n>`,`<Down>` | Next select
`<c-p>`,`<Up>` | Previous select
`<c-o>` | Omni select

## eunuch.vim

Command|Feature
-|-
`:Remove`|Delete a buffer and the file on disk simultaneously.
`:Unlink`|Like `:Remove`, but keeps the now empty buffer.
`:Move`|Rename a buffer and the file on disk simultaneously.
`:Rename`|Like `:Move`, but relative to the current file's containing directory.
`:Chmod`|Change the permissions of the current file.
`:Mkdir`|Create a directory, defaulting to the parent of the current file.
`:Find`|Run `find` and load the results into the quickfix list.
`:Locate`|Run `locate` and load the results into the quickfix list.
`:Wall`|Write every open window.  Handy for kicking off tools like [guard][].
`:SudoWrite`|Write a privileged file with `sudo`.
`:SudoEdit`|Edit a privileged file with `sudo`.

* File type detection for `sudo -e` is based on original file name.
* New files created with a shebang line are automatically made executable.
* New init scripts are automatically prepopulated with `/etc/init.d/skeleton`.

[guard]: https://github.com/guard/guard

## NERDCOMMENTER

Command|Feature
-|-
`<leader>cc`|加注释
`<leader>cu`|解开注释
`<leader>c<space>`|加上/解开注释, 智能判断
`<leader>cy`|先复制, 再注解(p可以进行黏贴)

## vim-easymotion

Key|Feature
-|-
ff|全屏搜索
fs|往下搜索
fF|往上搜索
fl|行内向右搜索
fj|行间向下搜索
fk|行间向上搜索
fh|行内向左搜索
fw|往下搜索一个单词开始处
fb|往上搜索一个单词开始处
fe|往下搜索一个单词结尾处
fge|往下搜索一个单词结尾处

## vim-mutiple-cursors

Key|Feature
-|-
next_key|`<C-m>`
prev_key|`<C-[>`
skip_key|`<C-x>`
quit_key|`<Esc>`

## ag.vim

Key|Feature
-|-
e |to open file and close the quickfix window
o |to open (same as enter)
go|to preview file (open but maintain focus on ag.vim results)
t |to open in new tab
T |to open in new tab silently
h |to open in horizontal split
H |to open in horizontal split silently
v |to open in vertical split
gv|to open in vertical split silently
q |to close the quickfix window

## vim-markdown
[GitHub - plasticboy/vim-markdown: Markdown Vim Mode](https://github.com/plasticboy/vim-markdown)

Key             | Feature
:---------------|:--
gx              | open the link under the cursor
`]]`            | go to next header
`[[`            | go to previous header
`][`            | go to next sibling header if any
`[]`            | go to previous sibling header if any
`]c`            | go to Current header
`]u`            | go to parent header (Up)
:HeaderDecrease | **Decrease** level of all headers in buffer
:HeaderIncrease | **Increase** level of all headers in buffer
:SetexToAtx     | Convert all Setex sytle headers in buffer to Atx(recommend Atx)
:TableFormat    | Format the table under the cursor like this.
:Toc            | create a quickfix **vertical** window navigable TOC
:Toch           | Same as :Toc but in an horizontal window.
:Toct           | Same as :Toc but in a new tab.
:Tocv           | Same as :Toc for symmetry with :Toch and :Tocv.

## emmet

展开按键`<c-q>`=`ctrl`+`q`+`,`

**本文相关**
1. 参考
1. 修订
2016-04-09:第一版
2016-06-10:加入 vim-coffee-script。
2016-06-29:加入 ack.vim，indentLine
