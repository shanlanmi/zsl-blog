----
title: Hexo Blog 建设中遇到的 Bug
date: 2016-07-21 13:36:38
tags:
- Blog
----

### npm安装速度慢
使用淘宝的npm分流——cnpm

用法和npm一样，命令由 `npm` 换为 `cnpm` 。

### hexo 从2.x 升级至 3.0
1. Clean cache
  ```
  hexo clean
  ```
1. Install hexo-cli
  ```
  npm install hexo-cli -g
  ```
1. Install Hexo
  ```
  npm install hexo --save
  ```
1.Install generators
  ```
  npm install hexo-generator-index --save
  npm install hexo-generator-archive --save
  npm install hexo-generator-category --save
  npm install hexo-generator-tag --save
  ```
1.Install server
  ```
  npm install hexo-server --save
  ```
1. Install deployers
  ```
  npm install hexo-deployer-git --save
  npm install hexo-deployer-heroku --save
  npm install hexo-deployer-rsync --save
  npm install hexo-deployer-openshift --save
  ```
1. Update plugins
  ```
  npm install hexo-renderer-marked@0.2 --save
  npm install hexo-renderer-stylus@0.2 --save
  npm install hexo-generator-feed@1 --save
  npm install hexo-generator-sitemap@1 --save 
  ```
命令集合


### `.swp`、`.un~`文件报错

- 以上报错文件是OSX在访问或修改文件后自动生成的临时信息文件。
- Hexo3.0版本后，遇到这类文件报错，Hexo2.7版本未发现这种现象。
- 删除这类文件，可避免报错。
