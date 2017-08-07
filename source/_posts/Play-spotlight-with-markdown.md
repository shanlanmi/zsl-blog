----
title: Play spotlight with markdown
date: 2016-12-26 16:25:30
categories:
- Mac
----

1. Download the Zip file from [here](http://cdn3.brettterpstra.com/downloads/Markdown.mdimporter.zip)
1. Moved the `Markdown.mdimporter` file to `~/Library/Spotlight`.
1. Run cmd: 
  ```
  mdimport -r ~/Library/Spotlight/Markdown.mdimporter
  ```
  when nothing seemed to have happened.
1. Run cmd:
  ```
  sudo mdutil -E /
  ```
1. Check
  ```
  mdimport -L
  ```
  will display something like below
  ```
  2015-11-17 12:40:40.400 mdimport[53046:588670] Paths: id(501) (
    "/Users/Hiltmon/Library/Spotlight/Markdown.mdimporter",
    "/Library/Spotlight/iBooksAuthor.mdimporter",
    "/Library/Spotlight/iWork.mdimporter",
    ...
  ```
1. After a long while, all my Markdown files were once again searchable in Spotlight. 
