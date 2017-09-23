----
title: Mac中的搜索神器Alfred
date: 2016-07-21 18:25:51
tags:
- Mac
----
前言
&emsp;&emsp;Alfred2 for Mac OS X的搜索神器,尽管官方的Spotlight已经优化很多了,还有Flashlight插件相助,但是由于workflow的缘故,所以深度用户暂时还不会大量离开Alfred。
&emsp;&emsp;由于Alfred依赖Spotlight功能,所以想用Alfred代替Spotlight的用户,记得开启Spotlight的相应的功能,只需要取消Spotlight的快捷键即可。

基本功能摘要

以下未介绍的菜单功能,建议采用默认值。

### 1. Features

#### 1.1. Default Results 默认搜索

- Essentials,全选
- Extras,全不选,文件搜索用专门的File Search命令
- Search Scope,搜索范围,按需设置
- Fallbacks,默认搜索未查询到结果,时而跳转的搜索引擎。

#### 1.2 File Search 文件检索

- Seach
    - `open+` or `space+` open the file.
    - `find+` reveal in Finder.
    - `in+` look for the contents of a file.
    - `tags+红色` look for files matching osx tags.
- Navigation文件导航
    - `/` root direction
    - `~` home direction
    - `←` and `→` folder navigation
    - `<ENTER>` open in Finder
- Buffer文件暂存器
    - `Alt ↑` add to buffer
    - `Alt ↑` add to buffer and select next
    - `Alt ←` remove from buffer
    - `Alt →` to action
- Actions
    - `fn` to action
    - Action Ordering,勾选按最近使用排序action
    - `Alt cmd \` show action for selection in OS X.
- Advanced
    - `Shift` Quick Look
    
#### 1.3. Web Search
自定义搜索

- 百度:https://www.baidu.com/s?wd={query}
- 淘宝:https://s.taobao.com/search?q={query}
- 谷歌(时限2Y):http://www.google.com.tw/search?q={query}&hl=zh-CN&as_qdr=y2
- 知乎:https://www.zhihu.com/search?type=question&q={query}
- 大众点评:http://www.dianping.com/search/keyword/16/0_{query}
- 百度网盘:http://so.baiduyun.me/search.php?wd={query}

#### 1.4 Calculator

- `1+1` standard calculator
- `=1+1` advanced calculator


#### 1.5 Dictionary

- `df` define word
- `spell` suggest spelling and copying

#### 1.6 Contacts

- `email name` to send a email

#### 1.7 Clipboard

- `Alt cmd c` viewer Hotkey
- `snip+` 片段输入
- `cmd c c`append the currently clipboard
 
#### 1.8 iTunes

#### 1.9 1Password

#### 1.10 Systerm
- system actions
    - `screensaver`
    - `trash`
    - `emptytrash`
    - `logout`
    - `sleep`
    - `lock`
    - `restart`
    - `shutdown`
    - `eject`
- application actions
    - `hide+`
    - `quit+`
    - `forcequit+`
    - `quitall`

#### 1.11 Shell
&emsp;自定义为Iterm,[脚本](https://github.com/stuartcryan/custom-iterm-applescripts-for-alfred/blob/master/custom_iterm_script_iterm_2.1.1.applescript)

Workfolws
----

- 支持语言:bash,zsh,php,ruby,python,perl,osascript
- workflows四大基本元素:trigger,keyword,action,output
- workfolws制作基本流程:
    1. 新建Blank Workflow
    2. 下载语言库
    3. 写script
    4. 组件组合
- 推荐workflow
    - [workflows List](http://www.alfredworkflow.com)
    - [packal](http://www.packal.org)
    - [豆瓣搜索](http://lucifr.com/2013/03/14/douban-workflow-for-alfred-v2/)
    - [alfred-top](http://github.com/pstadler/alfred-top)
    - dash
    - [Evernote](http://www.packal.org/workflow/evernote)
    - [Open clipboard in browser](http://www.somebits.com/weblog/)
    - Youdao
    - [Thunder_Alfred_WorkFlow](https://github.com/qiaoxueshi/Thunder_Alfred_WorkFlow/)
    - [Notes](http://www.packal.org/workflow/notes)

## 本文相关
### 参考
[wellsnakeblog-Alfred使用手册](http://wellsnake.com/jekyll/update/2014/08/16/001/)
### 修订
2015-12-25:第一版
