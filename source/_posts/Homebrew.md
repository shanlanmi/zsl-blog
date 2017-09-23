----
title: Homebrew
date: 2016-07-21 18:34:23
tags:
- Shell
----
之前 homebrew 稀里糊涂装好的，但是每次安装包都需要`sudo`，不然就提示`permission denied`，所以想重新安装下，顺带重新看看 brew 还有哪些命令。
## homebrew 重新安装的方法


[Homebrew 官网](http://brew.sh/index_zh-cn.html)

结果安装完后，发现原来通过 homebrew 安装的包全部都不能用的，更坑的是，依旧各种提示`permission denied`，怀疑是自己没删除干净，在 Homebrew 的 issues 中找到了问题的解决方法。
[permission denied when trying to install homebrew](https://github.com/Homebrew/legacy-homebrew/issues/33906)

解决方法：

通过`brew doctor`来检查 brew 是否安装正常。
另外发现官网上的 Trobleshooting 很有用。
[brew/Troubleshooting.md at master · Homebrew/brew](https://github.com/Homebrew/brew/blob/master/share/doc/homebrew/Troubleshooting.md#troubleshooting)
## Homebrew 常用命令

- brew help             - 帮助
- brew update           - 更新 brew
- brew info foo         - 安装包信息检索
- brew search foo       - 安装包搜索
- brew list             - 安装包列表
- brew outdated         - 过时信息
- brew install          - 安装
- brew upgrade          - 安装包升级
- brew deps foo         - 列出安装包的依赖关系
- brew outdated         - 列出非最新版的软件包
- brew upgrade [foo]    - 更新非最新版的软件包
- brew uninstall        - 卸载
- brew uninstall –force - 完全卸载

## Homebrew cask
- brew tap caskroom/cask - 安装 Homebrew cask
- brew cask search - 列出所有可以被安装的软件
- brew cask search - 查找所有相关的应用
- brew cask info - 查看应用的信息
- brew cask uninstall - 卸载

***
**本文相关**
1. 参考
1. 修订
2016:第一版
