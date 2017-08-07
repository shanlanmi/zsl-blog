----
title: Vim基本按键
date: 2016-07-21 18:29:45
categories:
- Editor
----
# Normal Mode
## Moving the cursor
#### Moving by characters

Hotkey|Function
---|---
h/j/k/l|Left/down/up/right
&#60;space&#62;|Right
&#60;ENTER&#62;|Down
w|Forward to the start of word
W|Forward to the start of word, ignore punctuation
b|Backward to  the start of word
B|Backward to  the start of word, ignore punctuation
e|Forward to the end of word
E|Forward to the end of word, ignore punctuation
ge|Backward to the end of word
gE|Backward to the end of word, ignore punctuation
|
$ or &#60;END&#62;|Move to the end of line
g$ or &#60;END&#62;|Move to the end of line in the screen
0 or &#60;HOME&#62;|Move to the start of line
g0|Move to the start of line in the screen
^|Move to the first character in the screen line
g^|Move to the first character in the screen line 
+ or &#60;Enter&#62;|Lines downward, on the first non-blank character
-|Lines upward, on the first non-blank character
|
f[char]|Find character on the right side
F[char]|Find character on the left side
t[char]|Till befor to the character on the left side
T[char]|Till befor to the character on the right side
%|Find a matching ),], or }
|
; |Do the finding moving again
, |Do the finding moving again on the other side

**Note**: w,b,e,ge以标点和空格为边界划分词;W,B,E,eG,只以空格为边界划分词

#### Moving by lines

Hotkey|Function
---|---
G|Move to the bottom of the file
gg|Move to the start of the file
[n]G|Move to the line in the file
[n]%|Move to the x% of the file
|
H|Move to the top of screen
M|Move to the middle of screen
L|Move to the bottom of screen
|
&#60;CTRL-U&#62;|Scroll window **U**pwards by a half screem
&#60;CTRL-D&#62;|Scroll window **D**ownwards by a half screem
&#60;CTRL-E&#62;|Scroll window upwards by **a line** **E**xtra
&#60;CTRL-Y&#62;|Scroll window downward by **a line** **E**xtra
&#60;CTRL-F&#62;|Scroll window **F**orward by a page
&#60;CTRL-B&#62;|Scroll window **B**ackward by a page
|
zz|Move the currently line to the middle of screen
zt|Move the currently line to the top of screen
zb|Move the currently line to the bottom of screen
|
(|Go to the start of sentence 
)|Go to the end of sentence
{|Go to the start of last section
}|Go to the end of last section
|
:makrks|Check your mark
m{a-z}|Set mark on cursor(a~z for current file,A~Z for global file)
50%m{mark}|Set mark on 50% of file
`[char]|Jump to the mark
`[0-9]|Jump to the mark that last quit the vim
``|Jump to the last position
`.|To the position where the last change was made. 
`"|To the position where the last change was made befor quit vim 
ctrl-0|Go to the earier cursor position
ctrl-i|Go to the newer cursor position
‘^|To the position where the last inserted
‘[|To the start of the position where the last change or yank was made
‘]|To the end of the position where the last change or yank was made
‘<|To the start of the position where the last selected in visual mode
‘>|To the end of the position where the last selected in visual mode
:jumps |Ist your all jump

**Note**: `cmd`+`行号`+`gg` 可以移动到绝对行，如`j22gg`移动到第22行。

### Register: vim`s clipboard
command:


Register|Description
---|---
{a~z}|Normal register name
{A~Z}|Append mode register name
0|Register for last copy
{1~9}|Register for last delete
*|System Selection
+|System Clipboard
%|Name of the current file
#|Nmae of the alternate file
.|Last inserted text
:|Last Ex command
/|Last search pattern

Operator|Description
---|---
y|Yank
yy or Y|To yank a whole line
p|Paste after the cursor
P|Paste before the cursor

Command|Description
---|---
:reg [name]|Check the list of register
:write &#62;&#62;logfile|Insert to the logfile

### Operatoer
command:


Operator|Description
---|---
x|Delete the cursor
X|Delete the left of cursor
d|Delete
dd|To delete a whole line
D|D$
c|Change
cc|To change a whole line
C|C$
y|Yank
yy or Y|To yank a whole line
p|Paste after the cursor
P|Paste before the cursor
r|C1 and &#60;ESC&#62;
s|C a character
S|C the whole line
[operator]i[bracket]|Edit(c,d,y) the content in the bracktet<br>e.g.: `ci<`
[operator]a[bracket]|Edit(c,d,y) the content and the bracktet<br>e.g.: `ca<`

Motion|Description
---|---
l|The next letter
h|The last letter
w|Until the start of the next word, excluding the next space
b|Until the start of the last word
e|To the end of the current word
$|To the end of the line
aw|Edit **a** **w**ord with blank
iw|Edit **i**nner word **without** blank
as|Edit **a s**entence with blank
is|Edit **i**nner **s**entence without blank
G|Until the end of file
gg|Untle the start of file

### Insert Text

Operator|Description
---|---
[n]i|Insert befor the cursor
I|Insert at the start of line
gl|Insert text where last inserted
a|Insert (a)fter the cursor
A|Insert at the end of line
o|Open a line below and Insert 
O|Open a line above and Insert 
:[n]r filename|Insert the contents from other file
:r!command|Insert the shell output
i&#60;C-r&#62;=|Calc

### Replace Text

Operator|Description
---|---
r|Replace one character
R|Replace more than one character
&#60;CTRL-a&#62;|Add [num] to the number
&#60;CTRL-x&#62;|Subtract [num] to the number


### Undo
Operator|Description
---|---
u|Undo one step 
U|Undo all step in the line
&#60;CTRL-R&#62;|To undo the undo's
:undolist|List the leafs in the tree of changes
:undo [n]|Jump to after change number [n]
:earlier [n](/s/m/h/d)|Go to older text state by times or time<br>e.g.: `:earlier 4m`   
:later [n](/s/m/h/d)|Go to newer text state by times or time
g-|Go to older text state
g+|Go to newer text atate
 
            
### Search

Operator|Description
---|---
/[word]|Search for forward
?[word]|Search for backward
/[word]\|Match word*
/\\[word]|Match *word
/[word]`$`|Match word$ (regexp)
/^[word]|Match ^word (regexp)
.|. (regexp)
*|Search the [word] which cursor on(forward)
\#|Search the [word] which cursor on(backward)
n|Earch next
N|Search in the opposite direction
|
:vim/keyword/[g][j]file|Grep in vim, % is the current file
:copen or :cw|Open the quickfix
:set [no]wrapscan|Set search [uncycling]cycling
:set [no]ic|Set [disable] ignore case in search patterns(default off)
:set [no]hls|Set [not] hightlighting of mathces
:set is|Instant search
:nohl|Not set hightlighting by once

### Replace

Operator|Description
---|---
:[range]s/old/new&#60;Enter&#62;|Substitute 'new' for the frist 'old'
:s/old/new/g|Substitute 'new' for 'old' globally in the line
:#,#s/old/new/g|Substitute in line #,#
:%s/old/new/g|Substitute in the whole file
:%s/old/new/gc|Substitute in the whole file with a **prompt**

**range**

Operator|Description
---|---
%|Whole file
n1,n2|Range is line_n1 to line_n2
0|The number of first line
$|The number of last line
'&#60;,'&#62;|Range is visual selection

**Prompt**

Command|Description
---|---
y|Yes
n|No
a|All
q|Quit,give up this one
l|Quit after replace this one
CTRL-E|Scroll up
CTRL-Y|Scroll down

**Match and command**

Operator|Description
---|---
[range]g/pattern/command|Match and command
%g/^xyz/normal dd|Match /^xyz/ and delete the line


### Capital and Lowercass

Operator|Description
---|---
~|Toggle between lowercase and capital
guw|Lowercase a word
gUw|Capital a word
g~~|G~ by a line
guu|Lowercase a line
gUU|Capital a line


### Style

Operator|Description
---|---
<<|Shift lines one 'shiftwidth' leftwards
>>|Shift lines one 'shiftwidth' rightwards
>[motion]|Shift some lines leftwards
<[motion]|Shift some lines rightwards
:ce(nter)|Align center
:le(ft)|Align left
:ri(ght)|Align right
{range}=|Delelte shift
gg=G|Delete all shift
J|Join 2 lines into a line, separate by a space
gJ|Join 2 lines into a line


### Macro

Operator|Description
---|---
.|Repeat command(except 'u' or CTRL-R or :cmd)
q{0-9a-zA-Z}|Record macro
q|Stop recording
@{0-9a-zA-Z}|Execute the macro
@@|Repeat the previous macro


### Fold

Operator|Description
---|---
:set fdm=marker|Set fold mode: manual, indent, syntax, marker
:mkview|Save the fold information
:loadview|Load the fold information
zf|Create a fold
zd or zD|Delete folds
zE|Delete all flods
zfap|
zo|Open a fold
zO|Open all folds on the cursor
zc|Close a fold
zC|Close all fold on the cursor
za|Toggle between closed and opend
zA|Toggle between closed and opend recursively
zr|Open the nesting fold
zm|Close the nesting fold
zR|Open all folds, foldenable will be set
zM|Close all folds, foldenable will be set
[z|Move to the start of the current open fold
]z|Move to the end of the current open fold
zj|Move downwards to the start of the next fold
zk|Move upwards to the end of the previous fold
zi|Enable/disable fold

## Visual Mode

Operator|Description
---|---
v|Visual mode by character
V|Visual mode by lines
CTRL-v|Visual mode by squal
o|斜角切换
O|左右角切换
gv|重新选择刚才的区域

## Command Line

### Basic command line

Command|Description
---|---
&#60;C-w&#62;|Delete a word
&#60;C-u&#62;|Clear the command
&#60;C-b&#62;|Move to the start of the line
&#60;C-e&#62;|Move to the end of the line
&#60;Shift-Left&#62;|Move left by words
&#60;Shift-Right&#62;|Move right by words
@:|Do again
q:|Edit command as vim mode
q/ or q?|Check search history
&#60;C-f&#62;|Switch to the command-line window
!cmd|Shell command
!!|Execute last shell command
:r!cmd|Insert shell cmd output
:m,nw!cmd|Execute the line n,m as a shell command
:map|Show map key

### window

Operator|Description
---|---
:[n]split|上下视口,the height of window is [n]
:sp or :split [two.c]|指定file视口(默认是当前file多视口)
:vsplit|左右视口
:vsplit two.c|指定file视口,垂直分布
:new|Open a new window
:vnew|Open a new window by vertical
&#60;CTRL-^&#62;|Jump to another window
:close|Close the window,cann't close the last window
:only|Close other window except current window
:[w][q]all|Close all windows
&#60;CTRL-w&#62; +|Make window heighter
&#60;CTRL-w&#62; -|Make window lower
&#60;CTRL-w&#62; h(j,k,l)|Active window by derection key
&#60;CTRL-w&#62; t(b)|Active top(button) window
&#60;CTRL-w&#62; H(J,K,L)|Move window by derection key
&#60;CTRL-x&#62;|Exchange current window with window N(default:next window)
:vertical all|Sort all windows by vertical

### Match

Operator|Description
---|---
:hi|Show the color option
:match Search /keyword/|Hightlight the keyword
:2match ErrorMsg /keyword/|Hightlight the second keyword

### Basic File Manage

Operator|Description
---|---
:f or &#60;CTRL-G&#62;|Show your location in the file and the file status
:f filename|Change the filename
:e filename|Edit the file
:e! filename|Insert again without save
:e# or &#60;CTRL-^&#62;|Open the last edited file
gf|Open the pointe file
:q|Quit without save
:r filename|Insert the contents of the file
:w filename|Saves the whole file under the choosed name
:wq or ZZ|Save and quit the file
:saveas file.c|Save as ..
:#,# w filename|Save lines#~# as another file
:ls|Get a listing of your directory(Unix)
:dir|Get a listing of your directory(MS-DOS)
:r !cmd|Insert the output of the command
:! cmd|Shell mode 
:set modifiable|Chang only_read to write
:set write|Chang only_read to write
:cd path|Change the Print Working directory
:set autochdir|Set the pwd by file

### output

Operator|Description
---|---
:hardcopy|Print the whole file
:TOhtml|Chang into HTML
:source $VIMRUNTIME/syntax/2html.vim|Chang into HTML
:write main.c.html|Open in the browser
:set backup|Backup the file witn (".) append
:set backupext=.bak|Backup the file with (.bak) append
:set writebackup|Backup until file has saved(set backup is off)
:set patchmode=.orig|Backup the original version when edit the file
:set (no)autowrite|(not) auto save the file when quit
:file move.c|Change the file name,change into only_read

### input (useless)

Operator|Description
---|---
:hide edit|Hide current file without save,and edit an other file 
:first|Edit the first file,current file need saved
:[n]next|Edit the next file,current file need saved
:[n]previous|Edit the previous file,current file need saved
:last|Edit the last file,current file need saved
:args|Show the open_file list
:args five.c six.c|Edit a new list of files without restart vim again
&#60;CTRL-^&#62;|Quickly toggle between two files
:n|Edit next file
:N|Edit pervious file
:files|Display all editing file

### help

Operator|Description
---|---
:help|Show help system
:help &#60;HotKey&#62;(function)|Show help windows for &#60;HotKey&#62;
:help vimrc-intro|Setting to "vimrc" file
:cn|Next help tips
:cN|Previous help tips
:cfirst|First help tips
:clast|Last help tips
:copen|Open Quickfix List
:cclose|Close Quickfix List

### vimrc

Command|Description
---|---
:set showmode|Show work mode
:set number|Show the number of line
:set nonumber|Hide the number of line
:ruler|Show where is cursor
:set setting&|& means set default
:set [no]list|Show feed and tab
:set listchars=eol:$,tab:>|Show custom char

## Shell

Command Line|Description
---|---
`vim -R file`|Only_read,can write by (!)
`vim -M file`|Only_read,never write
`vim one.txt two.txt`|Edit more file at the same time
`vimdiff one.c two.c`|Find diffent between two files

***
**本文相关**
1. 参考

[Vim 使用笔记](http://www.cnblogs.com/jiqingwu/archive/2012/06/14/vim_notes.html#id79)
[vimdoc](http://vimdoc.sourceforge.net/htmldoc/fold.html#zf)
1. 修订
2016:第一版
