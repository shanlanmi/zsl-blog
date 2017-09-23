----
title: 验证 s3-uploader 的 policy 和 signature 是否正确的方法
date: 2016-12-16 19:00:55
tags:
- DevDependent
----
## 官方文档
<http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-HTTPPOSTConstructPolicy.html>
<http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-post-example.html#sigv4-post-example-file-uploaA>

## 具体实现

1. 创建 index.html
```html
<html>
  <head>
    
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
  </head>
  <body>

  <form action="https://s3.amazonaws.com/pathsource-dev/" method="post" enctype="multipart/form-data">
    Key to upload: 
    <input type="input"  name="key" value="tmp/s3-directupload-ios/20161216T0906Z_cd0c6dddbca0124cec68a1db18d4c785/${filename}" /><br />
    <input type="hidden" name="acl" value="public-read" />
    <!-- <input type="hidden" name="success_action_redirect" value="http://baidu.com/" /> -->
    <input type="hidden" name="success_action_status" value="201" />
    <input type="hidden" name="utf8" value="ture" />
    <input type="hidden" name="Content-Type" value="" />
    <input type="hidden" name="AWSAccessKeyId" value="AKIAI3Y6IJZWELIWJ7GQ" />
    <input type="hidden" name="x-requested-with" value="" />
    <input type="hidden" name="policy" value='eyJleHBpcmF0aW9uIjoiMjAxNi0xMi0xNlQyMDowNzoyOVoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiR1dGY4IiwiIl0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCIiXSxbInN0YXJ0cy13aXRoIiwiJHgtcmVxdWVzdGVkLXdpdGgiLCIiXSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwwLDUyNDI4ODAwMF0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCIiXSx7ImJ1Y2tldCI6InBhdGhzb3VyY2UtZGV2In0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn1dfQ==' />
    <input type="hidden" name="signature" value="l0EXkQV4IEajno24IZwJ6IjDiCA==" />
    File: 
    <input type="file"   name="file" /> <br />
    <!-- The elements after this will be ignored -->
    <input type="submit" name="submit" value="Upload to Amazon S3" />
  </form>
  
</html>
```

1. 开启 http 服务
```
http-server ./ --cors -p 4000
```

