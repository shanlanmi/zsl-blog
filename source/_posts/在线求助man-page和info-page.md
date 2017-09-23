----
title: 在线求助man page和info page
date: 2016-07-21 18:34:23
tags:
- Shell
----
## man page

	man [-] cmd

### 参数

参数|描述
---|---
n|n为1~7,查询对应man(1)~man(7)档案下的命令(默认显示最先找到的命令)
-f<BR>`man -f` <=> `whatis`|查询更多信息
-k<BR>`man -k` <=> `apropos`|关键词找到(非完整字符串查找)

### 命令名后代号的意义

代号|内容
---|---
1|使用者在shell环境中可以操作的命令或可运行文件(重要)
2|系统核心可呼叫的函数与工具等
3|一些常用的函数(function)与函式库(library)，大部分为C的函式库(libc)
4|装置文件的说明，通常在/dev下的文件
5|配置文件或者是某些文件的格式(重要)
6|游戏(games)
7|惯例与协议等，例如Linux文件系统、网络协议、ASCII code等等的说明
8|系统管理员可用的管理命令(重要)
9|跟kernel有关的文件

### Hotkey

按键|功能
---|---
[Space]|向下翻一页
[Page Down]|向下翻一页
[Page Up]|向上翻一页
[Home]|去到第一页
[End]|去到最后一页
/string|向下搜寻 string 字符串
?string|向上搜寻 string 字符串
n|向上搜索下一个
N|向下搜索下一个
q|结束man page

## info page

与man page一篇大而全的用法说明不同,info page是以node的形式来写,每个node之间由超链接来跳转.

	info [-] cmd

### 文档结构

标题|内容
---|---
File|数据来自哪个info文件
Node|页面所属Top节点.
Next|下一个节点.
Prev|上一个节点.
Up|回到上层

HotKey|功能
---|---
N|下一个节点
P|上一个节点
U|回到上一层
[TAB]|移动到超链接*,再[ENTER]进入节点
空格键<BR>[Page Down]|向下翻一页
[Page Up]|向上翻一页
[Home]|去到第一页
[End]|去到最后一页
/string|向下搜寻 string 字符串
?string|向上搜寻 string 字符串
n|向上搜索下一个
N|向下搜索下一个
q|结束这次的 man page

## 其他有用文件

man文件放置在/usr/share/man/
info文件放置在/usr/share/info/
其他文档放置在/usr/share/doc/

## 本文相关

### 本文参考

[鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0160startlinux_3.php)

### 修订记录

1. 2016-01-07:第一版.

