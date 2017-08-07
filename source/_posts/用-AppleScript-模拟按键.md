----
title: 用 AppleScript 模拟按键
date: 2016-07-21 18:34:23
categories:
- Shell
----
### 模拟按键



- tell application "System Events" 下运行系统事件代码。
- delay的单位是 s


### Key Code 列表

Name|Symbol|Code
---|---|---
Zero|0|29
One|1|18
Two|2|19
Three|3|20
Four|4|21
Five|5|23
Six|6|22
Seven|7|26
Eight|8|28
Nine|9|25
|A|0
|B|11
|C|8
|D|2
|E|14
|F|3
|G|5
|H|4
|I|34
|J|38
|K|40
|L|37
|M|46
|N|45
|O|31
|P|35
|Q|12
|R|15
|S|1
|T|17
|U|32
|V|9
|W|13
|X|7
|Y|16
|Z|6
SectionSign|§|10
Grave|`|50
Minus|-|27
Equal|=|24
LeftBracket|[|33
RightBracket|]|30
Semicolon|;|41
Quote|'|39
Comma|,|43
Period|.|47
Slash|/|44
Backslash|\|42
Keypad0|0|82
Keypad1|1|83
Keypad2|2|84
Keypad3|3|85
Keypad4|4|86
Keypad5|5|87
Keypad6|6|88
Keypad7|7|89
Keypad8|8|91
Keypad9|9|92
KeypadDecimal|.|65
KeypadMultiply|*|67
KeypadPlus|+|69
KeypadDivide|/|75
KeypadMinus|-|78
KeypadEquals|=|81
KeypadClear|⌧|71
KeypadEnter|⌤|76
Space|␣|49
Return|⏎|36
Tab|⇥|48
Delete|⌫|51
ForwardDelete|⌦|117
Linefeed ?|␊|52
Escape|⎋|53
Command|⌘|55
Shift|⇧|56
CapsLock|⇪|57
Option|⌥|58
Control|⌃|59
RightShift|⇧|60
RightOption|⌥|61
RightControl|⌃|62
Function|fn|63
|F1|122
|F2|120
|F3|99
|F4|118
|F5|96
|F6|97
|F7|98
|F8|100
|F9|101
|F10|109
|F11|103
|F12|111
|F13|105
BrightnessDown|F14|107
BrightnessUp|F15|113
|F16|106
|F17|64
|F18|79
|F19|80
|F20|90
VolumeUp||72
VolumeDown||73
Mute||74
Help/Insert||114
Home|⇱|115
End|⇲|119
PageUp|⇞|116
PageDown|⇟|121
LeftArrow|←|123
RightArrow|→|124
DownArrow|↓|125
UpArrow|↑|126

### 其他命令

***

**本文相关**
1. 参考
[Key Codes for Function and Special Keys in AppleScript](http://macbiblioblog.blogspot.sg/2014/12/key-codes-for-function-and-special-keys.html)
[How to automate your keyboard in Mac OS X with AppleScript](http://eastmanreference.com/how-to-automate-your-keyboard-in-mac-os-x-with-applescript/)
1. 修订
2016:第一版
