----
title: 解决drop database 时被占用的问题
date: 2017-01-07 11:44:03
categories:
- Database
----
## 报错
```
ERROR:  database "database_name" is being accessed by other users
DETAIL:  There are 1 other session(s) using the database.
```

## 解决
在 sql 语句环境下执行
```
REVOKE CONNECT ON DATABASE data_center_dev FROM PUBLIC, postgres;
SELECT 
    pg_terminate_backend(pid) 
FROM 
    pg_stat_activity 
WHERE 
    -- don't kill my own connection!
    pid <> pg_backend_pid()
    -- don't kill the connections to other databases
    AND datname = 'data_center_dev'
    ;
```
即可