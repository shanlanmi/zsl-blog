----
title: Redis 基础
date: 2017-02-21 04:29:58
tags:
- Database
----
# Redis
## Redis vs Memcached
### Memcached
- Memcached is older and more stable, it has far **lesser** **bugs.**
- Memcached's system is more **effective** because it uses less memory for metadata.
- There is **only** **one** data type used by Memcached which is **String.**
- Memcached is easy to **scale.**

### Redis
- 
you can set key names and values to be 512MB each, compared to Memcached's 250 bytes for key names and limits value to 1MB with only plain strings.
- For cache eviction, is has 6 different methods that it uses to properly evict what you want.
- The data from the previous session is saved and stored.

## 准备
### 存储结构
- 字符串类型
- 散列类型
- 列表类型
- 集合类型
- 有序集合类型

### 内存存储与持久化

### 功能丰富
#### 生存时间
#### 与memcached比较

### 语句
```
HGET post: 1 title
```

### 启动和停止Reids

#### Redis的可执行文件

文件名            | 说明
:-----------------|:--
 redis-server     | Redis发服务器
 redis-cli        | Redis 命令行客户端
 redis-benchmark  | Redis 性能测试工具
 redis-check-aof  | AOF文件修复工具
 redis-check-dump | RDB文件检查工具
 redis-sentinel   | Sentinel 服务器

#### 启动Redis
* 直接启动(运用开发)
  ```
  $ redis-server
  $ redis-server --port 6379
  ```
* 通过初始化脚本启动Redis
  1. 定制初始化文件
    1. 将Redis源代码目录下的utils文件夹中的redis_init_script文件移入`/etc/init.d`目录, 文件名为redis_端口号
    1. 修改该脚本的第六行的REDISPORT变量为相同值
  1. 建立需要的文件夹
    - `/etc/redis`: 存放Redis的配置文件
    - `/var/redis/端口号`: 存放Redis的持久化文件
  1. 修改配置文件
    1. 复制配置文件模板到`/etc/redis`目录中, 以端口号命名(如"6379.conf")
    1. 修改`daemonize` => `yes`                     : 是Redis以守护进程模式运行
    1. 修改`pidfile` => `/var/run/redis_端口号.pid` : 设置Redis的PID文件位置
    1. 修改`port` => 端口号                         : 设置Redis监听的端口号
    1. 修改`dir` => `/var/redis/端口号`             : 设置持久化文件存放位置
  1. 启动
    - 常规启动服务
      ```
      $ /etc/init.d/redis_端口号
      ```
    - 随系统启动服务
      ```
      $ sudo update-rc.d redis_端口号 defaults
      ```

#### 停止Redis
强制中止Redis可以影响将内存的数据同步到硬盘中, 最好使用Redis的命令来中止
```
$ redis-cli SHUTDOWN
```

### Redis-cli
#### 发送命令
-  自定义地址和端口
  ```
  $ redis-cli -h 127.0.0.1 -p 6379
  ```
-  ping
  ```
  $ redis-cli ping
  ```
-  进入交互模式
  ```
  $ redis-cli
  ```
#### 收到回复
1. 状态回复
  ```
  > ping
  pong
  ```
1. 错误回复
  ```
  > ERRORCOMMEND
  (error) ERR unknown command 'ERRORCOMMEND
  ```
1. 整数回复
  ```
  > INCR foo
  (integer) 1
  ```
1. 字符串回复
  ```
  > GET foo
  "1"
  ```
1．多行字符串回复
  ```
  > KEYS *
  1) "bar"
  2) "foo
  ```
### 多数据库

## 入门
### 基本命令
1. `KEYS`: 获取键名列表
  ```redis
  KEYS pattern
  ```
  - `?`: 匹配一个字符。
  - `*`: 匹配任意个(包括0个)字符。
  - `[]`: 匹配范围内的字符, 用`-`符号表示区间。
  - `\x`: 匹配字符x, 用于转义符。

1. `EXISTS`: 判断键名是否存在
  存在则返回1, 不存在则返回0。
  ```redis
  EXISTS key
  ```
1. `DEL`: 删除键
  返回值是删除键的个数。
  ```
  DEL key [key]
  ```
  `DEL`命令不支持通配符, 所有可以采用如下变通
  ```
  $ redis-cli KEYS "user:*" | xargs redis-cli DEL
  $ redis-cli DEL `redis-cli KEYS "user:*"`
  ```
1. `TYPE`: 获得键值的数据类型
  返回值可能是string（字符串类型）, hash（散列类型）, list（列表类型）, set（集合类型）, zset（有序集合类型）。例如：
  ```
  TYPE key
  ```

### 字符串类型
- 可以储存任何形式的字符串, 包括二进制数据。
- 一个字符串类型键允许存储数据的最大容量是512MB。

#### 命令
1. `GET`: 取值
  当键不存在时, 返回空
  ```
  GET key
  ```
1. `SET`: 赋值
  ```
  SET key value
  ```
1. `INCR`: 递增数字
  当要操作的键不存在时, 默认值为0, 所以第一次递增后的结果是1。
  当键值不是整数是, Redis会提示错误。
  ```
  INCR key
  # 参数指定一次增加的数值
  INCR key increment

  redis> INCRBY bar 2
  ```
1. `DECR`: 减少指定的整数
  ```
  DECR key
  DECRBY key decrement
  ```
1. `INCRBYFLOAT`: 增加指定浮点数
  INCRBYFLOAT命令类似INCRBY命令，差别是前者可以递增一个双精度浮点数。
  ```
  INCRBYFLOAT key increment

  redis> INCRBYFLOAT bar 2.7
  redis> INCRBYFLOAT bar 5E+4
  ```
1. `APPEND`: 向尾部追加值
  ```
  APPEND key value
  ```
1. `STRLEN`: 获取字符串长度
  ```
  STRLEN key
  ```
1. `MGET`: 同时获得/设置多个键值
  ```
  MGET key [key ...]
  MSET key value [key value ...]
  ```
1. `GETBIT`: 位操作
  ```
  GETBIT key offset
  SETBIT key offset value
  BITCOUNT key [start] [end]
  BITOP operation destkey key [key …]
  ```

#### 实践

1. 文章访问量统计
  - Redis的键命名:"对象类型:对象ID:对象属性", 多单词使用`.`来分隔
    例如: `user:1:friends` 来储存用户1的好友列表
  - 使用"对象类型(复数):count"来储存对象的数量
    例如: `users:count`
  - 伪代码:
    ```
    # 首先获得新文章的 ID
    $postID = INCR posts:count
    # 将博客文章的诸多元素序列化成字符串
    $serializedPost = serialize($title, $content, $author, $time)
    # 把序列化后的字符串存一个入字符串类型的键中
    SET post:$postID:data, $serializedPost
    获取文章数据的伪代码如下（以访问ID为42的文章为例）：
    # 从 Redis 中读取文章数据
    $serializedPost = GET post:42:data
    # 将文章数据反序列化成文章的各个元素
    $title, $content, $author, $time = unserialize($serializedPost)
    # 获取并递增文章的访问数量
    $count = INCR post:42:page.view
    ```

### 散列类型
- 字段值只能是字符串。
- 一个散列类型键可以包含232-1个字段。

#### 命令
1. `HSET`: 赋值
  HSET命令用来给字段赋值，而HGET命令用来获得字段的值。
  ```
  HSET key field value
  HMSET key field value [field value …]
  ```
1. `HGET`: 取值
  ```
  HGET key field
  HMGET key field [field …]
  HGETALL key

  # e.g.
  redis> HGETALL car
  1) "price"
  2) "500"
  3) "name"
  4) "BMW
  ```
  `HGETALL`返回的结果很不直观, 多数Redis客户端会做编程语言中对象的封装。
1. `HEXISTS`: 判断字段是否存在
  ```
  HEXISTS key field
  ```
1. `HSETNX`: 当字段不存在时赋值
  HSETNX 命令与HSET命令类似，区别在于如果字段已经存在，HSETNX命令将不执行任何操作。
  ```
  HSETNX key field value
  ```
1. `HINCRBY`: 增加数字
  ```
  HINCRBY key field increment
  ```
1. `HDEL`: 删除字段
  ```
  HDEL key field [field ...]
  ```
1．`HKEYS`/`HVALS`: 只获取字段名或字段值
  ```
  HKEYS key
  HVALS key
  ```
1．`HLEN`: 获得字段数量
  ```
  HLEN key
  ```

### 列表类型
- 列表类型（list）可以存储一个有序的字符串列表。
- 列表类型内部是使用双向链表（double linked list）实现的，所以向列表两端添加元素的时间复杂度为O(1)，获取越接近两端的元素速度就越快。

#### 命令
1．`LPUSH`/`RPUSH`: 向列表两端增加元素
  - LPUSH命令用来向列表左边增加元素，返回值表示增加元素后列表的长度。
  - LPUSH命令还支持同时增加多个元素。
  ```
  LPUSH key value [value …]
  RPUSH key value [value …]
  ```
1．`LPOP`/`RPOP`: 从列表两端弹出元素
  `LPOP`命令执行两步操作：第一步是将列表左边的元素从列表中移除，第二步是返回被移除的元素值。
  ```
  LPOP key
  RPOP key
  ```
1. `LLEN`: 获取列表中元素的个数
  ```
  LLEN key
  ```
1. `LRANGE`: 获取列表片段
  - LRANGE命令在取得列表片段的同时**不会**像LPOP一样删除该片段。
  - LRANGE返回的值包含最右边的元素。
  - LRANGE命令也支持负索引，表示从右边开始计算序数，如"−1"表示最右边第一个元素，"-2"表示最右边第二个元素，依次类推。
  ```
  LRANGE key start stop
  ```
1. `LREM`: 删除列表中指定的值
  - LREM命令会删除列表中前count个值为value的元素，返回值是实际删除的元素个数。
  - 根据count值的不同，LREM命令的执行方式会略有差异。
    - 当`count > 0`时 LREM 命令会从列表左边开始删除前 count 个值为 value的元素。
    - 当`count < 0`时 LREM 命令会从列表右边开始删除前 count 个值为 value 的元素。
    - 当`count = 0`是 LREM命令会删除所有值为 value的元素。例如：
  ```
  LREM key count value
  ```
1．`LINDEX`: 获得指定索引的元素值
  ```
  LINDEX key index
  ```
1．`LSET`: 设置指定索引的元素值
  ```
  LSET key index value
  ```
1．`LTRIM`: 只保留列表指定片段
  - LTRIM 命令可以删除指定索引范围之外的所有元素，其指定列表范围的方法和LRANGE命令相同。
  ```
  LTRIM key start end
  ```
  LTRIM命令常和LPUSH命令一起使用来限制列表中元素的数量。
  比如记录日志时我们希望只保留最近的100条日志，则每次加入新元素时调用一次LTRIM命令即可：
  ```
  LPUSH logs $newLog
  LTRIM logs 0 99
  ```
1．`LINSERT`: 向列表中插入元素
  ```
  LINSERT key BEFORE|AFTER pivot value
  ```
1．将元素从一个列表转到另一个列表
  - RPOPLPUSH是个很有意思的命令，从名字就可以看出它的功能：先执行RPOP命令再执行LPUSH命令。
  - 当source和destination相同时, RPOPLPUSH命令会不断地将队尾的元素移到队首, 借助这个特性我们可以实现一个网站监控系统: 使用一个队列存储需要监控的网址, 然后监控程序不断地使用 RPOPLPUSH 命令循环取出一个网址来测试可用性。这里使用RPOPLPUSH命令的好处在于在程序执行过程中仍然可以不断地向网址列表中加入新网址, 而且整个系统容易扩展, 允许多个客户端同时处理队列。
  ```
  RPOPLPUSH source destination
  ```

### 集合类型
集合类型和列表类型有很相似的地方, 但是又如下不同:
- 有序性: 列表有序, 集合无序。
- 唯一性: 列表没有唯一性, 集合有唯一性。

#### 命令
1．`SADD`/`SREM`: 增加/删除元素
  - 命令返回成功加入的元素数量
  ```
  SADD key member [member …]
  SREM key member [member …]
  ```
1. 获得集合中的所有元素
  ```
  SMEMBERS key
  ```
1. 判断元素是否在集合中
  ```
  SISMEMBER key member
  ```
1. `SDIFF`: 差集运算
  - 集合A, 集合B的差集表示为A-B, 代表所有属于A且不属于B构成的集合。
  - 多集合: A-B-C, 代表先求A-B的差集, 再用结果求和C的差集。
  ```
  SDIFF key [key ..]
  ```
1. `SINTER`: 交集运算
  - 集合A与集合B的交集表示为A ∩ B，代表所有属于A 且属于B的元素构成的集合。
  ```
  SINTER key [key ..]
  ```
1. `SUNION`: 并集运算
  - 集合A与集合B的并集表示为A∪B，代表所有属于A 或属于B的元素构成的集合。
  ```
  SUNION key [key ..]
  ```
1. `SCARD`: 获得集合中元素个数
  ```
  SCARD key
  ```
1. 进行集合运算并将结果存储
  - `SDIFFSTORE`而命令和`SDIFF`命令功能一样, 唯一的区别就是前者不会直接返回运算结果, 而是将结果存储在destination键中。
  ```
  SDIFFSTORE destination key [key …]
  SINTERSTORE destination key [key …]
  SUNIONSTORE destination key [key …]
  ```
1. `SRANDMEMBER`: 随机获得集合中的元素
  ```
  SRANDOMEMBER key [count]
  ```
  根据count的正负不同, 具体表现也不同:
  1. 当count为正数时, 会随机获得count个不重复的元素。
  1. 当count为正数且大于集合中元素的个数时, 返回集合中全部元素。
  1. 当count为负数时, 会随机获得count个可重复的元素。
1. `SPOP`: 从集合中弹出一个元素
  ```
  SPOP key
  ```

### 有序集合类型
有序集合类型在某些方面和列表类型有些相似:
- 二者都是有序的。
- 二者都可以获得某一范围的元素。
但是二者有着很大的区别，这使得它们的应用场景也是不同的:
- 列表类型是通过链表实现的，获取靠近两端的数据速度极快，而当元素增多后，访问中间数据的速度会较慢，所以它更加适合实现如新鲜事或日志这样很少访问中间元素的应用。
- 有序集合类型是使用散列表和跳跃表（Skip list）实现的，所以即使读取位于中间部分的数据速度也很快（时间复杂度是O(log(N))）。
- 列表中不能简单地调整某个元素的位置，但是有序集合可以（通过更改这个元素的分数）。
- 有序集合要比列表类型更耗费内存。

#### 命令
1．`ZADD`: 增加元素
  ```
  ZADD key score member [score member …]
  ```
1. `ZSCORE`: 获取元素的分数
  ```
  ZSCORE key member
  ```
1. `ZRANGE`: 获得排名在某个范围的元素列表
  ```
  ZRANGE key start stop [WITHSCORES]
  ZREVRANGE key start stop [WITHSCORES]
  ```
1. `ZRANGEBYSCORE`: 获得指定分数范围的元素
  ```
  ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]
  ```
1. `ZCARD`: 获得集合中元素的数量
  ```
  ZCARD key
  ```
1. `ZCOUNT`: 获得指定分数范围内的元素个数
  ```
  ZCOUNT key min max
  ```
1. `ZREM`: 删除一个或多个元素
  ```
  ZREM key member [member ..]
  ```
1. `ZREMRANGEBYRANK`: 按照排名范围删除元素
  ```
  ZREMRANGEBYRANK key start stop
  ```
1. `ZREMRANGEBYSCORE`: 安装分数范围删除元素
  ```
  ZREMRANGEBYSCORE key min max
  ```
1. `ZRANK`: 获得元素的排名
  ```
  ZRANK key member
  ZREVRANK key member
  ```
1. `ZINTERSTORE`: 计算有序集合的交集
  ZINTERSTORE命令用来计算多个有序集合的交集并将结果存储在destination键中（同样以有序集合类型存储），返回值为destination键中的元素个数。
  ```
  ZINTERSTORE destination numkeys key [key …] [WEIGHTS weight [weight …]] [AGGREGATE SUM|MIN|MAX]
  ```
