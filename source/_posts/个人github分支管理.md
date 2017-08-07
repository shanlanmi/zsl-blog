----
title: 个人github分支管理
date: 2017-03-02 09:53:36
top: true
categories:
- Project
----
Github的个人分支管理策略

## 主要分支
- team分支
  - 分支定位: 团队代码合并
  - 这个分支不一定是production分支, 但一定是团队共用的分支
  - 提交到这个分支的代码, 一定是有完整功能, 并且测过可以用的
  - 一般采用merge的方式提交, 不建议直接push
- 个人develop分支
  - 分支定位: 临时修改代码, 个人代码合并, 提交到team分支
  - 这个分支基本和team分支保持一致, 上面的代码尽量保持随时可用无错
- 个人新功能分支
  - 分支定位: 每开发一个独立的新功能时所用到的新分支
  - 在该分支上, 尽可能只写跟新功能有关的代码
  - 尽可能减少同时开发多个新功能的情况, 容易发生冲突, 并且效率不高
- 个人debug分支
  - 分支定位: 用于修改个人develop的分支, 可能是突然发现的bug, 也可能是涉及整个团队代码的小修改
  - 用法和新功能分支相似
  - 重点在于只要涉及团队代码的, 都尽可能采用debug分支的形式修改, 方便第一时间推送上去

## 特殊场景
### 新功能写到一半, 发现一个很好的团队代码修改或bug
```
# 临时保存下当前的代码, 注释重点写目前完成到哪里, 下一步是什么
git add .
git comment -m "comment"

# 新建debug分支
git checkout <develop_branch>
git checkout -b <debug_branch>

# 继续debug, 完成并推送到develop分支, 在用team分支merge
git add .
git comment -m "comment"
git push origin <debug_branch>
```

### 新功能写到一半, 团队要求merge下代码
```
# 临时保存下当前的代码, 注释重点写目前完成到哪里, 下一步是什么
git add .
git comment -m "comment"

# develop分支merge

# feature分支merge

# 继续开发新功能
```

