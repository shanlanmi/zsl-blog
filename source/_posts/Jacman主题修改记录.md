----
title: Jacman主题修改记录
date: 2016-07-21 13:36:38
categories:
- Blog
----
## 基本设置修改

略,参照[Jacman主题](http://wuchong.me/jacman/2014/11/20/how-to-use-jacman/#more)

## 表格边框修改

修改文件:themes/jacman/source/css/_partial/article.styl

    table
          max-width 100%
          border-collapse collapse
          border-spacing 0
          margin-top: 1em
          th
            font-weight bold
            border-bottom 2px solid lighten(color-footer,60%)	//颜色调整
            background-color lighten(color-gray,20%) //增加表头背景颜色
            border 1px solid lighten(color-footer,60%) //增加表头竖线
            padding 0.5em
            line-height: 1.3em
          td 
            border-bottom 1px solid lighten(color-footer,60%) //颜色调整
            border 1px solid lighten(color-footer,60%) //增加表格竖线
            padding 0.5em
            line-height: 1.3em
    	.highlight table  //代码块不设置边框
    	  border none  //++
        .pullquote
          text-align left
          width 45%
          margin 0
          border none
        .left
          margin-left 0.5em
          margin-right 1em
          float left
        .right
          margin-right 0.5em
          margin-left 1em
          float right
          
## 主题配色修改

修改文件:themes\jacman\source\css\_base\variable.styl

    //Color
    color-background = #9a8b7b         //文章以外的背景颜色
    color-content = #43372b             //文章字体颜色 
    color-font = #817c7c                //各个标签字体颜色以及友链,微博分享等的图标颜色 
    color-white = #ffffff                   //导航栏字体颜色，右侧RSS订阅，底栏字体已经个人信息图标颜色 
    color-blue = #967d63                //标题字体颜色，包括超链接<a></a> 以及作者名字，右侧主标签（分类，标签，友链）颜色 
    color-orange = #ea6753              //标题鼠标移到标题等部分
    color-font-nav = #e9cd4c            //导航栏鼠标移至后的颜色 
    color-section = #f0e9de             //文章的背景颜色 
    color-footer = #493c30              //页面最下方的背景颜色 
    color-gray = #ccc                   //分割线的颜色，以及标签的底色 
    color-meta = #808080                //图片信息字体颜色 
    color-heading = #333333             //部分字体颜色 ##号字体 
    color-quote = #f5f5f5               //四个空格后的代码块背景颜色 
    color-code = #fdf6e3                //``之间的代码背景颜色 
    color-twitter = #00aced             //分享至Twitter处 鼠标移至后的颜色 
    color-facebook = #3b5998            //分享处 鼠标移至后的颜色 
    color-weibo = #c64d3e               //分享处 鼠标移至后的颜色 
    color-google = #dd4b39 
    color-qrcode= #49ae0f 
    color-renren= #369                  //分享处 鼠标移至后的颜色 
    color-top = #762c54

## 本文相关
### 参考
- [TSUINTE.RU-对 Jacman 主题的一些个性化修改](http://tsuinte.ru/2015/05/03/jacman-theme-customizations/index.html)
- [PPTing-修改 jacman 主题颜色](http://ppting.me/2015/01/26/change-jacman-theme/index.html)

### 修订
2015-12-28:第一版
