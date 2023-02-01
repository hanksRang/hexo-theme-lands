---
title: firewall常用命令
date: 2022-02-10 23:33:51
category:
- cs
- linux
tags:
---

## 1、安装firewalld并设置开机自启动
（1）yum安装：`yum install firewalld`
（2）设置开机启动，添加到服务：`systemctl enable firewalld`
（3）启动服务：`service firewalld start`

## 2、常用命令
（1）关闭服务
`service firewalld start`

（2）开启一个端口
`firewall-cmd --zone=public --add-port=80/tcp --permanent`
`firewall-cmd --reload`

（3）、查看已开放端口列别
`firewall-cmd --zone=public --list-ports`

（4）、禁止开启启动，从服务中移除
`systemctl disable firewalld`
