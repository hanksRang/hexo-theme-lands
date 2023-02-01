---
title: Linux杀死用户对应的所有进程
date: 2022-02-14 11:29:49
category:
- cs
- linux
tags:
---

<font size=4>今天在盘查服务器的时候，发现git用户占用相当高的内存和CPU，
暂不知道什么因造成这个问题，于是先将git用户对应的进程全部杀掉，执行如下命令即可
</font>

`pkill -u git`
