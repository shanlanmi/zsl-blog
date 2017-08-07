----
title: HTML和CSS标签命名规则
date: 2016-08-15 10:47:45
categories:
- CSS
----

# HTML和CSS标签命名规则

### **文件夹命名**
文件夹主要建立以下文件夹：
1. Images 存放一些网站常用的图片；
2. Css 存放一些CSS文件；
3. Flash 存放一些Flash文件；
4. PSD 存放一些PSD源文件；
5. Temp 存放所有临时图片和其它文件；
6. copyright 版权信息（可选）
8. readme 说明文件

### css统一命名
注：本CSS命名规则只适合物table制作模式下
1.  css文件统一放在css文件夹下；命名css.css
2.  主样式定义：body、table、td、tr、a
3.  链接样式定义：link_white（白色）；link_black （黑色）；link_blue （蓝色） 等等；
说明：如有重复的后面加阿拉伯数字；如 link_red01 有下划线的如：linkred
4.  文字样式定义：font_red （红色）；font_red_14 （红色14号字）；font_red_14b （红色14号加粗）
5.  边框样式定义：border_red_tblr （红色四个边）；border_red_blr（红色底左右三边）；border_red_lr（红色左右两个边）；border_red_b （红色底一个边）等等；
6.  表单样式定义：text_100 （文本字段宽为100）； textarea_200_red （文本区域宽为200有红色边框）；select_100 （列表宽为100）；button_150 （按钮宽150）；
说明：表单用宽度定义，在命名中最长写到：“text_100_red”
7.  线的样式定义：line_X （横线）；line_Y （竖线）；line_X_red （红色横线）；line_X_red2 （两个像素的红色横线）；说明：在line中只定义虚线，实线在border中定义
8.  其它样式定义：在这里主要定义一些个性化的样式；

### 文件命名
head.asp 头文件
foot.asp 底文件
index.asp 首页文件
sort.html 分类嵌套文件
article_channel.asp 文章_频道页
article_list.asp 文章_列表页
article_detail.asp 文章_显示页
注明：如果有多个文章频道，则用article01， article02，article03等等
exhibit_channel.asp 展会信息_频道页
exhibit_list.asp 展会信息_列表页
exhibit_detail.asp 展会信息_显示页
product_channel.asp 产品中心_频道页
product_list.asp 产品中心_列表页
prodect_detail.asp 产品中心_显示页
corporation_channel.asp 会员_频道页
corporation_list.asp 会员_列表页
corporation_detail.asp 会员_显示页
information_channel.asp 商机信息_频道页
information_list.asp 商机信息_列表页
information_detail.asp 商机信息_显示页
job_channel.asp 招聘_频道页
job_list.asp 招聘_列表页
job_detail.asp 招聘_显示页
hr_channel.asp 求职_频道页
hr_list.asp 求职_列表页
hr_detail.asp 求职_显示页
job_hr_channel.asp 人才中心_频道页
job_hr_lisr.asp 人才中心_列表页
job_hr_detail.asp 人才中心显示页
copyright.asp 版权页

### 图片命名
1. 导航命名：menu.gif 如：menubg .gif（导航的背景图）
2. 会员登录：login.gif 如：loginbg.gif （会员登陆的背景图）
3. 搜索命名：search.gif 如：search_bg.gif （搜索的背景图）
4. 小 图 标：ico_数字.gif 如：ico_001.gif
5. 线的命名：line_X_颜色.gif 如：line_X_red.gif（红色横向虚线）说明：line只命名虚线
line_Y_red.gif（红色纵向虚线）
6. 广告命名：ad_数字.gif 如：ad001.gif
7. 其它栏目的图片：以栏目名的第一个字母.gif
如：xwzx_bg.gif （新闻中心背景） cpzx_l.gif （产品中心的左边图）
8. 产品与栏目热点图片： pic_数字.gif 如：pic_001.gif
说明：上、下、左、右 可以缩写为T、B、L、R

### CSS标准化设计命名
1. 类class的命名规范示例
头：header
内容：content/container
尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体布局宽度：wrapper
左右中：left right center
登录条：loginbar
标志：logo
广告：banner
页面主体：main
热点：hot
新闻：news
下载：download
子导航：subnav
菜单：menu
子菜单：submenu
搜索：search
友情链接：friendlink
页脚：footer
版权：copyright
滚动：scroll
内容：content
标签页：tab
文章列表：list
提示信息：msg
小技巧：tips
栏目标题：title
加入：joinus
指南：guild
服务：service
注册：regsiter
状态：status
投票：vote
合作伙伴：partner
2. 注释的写法
  ```
  / Footer /
  内容区
  / End Footer /
  ```
3. id的命名规范示例
（1）页面结构
容器： container
页头：header
内容：content/container
页面主体：main
页尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体布局宽度：wrapper
左右中：left right center
（2）导航
导航：nav
主导航：mainbav
子导航：subnav
顶导航：topnav
边导航：sidebar
左导航：leftsidebar
右导航：rightsidebar
菜单：menu
子菜单：submenu
标题： title
摘要： summary
（3）功能
标志：logo
广告：banner
登陆：login
登录条：loginbar
注册：regsiter
搜索：search
功能区：shop
标题：title
加入：joinus
状态：status
按钮：btn
滚动：scroll
标签页：tab
文章列表：list
提示信息：msg
当前的： current
小技巧：tips
图标： icon
注释：note
指南：guild
服务：service
热点：hot
新闻：news
下载：download
投票：vote
合作伙伴：partner
友情链接：link
版权：copyright
4. 类class的书写规范示例
（1）颜色：使用颜色的名称或者16进制代码，如
.red { color： red； }
.f60 { color： #f60； }
.ff8600 { color： #ff8600； }
（2）字体大小，直接使用"font+字体大小"作为名称，如
.font12px { font-size： 12px； }
.font9pt {font-size： 9pt； }
（3）对齐样式，使用对齐目标的英文名称，如
.left { float：left； }
.bottom { float：bottom； }
（4）标题栏样式，使用"类别+功能"的方式命名，如
.barnews { }
.barproduct { }
5. CSS文件命名示例
主要的 master.css
模块 module.css
基本共用 base.css
布局，版面 layout.css
主题 themes.css
专栏 columns.css
文字 font.css
表单 forms.css
补丁 mend.css
打印 print.css
6. 注意事项
（1）一律小写；
（2）尽量用英文；
（3）不加中杠和下划线；
（4）尽量不缩写，除非一看就明白的单词


