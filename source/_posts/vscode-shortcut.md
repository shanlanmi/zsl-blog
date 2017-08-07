----
title: vscode shortcut
date: 2017-07-12 16:05:12
categories:
- Editor
----
# vscode shortkey
## 主命令框 Command Palette

Short Key             | Feature
:---------------------|:--
 `F1` / `Cmd+Shift+p` | 命令面板，再按`Backspace`进入文件模式
`Cmd+p`               | 文件模式，在按`>`回到命令模式，按`?`查询当前可执行的动作
`Cmd+T`               | 列出所有符号

## 常用快捷键

### 窗口管理

Short Key                                         | Feature
:-------------------------------------------------|:--
`Cmd+Shift+n`                                     | 打开一个新窗口
`Cmd+Shift+w`                                     | 关闭窗口
`Cmd+n`                                           | 新建文件
`Cmd+(Shift)+Tab`/ `A+left` / `A+right` | 打开文件之间切换
`Cmd+1/2/3`                                       | 打开第几个文件
`Cmd+\\`                                          | 打开新的编辑窗口，也可以按住`Cmd`在用鼠标点击Explorer
`Cmd+Shift+w`                                     | 编辑器和cmd间切换
`Cmd+k+left/right`                                | 编辑器换位置(not work)

### 编辑器

Short Key           | Feature
:-------------------|:--
`Cmd+[/]`           | 代码行缩进
`Cmd+Shift+[/]`     | 折叠打开代码块
`Cmd+K Cmd+[/]`     | 折叠打开所有子代码块
`Cmd+K Cmd+0/J`     | 折叠打开所有代码块
`Cmd+/`             | 添加/删除行注释
`Shift+Opt+F`       | 代码格式化
`Cmd+Shift+X`       | 修剪空格
`Cmd+Shift+K`       | 删除行
`Cmd+Enter`         | 当前行下插入行
`Cmd+Shift+Enter`   | 当前行上插入行
`Cmd+Shift+丨`      | 括号跳转
`Cmd+G`             | 跳转行
`Opt+Up/Down`       | 上下移动一行
`Opt+Left/Rgiht`    | 向前/向后
`Shift+Opt+Up/Down` | 向上向下复制一行
`(Shift)+F8`        | 跳转到上/下一个Error或Warning


### 查询与替换

Short Key     | Feature
:-------------|:--
`Cmd+F`       | 查找
`Cmd+H`       | 替换
`(Shift)+F3`  | 查询上一个/下一个
`Opt+Enter`   | 选中所有查询结果
`Cmd+D`       | 多光标编辑
`Cmd+K Cmd+D` | 多光标编辑下一个
`Cmd+H`       | 查找

### 重构

Short Key   | Feature
:-----------|:--
`F12`       | 跳转到定义处
`Opt+F12`   | 看一眼定义处
`Shift+F12` | 列出所有的引用
`Ctrl+F12`  | 同时修改本文件中所有匹配的
`Cmd+F12`   | 同时修改本文件中所有匹配的
`F2`        | 重命名

### 显示相关

Short Key     | Feature
:-------------|:--
`F11`         | 全屏
`Cmd+=/-`     | 放大缩小
`Cmd+B`       | 侧边栏显/隐
`Cmd+Shift+E` | Show Explorer
`Cmd+Shift+F` | Show Search
`Cmd+Shift+G` | Show Git
`Cmd+Shift+D` | Show Debug
`Cmd+Shift+U` | Show Output
`Cmd+Shift+V` | 预览markdown

## 设置储存位置

Windows: %APPDATA%\Code\User\settings.json
Mac: $HOME/Library/Application Support/Code/User/settings.json
Linux: $HOME/.config/Code/User/settings.json


## 修改默认快捷键

```
[
    //ctrl+space被切换输入法快捷键占用
    {
        "key": "ctrl+alt+space",
        "command": "editor.action.triggerSuggest",
        "when": "editorTextFocus"
    },
    // ctrl+d删除一行
    {
        "key": "ctrl+d",
        "command": "editor.action.deleteLines",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+k", //与删除一行的快捷键互换了：）
        "command": "editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    //ctrl+shift+/多行注释
    {
        "key":"ctrl+shift+/",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus"
    }
]
```

## 自定义代码段

```
"arrow function": {
    "prefix": "func",
    "body": [
        "(${e}) => {$1}"
    ],
    "description": "arrow function"
}
```
