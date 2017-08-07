----
title: Shell程序管理相关命令
date: 2016-07-21 18:34:23
categories:
- Shell
----
## job control 工作管理
触发任何一个事件时,系统都会将他定义成为一个程序,并且给予这个程序一个 ID ,称为 PID,同时依据启发这个程序的使用者与相关属性关系,给予这个 PID 一组有效的权限配置.
job control只能管理你shell的子程序.

### &:背景运行cmd

	cmd &

在背景运行模式下几点注意:
1. 前景可以控制与下达命令的这个环境称为前景的工作 (foreground)
1. 无法使用[CTRL]+c终止他，可使用`bg`或`fg`呼叫该工作.
1. bash会给予命令一个job number(如[1])和一个PID.
1. 不能等待 terminal/shell 的输入(input).
1. 如果有stdout或stderr时,数据依旧是输出到萤幕上面,推荐利用数据流重导向.
1. 命令完成时的提示:`[1]+ Done		该命令`

### [CTRL]+z:当前工作暂存在背景中
### jobs:观察当前工作状态

	jobs [-]

参数|描述
---|---
-l|同时列出 PID 的号码
-r|仅列出正在背景run的工作
-s|仅列出正在背景stop的工作

`+`表示最近放入背景的工作号码,`-`表示倒数第二个被放入背景工作的号码.

### fg:背景工作前置

	fg		#默认取出最近的工作
	fg -	#取出倒数第二个工作
	fg %jobnumber

### bg:改背景工作的状态为运行
用法同`fg`.

### kill:管理process

	kill -signal %jobnumber

kill后面可接PID或%jobnumber来结束process.

signal|描述
---|---
-1|重载配置当,类似reload
-2|同[CTRL]+c
-9|强制删除一个job
-15|结束一个job(默认)

更多signal,用`man signal`查询.
  

其他命令:

	kill -l		#列出目前能使用的signal有哪些
	killall [-] cmd

用下达命令的名称取代PID来给process发送singal.

参数|描述
---|---
-i|关闭前提示
-e|精确匹配
-l|忽略大小写

例如:

	killall -9 httpd	#强制终止httpd启动的程序
	killall -i -9 bash	#询问并强制终止bash程序

### nohup:离线管理问题
[CTRL]+z只能将process放在终端的背景中工作,若终端离线了,则工作不会继续,而`nohup`可以让程序在终端离线的情况下继续工作.

	nohup cmd	#在终端前景中运行
	nohup cmd & #在终端背景中运行

注意:
1. nohup不支持bash内建命令.
1. nohup的输出被导向到~/nohup/out.

## 程序的观察

### ps:静态观察

	ps [-]
	ps aux   	# 观察系统所有的程序数据
	ps -l   	# 观察shell的程序数据
	ps axjf  	# 连同部分程序树状态

参数|描述
---|---
**内容选项**|
-A|所有的 process 均显示出来，与 -e 具有同样的效用
-a|不与 terminal 有关的所有 process 
-u|有效使用者 (effective user) 相关的 process 
x|通常与 a 这个参数一起使用，可列出较完整资讯。
**输出格式**|
l|较长、较详细的将该 PID 的的资讯列出
j|工作的格式 (jobs format)
-f|做一个更为完整的输出

shell相关process查询的符号意义:

符号|意义
---|---
F|process flags,程序的总结权限
S|stat,程序的状态,主要的状态有 : <BR>R : Running,该程序正在运行中 <BR>S : Sleep,程序目前正在睡眠idle,但可以被唤醒signal <BR>D : 不可被唤醒的睡眠状态，通常这支程序可能在等待 I/O 的情况 <BR>T : stop,停止状态,可能是在工作控制背景暂停或除错 traced 状态 <BR>Z : Zombie,僵尸状态,程序已经终止但却无法被移除至内存外
UID/PID/PPID|User Identifier/Process Identifier/Parent process Identifier
C|CPU使用率
PRI/NI|Priority/Nice,程序优先级
ADDR/SZ/WCHAN|都与内存有关:<BR>
ADDR|内存相关,kernel function,该程序在内存的哪个部分,'-'表示running
SZ|内存相关,代表内存占用量
WCHAN|内存相关,目前程序运行状态,'-'表示running
TTY|登陆者的终端机位置,若为远程登陆则使用动态终端介面 (pts/n)
TIME|使用掉的 CPU 时间，注意，是此程序实际花费 CPU 运行的时间，而不是系统时间
CMD|command

系统process的查询的符号意义:

符号|意义
---|---
USER|使用者帐号
PID |程序识别码
%CPU|使用掉的 CPU 资源(%)
%MEM|所占用的实体内存(%)
VSZ |使用掉的虚拟内存量 (Kbytes)
RSS |占用的固定的内存量 (Kbytes)
TTY |登录终端位置,若与终端机无关则显示?,若为由网络连接进主机的程序,则显示pts/0
STAT|该程序目前的状态,状态显示与 ps -l 的 S 旗标相同 (R/S/T/Z)
START|被触发启动的时间
TIME |实际使用 CPU 运行的时间
COMMAND|该程序的实际命令

### top:动态观察程序的变化
ps是截取一个时间点,观察程序状态,top是持续侦查程序运行状态.

	top [-d num] 
	top [-]

参数|描述
---|---
-d|刷新间隔,单位秒
-b|以批量的方式运行 top 
-n|与 -b 搭配,意义是需要进行几次 top 的输出结果
-p|指定某些个 PID 来进行观察监测

HotKey(?):显示在 top 当中可以输入的按键命令

查询符号的意义:
1. processes : process不同状态的数量统计
1. load average : 系统在1,5,15分钟的平均工作负载

例如:

	#查询自己bash的process状态
	$echo $$	#查询bash的PID
	$top -pid bash	#top查询

### pstree:展示程序树

	pstree [-]

参数|描述
---|---
-A|以 ASCII 字节来连接
-U|以万国码的字节来连接
-p|同时列出每个 process 的 PID
-u|同时列出每个 process 的所属帐号名称

##  程序的运行优先级
### priority的意义
1. PRI(priority)系统排程优先级和NI(Nice)的关系:
	PRI(new)=PRI(old)+nice
	故PRI由系统动态决定,可以调节NI值来影响PRI,但是最终的PRI由系统分析决定.
1. nice值的调整范围:

	- nice值可以调整的范围为-20~19
	- root 可随意调整自己或他人程序的 Nice 值，且范围为 -20 ~ 19 
	- 一般使用者仅可调整自己程序的 Nice 值，且范围仅为 0 ~ 19 (避免一般用户抢占系统资源)；
	- 一般使用者仅可将 nice 值调高,不可降低.

### nice:新运行程序设定NI值

	nice [-n num] cmd	#num为NI值

### renice:调整已经存在PID的NI值

	renice [num] PID

## 系统资源的观察
### free:观察内存使用情况

	free [-b] [-t]

参数|描述
---|---
-b|单位设置,可以是b,m,k,g
-t|显示实体内存与 swap 的总量

Mac中不可用,用top命令代替.
### uname:查阅系统与核心相关资讯
	uname [-]

参数|描述
---|---
-a|所有系统相关的资讯
-s|系统核心名称
-r|核心的版本
-m|本系统的硬件名称
-p|CPU 的类型
-i|硬件的平台

### uptime:观察系统启动时间与工作负载

	uptime

### netstat:追踪网络或插槽档

	netstat [-]

参数|描述
---|---
-a|将目前系统上所有的连线、监听、Socket 数据都列出来
-t|列出 tcp 网络封包的数据
-u|列出 udp 网络封包的数据
-n|不以程序的服务名称，以埠号 (port number) 来显示；
-l|列出目前正在网络监听 (listen) 的服务；
-p|列出该网络服务的程序 PID 

## 本文相关

### 参考
[鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0440processcontrol.php)

### 修订
2016-01-12:第一版
