---
title: Windows安装Apache
date: 2022-04-04 20:43:34
category:
- server
- apache
tags: Windows安装Apache server
---

<p style="font-size: 16px; ">
很久没用过Apache服务器了，今天试着安装了一下，过程中报了些错误。下面来分享一下安装经验。
</p>

### 下载安装包
这里要注意的是不要去https://www.apache.org网站去下载，而要去https://httpd.apache.org/
（1）
<img src='/images/apache/insta/1.png' style="width: 100%; "/>
（2）
<img src='/images/apache/insta/2.png' style="width: 100%; "/>
（3）
<img src='/images/apache/insta/3.png' style="width: 100%; "/>
（4）
<img src='/images/apache/insta/4.png' style="width: 100%; "/>

我这里将下载的包放在：D:\9_downloads\httpd-2.4.53-win64-VS16\Apache24\bin目录下

### 安装
进入CMD控制台，cd到D:\9_downloads\httpd-2.4.53-win64-VS16\Apache24\bin目录下

执行命令：
```
httpd.exe -k install
```

如果报错：
```
Failed to open the Windows service manager, perhaps you forgot to log in as Adminstrator
```

这个错误是没有管理员权限。解决方案：
（1）进入C:/windows/system32/cmd.exe
（2）右键cmd.exe，以管理员身份执行

如果报错：
```
[Cannot load modules/mod_actions.so into server]
```

这个错误是conf/httpd.conf配置问题，解决方案：
配置参数SRVROOT
```
Define SRVROOT "D:\9_downloads\httpd-2.4.53-win64-VS16\Apache24"
```

如果报错：
```
Could not reliably determine the server's fully qualified domain name
```

修改conf/httpd.conf配置：
```
ServerName localhost:8066
```

### 安装成功日志

安装成功日志：
```
Installing the 'Apache2.4' service
The 'Apache2.4' service is successfully installed.
Testing httpd.conf....
Errors reported here must be corrected before the service can be started.
```

注意这里出现的Errors...，不是报错，这个地方我还以为是错误，检查了一会儿发现没问题。

### 启动
双击如下文件：
<img src='/images/apache/insta/5.png' style="width: 100%; "/>

点击右下方apache图标，选择start启动

### 验证
浏览器输入：localhost:8066，我这里监听的是8066端口，这个根据自己的配置来。

显示如下文字，表示启动成功：
<img src='/images/apache/insta/6.png' style="width: 100%; "/>

