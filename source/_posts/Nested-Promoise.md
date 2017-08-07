----
title: Nested Promoise
date: 2016-12-13 06:06:31
categories:
- NodeJS
----
## 核心思想
1. 只有 Promise 对象才能`.then` 的方法。
1. 在 Promise 对象执行了`.then` 方法后, 可以接`.catch` 方法来捕捉err。
1. 用`new Promise` 创建一个新的 Promise 对象。 


## `then` chain

```JavaScript
Video.find({ fields: {id: true} })
.then(function(videos) {
  var ids = [];
  videos.forEach(function(video) {
    ids.push(video.id);
  })
  return Video.app.models.Favourite.videoLike(ids);
}).then(function(videos) {
  var sortedVideos = videos.sort(function(a, b) {
    return b.count - a.count;
  })
  var ids = [];
  sortedVideos.forEach(function(video) {
    ids.push(video.likeable_id);
  });
  return Video.find({
    where: { id: { inq:ids } },
    skip: ((page - 1) * per),
    limit: per
  });
}).then(function(res) {
  videoApi.videos = res;
  videoApi.main(page, per);
}).catch(function(err) {
  reject(err);
});
```

## 用`Promise.join`

```JavaScript
var Promise = require('blue-bird');

var async1 = new Promise(resolve, reject) {
};
var async2 = new Promise(resolve, reject) {
};

var promise1 = Promise.join(async1, function(async1Res) {
  // return a promise
});

var promise2 = Promise.join(promise1, function(promise1Res) {
  // return a promise
});

var promise3 = Promise.join(async2, function(async2Res) {
  // return a promise
});

var promise4 = Promise.join(promis2, promise3, function(promis2Res, promise3Res) {
  // return a promise
});

var promise5 = Promise.join(promise4, function(promise4Res) {
  // return a promise
}).catch(function(err) {
  callback(err);
});

// async1 => promise1 => promise4 => promise5
//                     ^
// async2 => promise2 =>
```
