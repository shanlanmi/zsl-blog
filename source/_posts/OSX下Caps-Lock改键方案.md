----
title: OSX下Caps Lock改键方案
date: 2016-07-21 18:29:45
categories:
- Mac
----
## OSX下Caps Lock改键方案
Caps Lock 键居其位不是其职，已经被以键盘为生的小伙伴们吐槽很久了，实际上老式的 UNIX 键盘如下图:
![alt="keyboard"][0]

### 方案
参照网友的建议，决定对 CapsLock 键作如下修改：
1. 单击 Caps Lock 为 Escape（作为一名Vim 党）
1. 长按 Caps Lock 为 Ctrl
1. Shift+Esc（左上角）组合键为 Caps Lock

### 修改流程
1. 安装改键工具[Karabiner][1]和[Seil][2]
1. 在 Seil 中修改 Caps Lock 键的 keycode 为80，即 F19。
1. 将 Karabiner 中的 "Custom Sortcuts" - "F19 to Escape and Control" 选项打钩。

***
**本文相关**
1. 参考
[Beyond Ctrl: Make That Caps Lock Key Useful](http://www.economyofeffort.com/2014/08/11/beyond-ctrl-remap-make-that-caps-lock-key-useful/)

[0]:http://7xrqfg.com1.z0.glb.clouddn.com/unixKeyboard.png
[1]:https://pqrs.org/osx/karabiner/
[2]:https://pqrs.org/osx/karabiner/seil.html
