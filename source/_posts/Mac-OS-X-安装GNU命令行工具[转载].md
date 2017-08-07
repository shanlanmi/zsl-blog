----
title: Mac OS X 安装GNU命令行工具[转载]
date: 2016-07-21 18:34:23
categories:
- Shell
----
macos的很多用户都是做it相关的人，类unix系统带来了很多方面，尤其是经常和linux打交道的人。 但是作为经常使用linux 命令行的人发现macos中的命令行工具很多都是bsd工具，跟linux下得使用方式开始差距挺大的，那么怎么安装GNU命令行工具，然后更舒服的在macos和linux之间切换呢？ 于是找到了下面的文章，顺带翻译下。
原文地址： [Install and Use GNU Command Line Tools on Mac OS X | Hong Xu](https://www.topbug.net/blog/2013/04/14/install-and-use-gnu-command-line-tools-in-mac-os-x/)

如果你是从Linux迁移到 Mac OS X系统的用户，可能会发现 Mac OS 预装的命令行工具没有Linux上的那么强大和好用（注：当然是对于习惯了linux的用户来说啦）。 原因是 Max OS X使用的是 BSD版本的命令行工具，这些命令跟 Linux版本是有些不同的，然而它们都遵循 POSIX 标准。 但是我们可以通过 HomeBrew 方面的安装 GNU 程序 和 设置它们为默认工具。

### 安装 Homebrew

首先，访问 Homebrew 的官网，根据安装教程安装 Homebrew。

简单的说：安装最新的 Xcode 然后在命令行执行下面的命令来安装

		ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

然后把下面的配置添加到你的`.bashrc`或者`.zshrc`.

		export PATH="$(brew --prefix coreutils)/libexec/gnubin:/usr/local/bin:$PATH"

注： 相信大多数用户都装过这个好用的工具啦。

为了可以容易的找到命令对应的man，请在`/etc/man.conf`文件中添加一个配置

MANPATH_MAP /usr/local/opt/coreutils/libexec/gnubin /usr/local/opt/coreutils/libexec/gnuman

### 安装 GNU 命令行工具

首先安装是最重要的一个 – GNU Coreutils

		brew install coreutils

`GNU Coreutils`包含了很多unix的基本命令，像`ls`,`cat`

接着你可能想安装下面的软件了（对于某些包，你需要先执行`brew tap homebrew/dupes`，但是只要执行一次就好了）

		brew install binutils
		brew install diffutils
		brew install ed --default-names
		brew install findutils --with-default-names
		brew install gawk
		brew install gnu-indent --with-default-names
		brew install gnu-sed --with-default-names
		brew install gnu-tar --with-default-names
		brew install gnu-which --with-default-names
		brew install gnutls
		brew install grep --with-default-names
		brew install gzip
		brew install screen
		brew install watch
		brew install wdiff --with-gettext
		brew install wget

`-- default-names`选项会阻止 Homebrew 预加 gs 到新安装的命令，这样我们就可以默认使用这些命令，从而覆盖 OS X预装的命令。

有些命令已经存在 Mac OS X 上的，但你想要一个新版本

		brew install bash
		brew install emacs
		brew install gdb  # gdb requires further actions to make it work. See `brew info gdb`.
		brew install gpatch
		brew install m4
		brew install make
		brew install nano

下面是一个补充的软件，他们不是来自GNU，但你也可以安装一个新版本来代替 maxos上原有的版本。

		brew install file-formula
		brew install git
		brew install less
		brew install openssh
		brew install perl518   # must run "brew tap homebrew/versions" first!
		brew install python
		brew install rsync
		brew install svn
		brew install unzip
		brew install vim --override-system-vi
		brew install macvim --override-system-vim --custom-system-icons
		brew install zsh

现在你的OS X应该有了一个非常简单好使的命令行, 愉快的使用吧。

声明： 
本文出自[“orangleliu笔记本”][1]博客，转载请务必保留此出处[http://blog.csdn.net/orangleliu/article/details/47357339][2]作者[orangleliu][3][知识共享 署名-相同方式共享 3.0协议][4]
[1]:http://blog.csdn.net/orangleliu/
[2]:http://blog.csdn.net/orangleliu/article/details/47357339
[3]:http://orangleliu.info/
[4]:https://zh.wikipedia.org/zh-cn/Wikipedia%3ACC_BY-SA_3.0协议文本
