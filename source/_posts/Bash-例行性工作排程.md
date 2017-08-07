----
title: Bash 例行性工作排程
date: 2016-07-21 18:34:23
categories:
- Shell
----
title: 例行性工作排程
date: 2016-01-13

## 仅运行一次的工作排程

### 启动at服务
Mac下,at命令默认关闭,若要开启atrun服务,需要在root下运行:

	launchctl load -w /System/Library/LaunchDaemons/com.apple.atrun.plist

at的运行方式:
1. 寻找/etc/at.allow(Mac下为/var/at/at.allow,下同),只有写在这个文件中的使用者才能使用at.
1. 如果/etc/at.allow不存在,就寻找/etc/at.deny,若写在这个 at.deny 的使用者则不能使用 at.
1. 如果两个文件都不存在，那么只有 root 可以使用 at 这个命令.

### at:仅运行一次的工作排程

	at [-] TIME
	at -c 工作号码

参数|描述
---|---
-m|以email通知使用者该工作已完成
-v|使用较明显的时间格式列出 at 排程中的工作列表
-c|可以列出后面接的该项工作的实际命令内容
-l|列出目前系统上面的所有该使用者的at排程(相当於atq)
-d|取消一个在 at 排程中的工作(相当於atrm)

时间格式|例子
---|---
HH:MM|04:00(若今日4点已过,则在明日4点进行)
HH:MM YYYY-MM-DD|04:00 2009-03-17
HH:MM[am/pm] [Month] [Date]|04pm March 17
HH:MM[am/pm] + number [minutes/hours/days/weeks]|now + 5 minutes<BR>04pm + 3 days

例子:

	$ at now + 5 minutes
	at> cmd		#at shell环境下输入cmd
	at><EOT>	#输入[CTRL]+d,结束输入

注意:
1. at shell下的当前目录为命令at下达时候的目录,所以推荐用绝对路径下达命令比较好.
1. at的运行环境和终端机环境无关,所以所有的stdout/stderr都会传送到mailbox里.
1. 若使用tty1登录,则使用`echo "Hello" > /dev/tty1`输出到终端.
1. 由於 at 工作排程的使用上，系统会将该项 at 工作独立出你的 bash 环境中， 直接交给系统的 atd 程序来接管，因此，当你下达了 at 的工作之后就可以立刻离线了， 便于使用 at 可以让你免除网络断线后的困扰.

### batch:系统空闲才进行背景任务
batch会在系统负载小于0.8的时候进行工作任务.
batch的用法同at.

## 循环运行的工作排程

### crontab命令
使用限制：

/etc/cron.allow和/etc/cron.deny的功能参考at命令(Mac下为/usr/lib/cron.allow和/usr/lib/cron.deny)

	crontab [-u username] [-l|-e|-r]

参数|描述
---|---
-u|使用root模式,帮助其他使用者创建/移除crontab工作排程
-e|编辑crontab
-l|查阅crontab
-r|移除所有的crontab

	crontab file [-u user]：将crontab的内容替代为指定文件的内容

在Mac下使用时,发现编辑后无法保存,改用root模式编辑可以正常工作.

	$sudo su
	$crontab -u shanlanmi -e

### crontab指令串格式
基本格式：* * * * * command 

代表意义|分钟|小时|日期|月份|周|命令
---|---|---|---|---|---|---
数字范围|0-59|0-23|1-31|1-12|0-7<BR>0和7都代表周日|cmd

例如:

	0 12 * * * mail dmtsai -s "at 12:00" < /home/dmtsai/.bashrc
	#分 时 日 月 周 |<==============指令串========================>|

特殊字符|代表意义
---|---
*(星号)|代表任何时刻
,(逗号)|代表分别时段<BR>如命令在3:00或6:00生效:`0 3,6 * * * cmd`
-(减号)|代表一段时间范围内<BR>如命令在8 点到 12 点之间的每小时的 20 分都生效:`20 8-12 * * * cmd`
/n(斜线)|n为数字,代表间隔时间的意思<BR>如命令每五分钟进行一次：`*/5 * * * * cmd`或`0-95/5 * * * * cmd`

## 本文相关
### 参考
[鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0430cron.php)
### 修订
1. 2016-01-13:第一版

