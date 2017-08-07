----
title: Nodejs 各种路径
date: 2017-06-16 15:53:11
categories:
- NodeJS
----
## Nodejs 各种路径
- `process.cwd()`
  取当前工作目录（Current Work Directory），这个不同于“脚本所在目录”。如果你是通过命令行调用的，那么就应该是入口脚本的目录；如果是通过其他进程调用的会继承下来。

- `__dirname`
  获取当前文件所在的目录

- `path.resolve`, `path.join`
  path.join方法用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是”/“，Windows系统是”\“。
  path.resolve方法用于将相对路径转为绝对路径。
  它可以接受多个参数，依次表示所要进入的路径，直到将最后一个参数转为绝对路径。如果根据参数无法得到绝对路径，就以当前所在路径作为基准。除了根目录，该方法的返回值都不带尾部的斜杠。

- `module.filename`
  ```
  let myfilename = module.filename; // 获取当前文件的文件名的绝对路径
  let patent = module.parent.parent.filename; // 获取调用当前文件的父节点
  ```
