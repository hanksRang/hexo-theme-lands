---
title: Linux安装Git步骤
date: 2022-02-14 14:11:04
category:
- cs
- linux
tags:
---

## 1、cd /usr/local/git
如果不存在该文件夹，先创建：mkdir /usr/local/git

## 2、下载源码
wget https://www.kernel.org/pub/software/scm/git/git-2.16.2.tar.gz

## 3、解压文件
tar -zxvf git-2.16.2.tar.gz

## 4、进入解后的文件
cd git-2.16.2

## 5、编译并安装git
1、编译
`make all prefix=/usr/local/git`
2、将git安装到/usr/local/git目录下
`make install prefix=/usr/local/git`

## 6、配置环境变量
1、`echo 'export PATH=$PATH:/usr/local/git/bin' >> /etc/bashrc`
2、`source /etc/bashrc`


