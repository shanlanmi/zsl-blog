----
title: 同一台电脑多github账户的方法
date: 2017-08-08 20:44:23
tags:
- project
----
# 同一台电脑多github账户的方法

## 起源

打算将私人github账户和公司github账户分离时，本以为随便配置两个独立的ssh key就可以了。结果配置完后遇到报错如下:
```
remote: Permission to  denied to github
```
所以打算重新梳理一次ssh key。

## 配置
1. 生成两个独立的ssh key
  ```
  ssh-keygen -t rsa -C "you_email"
  ```
  配置名字分别为id_rsa.github-a、id_rsa.github-b，不配置密码。

1. 添加到ssh-agent
  ```
  ssh-add ~/.ssh/id_rsa.github-a
  ssh-add ~/.ssh/id_rsa.github-b
  ```

1. 将ssh public key添加到github中
  ```
  pbcopy < ~/.ssh/id_rsa.github.a.pub
  ```
  github => Setting => SSH and GPG keys(具体方法查看github文档)

1. 配置ssh的config
  配置文件地址: `~/.ssh/config`，配置内容如下：
  ```
  # Default GitHub A
  Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa.github_a

  # GitHub B
  Host github-b
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa.github_b
  ```

## 使用
1. 配置了ssh方式，所以所有git操作都使用ssh方式。
1. ssh地址需要变更使用。
  原地址: git@github.com:youname/repository
  新地址(github_a): git@github.com:youname/repository
  新地址(github_b): git@github-b:youname/repository


