----
title: URL 处理
date: 2016-08-06 15:13:29
tags:
- Request
----
# URL处理

## 解析 URL
- 解析 URL
  ```
  var parser = document.createElement('a');    
  parser.href = "http://example.com:3000/pathname/?search=test#hash";    
  
  parser.protocol; // => "http:"    
  parser.hostname; // => "example.com"    
  parser.port;     // => "3000"    
  parser.pathname; // => "/pathname/"    
  parser.search;   // => "?search=test"    
  parser.hash;     // => "#hash"    
  parser.host;     // => "example.com:3000"
  ```
- 解析 Search
  ```
  var getSearchParams = function(search) {
    var paramPart = search.substr(1).split('&');
    return paramPart.reduce(function(res, item) {
      parts = item.split('=');
      res[parts[0]] = parts[1];
      return res;
    }, {});
  }
  ```

## 修改 URL

## 转义 URL

1. escape()
  - Javascipt函数的输入和输出，默认都是Unicode字符。(下同）
  - escape()不对“+”编码。而通常会把空格转义为`+`，使用时需要注意。
2. encodeURI()
  - 除了常见的符号以外，对其他一些在网址中有特殊含义的符号“; / ? : @ & = + $ , #”，也不进行编码。编码后，它输出符号的utf-8形式，并且在每个字节前加上%。
  - 它对应的解码函数是decodeURI()。
  - 它不对单引号'编码。
3. encodeURIComponent()
  - 特殊符号“; / ? : @ & = + $ , #”，这些在encodeURI()中不被编码的符号，在encodeURIComponent()中统统会被编码。
  - 它对应的解码函数是decodeURIComponent()。
