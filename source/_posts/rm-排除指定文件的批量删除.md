----
title: rm 排除指定文件的批量删除
date: 2016-08-09 15:50:20
categories:
- Shell
----
## rm 排除指定文件的批量删除

- 删除当前目录下所有 *.txt文件，除了test.txt
  ```
  rm `ls *.txt|egrep -v test.txt`
  ```

- 排除多个文件
  ```
  rm `ls *.txt|egrep -v ‘(test.txt|fff.txt|ppp.txt)’`
  rm -f `ls *.log.1|egrep -v ‘(access-2010-09-06.log|error-2010-09-06.log)’`
  rm -f `ls *.log|egrep -v ‘(access-2010-09-06.log|error-2010-09-06.log)’`
  rm -f `ls *.log|egrep -v ‘(20100906.log)’`
  ```

- 用find命令
  ```
  rm `find . -name *.txt | egrep -v ‘（test.txt|fff.txt|ppp.txt)’`
  ```

注意：上面所用的符号是‘`’，而不是单引号

