----
title: 为Dash添加Linux的Man Pages
date: 2016-07-21 18:25:51
tags:
- Mac
----
原文链接:http://www.binss.me/blog/add-linux-man-pages-to-dash/

最近在写Web Server，对于API，我习惯都是用Dash来查，结果在搜索epoll的时候发现找不到相应的manpage了，进入Download界面一看，才发现下载的Man Page是Mac（BSD）的，而当我点击下载Linux Man Pages时弹出一个网页：
https://blog.kapeli.com/linux-man-pages-in-dash

大概意思就是Linux那么多版本那么多Man Page，我又不知道你要哪些，因此自己准备哈，软件不提供现成的哈。
然后给出了方法：

		1. Log into your Linux box
		2. Run man -w to list the folders that contain man pages
		3. Copy these folders to your Mac
		4. Optional, but highly recommended: use a batch renamer to rename all of the man page files to have a common prefix. This will help you 
		5. differentiate between the default OS X man pages and the Linux ones
		6. Move the man pages anywhere on your MANPATH, or any folder from man -w
 
然而看了半天并没有明白是什么意思。捣鼓了半天，终于弄好了，在此分享下方法：
1. 登陆你的Linux（我的是Ubuntu） 

2. 执行该脚本：
	https://gist.githubusercontent.com/steakknife/7969875/raw/make_man_tarball.sh
	该脚本会搜刮你的man page并打成一个叫linux_manpages.tar.gz的包。

3. 在这个包下载到本地，解压，发现只有_usr_share_man文件夹里有东西：man1到man8

4. 新建/usr/local/share/ubuntu_man 文件夹（也可以根据自己喜欢新建，后面的路径相应改下就行了）
	把man1-man8粘贴到/usr/local/share/ubuntu_man 中。

5. 修改manpath文件/etc/manpaths 
	加入行：

		# add by binss
		/usr/local/share/ubuntu_man
 
6. （optional）如果想让man命令也能找到这些man文件，则修改/etc/man.conf ，加入行：
	
		# add by binss
		MANPATH /usr/local/share/ubuntu_man

	然后输入man -w 查看是否生效 ：

		/usr/local/share/man:/usr/share/man:/usr/local/share/ubuntu_man:/Applications/Xcode.app/Contents/Developer/usr/share/man:/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/share/man
 
7. 打开Dash，使用man page页进行搜索即可


说了那么多，原理是什么？
作者的文档里有一句：

	The current Man Pages docset solves these issues by indexing the man pages that are actually on your Mac.
 
也就是说不同于其他docset，Mac下的Man Pages是通过索引Mac自身的man pages来实现的，而根据观察，Dash通过读取/etc/manpaths 文件来获取man pages的路径然后进行索引，因此通过修改manpaths文件，可以让Dash到我们指定的目录去找man pages。

这时问题来了，如果man pages重复了，如何区分哪些是Mac的man pages，哪些是Linux下的man pages呢？
作者提供的方法是批量修改Linux的man pages文件名以作区分，但我觉得没必要：
如果存在相同名称的两个man，如pselect，则在旁边有个小数字“2”，点击可以自由选择：




如果是Linux的man pages，页头显示的是：
Linux Programmer's Manual
而Mac的页头显示的是：
BSD Library Functions Manual

这样就达到了区分的目的。

