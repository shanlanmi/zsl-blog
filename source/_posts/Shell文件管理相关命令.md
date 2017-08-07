----
title: Shell文件管理相关命令
date: 2016-07-21 18:34:23
categories:
- Shell
----
## 路径管理
### cd:目录切换

	cd directory

1. 默认`cd` <==> `cd ~`.
1. 绝对路径必须从根目录`/`写起.
1. 相对路径符号.

符号|意义
---|---
.|当前目录
..|上一层目录
-|前一个工作目录
~|当前使用者HOME目录
~account|account的HOME目录

### pwd:显示当前所在目录
	
pwd是print working directory的缩写.

	pwb [-]

参数|描述
---|---
-P|显示链接档的真实目录

### mkdir:新建目录

	mkdir [-] [777] directory_name

参数|描述
---|---
-m|配置文件权限
-p|递归创建目录

### rmdir:删除空目录
	
	rmdir [-]

参数|描述
---|---
-p|递归删除空目录
-r|删除目录及目录下所有文件

## 文件与目录管理
### ls:文件与目录的检视 
默认显示非隐藏文件,并按档名排序.

	ls [-] directory

参数|描述
---|---
**文件列出**|
-a|<常用>列出全部文件
-A|列出全部文件,但不包括.和..目录
-d|仅列出目录本身,而不列出目录内的文件
-R|列出子目录内容
**属性显示**|
-l|<常用>列出文件属性详情
-F|显示文件数据结构:<BR>* :可运行档;<BR>/ :目录;<BR>= :socket文件;<BR>&#124; :FIFO文件;
-i|列出inode号码
-time|显示access时间
-\-full-time<BR>BSD:-Tl|显示完整的修改时间
-\-time=atime<BR>BSD:-ul|显示最后访问时间
-\-time=ctime<BR>BSD:-Ul|显示创建时间
**文件排序**|
-f|不排序(默认按档名排序)
-r|反向排序
-S|按文件大小,从大到小排序
-t|按时间由近至远排序排序(默认按修改时间)
**颜色标记**|
-\-color=auto<BR>BSD:-G|<常用>显示颜色
-\-color=never|不依照文件特性显示颜色

### tree:显示文件树形结构
```
tree
```

### cp:复制

	cp [-] source1 [source2...] destination

参数|描述
---|---
-a|<常用>-pdr,BSD:-pPR
-p|<常用>连同文件的属性一起复制过去，而非使用默认属性
-d<BR>BSD:-P|若source是连结档,则复制连结档而非文件本身
-r<BR>BSD:-R|<常用>递归
-i|<常用>覆盖目标文件复制,覆盖前提示
-f|force,覆盖目标文件复制
-l|进行硬式连结(hard link)的连结档创建，而非复制文件本身；
-s<BR>BSD:`ln`|复制成为符号连结档 (symbolic link)
-u|若 destination 比 source 旧,升级 destination 

1. 若有多个source,destination必须为direction.
1. 文件权限改变,默认`cp`下,destination的拥有者权限为命令操作者.

### rm:移除

	rm [-] file

参数|描述
---|---
-f|force
-i|删除前提示
-r|递归

### mv:移动或更名

	mv [-] source1 [source2...] destination
	mv old_file new_name  #rename

参数|描述
---|---
-f|force
-i|覆盖前提示
-u|若 destination 比 source 旧,升级 destination 

### basename:取得文件名

	basename directory

### dirname:取得目录名

	dirname directory
### rename:批量修改文件名
1. mac 下没有 rename 命令，需要用 brew 安装一个
  ```JavaScript
  $ brew install rename
  ```
1. 使用
  ```JavaScript
  $ rename 's/old/new/' *.txt
  ```
更多用法：
[rename // plasmasturm.org](http://plasmasturm.org/code/rename/#TUTORIAL)

## 文件内容查阅

### cat:列示文件内容
cat意为concatenate.

	cat [-] file

参数|描述
---|---
-A|-vET
-v|列出一些看不见的特殊字符
-E|显示断行符$,Windows的断行符为^MS
-T|将[TAB]显示为^I
-b|列出非空行行号
-n|显示所有行行号

`tac`为反向列示,命令符也和`cat`相反.

### nl:添加行号列示文件

	nl [-] file


参数|描述
---|---
-b|显示非空行行号
-b a|显示所有行行号(类似 cat -n)
-n ln|行号在萤幕的最左方显示
-n rn|行号在自己栏位的最右方显示,且数位不加0补齐
-n rz|行号在自己栏位的最右方显示,且数位加0补齐
-w|行号栏位的占用的位数

### more:可翻页检视

	more file

HotKey|功能
---|---
[SPACE]|向下翻一页
b|向上翻一页
[ENTER]|向下翻一行
/word|向下搜索字符串
:f|显示档名和目前行数
q|退出more模式

### less:可翻页检视

	less file

HotKey|功能
---|---
[SPACE]<BR>[pagedown]|向下翻一页
[pageup]|向上翻一页
[ENTER]|向下翻一行
/word|向下搜索字符串
?word|向上搜索字符串
n|向前搜索下一个
N|反向搜索下一个
:f|显示档名和目前行数
q|退出more模式

### od:显示非纯文字档

	od -t [-] file

参数|描述
---|---
a|利用默认的字节来输出；
c|使用 ASCII 字节来输出
d[size]|利用十进位(decimal)来输出数据，每个整数占用 size bytes ；
f[size]|利用浮点数值(floating)来输出数据，每个数占用 size bytes ；
o[size]|利用八进位(octal)来输出数据，每个整数占用 size bytes ；
x[size]|利用十六进位(hexadecimal)来输出数据，每个整数占用 size bytes ；

例子:
	
	od -t oCc /etc/issue
## 数据截取
### head,tail:数据撷取

	head [-] file
	tail [-] file

参数|描述
---|---
-n 10|显示行数,默认为10行
-f|tail将持续文档末尾新添加的内容

例如:
`head -n -100 file`从开头开始显示至倒数100行.
`tail -n +100 file`从100行开始显示到最后.

## 文件属性相关
### touch:修改文件时间与建建新档

关于文件的三个时间:
mtime(modification time):内容编辑时间
ctime(status time):属性改变时间
atime(access time):读取时间

	touch [-] file

参数|描述
---|---
-m|仅修改modification time
-a|仅修订access time
-c|仅修订文件时间, 不新建文件
-t YYMMDDhhmm[.SS]|修改时间
-d [date]<BR>BSD:-\-date="date"|修订日期

例子:
	
	touch -mt 201412110959 file
	touch -d "2 days ago" bashrc
	
### umask:显示文件默认权限

	umask

umask显示的是所缺权限,比如022则表示rwxr-xr-x

	umask -S

以易读的方式显示权限

	umask 000

设置默认文件权限
sudo chown -R $(whoami) ~/.npm
### file:观察文件类型

	file directory

### chagrp/chown/chmod: 文件权限修改
1.文件权限属性：

  1. 文档类型
    - d：目录
    - -：文件
    - l：link file
    - b：可供储存的接口设备
    - c：串行端口设备，如键盘、鼠标等
  1. 改变权限
    - chgrp: 改变群组
      ```
      chgrp [-R] dir
      chgrp users install.log
      ```
    - chown：改变拥有者
      ```
      chown [-R] dir
      chown user:group install.log
      chown root:root install.log
      chown -R $USER:$GROUP dir
      ```
    - chmod：改变权限
      ```
      chmod [-R] rwx dir
      chmod 777 .bashrc
      chmod u=rwx,go=rx .bashrc
      ```
      `chmod` + `u/g/o/a` + `+/-/=` + `r/w/x` + dir

  1. 查看组群
    ```
    cat /etc/group
    ```
  1. 查看用户
    ```
    who # 查看当前用户
    id # 当前用户详情
    ```
    
## 搜索

### which:运行档命令搜索

	which cmd  #列出搜索到的第一个命令所属
	which -a cmd  #列出所有命令所在文件

因为which是根据PATH搜索的,所以使用者不同,搜索的结果不同.

其他命令搜索:[type](http://shanlanmi.top/2015/12/29/2015-12-29-bash/#type_3A_u67E5_u8BE2_u5185_u5EFA_u547D_u4EE4)

### whereis:特定文件搜索
whereis可以找到可执行命令和manpage.


	whereis [-] file_or_dir

### locate:根据数据库检索文件
locate是在系统数据库中查找文件,所以更新不一定即时,但是搜索速度快.
`updatedb`可以手动更新数据库.

	locate [-] keyword

参数|描述
---|---
-i|忽略大小写
-d|设置数据库

使用中报错:
	
	/usr/libexec/locate.updatedb: line 97: /var/db/locate.database: Permission denied

原因分析:因为装了GNU的coreutils,而`locate.updatedb`脚本需要用OS X自带的mktemp,命令格式不一样报错.
解决方法:
1. 复制数据库文件`cp /usr/libexec/locate.updatedb ~/bin/updatedb`.
1. 然后打开`~/bin/updatedb`,把所有调用`mktemp`的地方改成`/usr/bin/mktemp`.
1. 设置`SEARCHPATHS=$HOME FCODES=$HOME/.locate.db ~/bin/updatedb`
1. 设置alias
1. 更新设置`source ~/.zshrc`.

### find:文件检索
	find [PATH] [-] [action]

参数|描述
---|---
**时间相关参数**|-atime和-ctime用法同-mtime
-mtime n|在n天之前的"一天之内"被编辑过的文件
-mtime +n|在n天之前(不含n天)被编辑过的文件
-mtime -n|在n天之内(含n天)被编辑过的文件
-newer file|file为一个存在的文件,列出比file还要新的文件名
**使用者或组群相关参数**|
-uid n|使用者帐号ID号,即UID,记录在/etc/passwd中
-gid n|群组名称ID号,即GID,记录在/etc/group中
-user name|name为使用者名称
-group name|name为群组名称
-nouser|寻找拥有群组不存在于/etc/passwd中的文件
-nogroup|寻找拥有群组不存在于/etc/group中的文件
**文件属性相关参数**|
-name filename|按文件名搜寻.支持万用字节'filename'.
-size [+-]n[ckMGTP]|按文件SIZE搜索搜.<BR>这个SIZE的规格有:c,k,M,G,T,P.<BR>例如:`-size+50M`搜索大于50M的文件.
-type TYPE|按类型TYPE搜索.<BR>类型主要有:一般正规文件(f),装置文件(b,c),目录(d),连结档(l),socket(s),及FIFO(p)等.
-perm mode|按文件权限属性搜索,这个mode值类似chmod的属性值,例如:-rwsr-xr-x 的属性为4755.
-perm -mode|搜寻文件权限包含mode权限的文件.<BR>例如:要搜寻-rwxr--r--,即0744文件,使用-perm -0744,会搜到权限为-rwsr-xr-x,即4755的文件.
-perm +mode |搜寻文件权限包含任一mode权限的文件.<BR>例如:要搜寻-rwxr-xr-xm即-perm +755文件,使用-perm -755,会搜到权限为-rw-------的文件.
**额外动作**|
-exec cmd|cmd为其他命令,用于搜索到的结果再处理<BR>注意,后续命令不支持别名<BR>例如:`find / -perm +777 -exec ls -l {} \;`,`{}`为find找到的内容,`\;`为exec的结束符号.
-print|打印到屏幕,默认动作.

## 本文相关

### 参考
- [鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0220filemanager.php#head)
- [在Mac下幸福快乐的用locate](http://roylez.herokuapp.com/2014/10/06/happy-locating.html?utm_source=tuicool&utm_medium=referral)

### 修订
1. 2016-01-10:第一版

