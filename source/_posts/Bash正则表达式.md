----
title: Bash正则表达式
date: 2016-07-21 18:34:23
categories:
- Shell
----
## 前言

- 正则表示法就是处理字串的方法
- 是以行为单位来进行字串的处理行为
- 搜寻/删除/取代某特定字串
- 正则表达式与通配符(wildcard)是独立的两种表达方式

## 基础正则表示法
语系不同,截取的信息会不同,推荐使用(C)语系

### 基础正则表示法字符汇整(characters)
特殊符号|代表意义
---|---
[:alnum:]|英文大小写字节及数字,即 0-9, A-Z, a-z
[:alpha:]|任何英文大小写字节,即 A-Z,a-z
[:blank:]|空白键与 [Tab] 按键两者
[:cntrl:]|键盘上面的控制按键,即包括 CR, LF, Tab, Del.. 
[:digit:]|数字而已,即 0-9
[:graph:]|除了空白字节 (空白键与 [Tab] 按键) 外的其他所有按键
[:lower:]|小写字节,即 a-z
[:print:]|任何可以被列印出来的字节
[:punct:]|标点符号 (punctuation symbol),即：" ' ? ! ; : # $...
[:upper:]|大写字节,即 A-Z
[:space:]|任何会产生空白的字节,包括空白键, [Tab], CR 等等
[:xdigit:]|代表 16 进位的数字类型,因此包括： 0-9, A-F, a-f 的数字与字节

RE字符|意义与范例
---|---
^word|行首关键词匹配<BR>例子: `grep -n '^#' file`
word$|行尾关键词匹配<BR>例子: `grep -n '!$' file`
.|一定有一个任意字节的字符<BR>例子: `grep -n 'e.e' file`
\|跳脱字符<BR>例子: `grep -n \' file`
\*|重复"零个"到无穷多个的"前一个"RE字符<BR>例子: `grep -n 'ess*' file`
[list]|"一个"字节集合中的 RE 字符<BR>例子: `grep -n 'g[ld]' file`
[^list]|"一个非"字节集合中的 RE 字符<BR>例子: `grep -n 'g[^A-Z]' file`
[n1-n2]|"任意个"字节集合中的 RE 字符<BR>例子: `grep -n '[A-Z]' file`
\\{n,m\\}|连续 n 到 m 个的前一个 RE 字符<BR>若为 \\{n\\} 则是连续 n 个的前一个 RE 字符<BR>若是 \\{n,\\} 则是连续 n 个以上的前一个 RE 字符<BR>例子: `grep -n 'go\{2,3\}g' file`
注意:
1. 支持正则表达式的工具不能和通配符混用
	- 通配符: `ls -l a*`
	- 正则表达式: `ls | grep -n '^a.*'`
1. 多集合: [a-zA-Z]

### grep: 截取含关键词的行

    grep [-A] [-B] [--color=auto] '搜寻字串' filename

参数|描述
---|---
-A|after,后面接数字,表示列出该行外还列出后续n行
-B|befor,后面接数字,表示列出该行外还列出前面n行
-c|计算找到'搜寻字符串'的次数
-i|忽略大小写
-n|顺便输出行号
-v|反向选择，即显示出没有 '搜寻字符串' 内容的行
--color=auto|高亮关键词

例子:
		#系统文件搜索
		grep '\*' $(find /etc -type f)


### sed: 按条件修改行

	sed [-] '[line1] [line2] [action]'

参数|描述
---|---
-n|silent mode,只显示经过 sed 特殊处理的那一行(或动作)
-e|直接在命令列模式上进行 sed 的动作编辑
-f|-f filename 则可以运行 filename 内的 sed 动作
-r|function支持延伸型正则表示法(默认是基础正则表示法)
-i|直接修改读取的文件内容.OS X(BSD sed)下,强制需要建立备份才能修改文件,如`sed -i '.bak' 'sed cmd'`.

function|描述
---|---
a<BR>a\\(OS X)|新增,后面接字符串,字符串显示在新的一行(默认下一行)
c<BR>c\\(OS X)|取代,后面接字符串,取代 n1,n2 之间的行
d|删除,
i<BR>i\\(OS X)|插入,后面接字符串,字符串显示在新的一行(默认下一行)
p|列印,亦即将某个选择的数据印出。通常`sed -n 'n1,n2p'`
s|取代,`sed 's/old_word/new_word/g'`
    
line:
`$`代表最后一行

## 延伸正则表示法

使用延伸正则表达式时,需要用`cmd -E`或`ecmd`,例如:`grep -E`或`egrep`.

RE 字符|意义与范例
---|---
+|重复"一个或一个以上"的前一个 RE 字符.(`*`的拆解版)<BR>例子: `egrep -n 'go+d' file`
?|"零个或一个"的前一个 RE 字符.(`*`的拆解版)<BR>例子: `egrep -n 'go?d' file`
&#124;|逻辑"或"<BR>例子: `egrep -n 'gd丨good' file`
(  )|"群组"字符串的集合.(`[]`的升级版)<BR>例子: `egrep -n 'g(la丨oo)d' file`
(  )+|多个重复群组的判别<BR>例子: `echo 'AxyzxyzxyzxyzC' 丨 egrep 'A(xyz)+C'`

## 文件处理工具

### printf：格式化屏显

	printf '格式' 内容

格式|描述
---|---
\a|警告声音输出
\b|倒退键(backspace)
\f|清除萤幕 (form feed)
\n|输出新的一行
\r|[ENTER] 按键
\t|水平[TAB]按键
\v|垂直[TAB]按键
\xNN|NN 为两位数的数字，可以转换数字成为字节。

 C 程序语言常见的变量格式

格式|含义
---|---
%ns|"n"=数字,"s"=string,即多少个字节
%ni|"n"=数字,"i"=integer,即多少整数码数
%N.nf|"f"=floating(浮点)，例如:十位数,小数点后有两位,即为 %10.2f 
\x|16进制ASCII符号


例子:
	
	$printf '%s\t %s\t %s\t %s\t %s\t \n' $(cat printf.txt)
	Name     Chinese         English         Math    Average
	DmTsai   80      60      92      77.33
	VBird    75      55      80      70.00
	Ken      60      90      70      73.33

	$printf '%10s %5i %5i %5i %8.2f \n' $(cat printf.txt | grep -v Name)

### awk：以每行的栏为单位处理数据

	awk '条件类型1{动作1}条件类型2{动作2}...' filename

内建变量|描述
---|---
$n|$0为整行数据,$1为第一栏数据,以此类推
NF|每一行的栏位数
NR|目前处理的第几行数
FS|目前的分隔字节,默认是空白键

元算符号|描述
---|---
>|大于
<|小于
>=|大于或等于
<=|小于或等于
==|等于
!=|不等于

例子:
	
	awk 'BEGIN {FS=":"} $3<10 {print $1 "\t " $3}'

	cat pay.txt | \
	> awk 'NR==1{printf "%10s %10s %10s %10s %10s\n",$1,$2,$3,$4,"Total" }
	NR>=2{total = $2 + $3 + $4
	printf "%10s %10d %10d %10d %10.2f\n", $1, $2, $3, $4, total}'

注意:
- 非变量用(")标记,(')为awk固定语法.
- 关键词BEGIN和END可以让动作在读取行前或读取行后执行,比如BEGIN{FS=":"}.
- 若一个动作需要多个命令辅助时,辅助命令之间需插入`;`或[ENTER].
- 条件逻辑运算中,必须使用`==`.
- awk中的变量无需使用$符号.

## 文件比对工具

### diff:以行为单位作文件对比

	diff [-] from_file to_file

参数|描述
---|---
from_file|原对比文件(`-`则代表stdin,下同)
to_file|目标对比文件
-b|多个空格视为一个空格
-B|忽略空白行的差异
-i|忽略大小写的不同

对比结果说明
4d3:from_file的第4行被d(删除)了,基准在to_file的第3行

例子:
	$diff from_file to_file
	4d3    <==from_file的第4行被d(删除)了,基准在to_file的第3行
	< adm:x:3:4:adm:/var/adm:/sbin/nologin  <==列出被删除的第4行内容
	6c5    <==from_file的第5行被c(替换)成to_file的第5行
	< sync:x:5:0:sync:/sbin:/bin/sync  <==from_file的第6行
	---
	> no six line   <==to_file的第5行

制作升级档

	diff -Naur from_file to_file > patch_file.patch

补丁文件结构

	--- passwd.old  2009-02-10 14:29:09.000000000 +0800 <==新旧文件的信息
	+++ passwd.new  2009-02-10 14:29:18.000000000 +0800
	@@ -1,9 +1,8 @@   
	 root:x:0:0:root:/root:/bin/bash
	 bin:x:1:1:bin:/bin:/sbin/nologin
	 daemon:x:2:2:daemon:/sbin:/sbin/nologin
	-adm:x:3:4:adm:/var/adm:/sbin/nologin      <==左侧文件删除
	 lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
	-sync:x:5:0:sync:/sbin:/bin/sync           <==左侧文件删除
	+no six line                               <==右侧新档加入
	 shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
	 halt:x:7:0:halt:/sbin:/sbin/halt
	 mail:x:8:12:mail:/var/spool/mail:/sbin/nologin

### cmp:以位组为单位作文件对比

列出两个文件的第一个不同点,并定位

	cmp [-] file1 file2

参数|描述
---|---
-s|将所有不同的位组都列出来

### patch:文件升级

	patch [-] <patch_file

参数|描述
---|---
-pN|若作整体目录对比,N为取消N层目录
-R|还原模式

### pr:文件标题屏

分别显示:文件时间,文件名,文件页码

	pr file


	

## 本文相关
### 参考
[鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0330regularex.php)
### 修订
2015-12-31:第一版
