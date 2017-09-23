----
title: Github命令速查
date: 2016-07-21 06:39:42
tags:
- Project
----
### 几个名词
- 工作区(Working dir)：本地文件夹
- 暂存区(Index)：记录对文件的操作
- 提交指针(HEAD): 指向最近一次提交的结果
- 版本库(Repository)：代码版本仓库



### 初始化
- 在当前文件夹下创建新仓库
  ```
  git init
  ```
- 本地仓库克隆
  ```
  git clone /path/to/repository 
  ```
- 远程仓库克隆
  ```
  git clone username@host:/path/to/repository
  ```


### 提交
1. 查看当前版本状态（是否修改）
  ```
  git status 
  ```
1. 添加或修改文件至缓存区 Index 
  ```
  git add <filename>
  git add .
  git rm xxx                     # 删除index中的文件
  git rm -r *                    # 递归删除
  git ls-files                   # 列出index包含的文件
  ```
1. 写提交信息，并提交到 HEAD
  ```
  git commit -m "代码提交信息"
  git commit --amend -m 'xxx'    # 合并上一次提交（用于反复修改）
  git commit -am 'xxx'           # 将add和commit合为一步
  ```
1. 推送改动到 master 分支，可以换成其他分支
  ```
  git push origin master
  ```
1. 无现有仓库情况下，连接本地仓库至远程服务器
  ```
  git remote add origin <server>
  ```
1. 备份当前工作内容
  ```
  git stash                 # 备份当前工作内容到 git 栈，让当前工作区与最近一次提交的内容一致
  git stash apply           # 从 git 栈回复最近一次备份的内容
  git stash list            # 显示 git 栈的列表
  git stash clear           # 清空 git 栈
  ```

### 分支
- 创建分支“feature_x”，并切换
  ```
  git checkout -b feature_x
  ```
- 删除分支
  ```
  git branch -d <branch>
  git push origin -d <branch>
  ```
- 显示分支
  ```
  git branch                           # 显示本地分支
  git branch -v                        # 显示分支详情
  git branch -vv                       # 显示分支关联情况
  git branch -a                        # 显示所有分支
  git branch -r                        # 显示所有原创分支
  git branch --merged                  # 显示所有已合并到当前分支的分支
  git branch --no-merged               # 显示所有未合并到当前分支的分支
  git branch -m master master_copy     # 本地分支改名
  git show-branch                      # 图示当前分支历史
  git show-branch --all                # 图示所有分支历史
  ```
- 切换分支至"master"
  ```
  git checkout master
  ```
- 推送分支至远程仓库
  ```
  git push origin <branch>
  git push -u origin <branch>          # 新建远程分支, 并把本地分支推送到远程
  git push --tags                      # 把所有tag推送到远程仓库
  ```
- 撤销提交
  ```
  git revert dfb02e6e4f2f7b573337763e5c0013802e392818
  ```
- 以远程分支为镜像创建本地分支
  ```
  git checkout --track origin/<branch>
  ```
- 设置本地分支和远程分支的映射
  ```
  git branch --set-upstream-to=origin/<branch> senan/likeable
  ```

### 分支合并
- 自动检测本地分支的远程分支, 拉去数据并合并
  ```
  git pull
  ```
- 创建本地分支和远程分支的关联
  ```
  git branch -u origin/<branch>
  ```
- 合并其他分支到你的当前分支
  ```
  git merge <branch>
  git merge master              # 合并本地 master
  git merge origin/master       # 合并远程 master
  ```
- 冲突后标记为合并成功
  ```
  git add <filename>
  ```
- 查看改动
  ```
  git diff                               # 比较当前文件和 index 的差异
  git diff --cached                      # 比较 index (未commit)和 HEAD 的差异
  git diff HEAD^                         # 比较当前文件与上一个版本的差异
  git diff HEAD -- ./lib                 # 比较与HEAD版本lib目录的差异
  git diff origin/master..master         # 比较远程分支master上有本地分支master上没有的
  git diff origin/master..master --stat  # 只显示差异的文件，不显示具体内容
  git show dfb02                         # 显示某个提交的详细内容，可只用commitid的前几位
  git show HEAD                          # 显示HEAD提交日志
  git show HEAD^                         # 显示最新版HEAD的提交日志（^^为上两个版本, ^5为上5个版本）
  git whatchanged                        # 显示提交历史对应的文件修改
  ```

### 标签
- 获取提交信息
  ```
  git log
  git log -5        # 显示5行日志
  git log --stat    # 显示提交日志及相关变动文件
  ```
- 给提交版本上标签
  ```
  git tag 1.0.0 1b2e1d63ff
  ```
- 显示已存在的 tag
  ```
  git tag
  ```

### 替换本地改动
- 强制用远程库最新 HEAD 替代本地文件
  ```
  git checkout -- <filename>
  ```
- 丢弃所有的本地改动与提交，从服务器上获取最新的版本, 当本地的提交数据落后于远程时使用
  ```
  git fetch origin
  git fetch --all   # 同fetch origin
  git reset --hard origin/master
  ```

***
**本文相关**
1. 参考

[Git命令大全](https://gist.github.com/guweigang/9848271)
[git 分支操作](https://github.com/wy-ei/notebook/issues/5)
1. 修订
2016:第一版


