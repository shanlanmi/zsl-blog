----
title: 解决 node bindings 报错
date: 2017-01-04 01:22:39
tags:
- NodeJS
----
## 报错信息
```
/Users/shanlanmi/Documents/PathSource/frigate_bird/node_modules/bindings/bindings.js:83
        throw e
        ^

Error: Module version mismatch. Expected 46, got 47.
    at Error (native)
    at Object.Module._extensions..node (module.js:434:18)
    at Module.load (module.js:343:32)
    at Function.Module._load (module.js:300:12)
    at Module.require (module.js:353:17)
    at require (internal/module.js:12:17)
    at bindings (/Users/shanlanmi/Documents/PathSource/frigate_bird/node_modules/bindings/bindings.js:76:44)
    at Object.<anonymous> (/Users/shanlanmi/Documents/PathSource/frigate_bird/node_modules/bcrypt/bcrypt.js:3:35)
```

## 解决方法
1. 安装 node-gyp
  ```
  npm install -g node-gyp
  ```
1. 切换工作目录到有错误的 addon 包内
  ```
  cd project/node_modules/error_module_name
  ```
1. 重建
  ```
  node-gyp rebuild
  ```
