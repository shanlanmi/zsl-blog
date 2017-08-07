----
title: Github 常见开发情况处理
date: 2016-12-23 21:32:02
categories:
- Project
----
### 开发到一半,需要 merge 下远程的代码
```git
git stash
git pull
git stash apply
```

### stash apply 后发现不是自己想要的代码
```git
git stash apply // 发现代码不是自己想要的
git stash // 恢复未 apply 之前的状态
git stash list // 查看 stash 的历史
git stash apply stash@{2} // 找到对应的版本,这个假设是{2}
```

### 逻辑1写到一半,突然想写逻辑2,用分支处理
```git
git checkout -b new_branch_name // 基于当前代码创建新的分支
git checkout old_branch_name // 切回老分支
git stash // 保险点,用 stash 备份下
// 继续开发逻辑2
git add .
git commit -t "逻辑2" // commit 很关键,不能漏了
git push
git checkout new_branch_name
// 继续开发逻辑1,无视逻辑2
git add .
git commit -t "逻辑1" // commit 同样很关键
git checkout old_branch_name
git merge new_branch_name // 完成
```

### 多终端同git账号，部分终端在执行`git pull`命令时提示密码
```
 remote set-url origin git@github.com:username/repo.git
```
