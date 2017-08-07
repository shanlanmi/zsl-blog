----
title: Hexo博客日常管理
date: 2016-07-21 13:36:38
categories:
- Blog
----
## Page相关

### 文件名

默认文件名`:year-:month:day-:title.md`,例如`2015-01-01-title.md`

### Front-matter

    title: Hello World
    date: 2015/12/25
    ---
    
参数|描述|默认值
---|---|---
laytou|布局|post
title|标题|
date|建立日期|文件建立日期
update|更新日期|文件更新日期
comments|开启文章评论功能|true
tags|标签(不适用于分页)|
categories|分类(不适用于分页)|
permalink|覆盖文章网址|

注:categories有顺序性,tags没有顺序性。

## 命令 

### 简易命令

- `hexo n` == `hexo new`新建文章
- `hexo g` == `hexo generate`生成静态文件
- `hexo d` == `hexo deploy`部署网站
- `hexo s` == `hexo server`启动本地服务

### 维护命令

#### new
    
    hexo new [layout] <title>
    
新建文件,注意若标题含空格,用引号括起来。

  
#### generat

    hexo generat
    
生成静态文件

选项 | 描述
----|----
-d, --deploy | 文件生成后立即部署网站
-w, --watch | 监视文件变动
  
  
#### server

    hexo server
    
启动本地服务: `http://localhost:4000/。

选项|描述
---|---
-p, --port|重设端口
-s, --static|只使用静态文件
-l, --log|启动日记记录,使用覆盖记录格式

有时候端口冲突,会显示"Bad Gateway",可以切换端口`hexo s -p 5000`来解决.
   
#### deploy
    hexo deploy
部署网站。

参数|描述
---|---
-g, --generate|部署之前预先生成静态文件

#### render

    hexo render <file1> [file2] ...
    
渲染文件。

参数|描述
---|---
-o, --output|设置输出路径

  
#### publish
    hexo publish [layout] <title>

将`_drafts`中的草稿移入`_posts`。

参数|描述
---|---
--draft|预览草稿

### 建站命令

#### init

    hexo init [folder]
    
在folder下建立网站。
  
  
#### migrate

    hexo migrate <type>
    
从其他博客系统迁移内容。
  
  
#### list

    hexo list <type>
    
列出网站资料。
  
  
#### version

    hexo version
    
显示hexo版本。
  
  
#### clean
    
    hexo clean
    
清除缓存(db.json)和已生成的静态文件(public)。
  
  
### 选项

#### safe mode

    hexo --safe
不加载插件和脚本运行。
  
#### debug mode

    hexo --debug

显示debug信息并记录在debug.log中。

#### silent mode

    hexo --silent
    
隐藏终端信息。

#### 自定义配置文件路径

    hexo --config custom.yml
    
#### 显示草稿

    hexo --draft


## 文件结构

    .
    |-- languages       
    |   |-- default.yml # 默认语言
    |   └-- zh-CN.yml   # 中文语言
    |-- layout          
    |   |-- _partial    # 局部布局,
    |   └-- _widget     # 小挂件布局
    |-- source
    |   |-- css         # css源码
    |   |   |-- _base   # *.styl基础css
    |   |   |-- _partial# *.styl局部css
    |   |   |-- fonts   # 字体
    |   |   |-- images  # 图片
    |   |   └-- styles.styl # *.styl需引入的css源码
    |   |-- fancybox
    |   └-- js
    |-- _config.yml     #主题配置文件
    └-- README.md
    
    
#### 三种默认布局

布局|路径
---|---
post|source/_posts
page|source
draft|source/_drafts

模板中可使用变量:layout,title,date

## 本文相关
### 参考:
- [hexo中文站](https://hexo.io/zh-cn/docs/commands.html)
- [Jacman主题](http://wuchong.me/jacman/2014/11/20/how-to-use-jacman/#more)
- [简明Github Pages与Hexo教程](http://www.jianshu.com/p/05289a4bc8b2)
### 修订
2015-12-26:第一版
