----
title: Chrome 启动项修改
date: 2016-07-21 18:38:44
tags:
- Project
----
## Chrome 启动项修改方法
### 临时修改


### 永久修改
1. 进入 Chrome.app 目录；
  ```
  $ cd "/Applications/Google Chrome.app/Contents/MacOS/"
  ```

1. 将原先的启动脚本改个名字；
  ```
  $ sudo mv "Google Chrome" Google.real
  ```

1. 使用管道操作创建新的启动脚本，注意其中加入你所需要的启动参数，这里的例子是启用内置的 Flash；
  ```
  $ sudo printf '#!/bin/bash\ncd "/Applications/Google Chrome.app/Contents/MacOS"\n"/Applications/Google Chrome.app/Contents/MacOS/Google.real" --disable-web-security "$@"\n' > Google\ Chrome
  ```

1. 给新的脚本加上运行权限；
  ```
  $ sudo chmod 755 "Google Chrome”
  ```

## Chrome 启动参数
- Chrome 本地 AJAX 请求，可访问本地文件
      --allow-file-access-from-files
      或者
      --disable-web-security
- Chrome 保存本地 cookies
      --enable-files-cookies


***
**本文相关**
1. 参考
1. 修订
2016:第一版
