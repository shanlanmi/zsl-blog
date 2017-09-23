----
title: loopback部署方案
date: 2017-02-09 12:29:55
tags:
- NodeJS
----
# loopback部署方案

使用loopback框架可以很方便的构建一套基于nodeJS的api服务。在完成了 coding 后, 需要部署到服务器, StrongLoop 公司给出了一套解决方案, 采用[StrongLoop Process Manager][1]进行进程和环境的管理。这个工具有很多功能, 今天只讲如何利用它来部署。


## 本地调试

### 启动pm服务
启动本地的临时pm服务, 这种启动方式不会自动重启。
```
slc pm
```

### 打包项目
- **用git的形式打包**

  这种方式会在本地建立`deploy`分支, 然后可以将该分支的代码提交到pm服务。
  ```
  slc build
  ```
- **用tar的形式打包**

  这种方式会在上级目录中生成一个以项目名为开头的tar文件, 然后可以将该文件提交到pm服务。
  ```
  slc build --pack
  ```
- **用script的形式打包(推荐)**

  这种方式会完整安装npm组件, 并完整编译, 以避免部署时的编译过程, 缩短部署时间。
  ```
  slc build --install --scripts
  ```

**几种方式的不同点:**
- 打包时间不同
  - git方式的速度最快, 它会将本地用于production的npm组件一同打包。
  - tar方式的速度中等, 它会将本地的所有npm组件一同打包。
  - script方式的速度最慢, 它会将本地的所有npm组件编译后打包。
- 清理插件
  - git方式会执行`npm prune`, 会清理package.json下`devDependencies`的所有插件。
  - tar方式和script方式不会清理开发所有的npm组件。
- 部署时间
  - script方式的速度最快, 但是它要求打包和部署在同一种工作平台, 编译后可以直接运行。
  - git方式和tar方式差距不大。

### 部署项目
默认部署项目到本地pm
```
slc deploy
slc deploy http:// ../appname-appversion.tgz
```
部署后可能发现server不能运行, 是因为server在执行`npm install`和编译工作, 在这两项工作完成前是无法运行的。
具体可以通过远程命令`sudo service strong-pm status`中的当前线程来判断和debug。
我在项目中就遇到了某个npm组件在Ubuntu下安装不成功的问题, 卡了很久。

### 设置环境参数
- 配置环境参数`NODE_ENV`

  ```
  slc ctl env-set <service_name> NODE_ENV=production
  ```
- 设置`cluster size`

  ```
  slc ctl set-size <service_name> <number>
  ```

### 启动项目
一般会打开arc工具, 方便得进行可视化管理。
git项目:<https://github.com/strongloop/strong-arc>
1. 运行arc服务

  ```
  slc arc
  ```
1. 打开GUI界面

  <http://localhost:{自动生成的端口号}/#/process-manager>
1. 在自动打开的管理页面上选择`Process Manager`选项
1. 在`Hosts`处和`Port`处填入应对的参数。
1. 点击`App Status`处的链接按钮, 连接arc工具到对应的pm服务上, 就可以看到当前server的情况和操作方法了。

### 使用slc来管理项目

- 启动

  ```
  slc ctl start <server_name>
  ```
- 关闭

  ```
  slc ctl stop <service_name>
  ```
- 查看log

  ```
  slc ctl log-dump <service_name> --follow
  ```
- 远程命令

  ```
  slc ctl -C http://remote_dir:port/ <cmd>
  ```
- 显示当前拥有的服务

  ```
  slc ctl -C http://remote_dir:port/ ls
  ```
- 删除服务

  ```
  slc ctl -C http://remote_dir:port/ remove <service_name>
  ```

## 远程部署

### 安装, 运行pm服务
不同平台下安装pm服务的方法不同, 具体安装方法参考下面的文档。
[Setting up a production host - Documentation](https://docs.strongloop.com/display/SLC/Setting+up+a+production+host)

### 本机远程部署
1. 使用tar的方式打包, 以避免自动清掉开发使用的npm组件。
1. 部署到远程

  ```
  slc deploy --service=<your-service-name> http://your-pm-instance:port
  ```
这种方法会将无用的开发npm组件也部署到项目上, 比较浪费时间和资源。

### 远程登录后的部署方案(推荐)
1. 在本机上远程登录服务器。
1. 使用`git pull`获取最新的代码。
1. 在远程使用script打包。
1. 部署到对应的服务器。

在开发服务器上打包, 保证了和生产环境使用相同的工作平台, 可以使用script打包, 实现快速部署。普通的部署方式会执行一个较长编译过程, 部署期间服务是不可访问的, 所以这种方法有效的缩短了不可访问时间。

## 部署文档
- <https://docs.strongloop.com/display/SLC/Deployment+best+practices>

[1]: http://strong-pm.io/

* * *

## frigate项目信息
### 部署地址
- dev
  `http://dev@pathsource.com:daoyuan123@10.0.1.200:8701/`
- producation
  `http://dev@pathsource.com:ilovepanda@frigate_bird.pathsource.com:8701`
- staging
  `http://dev@pathsource.com:ilovepanda@frigate_bird_staging.pathsource.com:8701`;

### dev环境的反代理地址
`http://10.0.1.200` => `frigate-bird-dev.pathsource.com`
例子:
`http://frigate-bird-dev.pathsource.com/api/videos/cover`

### 远程登录
```
ssh pathsource@10.0.1.200
```


