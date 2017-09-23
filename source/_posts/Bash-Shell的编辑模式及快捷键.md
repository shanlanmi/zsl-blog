----
title: Bash Shell的编辑模式及快捷键
date: 2016-07-21 18:34:23
tags:
- Shell
----
## Set Emacs Mode in Bash(default)

	$ set -o emacs

HotKey|function
---|---
ctrl-a|Move cursor to beginning of line
ctrl-e|Move cursor to end of line
meta-b|Move cursor back one word
meta-f|Move cursor forward one word
ctrl-w|Cut the last word
ctrl-u|Cut everything before the cursor 
ctrl-k|Cut everything after the cursor
ctrl-y|Paste the last thing to be cut
ctrl-_|Undo

NOTE: ctrl- = hold control, meta- = hold meta (where meta is usually the alt or escape key).

## Set Vi Mode in Bash

	$ set -o vi

HotKey|function
---|---
h|Move cursor left
l|Move cursor right
A|Move cursor to end of line and put in insert mode
0|(zero) Move cursor to beginning of line (doesn't put in insert mode) 
i|Put into insert mode at current position
a|Put into insert mode after current position
dd|Delete line (saved for pasting)
D|Delete text after current cursor position (saved for pasting)
p|Paste text that was deleted
j|Move up through history commands
k|Move down through history commands
u|Undo

***
## 本文相关
### 参考
[Getting Started with BASH](http://www.hypexr.org/bash_tutorial.php#vi)
### 修订
2016-01-13:第一版
