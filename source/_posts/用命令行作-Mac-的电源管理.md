----
title: 用命令行作 Mac 的电源管理
date: 2016-07-21 18:34:23
tags:
- Shell
----
### 常用命令
**关机：**

**重启：**

**休眠：**

**禁用休眠：**

**取消命令：**

- 指定时间默认单位是分钟。
- [pmset][pmset] 和 [shutdown][shutdown] 均可以做电源管理。


### 睡眠模式
**Mac的睡眠方式说明：**
- 0.（quick）： Default sleep behavior on most Apple computers. RAM is still powered on while sleeping. Wake up is fast. Safe sleep is disabled.
- 1.（deep）： Hibernation behavior. System is totally shut down while sleeping. RAM contents are dumped to disk. Wake up is slow.
- 3.（safe）： Default behavior on Powerbook HD and later computers. RAM is still powered on while sleeping. Wake up is fast. Safe sleep is enabled， so RAM contents are also dumped to disk before going to sleep.
- 5.（deep）： Same as mode 1 for systems with encrypted virtual memory.
- 7.（safe）： Same as mode 3 for systems with encrypted virtual memory
Tips: quick mode 不会生成 sleepimage 文件，safe mode 会生成 sleepimage 文件。

**查看睡眠模式：**

**修改睡眠模式：**




***
### 本文相关
1. 参考
[教你弄清 OSX 的睡眠模式，以及合法的禁止产生 sleepimage](http://www.macgg.com/archives/24126.html)
1. 修订
2016-02-21:第一版

[pmset]:http://ss64.com/osx/pmset.html
[shutdown]:http://ss64.com/osx/shutdown.html
