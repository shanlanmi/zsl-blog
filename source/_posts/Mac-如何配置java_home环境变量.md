----
title: Mac 如何配置java_home环境变量
date: 2016-12-09 14:17:15
tags:
- DevDependent
----
## 如何在多个java版本间切换

```
# Mac默认 JDK 6（Mac默认自带了一个jdk6版本）
export JAVA_6_HOME=`/usr/libexec/java_home -v 1.6`

# 设置 JDK 7
export JAVA_7_HOME=`/usr/libexec/java_home -v 1.7`

# 设置 JDK 8
export JAVA_8_HOME=`/usr/libexec/java_home -v 1.8`

#默认JDK 6
export JAVA_HOME=$JAVA_6_HOME

#alias命令动态切换JDK版本
alias jdk6="export JAVA_HOME=$JAVA_6_HOME"
alias jdk7="export JAVA_HOME=$JAVA_7_HOME"
alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
```

## 基本步骤

1. 打开终端，新建.bash_profile文件
  ```
  cd ~
  vim .bash_profile
  ```
1. 输入java_home环境变量,并保存
  ```
  export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
  ```
  这种方法可以动态地获取这个环境变量，当自动升级了新版本的JAVA时，总能找到合适的JAVA_HOME目录，这里-v 可以指定java的版本，也可以不写使用默认的JAVA_HOME 路径
  
1. 更新配置文件
  ```
  source .bash_profile
  ```
1. 查看java_home环境变量
  ```
  echo $JAVA_HOME
  ```
1. 永久配置
  上面的方法配置的用户环境变量，并不是永久的配置方法，要永久配置要设置/etc目录下地profile文件
  ```
  cd /etc
  sudo vim profile
  在文件中添加
  JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
  export JAVA_HOME
  ```
  然后强制保存退出，重启或注销使环境变量配置起作用。
