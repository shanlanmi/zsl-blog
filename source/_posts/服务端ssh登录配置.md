----
title: 服务端ssh登录配置
date: 2017-08-27 22:49:59
tags:
- Back-End
----
# ssh登录配置

## 服务端安装
1. 安装ssh server
  ```
  sudo apt install openssh-server
  ```
1. 启动服务
  ```
  sudo service ssh start
  ```
1. 检查服务启动情况，若见到`sshd`则说明服务启动成功
  ```
  sudo ps -e | grep ssh
  ```
1. 配置ssh
  ```
  sudo vim /etc/ssh/sshd_config
  ```
  - 注释掉"PermitRootLogin without-password"
  - 增加"PermitRootLogin yes"

1. 查看IP
  ```
  sudo ifconfig
  ```
  `eth0`下的`inet address恩`即为IP地址。

## 配置SSH免密码登录
1. 客户端生成密码文件
  ```
  ssh-keygen -t rsa
  ```
  注意不要配置密码。

1. 服务端生成ssh目录和验证钥匙文件
  ```
  cd ~
  mkdir .ssh
  chmod 0700 .shh
  touch .ssh/authorized_keys
  chmod 600 ~/.ssh/authorized_keys
  ```
1. 将客户端的`id_rsa.pub`内容追加到服务端的`authorized_keys`文件中。
  ```
  scp ~/.ssh/id_rsa.pub <name>@<ip_address>:.ssh/client_pub_key
  ssh <name>@<ip_address>
  cat ~/.ssh/client_pub_key >> ~/.ssh/authorized_keys
  rm ~/.ssh/client_pub_key
  ```

## 使用
```
ssh <name>@ip
```
