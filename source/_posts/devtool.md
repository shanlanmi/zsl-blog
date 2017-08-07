----
title: devtool
date: 2016-10-31 15:36:00
categories:
- NodeJS
----
## Install

```
npm install -g devtool
```
若运行时发现错误提示如下：
```
Error: ENOENT: no such file or directory, open '/usr/local/lib/node_modules/devtool/node_modules/electron-prebuilt/path.txt'
```
则说明由于国内网络问题，electron 组件没有安装好，所以推荐使用淘宝镜像来安装：
```
cnpm install -g devtool
```

## usage

- basic 
  ```JavaScript
  devtool path/to/file.js
  ```
- auto restart when filt changed
  ```JavaScript
  devtool path/to/file.js -w --break
  ```
- more usage
  [Github: DevTools](https://github.com/Jam3/devtool)

## bug
loopback不支持 electron 环境,所以 devtool 和 node-iron 都不能用。
node-inspector 暂时有很多 bug, 不好用, 继续用 webstorm
