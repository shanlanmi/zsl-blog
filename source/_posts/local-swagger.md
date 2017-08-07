----
title: local swagger
date: 2016-11-22 20:43:52
categories:
- DevDependent
----
## 配置
```
npm install http-server -g
git clone https://github.com/swagger-api/swagger-editor.git
cd swagger-editor
npm install
```

## 使用
1. 启动 http 服务
  ```
  cd /Users/shanlanmi/Documents/PathSource/frigate_bird/pathsource-spec && http-server --cors -p 3001
  ```
1. start editor
  ```
  cd /Users/shanlanmi/Documents/PathSource/swagger-editor && npm start
  ```
1. 配置Base Path
  swagger-editor => perference => http://127.0.0.1.3001/
1. 导入本地 API 文件
  swagger-editor => File => import File =>
  frigate_bird/pathsource-spec/main.yaml


