----
title: 用ssh登录 github
date: 2016-07-21 06:39:42
categories:
- Project
----
## 配置 ssh
1. 设置Git的user name和email(非第一次用 git 可以跳过)
  ```bash
  git config --global user.name "name"
  git config --global user.email "mail"
  ```

1. 检查已有的 SSH keys
  ```bash
  ls -al ~/.ssh
  ```
  - 若存在d_dsa.pub、 id_ecdsa.pub、 id_ed25519.pub、 id_rsa.pub 的文件，说明已经存在 SSH key。
  - ~/.ssh 目录是 SSH key 存放的默认目录。

1. 生成新的 SSH key 
  ```bash
  # 生成 SSH key 文件
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

  # 确认文件名
  Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]

  # 设置 SSH key 密码
  Enter passphrase (empty for no passphrase): [Type a passphrase]
  Enter same passphrase again: [Type passphrase again]
  ```
  - `-t rsa`: 加密算法的类型是 RSA
  - `-b 4096`: 密钥是 4096 位/比特（默认值为1024）
  - 设置文件名时，回车及采用默认的 ssh 文件地址，可以设置自定义文件名的 ssh 文件，放置在当前文件夹中。

  ```bash
  # 在默认文件夹中生成自定义名的 SSH key 文件
  ssh-keygen -t rsa -f ~/.ssh/id_rsa_name -b 4096 -C "your_email@example.com"
  ```
  一个 SSH key 只能用于一个 github 账户的一个 responsive，所以要创建不同的 SSH key 来管理不同的项目。

  若使用非 github 平台来管理代码， 则需要在~/.ssh/config 中设置地址(若 config 文件不存在，则需要自行创建）
  ```bash
  Host *.平台地址
      IdentityFile ~/.ssh/id_rsa_name
      User test
  ```

1. 加入到 ssh-agent 中
  ssh-agent 为一个 ssh 的密码管理器。
  ```bash
  # 确认 ssh-agent 可用
  eval "$(ssh-agent -s)"
  //- Agent pid 59566

  # 添加 ssh 文件到 ssh-agent 中 
  ssh-add ~/.ssh/id_rsa
  ```

1. 添加 SSH key 到 Github 项目中
  ```bash
  # 复制 pub 钥匙到剪切板，id_rsa 为你设置的 SSH key 文件名
  pbcopy < ~/.ssh/id_rsa.pub
  ```
  打开 github 页面 -> 切换到项目页面 -> Settings -> Deploy keys -> Add deploy
  
1. 测试连接
  ```bash
  ssh -T git@github.com
  //- The authenticity of host 'github.com (192.30.252.1)' can't be established.
  RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
  Are you sure you want to continue connecting (yes/no)?

  yes
  //- Hi username! You've successfully authenticated, but GitHub does not provide shell access.
  ```
  SSH key 添加成功。
  若出现问题可以查看 bug 页面<https://help.github.com/categories/ssh/>


***
## 本文相关
1. 参考

[SSH - Github Help ](https://help.github.com/articles/generating-an-ssh-key/)
[git生成ssh key及本地解决多个ssh key的问题](http://riny.net/2014/git-ssh-key/)

1. 修订
2016:第一版
