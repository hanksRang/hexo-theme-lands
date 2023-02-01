---
title: yum upgrade和yum update的区别
date: 2022-02-10 23:10:43
category:
- cs
- linux
tags: 
---

yum -y update：升级所有包同时也升级软件和系统内核；此命令在使用时需特别谨慎，因为内核升级可能造成严重问题

yum -y upgrade：只升级所有包，不升级软件和系统内核
