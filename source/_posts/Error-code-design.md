----
title: Error code design
date: 2017-02-07 11:53:29
tags:
- NodeJS
----
# Error code 设计

<div style="font-size:150%">
文档编辑: Senan Zhang
</div>
* * *
## 设计目的
- 方便开发人员通过 error code 快速定位错误来源。
- 方便客户端显示友好的错误信息。

## 基本返回数据结构
* 客户端请求返回数据结构

  ```json
  {
    "statusCode": 404,
    "code": 0183,
    "message": "Oh! It looks like that you are not login.",
  }
  ```
* 开发环境请求返回数据结构

  ```json
  {
    "statusCode": 404,
    "code": 0183,
    "message": "Oh! It looks like that you are not login.",
    "resource": "videos/common",
    "devMessage": "This remote method need user login.",
    "stack": "Context.<anonymous> (User/strong-error-handler/test/handler.test.js:220:21)"
  }
  ```

* log 系统记录情况

  ```json
  {
    "code": 0183,
    "resource": "videos/common",
    "devMessage": "This remote method need user login.",
    "stack": "Context.<anonymous> (User/strong-error-handler/test/handler.test.js:220:21)"
  }
  ```
* 各个字段的含义:
  - `status`: HTTP状态码
  - `code`: frigate_bird错误代码, 代码由**4位数**组成:

  ```
  错误代码:  00  00
            /    \
       模块代码   错误详码
  ```
    - 模块代码: `00`~`09`为通用错误代码区间
    - 错误详码: `10`~`99`为业务模块错误代码区间
  - `message`: 客户端呈现的错误信息
  - `resource`: 报错模块的文件地址
  - `message_dev`: 详细的错误技术信息
  - `stack`: 错误信息堆栈

## 系统error code
反馈服务器**完全不能工作**时出现的错误。

code | message_dev
:----|:--
0    | Unhandle error
1    | Success
0001 | Service unavailable
0002 | Job expired
0003 | System is busy

## 服务器相关的error code
反馈服务器**可以启动**的情况下出现的错误。 

code | message_dev
:----|:--
0101 | Permission denied
0102 | App Call Limited
0103 | IP limit
0104 | Elasticsearch unavailable
0105 | Redis unavailable
0106 | Memcached unavailable
0107 | Database connection unavailable

## 客户端通用错误的error code
反馈由客户端不适当请求引起的**通用错误**。

code | message_dev
:----|:--
0201 | Request api not found
0202 | HTTP Action Not Allowed
0203 | Request body length over limit
0204 | Upload Fail
0205 | Invalid Version	
0206 | Invalid Arguments
0207 | Missing Required Arguments
0208 | Invalid Format

## User相关的错误
反馈用户模块相关的错误信息。

code | message_dev
:----|:--
1001 | Missing Token
1002 | Token used
1003 | Token expired
1004 | Token revoked
1005 | Need login
1006 | Uuid parameter is null
1007 | User does not exists
1008 | Username or password error

## Video相关的错误
反馈Video模块相关的错误信息。

code | message_dev
:----|:--
1101 | Invalid video id

