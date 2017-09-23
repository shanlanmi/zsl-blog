----
title: Promise Chain
date: 2016-12-21 22:28:11
tags:
- NodeJS
----
```js
var Promise = require('bluebird');

module.exports = function (Career) {
  Career.test = function() {
    var aa = function(num) {
      return new Promise(function (resolve, reject) {
        resolve(num);
      });
    };
    
    var bb = function(num) {
      return new Promise(function (resolve, reject) {
        resolve(num + 1);
      });
    };

    var cc = function(num) {
      return new Promise(function (resolve, reject) {
        resolve(num + 1);
      });
    };

    var dd = function(num) {
      console.info(num);
    };

    aa(2).then(bb).then(cc).then(dd);
    // aa(2)
    // .then(function(res) {
      // return bb(res);
    // }).then(function(res) {
      // return cc(res);
    // }).then(function(res) {
      // return dd(res);
    // });

  };

};
```