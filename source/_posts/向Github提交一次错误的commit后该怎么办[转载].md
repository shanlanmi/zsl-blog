----
title: 向Github提交一次错误的commit后该怎么办[转载]
date: 2016-07-21 18:38:44
tags:
- Project
----
原文地址：<http://zhuqingcode.github.io/git/2014/05/15/github-a-bug-commit.html>

## 向Github提交一次错误的commit后该怎么办

在使用_Github_作为远程仓库的时候，不知道你有没有遇到这种情况：刚刚_git push_了一个_commit_到_Github_，突然发现刚刚那个_commit_有错误，而现在想从_Github_上删掉这个错误的_commit_。这种情况下，我们该怎么办呢？这里就介绍两种方法来解决这个问题。 

### 方法一（推荐）

**采用_git reset_结合_git push -f_的方法。**

我们来结合实例说一下。 

* 在本地_clone Github_上的一个仓库： 



* 进入sample-git目录，故意做一次错误的提交，并且推送到Github上： 



这样子我们就推送了这个错误的提交到_github_上了。我们来看一啊_github_上的相关内容： 

![pic-1459235283390.png][1]

![pic-1459235283393.png][2]

的确，我们是_push_上去了。 

* 恢复


说明一下，第一步我们先_reset_到原来_HAED~1_的位置，相当于把那次错误的_commit_删掉了。第二步，强制推送到_Github_上。注意_-f_选项不能丢。 

我们来看一下_github_上的_networks_： 

![pic-1459235283394.png][3]

那一次错误的commit的确被删掉了，任务完成。 

### 采用*git revert的方法。

这里假设我们回到那个错误的_commit_并且推送到了_Github_上： 



我们采取_revert_的方法，相当于重新生成一个提交，来撤销前一次错误的_commit_。 

我们来看一下_github_上的_networks_： 

![pic-1459235283395.png][4]

注意图中的不同之处额。这里并没有直接删除那次错误的_commit_，而是重新生成一个提交，来撤销前一次错误的_commit_。

***
## 本文相关
1. 参考
1. 修订
2016:第一版

[0]: http://zhuqingcode.github.io/categories.html#git-ref
[1]: http://zhuqingcode.github.io/images/github0.png
[2]: http://zhuqingcode.github.io/images/github1.png
[3]: http://zhuqingcode.github.io/images/github2.png
[4]: http://zhuqingcode.github.io/images/github3.png
[5]: http://zhuqingcode.github.io/linux/2014/05/14/hack-embeded.html
[6]: http://zhuqingcode.github.io/git/2014/05/16/git-reflog.html
[7]: http://duoshuo.com/
