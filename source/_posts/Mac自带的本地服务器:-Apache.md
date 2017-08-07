----
title: Mac自带的本地服务器: Apache
date: 2016-08-05 22:26:51
categories:
- Request
----
# Mac自带的本地服务器: Apache

## 开启流程
1. 打开终端，开启Apache:
```
sudo apachectl start
```

1. 输入电脑密码

1. 测试是否开启服务
  在浏览器中打开<http://127.0.0.1/>，若显示“It Works”则服务开启成功。

1. 往前 Apache 服务路径
  ```
  cd /System/Library/WebServer/Documents
  ```
1. 测试
  <http://127.0.0.1>打开的是 Documents 文件下的 index.html 文件。
  <http://127.0.0.1/PoweredByMacOSX.gif>打开的是 Documents 文件下的 PoweredByMacOSX.gif 文件。

1. 配置返回 JSON 信息
  1. 创建文件 test
    ```
    touch test
    vim test
    ```
  1. 配置 test 内的信息
    ```
    {
      "a": 1
      "b": "string"
      "c": [3,4,5]
    }
    ```
  1. 测试
    在浏览器中打开<http://127.0.0.1/test>
1. 使用完毕后记得关闭 Apache 服务，不然会持续消耗内存
  ```
  sudo apachectl stop
  ```

## 其他命令
1. 重启 apache
  ```
  sudo apachectl restart
  ```
