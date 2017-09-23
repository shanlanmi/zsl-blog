----
title: Ionic里`focus()`的bug及解决方案
date: 2016-09-12 14:09:03
tags:
- AngularJS
----
默认情况下，`focus()`是不生效的，需要在 config.xml 中配置：
```xml
<preference name="KeyboardDisplayRequiresUserAction" value="false" />

<feature name="Keyboard">
  <param name="ios-package" value="IonicKeyboard" onload="true" />
</feature>
```

然后 JS 的代码可以生效
```js
document.getElementById('homeSearch').focus()
```
