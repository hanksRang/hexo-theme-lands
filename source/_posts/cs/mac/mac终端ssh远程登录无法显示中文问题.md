---
title: mac终端ssh远程登录无法显示中文问题
date: 2022-02-12 15:13:05
category:
- cs
- mac
tags:
---

今天在用mac远程登录Centos主机的时候，发现无法正常显示中文，下面给出解决办法

## 1、通过mac terminal登录远程服务器
1、ssh root@ip
2、输入密码登录服务器

## 2、编辑/etc/profile
1、vim /etc/profile，输入以下代码
`export LC_ALL='zh_CN.UTF-8'`

## 3、执行source /etc/profile
