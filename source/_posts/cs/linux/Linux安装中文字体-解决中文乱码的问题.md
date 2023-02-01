---
title: Linux安装中文字体 解决中文乱码的问题
date: 2022-03-09 20:29:30
category:
- cs
- linux
tags: linux
---

<font size=4>
今天在使用plantuml绘图的时候，出现中文乱码的问题。排查之后发现是因为Linux主机上没有安装中文字体。下面就介绍一下如何在Linux主机上安装中文字体。
</font>

### 1、进入Windows字体目录
windows字体通常都在`C:\Windows\Fonts`文件夹下

### 2、拷贝一个字体
需要注意的是.ttc和.ttf文件的区别，.ttc文件是一些常用字体，.tff文件字体会更全。我这里选择的是方正字体.ttf，将本地文件放到/usr/share/fonts下。

### 3、安装字体
执行`mkfontscale`
执行`mkfontdir`
执行`fc-cache`

### 4、查看是否安装成功
`fc-list :lang=zh`，如果显示了拷贝的字体，说明安装成功

**安装中文字体之后，再使用plantuml插件，不会再出现中文乱码**

