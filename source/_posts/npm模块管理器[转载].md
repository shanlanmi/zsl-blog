----
title: npm模块管理器[转载]
date: 2016-07-21 18:38:44
tags:
- Project
----
来自[《JavaScript 标准参考教程（alpha）》][0]，by 阮一峰

## 1 简介

npm有两层含义。一层含义是Node.js的开放式模块登记和管理系统，网址为[http://npmjs.org][26]。另一层含义是Node.js默认的模块管理器，是一个命令行下的软件，用来安装和管理node模块。

npm不需要单独安装。在安装node的时候，会连带一起安装npm。但是，node附带的npm可能不是最新版本，最好用下面的命令，更新到最新版本。

    $ npm install npm@latest -g
    

上面的命令之所以最后一个参数是npm，是因为npm本身也是Node.js的一个模块。

Node安装完成后，可以用下面的命令，查看一下npm的帮助文件。

    # npm命令列表
    $ npm help
    
    # 各个命令的简单用法
    $ npm -l
    

下面的命令分别查看npm的版本和配置。

    $ npm -v
    $ npm config list -l
    

## 2 npm init

npm init用来初始化生成一个新的package.json文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。

如果使用了-f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的package.json文件。

    $ npm init -y
    

## 3 npm set

npm set用来设置环境变量。

    $ npm set init-author-name 'Your name'
    $ npm set init-author-email 'Your email'
    $ npm set init-author-url 'http://yourdomain.com'
    $ npm set init-license 'MIT'

上面命令等于为npm init设置了默认值，以后执行npm init的时候，package.json的作者姓名、邮件、主页、许可证字段就会自动写入预设的值。这些信息会存放在用户主目录的~/.npmrc文件，使得用户不用每个项目都输入。如果某个项目有不同的设置，可以针对该项目运行npm config。

    $ npm set save-exact true

上面命令设置加入模块时，package.json将记录模块的确切版本，而不是一个可选的版本范围。

## 4 npm info

npm info命令可以查看每个模块的具体信息。比如，查看underscore模块的信息。

    $ npm info underscore
    { name: 'underscore',
      description: 'JavaScript\'s functional programming helper library.',
      'dist-tags': { latest: '1.5.2', stable: '1.5.2' },
      repository:
       { type: 'git',
         url: 'git://github.com/jashkenas/underscore.git' },
      homepage: 'http://underscorejs.org',
      main: 'underscore.js',
      version: '1.5.2',
      devDependencies: { phantomjs: '1.9.0-1' },
      licenses:
       { type: 'MIT',
         url: 'https://raw.github.com/jashkenas/underscore/master/LICENSE' },
      files:
       [ 'underscore.js',
         'underscore-min.js',
         'LICENSE' ],
      readmeFilename: 'README.md'}
    

上面命令返回一个JavaScript对象，包含了underscore模块的详细信息。这个对象的每个成员，都可以直接从info命令查询。

    $ npm info underscore description
    JavaScript's functional programming helper library.
    
    $ npm info underscore homepage
    http://underscorejs.org
    
    $ npm info underscore version
    1.5.2
    

## 5 npm search

npm search命令用于搜索npm仓库，它后面可以跟字符串，也可以跟正则表达式。

    $ npm search <搜索词>
    

下面是一个例子。

    $ npm search node-gyp
    // NAME                  DESCRIPTION
    // autogypi              Autogypi handles dependencies for node-gyp projects.
    // grunt-node-gyp        Run node-gyp commands from Grunt.
    // gyp-io                Temporary solution to let node-gyp run `rebuild` under…
    // ...
    

## 6 npm list

npm list命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块。

    $ npm list
    

加上global参数，会列出全局安装的模块。

    $ npm list -global
    

npm list命令也可以列出单个模块。

    $ npm list underscore
    

## 7 npm install

### 7 基本用法

Node模块采用npm install命令安装。

每个模块可以“全局安装”，也可以“本地安装”。“全局安装”指的是将一个模块安装到系统目录中，各个项目都可以调用。一般来说，全局安装只适用于工具模块，比如npm和grunt。“本地安装”指的是将一个模块下载到当前项目的node_modules子目录，然后只有在项目目录之中，才能调用这个模块。

    # 本地安装
    $ npm install <package name>
    
    # 全局安装
    $ sudo npm install -global <package name>
    $ sudo npm install -g <package name>
    

npm install也支持直接输入Github代码库地址。

    $ npm install git://github.com/package/path.git
    $ npm install git://github.com/package/path.git#0.1.0
    

安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。

如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f或--force参数。

    $ npm install <packageName> --force
    

如果你希望，所有模块都要强制重新安装，那就删除node_modules目录，重新执行npm install。

    $ rm -rf node_modules
    $ npm install
    

### 7 安装不同版本

install命令总是安装模块的最新版本，如果要安装模块的特定版本，可以在模块名后面加上@和版本号。

    $ npm install sax@latest
    $ npm install sax@0.1.1
    $ npm install sax@">=0.1.0 <0.2.0"

如果使用--save-exact参数，会在package.json文件指定安装模块的确切版本。

    $ npm install readable-stream --save --save-exact
    

install命令可以使用不同参数，指定所安装的模块属于哪一种性质的依赖关系，即出现在packages.json文件的哪一项中。

* –save：模块名将被添加到dependencies，可以简化为参数-S。
* –save-dev: 模块名将被添加到devDependencies，可以简化为参数-D。


    $ npm install sax --save
    $ npm install node-tap --save-dev
    # 或者
    $ npm install sax -S
    $ npm install node-tap -D
    

如果要安装beta版本的模块，需要使用下面的命令。

    # 安装最新的beta版
    $ npm install <module-name>@beta (latest beta)
    
    # 安装指定的beta版
    $ npm install <module-name>@1.3.1-beta.3
    

npm install默认会安装dependencies字段和devDependencies字段中的所有模块，如果使用production参数，可以只安装dependencies字段的模块。

    $ npm install --production
    # 或者
    $ NODE_ENV=production npm install
    

一旦安装了某个模块，就可以在代码中用require命令调用这个模块。

    var backbone = require('backbone')
    console.log(backbone.VERSION)

## 8 避免系统权限

默认情况下，Npm全局模块都安装在系统目录（比如/usr/local/lib/），普通用户没有写入权限，需要用到sudo命令。这不是很方便，我们可以在没有root权限的情况下，安装全局模块。

首先，在主目录下新建配置文件.npmrc，然后在该文件中将prefix变量定义到主目录下面。

    prefix = /home/yourUsername/npm
    

然后在主目录下新建npm子目录。

    $ mkdir ~/npm
    

此后，全局安装的模块都会安装在这个子目录中，npm也会到~/npm/bin目录去寻找命令。

最后，将这个路径在.bash_profile文件（或.bashrc文件）中加入PATH变量。

    export PATH=~/npm/bin:$PATH

## 9 npm update，npm uninstall

npm update命令可以更新本地安装的模块。

    # 升级当前项目的指定模块
    $ npm update [package name]
    
    # 升级全局安装的模块
    $ npm update -global [package name]
    

它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装。

使用-S或--save参数，可以在安装的时候更新package.json里面模块的版本号。

    // 更新之前的package.json
    dependencies: {
      dep1: "^1.1.1"
    }
    
    // 更新之后的package.json
    dependencies: {
      dep1: "^1.2.2"
    }

注意，从npm v2.6.1 开始，npm update只更新顶层模块，而不更新依赖的依赖，以前版本是递归更新的。如果想取到老版本的效果，要使用下面的命令。

    $ npm --depth 9999 update
    

npm uninstall命令，卸载已安装的模块。

    $ npm uninstall [package name]
    
    # 卸载全局模块
    $ npm uninstall [package name] -global
    
## npm root
```
# 查看当前包的安装路径
npm root

# 查看全局的包的安装路径
npm root -g  
```


## 10 npm run

npm不仅可以用于模块管理，还可以用于执行脚本。package.json文件有一个scripts字段，可以用于指定脚本命令，供npm直接调用。

    {
      "name": "myproject",
      "devDependencies": {
        "jshint": "latest",
        "browserify": "latest",
        "mocha": "latest"
      },
      "scripts": {
        "lint": "jshint **.js",
        "test": "mocha test/"
      }
    }

上面代码中，scripts字段指定了两项命令lint和test。命令行输入npm run-script lint或者npm run lint，就会执行jshint **.js，输入npm run-script test或者npm run test，就会执行mocha test/。npm run是npm run-script的缩写，一般都使用前者，但是后者可以更好地反应这个命令的本质。

npm run命令会自动在环境变量$PATH添加node_modules/.bin目录，所以scripts字段里面调用命令时不用加上路径，这就避免了全局安装NPM模块。

npm内置了两个命令简写，npm test等同于执行npm run test，npm start等同于执行npm run start。

npm run会创建一个Shell，执行指定的命令，并临时将node_modules/.bin加入PATH变量，这意味着本地模块可以直接运行。

举例来说，你执行ESLint的安装命令。

    $ npm i eslint --save-dev
    

运行上面的命令以后，会产生两个结果。首先，ESLint被安装到当前目录的node_modules子目录；其次，node_modules/.bin目录会生成一个符号链接node_modules/.bin/eslint，指向ESLint模块的可执行脚本。

然后，你就可以在package.json的script属性里面，不带路径的引用eslint这个脚本。

    {
      "name": "Test Project",
      "devDependencies": {
        "eslint": "^1.10.3"
      },
      "scripts": {
        "lint": "eslint ."
      }
    }

等到运行npm run lint的时候，它会自动执行./node_modules/.bin/eslint .。

如果直接运行npm run不给出任何参数，就会列出scripts属性下所有命令。

    $ npm run
    Available scripts in the user-service package:
      lint
         jshint **.js
      test
        mocha test/
    

下面是另一个package.json文件的例子。

    "scripts": {
      "watch": "watchify client/main.js -o public/app.js -v",
      "build": "browserify client/main.js -o public/app.js",
      "start": "npm run watch & nodemon server.js",
      "test": "node test/all.js"
    },

上面代码在scripts项，定义了四个别名，每个别名都有对应的脚本命令。

    $ npm run watch
    $ npm run build
    $ npm run start
    $ npm run test

其中，start和test属于特殊命令，可以省略run。

    $ npm start
    $ npm test

如果希望一个操作的输出，是另一个操作的输入，可以借用Linux系统的管道命令，将两个操作连在一起。

    "build-js": "browserify browser/main.js | uglifyjs -mc > static/bundle.js"

但是，更方便的写法是引用其他npm run命令。

    "build": "npm run build-js && npm run build-css"

上面的写法是先运行npm run build-js，然后再运行npm run build-css，两个命令中间用&&连接。如果希望两个命令同时平行执行，它们中间可以用&连接。

下面是一个流操作的例子。

    "devDependencies": {
      "autoprefixer": "latest",
      "cssmin": "latest"
    },
    
    "scripts": {
      "build:css": "autoprefixer -b 'last 2 versions' < assets/styles/main.css | cssmin > dist/main.css"
    }

写在scripts属性中的命令，也可以在node_modules/.bin目录中直接写成bash脚本。下面是一个bash脚本。

    #!/bin/bash
    
    cd site/main
    browserify browser/main.js | uglifyjs -mc > static/bundle.js

假定上面的脚本文件名为build.sh，并且权限为可执行，就可以在scripts属性中引用该文件。

    "build-js": "bin/build.sh"

### 10 参数

npm run命令还可以添加参数。

    "scripts": {
      "test": "mocha test/"
    }

上面代码指定npm test，实际运行mocha test/。如果要通过npm test命令，将参数传到mocha，则参数之前要加上两个连词线。

    $ npm run test -- anothertest.js
    # 等同于
    $ mocha test/ anothertest.js
    

上面命令表示，mocha要运行所有test子目录的测试脚本，以及另外一个测试脚本anothertest.js。

npm run本身有一个参数-s，表示关闭npm本身的输出，只输出脚本产生的结果。

    // 输出npm命令头
    $ npm run test
    
    // 不输出npm命令头
    $ npm run -s test

### 10 scripts脚本命令最佳实践

scripts字段的脚本命令，有一些最佳实践，可以方便开发。首先，安装npm-run-all模块。

    $ npm install npm-run-all --save-dev
    

这个模块用于运行多个scripts脚本命令。

    # 继发执行
    $ npm-run-all build:html build:js
    # 等同于
    $ npm run build:html && npm run build:js
    
    # 并行执行
    $ npm-run-all --parallel watch:html watch:js
    # 等同于
    $ npm run watch:html & npm run watch:js
    
    # 混合执行
    $ npm-run-all clean lint --parallel watch:html watch:js
    # 等同于
    $ npm-run-all clean lint
    $ npm-run-all --parallel watch:html watch:js
    
    # 通配符
    $ npm-run-all --parallel watch:*

（1）start脚本命令

start脚本命令，用于启动应用程序。

    "start": "npm-run-all --parallel dev serve"

上面命令并行执行dev脚本命令和serve脚本命令，等同于下面的形式。

    $ npm run dev & npm run serve
    

如果start脚本没有配置，npm start命令默认执行下面的脚本，前提是模块的根目录存在一个server.js文件。

    $ node server.js
    

（2）dev脚本命令

dev脚本命令，规定开发阶段所要做的处理，比如构建网页资源。

    "dev": "npm-run-all dev:*"

上面命令用于继发执行所有dev的子命令。

    "predev:sass": "node-sass --source-map src/css/hoodie.css.map --output-style nested src/sass/base.scss src/css/hoodie.css"

上面命令将sass文件编译为css文件，并生成source map文件。

    "dev:sass": "node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css"

上面命令会监视sass文件的变动，只要有变动，就自动将其编译为css文件。

    "dev:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers \"> 5%\" --output src/css/hoodie.css src/css/hoodie.css"

上面命令为css文件加上浏览器前缀，限制条件是只考虑市场份额大于5%的浏览器。

（3）serve脚本命令

serve脚本命令用于启动服务。

    "serve": "live-server dist/ --port=9090"

上面命令启动服务，用的是[live-server][28]模块，将服务启动在9090端口，展示dist子目录。

live-server模块有三个功能。

* 启动一个HTTP服务器，展示指定目录的index.html文件，通过该文件加载各种网络资源，这是file://协议做不到的。
* 添加自动刷新功能。只要指定目录之中，文件有任何变化，它就会刷新页面。
* npm run serve命令执行以后，自动打开浏览器。、

以前，上面三个功能需要三个模块来完成：http-server、live-reload和opener，现在只要live-server一个模块就够了。

（4）test脚本命令

test脚本命令用于执行测试。

    "test": "npm-run-all test:*",
    "test:lint": "sass-lint --verbose --config .sass-lint.yml src/sass/*"

上面命令规定，执行测试时，运行lint脚本，检查脚本之中的语法错误。

（5）prod脚本命令

prod脚本命令，规定进入生产环境时需要做的处理。

    "prod": "npm-run-all prod:*",
    "prod:sass": "node-sass --output-style compressed src/sass/base.scss src/css/prod/hoodie.min.css",
    "prod:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers "> 5%" --output src/css/prod/hoodie.min.css src/css/prod/hoodie.min.css"

上面命令将sass文件转为css文件，并加上浏览器前缀。

（6）help脚本命令

help脚本命令用于展示帮助信息。

    "help": "markdown-chalk --input DEVELOPMENT.md"

上面命令之中，markdown-chalk模块用于将指定的markdown文件，转为彩色文本显示在终端之中。

（7）docs脚本命令

docs脚本命令用于生成文档。

    "docs": "kss-node --source src/sass --homepage ../../styleguide.md"

上面命令使用kss-node模块，提供源码的注释生成markdown格式的文档。

### 10 pre- 和 post- 脚本

npm run为每条命令提供了pre-和post-两个钩子（hook）。以npm run lint为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行npm run prelint，然后执行npm run lint，最后执行npm run postlint。

    {
      "name": "myproject",
      "devDependencies": {
        "eslint": "latest"
        "karma": "latest"
      },
      "scripts": {
        "lint": "eslint --cache --ext .js --ext .jsx src",
        "test": "karma start --log-leve=error karma.config.js --single-run=true",
        "pretest": "npm run lint",
        "posttest": "echo 'Finished running tests'"
      }
    }

上面代码是一个package.json文件的例子。如果执行npm test，会按下面的顺序执行相应的命令。

1. pretest
1. test
1. posttest

如果执行过程出错，就不会执行排在后面的脚本，即如果prelint脚本执行出错，就不会接着执行lint和postlint脚本。

下面是一个例子。

    {
      "test": "karma start",
      "test:lint": "eslint . --ext .js --ext .jsx",
      "pretest": "npm run test:lint"
    }

上面代码中，在运行npm run test之前，会自动检查代码，即运行npm run test:lint命令。

下面是一些常见的pre-和post-脚本。

* prepublish：发布一个模块前执行。
* postpublish：发布一个模块后执行。
* preinstall：用户执行npm install命令时，先执行该脚本。
* postinstall：用户执行npm install命令时，安装结束后执行该脚本，通常用于将下载的源码编译成用户需要的格式，比如有些模块需要在用户机器上跟本地的C++模块一起编译。
* preuninstall：卸载一个模块前执行。
* postuninstall：卸载一个模块后执行。
* preversion：更改模块版本前执行。
* postversion：更改模块版本后执行。
* pretest：运行npm test命令前执行。
* posttest：运行npm test命令后执行。
* prestop：运行npm stop命令前执行。
* poststop：运行npm stop命令后执行。
* prestart：运行npm start命令前执行。
* poststart：运行npm start命令后执行。
* prerestart：运行npm restart命令前执行。
* postrestart：运行npm restart命令后执行。

对于最后一个npm restart命令，如果没有设置restart脚本，prerestart和postrestart会依次执行stop和start脚本。

另外，不能在pre脚本之前再加pre，即prepretest脚本不起作用。

注意，即使Npm可以自动运行pre和post脚本，也可以手动执行它们。

    $ npm run prepublish
    

下面是post install的例子。

    {
      "postinstall": "node lib/post_install.js"
    }

上面的这个命令，主要用于处理从Git仓库拉下来的源码。比如，有些源码是用TypeScript写的，可能需要转换一下。

下面是publish钩子的一个例子。

    {
      "dist:modules": "babel ./src --out-dir ./dist-modules",
      "gh-pages": "webpack",
      "gh-pages:deploy": "gh-pages -d gh-pages",
      "prepublish": "npm run dist:modules",
      "postpublish": "npm run gh-pages && npm run gh-pages:deploy"
    }

上面命令在运行npm run publish时，会先执行Babel编译，然后调用Webpack构建，最后发到Github Pages上面。

以上都是npm相关操作的钩子，如果安装某些模块，还能支持Git相关的钩子。下面以[husky][30]模块为例。

    $ npm install husky --save-dev
    

安装以后，就能在package.json添加precommit、prepush等钩子。

    {
        "scripts": {
            "lint": "eslint yourJsFiles.js",
            "precommit": "npm run test && npm run lint",
            "prepush": "npm run test && npm run lint",
            "...": "..."
        }
    }

类似作用的模块还有pre-commit、precommit-hook等。

### 10 内部变量

scripts字段可以使用一些内部变量，主要是package.json的各种字段。

比如，package.json的内容是 { "name" : "foo" ,  "version" : "1.2.5" }，那么变量npm_package_name的值是foo，变量npm_package_version的值是1.2.5。

    {
      "scripts":{
        "bundle": "mkdir -p build/$npm_package_version/"
      }
    }

运行npm run bundle以后，将会生成build/1.2.5/子目录。

config字段也可以用于设置内部字段。

      "name": "fooproject",
      "config": {
        "reporter": "xunit"
      },
      "scripts": {
        "test": "mocha test/ --reporter $npm_package_config_reporter"
      }

上面代码中，变量npm_package_config_reporter对应的就是reporter。

### 10 通配符

npm的通配符的规则如下。

* * 匹配0个或多个字符
* ? 匹配1个字符
* [...] 匹配某个范围的字符。如果该范围的第一个字符是!或^，则匹配不在该范围的字符。
* !(pattern|pattern|pattern) 匹配任何不符合给定的模式
* ?(pattern|pattern|pattern) 匹配0个或1个给定的模式
* +(pattern|pattern|pattern) 匹配1个或多个给定的模式
* *(a|b|c) 匹配0个或多个给定的模式
* @(pattern|pat*|pat?erN) 只匹配给定模式之一
* ** 如果出现在路径部分，表示0个或多个子目录。


## 11 npm link

开发Npm模块的时候，有时我们会希望，边开发边试用。但是，常规情况下，使用一个模块，需要将其安装到node_modules目录之中，这对于开发中的模块，显然非常不方便。npm link就能起到这个作用，建立一个符号链接，在全局的node_modules目录之中，生成一个符号链接，指向模块的本地目录。

为了理解npm link，请设想这样一个场景。你开发了一个模块myModule，目录为src/myModule，你自己的项目myProject要用到这个模块，项目目录为src/myProject。每一次，你更新myModule，就要用npm publish命令发布，然后切换到项目目录，使用npm update更新模块。这样显然很不方便，如果我们可以从项目目录建立一个符号链接，直接连到模块目录，就省去了中间步骤，项目可以直接使用最新版的模块。

首先，在模块目录（src/myModule）下运行npm link命令。

    src/myModule$ npm link
    

上面的命令会在Npm的全局模块目录内，生成一个符号链接文件，该文件的名字就是package.json文件中指定的文件名。

    /path/to/global/node_modules/myModule -> src/myModule
    

这个时候，已经可以全局调用myModule模块了。但是，如果我们要让这个模块安装在项目内，还要进行下面的步骤。

切换到项目目录，再次运行npm link命令，并指定模块名。

    src/myProject$ npm link myModule
    

上面命令等同于生成了本地模块的符号链接。

    src/myProject/node_modules/myModule -> /path/to/global/node_modules/myModule
    

然后，就可以在你的项目中，加载该模块了。

    var myModule = require('myModule');

这样一来，myModule的任何变化，都可以直接反映在myProject项目之中。但是，这样也出现了风险，任何在myProject目录中对myModule的修改，都会反映到模块的源码中。

如果你的项目不再需要该模块，可以在项目目录内使用npm unlink命令，删除符号链接。

    src/myProject$ npm unlink myModule
    

## 12 npm bin

npm bin命令显示相对于当前目录的，Node模块的可执行脚本所在的目录（即.bin目录）。

    # 项目根目录下执行
    $ npm bin
    ./node_modules/.bin
    

## 13 npm adduser

npm adduser用于在npmjs.com注册一个用户。

    $ npm adduser
    Username: YOUR_USER_NAME
    Password: YOUR_PASSWORD
    Email: YOUR_EMAIL@domain.com
    

## 14 npm publish

npm publish用于将当前模块发布到npmjs.com。执行之前，需要向npmjs.com申请用户名。

    $ npm adduser
    

如果已经注册过，就使用下面的命令登录。

    $ npm login
    

登录以后，就可以使用npm publish命令发布。

    $ npm publish
    

如果当前模块是一个beta版，比如1.3.1-beta.3，那么发布的时候需要使用tag参数。

    $ npm publish --tag beta
    

如果发布私有模块，模块初始化的时候，需要加上scope参数。只有npm的付费用户才能发布私有模块。

    $ npm init --scope=<yourscope>
    

如果你的模块是用ES6写的，那么发布的时候，最好转成ES5。首先，需要安装Babel。

    $ npm install --save-dev babel-cli@6 babel-preset-es2015@6

然后，在package.json里面写入build脚本。

    "scripts": {
      "build": "babel source --presets babel-preset-es2015 --out-dir distribution",
      "prepublish": "npm run build"
    }

运行上面的脚本，会将source目录里面的ES6源码文件，转为distribution目录里面的ES5源码文件。然后，在项目根目录下面创建两个文件.npmignore和.gitignore，分别写入以下内容。

    // .npmignore
    source
    
    // .gitignore
    node_modules
    distribution
    

## 15 npm deprecate

如果想废弃某个版本的模块，可以使用npm deprecate命令。

    $ npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"

运行上面的命令以后，小于0.2.3版本的模块的package.json都会写入一行警告，用户安装这些版本时，这行警告就会在命令行显示。

## 16 npm owner

模块的维护者可以发布新版本。npm owner命令用于管理模块的维护者。

    # 列出指定模块的维护者
    $ npm owner ls <package name>
    
    # 新增维护者
    $ npm owner add <user> <package name>
    
    # 删除维护者
    $ npm owner rm <user> <package name>
    

## 17 参考链接

* [ James Halliday, [task automation with npm run][32]: npm run命令（package.json文件的script属性）的用法
* [ Keith Cirkel, [How to Use npm as a Build Tool][33]
* [ justjs, [npm link: developing your own npm modules without tears][35]
* [ hoodie-css, [Development Environment Help][37]
* [ Stephan Bönnemann, [How to make use of npm’s package distribution tags to create release channels][39]
* [ Alex Booker, [How to Build and Publish ES6 npm Modules Today, with Babel][40]

[0]: http://javascript.ruanyifeng.com/
[1]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc0
[2]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc1
[3]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc2
[4]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc3
[5]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc4
[6]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc5
[7]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc6
[8]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc7
[9]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc8
[10]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc9
[11]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc10
[12]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc11
[13]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc12
[14]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc13
[15]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc14
[16]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc15
[17]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc16
[18]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc17
[19]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc18
[20]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc19
[21]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc20
[22]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc21
[23]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc22
[24]: http://javascript.ruanyifeng.com/nodejs/npm.html#toc23
[26]: http://npmjs.org/
[28]: http://npmjs.com/package/live-server
[30]: https://github.com/typicode/husky
[32]: http://substack.net/task_automation_with_npm_run
[33]: http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
[35]: http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears
[37]: https://github.com/hoodiehq/hoodie-css/blob/feature/build-automation/DEVELOPMENT.md
[39]: https://medium.com/greenkeeper-blog/one-simple-trick-for-javascript-package-maintainers-to-avoid-breaking-their-user-s-software-and-to-6edf06dc5617#.5omqgsg45
[40]: https://booker.codes/how-to-build-and-publish-es6-npm-modules-today-with-babel/
***
**本文相关**
1. 参考
1. 修订
2016:第一版
