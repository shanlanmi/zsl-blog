----
title: Shell Scripts
date: 2016-07-21 18:34:23
categories:
- Shell
----
# Shell Script概要

### script命令下达
- 直接下达命令
shell.sh文件必须有可读可运行的权限(rx)
	- 绝对路径下达:`/home/dmtsai/shell.sh`
	- 相对路径下达:`./shell.sh`
	- 变量PATH功能:将 shell.sh 放在 PATH 指定的目录内,例如： ~/bin/
- 通过bash下达命令
	通过`bash shell.sh`或`sh shell.sh`来运行shell脚本(/bin/sh是/bin/bash的连结档)

### script的文件结构

	#!/bin/bash  <==声明脚本语法(必写)
	# Program:
	#       This program shows "Hello World!" in your screen.
	# History:
	# 2005/08/23	VBird	First release  <==脚本的内容,功能,版本,作者,联系方式,建档日期,历史纪录等
	PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin  <==设置环境变量(推荐,也推荐设置下LANG)
	export PATH
	echo -e "Hello World! \a \n"  <==脚本代码本身
	exit 0  <==设置回传值

推荐档头记录如下内容:
1. script的功能
1. script的版本信息
1. script的作者及联系方式
1. script的版权宣告方式
1. script的历史纪录
1. script的特殊命令
1. script的运行环境及配置

### script运行方式
1. `sh script.sh`或`./script.sh`直接运行方式.
	script在子程序上运行.
1. `source script.sh`源运行方式.
	script在父程序上运行.

### 注意:
1. 命令的运行是从上而下、从左而右的分析与运行.
1. 命令的下达时命令、选项与参数间的多个空白都会被忽略掉.
1. 空白行也将被忽略掉,并且 [tab] 按键所推开的空白同样视为空白键.
1. 如果读取到一个 Enter 符号 (CR) ,就尝试开始运行该行 (或该串) 命令.
1. 至于如果一行的内容太多,则可以使用" \[Enter] "来延伸至下一行.
1. 注释符号`#`.
1. 注意修改script的权限,运行需要(r)权限,直接运行需要(rx)权限.
1. shell script运行较慢,不适合大量数值运算
1. 文件名为(*.sh)

## 判断语法
### test:判别式
	
test的结果不会直接显示,而是通过回传值($?)的形式展现.
例如:`test -e ~ && echo "exist" || echo "Not exist"`.

测试的标志|代表意义
---|---
**判断文件类型**|`test [-] file`
-e|该档名是否存在？(常用)
-f|该档名是否存在且为文件(file)？(常用)
-d|该档名是否存在且为目录(directory)？(常用)
-b|该档名是否存在且为一个 block device 装置？
-c|该档名是否存在且为一个 character device 装置？
-S|该档名是否存在且为一个 Socket 文件？
-p|该档名是否存在且为一个 FIFO (pipe) 文件？
-L|该档名是否存在且为一个连结档？
**判断文件权限**|`test [-] file`
-r|该档名是否具有"可读"的权限？
-w|该档名是否具有"可写"的权限？
-x|该档名是否具有"可运行"的权限？
-u|该档名是否具有"SUID"的属性？
-g|该档名是否具有"SGID"的属性？
-k|该档名是否具有"Sticky bit"的属性？
-s|该档名是否为"非空白文件"？
**比较两文件**|`test file1 [-] file2`
-nt|判断 file1 是否更新?
-ot|判断 file1 是否更旧?
-ef|判断两文件是否为同一文件(判定两个文件是否均指向同一个inode)
**比较两整数**|`test n1 [-] n2`
-eq|n1 == n2 (equal)
-ne|n1 != n2 (not equal)
-gt|n1 > n2 (greater than)
-lt|n1 < n2 (less than)
-ge|n1 >= n2 (greater than or equal)
-le|n1 <= n2 (less than or equal)
**判定字符串**|
`test -z string`|若 string 为空字串,则为 true
`test -n string`|若 string 为空字串,则为 false(-n 亦可省略)
`test str1 = str2`|若两字符串相等,则回传 true
`test str1 != str2`|若两字符串相等,则回传 false
**多重条件判定**|`test -r filename [-] -x filename`
-a|逻辑(and),<BR>例如:file 同时具有 r 与 x 权限时,才回传 true.
-o|逻辑(or),<BR>例如:file 具有 r 或 x 权限时,就可回传 true.
!|反相状态,`!`放在参数前,<BR>例如:`test ! -x file`,当 file 不具有 x 时,回传 true

### 利用`[  ]`判断

	[ [-] "$变量"];echo$?

注意:
1. 括号两边留空格.
1. 利用`[]`判断,参数与`test`相通,只是用`[]`替代`test`结构.
1. 变量用`"  "`括起来
	name="shan lanmi"
	[ $name == "shan lanmi" ]  <==[ $shan lanmi == "shan lanmi"] 参数过多报错

## Shell script的参数变量

	$script.sh opt1 opt2 opt3 opt4
	# $0(档名)	$1	$2	 $3		$4

参数|描述
---|---
$#|代表参数个数
$@|代表`"$1" "$2" "$3" "$4"`
$*|代表`"$1"c"$2"c"$3"c"$4"`,`c`为分隔符,默认为空格

shift:拿掉最前面的n个参数

	shift n

例子:
	
	$script.sh one two three four five six
	$echo "'$@'"
	one two three four five six
	$shift 2
	$echo "'$@'"
	three four five six

## 条件函数

### 单条件判断

	if [ 条件判断式 ]; then
		后续命令
	fi

	逻辑"或":`[条件1 -o 条件2]` <==> `[条件1] || [条件2]`
	逻辑"和":`[条件1 -a 条件2]` <==> `[条件1] && [条件2]`

### 多条件判断

	if [ 条件判断式1 ]; then
		后续命令
	elif [ 条件判断式2 ];then
		后续命令
	else
		后续命令
	fi

### 利用case ... esac判断

针对一个变量的多种情况判断

	case $变量名 in
		"变量内容1")
			后续命令
			;;
		"变量内容2")
			后续命令
			;;
		*)
			其他后续命令
			;;
	esac

## function:函数

	function fnmae() {
			程序段
	}

注意:
- function要配置在程序的最前面.
- function内的变量:$0代表函数名;$1,$2,$3...为后续变量.

## loop:循环

### while循环

循环直到condition=false为止.

	while [ condition ]
	do
		code
	done	

### until循环

循环直到condition=ture为止.

	until [ condition ] 
	do
		code
	done

### for循环

按固定几次循环.

	for var in con1 con2 con3 ...
	do
		code
	done

按步距循环.
	
	for (( 初始值; 限制值; 步距 ))
	do
		code
	done

- 初始值：某个变量在循环当中的起始值，例如:i=1
- 限制值：当变量的值在这个限制值的范围内，就继续进行循环.例如:i<=100
- 运行步阶：每作一次循环时，变量的变化量.例如:i++或i=i+1

## debug

	sh [-] script.sh

参数|描述
---|---
-n|不运行script,仅检查语法,若无问题,则什么都不显示
-v|先输出script内容到屏幕,在运行
-x|展现运行过程

注意:
- /etc/init.d/中系统自带script

## 本文相关
### 参考
[鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0340bashshell-scripts.php)
### 修改
- 2016-01-07:第一版
