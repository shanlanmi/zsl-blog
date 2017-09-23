----
title: Jekyll Blog 日常管理
date: 2016-07-21 13:36:38
tags:
- Blog
----
### 文件结构
	.
	 |-- _config.yml	    # 全局设置文件
	 |-- index.html         # 首页
	 |-- _drafts            # 存放未发布的文章
		|-- articles1.textile
		|-- articles2.md
	 |-- _includes          # 存放页面片段,即页头等
	 |-- _layouts           # 存放模板
		|-- default.html    # 默认模板
	 |-- _posts             # 存放可发布文章
		|-- 2015-02-17-title.textile # textile格式的blog文章
		|-- 2015-12-07-title2.md # markdown格式的blog文章
	 |-- _site              # 经jekyll转换的页面
	 |-- other files    # 其他文件,存放css,js,image等

### Jekyll解析流程
1. 加载_posts下文章。
2. 加载_layouts下模板。
3. 加载_includes下页面元素。
4. 编译页面,生成在_site下。

### Jekyll command

- 常规push流程。
	1.cd到本地博客根目录。
		cd /username.github.io
	2.将本地目录添加到github服务器上。
		git add .
	3.写入更新标签。
		git commit -m "Your commit update"
	4.推送。
		git push

- 本地查看博客。

	1.cd到本地博客根目录。

		cd /username.github.io

	2.启动本地查看服务。

		jekyll serve

	加参数--drafts,查看_drafts目录下文档。

### 博文书写规则

在文章开头插入如下参数(可选)

	---
	layout: post # 模板
	title: "Title"
	date: 2015-12-18 07:00:00
	categories: jekyll # 文章所属目录
	tages: tages
	---

更多规则参考:[头信息](http://jekyllcn.com/docs/frontmatter/)

## 本文相关
### 参考
[微信公众号:Dev Talk - Git+GitHub+Markdown+Jekyll=Perfect Personal Blog](http://www.devtalking.com/articles/git-gitHub-markdown-jekyll/)
### 修订
2015-12-22:第一版
