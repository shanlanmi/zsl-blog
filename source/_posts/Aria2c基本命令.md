----
title: Aria2c基本命令
date: 2016-07-21 12:44:34
tags:
- Mac
----
# Aria2c 使用举例

### 开机启动
将启动文件 `/usr/local/aria2/bin/aria2c` 放入 osx 启动项目中。


### 下载一个文件（Download a file）：

    aria2c http://host/image.iso
    

### 用每个 _host_ 两个连接从一个 _host_ 下载一个文件（To download a file using 2

connections from single host）：

    aria2c -x2 http://host/image.iso
    

说明：想要停止下载，可以按Ctrl-C。想要恢复下载，可以在同一个文件夹中执行相同的下载命令。只要URI指向同一个文件，URIs是可以被改变的。 

### 同时使用两个连接下载同一文件（Download a file using 2 connections）：

    aria2c -s2 http://host/image.iso http://mirror1/image.iso http://mirror2/image.iso
    

说明：你可以指定URIs的数量多余 _-s_ 选项设定的数。在这个例子中，前两个URL会被用于下载，而第三个URL作为备用（如果前面两个有个挂了，第三个顶上）。 

### 同时从FTP和HTTP源下载一个文件（Download a file from HTTP and FTP servers）：

    aria2c http://host1/file.zip ftp://host2/file.zip
    

### 并行下载任意数目的URI, metalink, torrent（Parallel downloads of arbitrary number of URI, metalink, torrent）：

    aria2c -Z http://host/file1 file2.torrent file3.metalink
    

说明：如果你只是下载 _torrent_ 和 _metalink_ 的文件，那么选项 _-Z_ 将不是必须的。所以你可以使用以下这个命令同时下载bt文件。 

    aria2c file1.torrent file2.torrent
    

### 并发下载一个文件中的URI（Download files listed in a file concurrently）：

    aria2c -ifiles.txt -j5
    

说明：选项 _-j_ 用于指定同时下载的文件的数量。你可以在文件中指定本地的 _torrent_ 和 _metalink_ 文件。 

说明：你可以指定一些 _选项_ 在下载文件（input list file）中。 

### 在退出时保存错误/未完成的下载（Save error/unfinished downloads on exit）：

    aria2c -ifiles.txt --save-session=out.txt
    

当你按下Ctrl-C或者 _aria2_ 退出时，所有的错误（error）/未完成（unfinished）下载将会保存到 _out.txt_ 文件中。注意通过 **XML-RPC** 方式(aria2.addTorrent and aria2.addMetalink)添加的下载不会被保存！你可以使用这个文件作为一个输入文件列表（input file list）来重新开始下载。 

    aria2c -iout.txt
    

## Metalink Download（不翻译）

## BT下载（BitTorrent Download）

### 通过网上的种子文件下载（Download files from remote BitTorrent file）

    aria2c http://site/file.torrent
    

### 通过网上的种子文件下载，种子保存在内存（Download files from remote BitTorrent file; torrent file itself is processed in memory）

    aria2c --follow-torrent=mem http://site/file.torrent
    

### 通过本地的种子文件下载（Download using a local torrent file）

    aria2c -u40K /path/to/file.torrent
    

说明： _-u_, _–max-upload-limit_ 指定最大的上传速度 

说明：想要停止下载，可以按Ctrl-C。想要恢复下载，可以在同一个文件夹中执行相同的下载命令。只要URI指向同一个文件，URIs是可以被改变的。 

你可以同时进行多个 **bt** 的下载： 

    aria2c /path/to/file1.torrent /path/to/file2.torrent
    

### 通过 _bt magnet uri_ 下载（Download using BitTorrent Magnet URI）

    aria2c "magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C&dn=aria2"
    

说明：在 _bt magnet uri_ 包含"&"的时候记住要加单引号或者双引号。强烈推荐打开 **DHT** 选项。 _–enable-dht_

### 保存元数据到 _.torrent_ 文件中（Save metadata as .torrent file）

    aria2c --bt-save-metadata "magnet:?xt=urn:btih:248D0A1CD08284299DE78D5C1ED359BB46717D8C&dn=aria2"
    

上面那个命令会保存元数据到一个名为"248d0a1cd08284299de78d5c1ed359bb46717d8c.torrent"的种子文件。 

### 自动调节连接数（Adjust the number of peers adaptively）

如果每个种子的下载速度都低于 **200K** 的话， **aria2** 会临时增加连接数来试着提高下载速度。 

    aria2c --bt-request-peer-speed-limit=200K file.torrent
    

说明：配置 _–bt-request-peer-speed-limit_ 选项为合适的值可以在某些情况下提高你的下载速度。 

### 打开 **DHT** （Enable DHT）

    aria2c --enable-dht http://site/file.torrent
    

说明：从 _1.7.2_ 版本开始， **DHT** 默认是打开的。当通过 _HTTP/FTP_ 下载的时候 **DHT** 不会启用。当首个种子下载开始， **aria2** 初始化 **DHT** 功能，之后， **DHT** 会一直运行知道 **aria2** 退出为止。 

### 打开 **IPv6** 的 **DHT** （Enable IPv6 DHT）

    aria2c --enable-dht6 --dht-listen-port=6881 --dht-listen-addr6=YOUR_GLOBAL_UNICAST_IPV6_ADDR --enable-async-dns6
    

说明：如果 **aria2c** 编译的时候没有加入 _c-ares_ ， _–enable-async-dns6_ 不是必须的。 **aria2** 会在 **IPv4** 和 **IPv6** 之间对 **DHT** 共享一些端口。 

### Add and remove tracker URI

接下来的例子指示 **aria2** 移除 _file.torrent_ 文件中所有的 _tracker announce URIs_ ，并用"[http://tracker1/announce][3]" 和 "[http://tracker2/announce][4]" 代替。 

    aria2c --bt-exclude-tracker= --bt-tracker="http://tracker1/announce,http://tracker2/announce" file.torrent
    

### 加密（Encryption）

默认情况下， **aria2** 能够同时支持加密和非加密连接。它会先尝试使用加密连接，如果失败则尝试非加密连接。 

强制只使用加密连接： 

    aria2c --bt-require-crypto=true http://site/file.torrent
    

一共有两种加密类型：只加密头或者全部加密。默认下，如果对方支持两种加密类型， **aria2** 会选择只加密头。如果想让 **aria2** 总是使用全加密连接： 

    aria2c --bt-min-crypto-level=arc4 http://site/file.torrent
    

### 打印一个种子文件中的内容（Print the contents of the torrent file）

    aria2c -S file.torrent
    

### 选择性下载文件（Download only selected files using index (usually called "selectable download")）

    aria2c --select-file=1-4,8 -Tfile.torrent
    

说明：序号（index）可以通过 _-S_ 选项输出 

### 改变监听端口（Change the listening port for incoming peer）

    aria2c --listen-port=6881-6883 file.torrent
    

说明：确认该 **TCP** 端口是可用的 

### 指定 _BT_ 下载停止的条件（Specify the condition to stop program after torrent download finished）

    aria2c --seed-time=120 --seed-ratio=1.0 file.torrent
    

说明：在上面的这个例子中， 当做种 _120分钟_ 或者种子率大于1以后， **aria2** 会退出。 

### 调节上传速度（Throttle upload speed）

    aria2c --max-upload-limit=100K file.torrent
    

### 为已经下载完成的文件做种（Seeding already downloaded file）

你可以使用 _-V_ 选项给已经下载好的文件做种。它会先校验文件的完整性。 

    aria2c -V -d/path/to/dir file.torrent
    

如果你肯定文件是正确的，你可以使用 _–bt-seed-unverified_ 选项跳过做种前的文件校验。 

    aria2c --bt-seed-unverified -d/path/to/dir file.torrent
    

你可以给多个文件做种： 

    aria2c --bt-seed-unverified -d/path/to/dir file1.torrent file2.torrent
    

### 用序号指定文件名（Specify file name with index）

为 _BitTorrent_ 下载下来的文件指定文件名，你首先需要通过 _-S_ 选项知道该文件的序号。比如一个种子文件 _-S_ 选项输出如下： 

    idx|path/length
    ===+======================
    1|dist/base-2.6.18.iso
    |99.9MiB
    ---+----------------------
    2|dist/driver-2.6.18.iso
    |169.0MiB
    ---+----------------------
    

把 _dist/base-2.6.18.iso_ 保存为 _tmp/mydir/base.iso ， /dist/driver-2.6.18.iso_ 保存为 /tmp/dir/driver.iso ，可以使用一下的命令： 

    aria2c --dir=/tmp --index-out==mydir/base.iso --index-out==dir/driver.iso file.torrent
    

说明： _–index-out_ 选项针对通过 **HTTP** 方式获取种子文件的方式无效。它只能针对本地种子文件的下载。 **aria2** 不会记住 _–index-out_ 选项中指定的地址，你必须在每次开始该任务的时候重新指定 _–index-out_ 的值。如果你忘了再次指定输出文件的地址， **aria2** 不会提醒你，所以你必须谨慎地使用这个选项。 

### 为预览的文件指定优先块（Prioritize piece for previewing files）

优先下载每个文件开头的 **1MiB** 的内容。 

    aria2c --bt-prioritize-piece=head file.torrent
    

## 使用代理下载（Use With Proxy）

### 为所有的连接设置代理服务器（Set proxy server to use all protocols(HTTP(S)/FTP)）

    aria2c --all-proxy='http://proxy:8080' http://host/file
    

说明： _–all-proxy_ 选项会被具体的代理选项重载： _–http-proxy_, _–https-proxy_, _–ftp-proxy_. 

### 只为 **HTTP** 设置代理服务器（Set proxy server to be in HTTP only）

    aria2c --http-proxy='http://proxy:8080' http://host/file
    

### 设置需要验证的代理服务器（Use proxy that requires authentication）

    aria2c --http-proxy='http://proxy:8080' --http-proxy-user='username' --http-proxy-passwd='password' http://host/file
    aria2c --http-proxy='http://username:password@proxy:8080' http://host/file
    

说明：用户名和密码需要是 **percent-encoded** 格式。比如，如果用户名是 _myid@domain_, 那么 **percent-encoded** 格式就是 _myid%40domain_. 

## 高级HTTP功能（Advanced HTTP Features）

### 载入 **cookies** （Load cookies）

载入 _Mozilla/Firefox(1.x/2.x)_ 和 _Netscape_ 格式: 

    aria2c --load-cookies=cookies.txt http://host/file
    

载入 _Firefox3_ 格式: 

    aria2c --load-cookies=cookies.sqlite http://host/file
    

说明：你可以不加任何修改直接读取 _Firefox/Mozilla's_ 的 **cookie** 内容。 

### 继续浏览器或者其它程序开始的下载任务（Resume download started by web browsers or another programs）

    aria2c -c -s2 http://host/partiallydownloadedfile.zip
    

## 其它高级功能（Other Advanced Features）

### 调节下载速度（Throttle download speed）

    aria2c --max-download-limit=100K http://host/file
    

### 用 _-V_ 选项修复一个被破坏的下载文件（Repair a damaged download using -V option）

    aria2c -V file.metalink
    

说明：这个选项只能对支持校验码的 _BitTorrent_ 或者 _metalink_ 使用。 

### 如果下载速度低于某个特定值就丢弃连接（Drop connection if download speed is lower than specified value）

    aria2c --lowest-speed-limit=10K file.metalink
    

### 支持参数的 **URI** （Parameterized URI support）

你可以这样使用 **URI** ： 

    aria2c -P http://{host1,host2,host3}/file.iso
    

你可以指定数字序号（You can specify numeric sequence using []） 

    aria2c -Z -P http://host/image[000-100].png
    

说明： _-Z_ 选项是必须的，如果所有的 **URL** 都是指向不同的文件的话。 

可以指定步长（You can specify step counter） 

    aria2c -Z -P http://host/image[A-Z:2].png
    

### Time-stamping

**aria2** 会在下载完成的时候从服务器拿到该文件的 **timestamp** 并设置到本地文件 

    aria2c -R http://host/file.iso
    

### 当下载完成后执行一条命令（Execute command when download finishes）

    aria2c --on-download-complete=COMMAND http://example.org/file.iso
    

参见 _–on-download-error_, _–on-download-start_ 和 _–on-download-stop_ 选项， 或者执行： 

    aria2c -h 
    

### 写入到 /dev/null （Writing to /dev/null）

    aria2c -d /dev -o null --allow-overwrite=true http://example.org/file
    

需要 _–allow-overwrite=true_ 是为了避免 **aria2** 重命名已经存在的 /dev/null。 

## 输入文件（Input File）

    http://server/file.iso http://mirror/file.iso
    dir=/iso_images
    out=file.img
    http://foo/bar
    


[0]: http://sydi.org/posts/linux/aria2c-usage-sample-cns.html#fn.1
[1]: http://aria2.sourceforge.net/
[2]: http://sydi.org/
[3]: http://tracker1/announce
[4]: http://tracker2/announce
[5]: #
[6]: http://duoshuo.com/

