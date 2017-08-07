----
title: Bash常用命令 
date: 2016-07-21 18:34:23
categories:
- Shell
----
## Bash 命令下达

1. 自动补全:[TAB]

    可以命令补全or文件补全.
    \[c+TAB+TAB]:查询c开头的所有命令.

1. 命令分行:[\\+ENTER]:

1. 清屏:`clear`
1. 清屏:`clear`

### type:查询内建命令

    type [-] name

参数|描述
---|---
- |显示name是外部命令还是内部命令.
**-t**|**file:外部命令**<BR>**alias:别名配置命令**<BR>**builtin:内建命令**
-p|外部命令显示完整文件名.
-a|列出所有PATH中的name命令.
注:type主要找运行档的档名.


## Bash 的变量功能

### :变量取用

    echo $PATH
    echo ${PATH} #两者均可
    
### 变量赋值守则
- 等号连接`name=mi`.
- 等号两边不能接空格符.
- 变量名只能是英文和数字,且开头字符不能是数字.
- 变量内容里有空格,则用引号括起来.
  ```
  var="lang is $LANG" #显示lang is en_US
  var='lang is $LANG' #显示lang is $LANG
  ```
- 跳脱符号:`\`.
- 取用命令 &#96;cmd` 或 **$(cmd)**.
- 自增变量用`"$变量"`或`${变量}`.
  ```
  PATH="$PATH":/home/bin
  PATH=${PATH}:home/bin
  ```
- 推荐:大写字符-系统默认变量 ; 小写字符-自定义变量
- 取消变量`unset 变量`

### 变量的有效范围
- 环境变量=全局变量 ; 自定义变量=局部变量
- env:查看环境变量
- set:查看所有变量

### 几个常用变量:
- PS1:提示字符的配置.
    设置PS1:`PS1='[\u@\h \w \A #\#]\$'`
    - `\d`:日期WMD
    - `\H`:完整主机名
    - `\h`:主机名前缀
    - `\t`:24小时制[HH:MM:SS]
    - `\T`:12小时制[HH:MM:SS]
    - `\A`:24小时制[HH:MM]
    - `\@`:12小时制[am/pm]
    - `\u`:使用者账号名
    - `\v`:BASH版本
    - `\w`:完整工作目录
    - `\W`:当前工作目录的最后目录名
    - `\#`:命令序号
    - `\$`:root下是#,常规是$
- $: Shell的线程代号PID.
- ?: 上个命令的回传值,运行成功则为0
 
### export:自定义变量转环境变量
子程序继承父程序环境变量,但不继承自定义变量

    export 变量
    export PATH=$PATH:~/[dir]

环境变量转为自定义变量用declare

### locale:查看语系变量

    loacale -m #显示可获得的语系
    
语系变量|描述
---|---
LANG|主语言的环境
LC_CTYPE|字符(文字)辨别的编码
LC_NUMERIC|数字系统
LC_TIME|时间系统
LC_COLLATE|字符串的比较与排序
LC_MONETARY|币值格式
LC_MESSAGES|信息显示内容
LC_ALL|

### read:输入变量

    read [-] variable

参数|描述
---|---
-p|可接提示字符
-t|可接等待秒数

**逐行读取文件**


### declare/typeset:申明变量

    declare [-] variable
    
参数|描述
---|---
-a|申明为array类型
-i|申明为integer类型
-x|设为envronment(若+x,则取消env,改为自定义变量)
-r|设为readonly类型

- 变量默认为字符串
- bash环境中,数值运算默认向下取整

### array:数组变量

    var[1]="small mi"
    
### ulimit:系统限制变量

### 变量内容的删除、取代与替换

变量修改代码|说明
---|---
${变量**#**关键词}|从头开始匹配关键词,删除最短
${变量**##**关键词}|从头开始匹配关键词,删除最长
${变量**%**关键词}|从尾开始匹配关键词,删除最短
${变量**%%**关键词}|从尾开始匹配关键词,删除最长
${变量**/**旧字符串/新字符串}|替换第一个旧字符串
${变量**//**旧字符串/新字符串}|替换所有旧字符串
    a=123456789
    $echo ${a#*6} #注意通配符的使用
    789

### 变量测试与替换
异变量测试代码|old无配置|old为空字符串|old有配置|备注
---|---|---|---|---
new=${old-ex}|new=ex|new=空|new=old|
**new=${old:-ex}**|new=ex|new=ex|new=old|无有效配置就用缺省值
new=${old+ex}|new=空|new=ex|new=ex|
**new=${old:+ex}**|new=空|new=空|new=ex|存在有效配置就改为缺省值
new=${old=ex}|old=ex<BR>new=ex|old不变<BR>new=空|old不变<BR>new=old|
**new=${old:=ex}**|old=ex<BR>new=ex|old=ex<BR>new=ex|old不变<BR>new=old|无有效置就都改为缺省值
new=${old?string}|string输出到stderr|new=空|new=old|
new=${old:?string}|string输出到stderr|string输出到stderr|new=old|

同变量测试代码|var无配置|var为空字符串|var有配置|备注
---|---|---|---|---
**var=${var=ex}**|var=ex|var=空|var不变|测试空值or无配置?
var=${var:=ex}|var=ex|var=ex|var不变|

## alias:别名配置

    alias rm='rm -i' #配置别名
    unalias rm #移除别名
    
alias命令只能在bash注销前有效,若要永久有效,需要在配置文件(~/.bashrc)中设置.

用alias创建自定义命令:
1. 测试自定义命令cmd.
2. 设置命令:`alias mycmd="cmd"`.
3. 设置变量:MYCMD=$(mycmd).
4. 将设置写入.bashrc中.

## history:命令历史纪录

### 查看历史命令

1. 用[↑][↓]快捷翻看.

2. 用`cat ~/.bash_history`查看bash命令记录文件.

3. 用命令行查看

        history [n] #列出最近n条命令
        history [-] histfiles
    
参数|描述
---|---
-c|清除history
-a|当前histroy添加到histfiles中
-r|读取histfile到当前history
-w|当前history写入histfiles

### 运行历史命令

    !n #运行第n笔命令
    !! #运行上一条命令
    !cmd #搜索最近cmd开头的命令,并运行
    
当bash注销时,history才会更新到histfiles.

## Bash shell 的操作环境

### 命令的搜寻顺序

1. 以相对/绝对路径运行命令;
2. 由 alias 找到该命令来运行；
3. 由 bash 内建的 (builtin) 命令来运行；
4. 透过 $PATH 这个变量的顺序搜寻到的第一个命令来运行.   

### bash 的进站信息
进站欢迎字符串文件:/etc/issue
远程登录通知字符串文件:/etc/motd

- `\d`本地端日期
- `\l`显示第几个终端机接口
- `\m`显示硬件的等级
- `\n`主机网络名称
- `\o`显示domain name
- `\r`操作系统版本
- `\t`本地端时间
- `\s`操作系统名称
- `\v`操作系统版本

### login shell

差异|login shell|non-login shell
---|---|---
登录|需要输入密码|无需密码
读取配置|1. /etc/profile整体配置<BR>2. /etc/inputrc热键<BR>3. /etc/profile.d/*.sh别名<BR>4. /etc/sysconfig/i18n语系<BR>5. 读取个人配置文件|依照如下顺序读取其中一个:<BR>1. ~/.bash_profile <BR> 2. ~/.bash_login<BR>3. ~/.profile

- 命令`source ~/.bashrc`或`. ~/.bashrc`读取bash配置并生效
- /etc/man.config: man的查找路径变量MANPATH在此设置内
- ~/.bash_history: bash的历史文件
- ~/.bash_logout: 记录注销bash后的任务运行情况
- /etc/shells: 记录使用者能用的shell.
- /etc/passwd: 登录取得默认shell.
- /etc/inputrc: bash按键配置.
- ~/.bash_history: 查看bash命令记录.

### stty:终端的输入配置
    
    stty cmd #添加到stty设置
    stty -a #列出所有stty设置

几个重要的代表意义:
- eof   : End of file,结束输入
- erase : 向后删除字符
- intr  : interrupt,中断目前正在 run 的程序
- kill  : 删除在目前命令列上的所有文字
- quit  : quit,退出目前正在 run 的程序
- start : 在某个程序停止后，重新启动他的 output
- stop  : 停止目前屏幕的输出；
- susp  : terminal stop,停止正在 run 的程序

### set:终端的输出设置

    echo $- #变量$-为set所有配置,默认为himBH
    set [-]

参数|描述
---|---
-u|当使用未配置变量时，会显示错误信息,默认不激活
-v|在信息被输出前，会先显示信息的原始内容,默认不激活
-x|在命令被运行前，会显示命令内容(前面有 ++ 符号),默认不激活
-C|若使用 > 等,则若文件存在时,该文件不会被覆盖,默认不激活

默认组合键|描述
---|---
Ctrl + C|终止目前的命令
Ctrl + D|输入结束 (EOF)
Ctrl + M|Enter
Ctrl + S|暂停屏幕的输出
Ctrl + Q|恢复屏幕的输出
Ctrl + U|在提示字符下，将整列命令删除
Ctrl + Z|暂停目前的命令

### 通配符和特殊符号 

通配符号|意义
---|---
*|代表"任意个"任意字符
?|代表"必有一个"任意字符
[ ]|代表"必有一个"在括号内的字符
[ - ]|代表"在编码顺序内的所有字符",例[0-9]代表0到9之间的所有数字
[^ ]|表示"必有一个,反向选择",例[^abc]代表必有一个非abc的字符

特殊符号|描述
---|---
#|批注符号
\\|跳脱符号
&#124;|管线命令分隔号(pipe)
;|连续命令分隔符
~|HOME目录
$|变量前导符
&|背景工作符
!|逻辑非
/|路径分隔符
>,>>|数据流输出导向,分别为取代和累加
<,<<|数据流输入导向
' '|单引号,不具有变量置换功能
" "|双引号,具有变量置换功能
\` \`|引用命令结果,推荐用$()
( )|子shell起始与结束
{ }|命令区块的组合

## 数据流重导向

传输类型|代码|特殊符号
---|---|---
标准输入(stdin)|0|<或<<
标准输出(stdout)|1|>或>>
标准错误输出(stderr)|2|2>或2>>

### stdout and stderr
- 若输出文件不存在,将自动创建.
- 用`>`输出时,文件会清空后在写入.
- 信息黑洞:/dev/null,会吃掉所有导入的信息.
- 用`>list 2>list`输出到同一个文件,信息会混乱,改用`>list 2>&1`或`&>list`.
        find /home -name .bashrc >list_right 2>list_error #sdtout和sdterr分别输出
        find /home -name .bashrc >list 2>&1 #两者均输出到同个文件(方式一)
        find /home -name .bashrc &>list #两者均输出到同个文件(方式二)
    
### stdin

    cat >catfile <~/.bashrc #以.bashrc为输入内容,输出到catfile中
    cat >catfile <<"eof" #输出到catfile,以eof为结束控制符
    

### 连续下达命令

    cmd; cmd

依次下达命令用`cmd && cmd`
    
### $?(回传值)与&&或||

命令|描述
---|---
cmd1 && cmd2|若cmd1运行正确,则运行cmd2,反正则不运行
cmd1 &#124;&#124; cmd2|若cmd1运行错误,则运行cmd2,反之则不运行

    cmd1 || cmd2 && cmd3 #从左往右依次判断运行
    
以(|| cmd2)为一组,来判断是运行还是跳过

## pipe:线管命令

线管命令的意义在于处理程序的输出结果,以得到我们要的数据.

    cmd1 | pipe_cmd1 | pipe_cmd2

- pipe_cmd必须是能够把前一个命令的output作为input
- 线管命令会忽略error output

### cut:截取字符串

cut命令以行为单位分析,以字符串为单位截取.

    cut -d '分隔符' -f fields #分隔字符,按段截取
    cut -c 字符区间 #以字符为单位,截取固定字符区间
    
例子:
    
    echo $PATH | cut -d ':' -f 3,5 #截取段3和段5
    last | cut -c 12- #每行从第12个字符开始截取
    last | cut -c 12-20 #每行截取第12~20字符

### grep:截取行

grep以行为单位分析,以行为单位截取.

    grep [-] [--color=auto] '搜寻字符串' filename
    
参数|描述
---|---
-a|将binary文件以text文件的方式搜寻数据
-c|计算找到'搜寻字符串'的次数
-i|忽略大小
-n|顺便输出行号
-v|反向选择，即显示出没有 '搜寻字符串' 内容的行
--color=auto|高亮关键词

### sort:排序
排序,排序与语系的编码有关,建议使用LANG=C来让语系统一

    sort [-] [file or stdin]
    
参数|描述
---|---
-f|忽略大小写
-b|忽略最前面的空格符部分
-M|以月份的名字来排序，例如 JAN, DEC 等等的排序方法
-n|使用**纯数字**进行排序(默认是以文字型态来排序的)
-r|反向排序
-u|就是uniq,相同的数据中，仅出现一行代表
-t|分隔符，默认是用 [tab] 键来分隔,多与-k连用
-k|以那个区间 (field) 来进行排序的意思

### uniq:去重

    uniq [-]

参数|描述
---|---
-i|忽略大小写
-c|计数

举例:
    
    last | cut -d' ' -f1 | sort |uniq 

### wc:计数

    wc #列出行数,字数,字符数
    
参数|描述
---|---
-l|仅列出行
-w|仅列出字数(英)
-m|字符数

### tee:双向重导向

tee可以让outout的同时也存一份到file中.

    tee [-] file
    
参数|描述
---|---
-a|append累加模式

### tr:删除字符串或去重

    tr [-] str1 [str2] #无参数时,用str2替换str1

参数|描述
---|---
-d|删除string
-s|去掉重复的字符

例如:

    last | tr '[a-z]' '[A-Z]' #小写改大写
    
### col:特殊符号转换
    
    col [-]
    
参数|描述
---|---
-x|将tab键转为对等的空格
-b|在文字内有(/)时,仅保留反斜杠后接的那个字符

例如:
    
    man col | col -b #去掉man-page的(^)符号
    
### join:文件对比合并

    jion [-] file1 file2
    
参数|描述
---|---
-t|分隔符(默认是空格),并且比对第一个字段的数据，<BR>如果两个文件相同，则将两笔数据联成一行，且第一个字段放在第一个！
-i|忽略大小写
-1|第一个文件要用那个字段来分析
-2|第二个文件要用那个字段来分析

例如:

    $head -n 3 /etc/passwd /etc/group
    
    ==> /etc/passwd <==
    root:x:0:0:root:/root:/bin/bash
    bin:x:1:1:bin:/bin:/sbin/nologin
    daemon:x:2:2:daemon:/sbin:/sbin/nologin
    ==> /etc/group <==
    root:x:0:root
    bin:x:1:root,bin,daemon
    daemon:x:2:root,bin,daemon

    $join -t ':' -1 4 /etc/passwd -2 3 /etc/group
    
    0:root:x:0:root:/root:/bin/bash:root:x:root
    1:bin:x:1:bin:/bin:/sbin/nologin:bin:x:root,bin,daemon
    2:daemon:x:2:daemon:/sbin:/sbin/nologin:daemon:x:root,bin,daemon
    
### paste:文件同行合并

    paste [-] file1 file2
    
参数|描述
---|---
-d|分隔符(默认是[tab]
-|file部分写成-,则表示来自stdinput

例如:
    
    paste /etc/passwd -

#### expand:[TAB]转空格

    expand [-t] file  #-t后面自定义一个[tab]相当于几个空格
    
#### split:分割

    split [-] file PREFIX
    
参数|描述
---|---
-b|设置文件大小,后接单位如:b,k,m
-l|以行数来分割,后接设置行数
PREFIX|前导文件名

例子:

    cd /tmp;split -b 300k /etc/termcap termcap
    cat termcap* >> termcapback #分割后的合并
    ls -al / | split -l 10 - lsroot #没有file时用-替代
    
### xargs
将stdin转化成参数供cmd使用

    xargs [-] cmd
    
参数|描述
---|---
-0|将stdin中的(例如` \\ 空格键)特殊字符还原成一般字符
-e|EOF,后面接一个结束字符串
-p|在运行每个命令的 argument 时,都会询问使用者
-n|后面接次数，每次command命令运行时,要使用几个参数

- 当 xargs 后面没有接任何的命令时，默认执行 echo输出
- xargs可以将非线管命令转化成线管命令使用

例子:

    find /sbin -perm +7000 | xargs ls -l

### -:减号

在线管命令中,某些命令需要用到文件名,此时可以用(-)来代替stdin或stdout
例子:

    tar -cvf - /home | tar -xvf -

## date：时间日期
- 前一个月：2015-04
  ```
  MONTH=`date -d '-1 month' +%Y-%m`  
  ```
- 本月第一天：2015-05-01
  ```
  INMONTH=`date  +%Y-%m-01`   
  ```
- 前一天：2015-05-14
  ```
  MODAY=`date -d '-1 day' +%Y-%m-%d` 
  ```
- 第二天：2015-05-16
  ```
  NEXTDAY=`date -d '1 day' +%Y-%m-%d`
  ```
- 当天：2015-05-15
  ```
  DAY=`date +%Y-%m-%d`  
  ```
- 当天：15
  ```
  INDAY=`date +%d`  
  ```
- 当前时间：14:55:49
  ```
  TIME=`date +%H:%M%S` 
  ```

## link/ln: make link
```
sudo ln -s /usr/lib/node_modules/strongloop/bin/slc.js /usr/bin/slc
```
## 本文相关
### 参考
- [鸟哥的Linux私房菜](http://vbird.dic.ksu.edu.tw/linux_basic/0320bash.php)
### 修订
2015-12-29:第一版
