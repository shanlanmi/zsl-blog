----
title: BrowserSync，迅捷从免F5开始[转载]
date: 2016-07-21 18:38:44
tags:
- DevDependent
----
原文作者：庭院茶
原文地址：<http://acgtofe.com/posts/2015/03/more-fluent-with-browsersync>

请想象这样一个场面：你开着两个显示器，一边是IDE里的代码，另一边是浏览器里的你正在开发的应用。此时桌上还放着你的手机，手机里也是这个开发中的应用。然后，你新写了一小段代码，按下了ctrl+s保存。紧接着，你的手机和另一个显示器里的应用，就变成了更新后的效果。你可以马上检查效果是否和你预想的一致，甚至都不需要动一下鼠标…

想起来还不错？嗯，这只是简单地省略掉那个开发过程中会按好多遍的F5刷新。

### 自动刷新

“自动刷新”并不是新的概念，但对关注“可见”的预览效果的前端开发者来说，它非常好用，可以节约很多时间。

我也不是现在才知道这个概念。在这之前，我一直在用[LiveReload][1]，它是一个名字上更明显地写着“自动刷新”的工具。LiveReload主要搭配浏览器插件使用，是很棒的自动刷新工具。

不过，现在我要介绍的是[BrowserSync][2]。你会在接下来的内容里看到，它是一个更新、更方便的开发工具。

### BrowserSync

LiveReload有所不足的地方是，需要搭配浏览器插件。但是，插件是取决于浏览器的，Chrome和Firefox都有可用插件（见[这页][3]），但IE，或者我手机上的浏览器，就不能这样了。这时候只能手工向页面里添加一段`<script>`代码（其实插件也是做了这件事），而且还要记得结束后再手工移除。

BrowserSync的一般用法则不需要浏览器插件，也不用手工添加代码（尽管也提供那样的用法）。一句控制台的命令之后，无论是在手机里还是电脑，无论用多少个浏览器（经测试，IE8+及其它），都可以拥有自动刷新的功能。

BrowserSync是怎么做到的？请看它的安装及使用。

#### 安装及使用

安装[Node][4]后，通过[npm][5]安装BrowserSync：

    npm install -g browser-sync
    

然后，就可以开始使用了。打开控制台进入项目所在的目录，然后输入像这样的命令：

    browser-sync start --server --files "css/*.css"
    

这个命令用于纯静态站点，也就是仅一些.html文件的情况。后面的--files "css/*.css"，是指监听css目录中的后缀名为.css的文件。请注意这个命令里的start --server，这其实是BrowserSync自己启动了一个小型服务器。

如果是动态站点，则使用代理模式。例如PHP站点，已经建立了一个本地服务器如http://localhost:8080，此时会是这样的命令：

    browser-sync start --proxy "localhost:8080" --files "css/*.css"
    

BrowserSync会提供一个新地址（如未被占用的话，http://localhost:3000）用于访问。

好了，为什么BrowserSync不需要浏览器插件？因为它使用了服务器的形式（直接或代理）来处理项目文件。默认情况下，访问它的服务器上的网页，可以看到这样的提示签：

![pic-1458958880463.png][6]

这说明当前浏览的网页已连接到BrowserSync。查看一下源码，会发现它们都被添加了与BrowserSync有关的一段`<script>`代码，就像LiveReload浏览器插件做的那样。这些代码会在浏览器和BrowserSync的服务器之间建立web socket连接，一旦有监听的文件发生变化，BrowserSync会通知浏览器。

如果发生变化的文件是css，BrowserSync不会刷新整页，而是直接重新请求这个css文件，并更新到当前页中，效果像这样：

![browsersync_preview_1.gif][7]

显然，这感觉更加快捷。如果你正在开发的是一个单页应用（[SPA][8]），刷新整页会回到初始视图，而你又需要修改后面的某一个视图时，这一功能尤其有用。

#### 文件匹配

从BrowserSync的命令来看，很重要的一点就是通过--files指定需要监听的文件。有关这里的文件匹配模式（称为glob）的详情，请参考[isaacs’s minimatch][9]。

经过我自己的尝试，如果简单只是想要监听整个项目，可以写成这样：

    browser-sync start --server  --files "**"
    

此时，BrowserSync仍然会正确地判断文件变化是否是css。

#### 加入到Gulp使用

[Gulp][10]是现在流行的自动化工具，但BrowserSync并没有Gulp插件版，因为并不需要。BrowserSync有自己独立的API，将它注册为gulp的一个task即可。下面是一段gulpfile.js的示例：

    var gulp = require('gulp');
    var browserSync = require('browser-sync');
    
    gulp.task('browser-sync', function() {
        browserSync({
            files: "**",
            server: {
                baseDir: "./"
            }
        });
    });
    
    gulp.task('default', ["browser-sync"]);

这时候运行gulp将等同于前文的browser-sync start --server --files "**"。更多的用法示例请查看[gulp-browser-sync][11]。

#### 完整选项

到此为止，介绍的都是BrowserSync的基本用法。在控制台里尝试只输入：

    browser-sync
    

你会看到BrowserSync完整的控制台命令指南。其中可以看到有这个命令：

    browser-sync init
    

运行它，将在当前目录生成一个配置文件bs-config.js。

参照[官方文档][12]修改这个文件，然后运行

    browser-sync start --config bs-config .js
    

就将以bs-config.js的完整配置信息运行BrowserSync。

#### 不只是自动刷新

BrowserSync并不只是一个自动刷新工具，它还有许多其他功能。默认配置下，BrowserSync会在多个浏览器中同步滚动条位置，表单行为和点击事件。例如，表单行为的情形像这样：

![browsersync_preview_2.gif][13]

我觉得这是很酷的功能！想象一下桌上摆很多个不同屏幕尺寸的手机来测试的情景，你操作一个，就会带动其他的一起！当然，这些功能还可以在不需要的时候关闭。

#### UI界面及其他

下面是一个BrowserSync的控制台输出示例：

![pic-1458958880470.png][14]

可以看到还有一个叫做UI的一个地址，它是BrowserSync提供的一个简易控制面板。BrowserSync最常用的几个配置选项，都可以在这个面板里调整。

在面板里面你还会发现那个经典的远程调试工具[weinre][15]也在这：

![pic-1458958880470.png][22]

### BrowserSync目前已知的一点问题

前文提到，如果发生变化的文件是css，BrowserSync会以无刷新方式来更新，这是一个很棒的效果。如果使用scss、less等预编译器，将监听设置为编译后的css文件即可。

但是，Web应用框架[Rails][16]会有一些问题。在开发环境中，css是在被请求的时候编译（Rails一般使用sass）再返回给浏览器的，它只有缓存，而没有实际的.css文件。因此，BrowserSync的文件监听将无法指向它们，而如果指向sass文件，浏览器只会以整页刷新的形式来处理。这个问题可以参见[Github上的issue][17]。

一个可行的解决方法是用其他工具替代Rails的Asset Pipeline。但在这里，我推荐另一个解决方案：使用LiveReload（LiveReload你还是有点水平的！）。经测试，LiveReload在Rails中也可以处理好css的快捷更新。关于LiveReload做到这一点的原理，你可以阅读[Lightning-Fast Sass Reloading in Rails][18]。

也期待BrowserSync可以在未来解决这个问题。

### 结语

想要在开发中更流畅，更快捷？请尝试BrowserSync！节约一点时间，你也许就可以做到更多。

### 补充
Browser-Sync 默认只支持 index.html。

***
### 本文相关
1. 参考
1. 修订
2016:第一版


[0]: http://acgtofe.com/categories#%E5%B7%A5%E4%BD%9C%E6%B5%81-ref
[1]: http://livereload.com/
[2]: http://www.browsersync.io/
[3]: http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-
[4]: https://nodejs.org/
[5]: http://zh.wikipedia.org/zh-cn/Node%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8
[6]: http://acgtofe.com/assets/used-images/posts/201503/hint_tag.png
[7]: http://acgtofe.com/assets/used-images/posts/201503/browsersync_preview_1.gif
[8]: http://en.wikipedia.org/wiki/Single-page_application
[9]: https://github.com/isaacs/minimatch
[10]: http://gulpjs.com/
[11]: https://github.com/BrowserSync/gulp-browser-sync
[12]: http://www.browsersync.io/docs/options/
[13]: http://acgtofe.com/assets/used-images/posts/201503/browsersync_preview_2.gif
[14]: http://acgtofe.com/assets/used-images/posts/201503/gulp_browsersync_console.png
[15]: http://people.apache.org/~pmuellr/weinre-docs/latest/
[16]: http://rubyonrails.org/
[17]: https://github.com/BrowserSync/browser-sync/issues/50
[18]: https://mattbrictson.com/lightning-fast-sass-reloading-in-rails
[19]: http://acgtofe.com/posts/2015/04/yogatsu-wa-kimi-no-uso
[20]: http://acgtofe.com/posts/2015/03/promise-from-zero
[21]: ./star.png
[22]: http://acgtofe.com/assets/used-images/posts/201503/browsersync_remote_debug.png
[23]: http://api.uyan.cc/v4/comment/?uid=1752433&frameid=7304194&du=&su=acgtofe.com%2Fposts%2F2015%2F03%2Fmore-fluent-with-browsersync&pic=&url=http%3A%2F%2Facgtofe.com%2Fposts%2F2015%2F03%2Fmore-fluent-with-browsersync&title=BrowserSync%EF%BC%8C%E8%BF%85%E6%8D%B7%E4%BB%8E%E5%85%8DF5%E5%BC%80%E5%A7%8B%20-%20acgtofe&t=1458958756611#
[24]: #
[25]: http://www.uyan.cc/
