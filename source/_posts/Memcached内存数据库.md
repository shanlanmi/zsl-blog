----
title: Memcached内存数据库
date: 2016-12-01 15:51:29
categories:
- DevDependent
----
1. Install
  ```
  brew install memcached
  ```
1. Start
  ```
  brew services start memcached
  ```
1. Test
  ```
  telnet localhost 11211
  ```
1. Stop
  ```
  brew services stop memcached
  ```