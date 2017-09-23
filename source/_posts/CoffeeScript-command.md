----
title: CoffeeScript command
date: 2016-07-21 12:44:34
tags:
- JavaScirpt
----
## 安装
1. 安装 node.js(略)
1. 全局安装
  ```JavaScript
  $ npm install -g coffee-script
  ```
1. 本地安装
  ```JavaScript
  $ npm install --save coffee-script
  ```
  
## 命令
编译 coffee 为 javascript
```
coffee [-option]
```
常用参数|功能
---|---
-c, --compile|编译coffee，输出 js 文件与 coffee 同名
-m, --map|同时生成 map映射 文件
-i, --interactive|启动一个有交互功能的 coffee 片段
-o, --output [DIR]|输出所有 coffee到同一个目录下，需要同时使用 --compile 或 --watch
-j, --join [FILE]| 合并所有 coffee，并编译到一个 js 文件中
-w, --watch|监听文件的变化，持续编译更新
-p, --print|用输出到 stdout 替代输出到 js 文件
-s, --stdio|接受 Pipe 命令中的 stdin <br>e.g.: `cat src/cake.coffee 丨 coffee -sc`
-l, --literate|literate模式，Parses the code as Literate CoffeeScript. You only need to specify this when passing in code directly over stdio, or using some sort of extension-less file name.
-e, --eval|编译和输出单行 coffee 片段<br>e.g.: `coffee -e "console.log num for num in [10..1]"`
-b, --bare|Compile the JavaScript without the top-level function safety wrapper. <br>e.g. `(function(){ ... })();`
-t, --tokens|Instead of parsing the CoffeeScript, just lex it, and print out the token stream: [IDENTIFIER square] [ASSIGN =] [PARAM_START (] ...
-n, --nodes|用输出语法结构代替输出js 代码
--nodejs|The node executable has some useful options you can set, such as --debug, --debug-brk, --max-stack-size, and --expose-gc. Use this flag to forward options directly to Node.js. To pass multiple flags, use --nodejs multiple times.

例子：
- 编译 coffee 到 lib/src 目录下
  ```JavaScript
  coffee --compile --output lib/ src/
  ```
- 监视文件变动，当变动时，同步编译更新
  ```JavaScript
  coffee --watch --compile experimental.coffee
  ```
- 编译一系列文件到单个 script 中
  ```JavaScript
  coffee --join project.js --compile src/*.coffee
  ```
- 在 stdout 中输出单行 coffee 代码
  ```JavaScript
  coffee -bpe "alert i for i in [0..10]"
  ```
- 监视 src 下的文件，并同步更新到 lib中
  ```JavaScript
  coffee -o lib/ -cw src/
  ```
