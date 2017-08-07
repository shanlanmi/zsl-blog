----
title: OSX Markdown Spotlight Importer
date: 2016-08-13 22:02:13
categories:
- Mac
----
# OSX Markdown Spotlight Importer

1. Downloaded this Zip file from [site](http://cdn3.brettterpstra.com/downloads/Markdown.mdimporter.zip) and uncompressed it

1. Moved the Markdown.mdimporter file to ~/Library/Spotlight. I had to create the folder under my User’s Library folder. To find this folder in Finder, hold the Option key when pressing the Go menu to see the Library folder option.
  ```
  mv ~/Download/Markdown.mdimporter ~/Library/Spotlight
  ```
1. Started a terminal shell
  ```JavaScript
  mdimport -r ~/Library/Spotlight/Markdown.mdimporter
  sudo mdutil -E /
  ```
1. Check if it work
  ```JavaScript
  mdimport -L
  ```
  To see if this is working, run
  ```JavaScript
  2015-11-17 12:40:40.400 mdimport[53046:588670] Paths: id(501) (
      "/Users/Hiltmon/Library/Spotlight/Markdown.mdimporter",
      "/Library/Spotlight/iBooksAuthor.mdimporter",
      "/Library/Spotlight/iWork.mdimporter",
  ```
1. Test
  After a long while, all my Markdown files were once again searchable in Spotlight. Thanks Brett!
