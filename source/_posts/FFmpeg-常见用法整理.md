----
title: FFmpeg 常见用法整理
date: 2016-07-21 18:25:51
tags:
- Mac
----
## 基本语法


### 查看文件信息


### 基本格式转化

ffmpeg下分离h264视频：


批量格式转化：
```
for f in ./*.flv; do ffmpeg -i "$f" "$f.mp4"; done
```
### 基本截取

- `00:00:00`： 开始时间
- `-t 00:10:00`：截取时长
- `-c:v copy -c:a copy`：视频音频编码不变

### 合并视频
合并：

mylist.txt 内容

bash 下批量生成 mylist.txt 文件：


## 音频
### 修改音量
**使用倍数单位修改音量（0.5倍）**


**使用分贝单位修改音量（5dB）**

### 改变音频播放速度

atempo filter的取值范围是0.5-2.0.
音频4倍播放速度实现方式：

### OSX 下音频时长显示 BUG
在 OSX 下处理音频文件，往往会显示错误时长。通过以下方法修复：


## 视频
### 改变频播放速度
**仅改视频速度**

septps 的取值范围是0.5-2.0.
注意，此种方式会丢帧。可以通过改变输出帧率来避免丢帧。


**同步改变音视频**

注意：[v];[0:a]之间是分号！

### 提取视频中的视频、音频、字幕
1. **常规方法**
  1. **提取视频**
  ```
  ffmpeg -i inputFile -vcodec copy -an outputFile
  ```
  1. **提取音频**
  ```
  ffmpeg -i inputFile -vn -acodec copy outputFile
  ```
  1. **提取字幕**
  ```
  ffmpeg -i inputFile -map 0:s:0 outputFile.srt
  ```
1. **多选择提取**
  1. **查看文件信息**
    ```
    ffmpeg -i inputFile
    ```
    ```
    Stream #0.0[0x1e0]: Video: mpeg2video, yuv420p, 720×480 [PAR 32:27 DAR 16:9]
    , 9800 kb/s, 59.94 tbr, 90k tbn, 59.94 tbc
    Stream #0.1[0x31]: Subtitle: dvdsub
    Stream #0.2[0x81]: Audio: ac3, 48000 Hz, 5.1, s16, 384 kb/s
    Stream #0.3[0x82]: Audio: ac3, 48000 Hz, 5.1, s16, 384 kb/s
    Stream #0.4[0x80]: Audio: ac3, 48000 Hz, 5.1, s16, 448 kb/s
    Stream #0.5[0x83]: Audio: ac3, 48000 Hz, stereo, s16, 160 kb/s
    Stream #0.6[0x84]: Audio: ac3, 48000 Hz, stereo, s16, 160 kb/s
    Stream #0.7[0x85]: Audio: ac3, 48000 Hz, stereo, s16, 192 kb/s
    Stream #0.8[0x2d]: Subtitle: dvdsub
    Stream #0.9[0x2e]: Subtitle: dvdsub
    Stream #0.10[0x2f]: Subtitle: dvdsub
    Stream #0.11[0x24]: Subtitle: dvdsub
    Stream #0.12[0x30]: Subtitle: dvdsub
    ```
  1. **提取目标**(提取Stream #0.8字幕)
    ```
    ffmpeg -i inputFile -map 0:8 output.srt
    ```
    - map 语法：`-map file_number:stream_type[:stream_number]`
    - `-map 0`：选择第一个文件的所有流。
    - `-map i:v`: 从文件序号i(index)中获取所有视频流
    - `-map i:a`: 获取所有音频流
    - `-map i:s`: 获取所有字幕流
    - 特殊参数-an,-vn,-sn分别排除所有的音频，视频，字幕流。

## 特定功能代码
### 硕鼠下载后合并
```
mkdir -p concat && for f in ./*.flv; do ffmpeg -i "$f" "concat/$f.mp4"; done && for f in concat/*; do echo "file '$f'" >> mylist.txt ;done && ffmpeg -f concat -safe 0 -i mylist.txt -c copy concat/output.mp4;
```
***
## 本文相关
1. 参考
[FFmpeg官方wiki](http://trac.ffmpeg.org)
[FFMPEG用法整理](http://blog.csdn.net/rootusers/article/details/43485941)
[ffmpeg的中文文档](https://wanglongqi.github.io/tools/2015/02/13/ffmpegcn/)
[FFmepeg实用命令](http://davidaq.com/tutorial/2014/11/20/ffmpeg-commands.html)
[FFmpeg基础（百度文库）](http://wenku.baidu.com/view/296eefcaf90f76c661371af1.html)