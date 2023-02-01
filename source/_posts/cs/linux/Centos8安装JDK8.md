---
title: Centos8安装JDK8
date: 2022-02-19 23:16:33
category:
- cs
- linux
tags: java
---

### 1、创建java目录
在/usr/local下 mkdir java

### 2、下载java安装包
（1）cd java
（2）由于下载Java安装包需要登录Oracle，所以进入Oracle下载页：https://www.oracle.com/java/technologies/downloads/#8
（3）通过winSCP或命令形式将安装包上传到Linux服务器

### 3、安装配置
（4）tar -zxvf jdk-8u321-linux-x64.tar.gz
（5）vim /etc/profile，在文件末尾添加如下代码：
```
JAVA_HOME=/usr/local/java/jdk1.8.0_321
CLASSPATH=$JAVA_HOME/lib/
PATH=$PATH:$JAVA_HOME/bin
```
（6）source /etc/profile

### 4、检验安装情况
执行命令java -version，若显示如下信息，说明安装成功：
```
java version "1.8.0_321"
Java(TM) SE Runtime Environment (build 1.8.0_321-b07)
Java HotSpot(TM) 64-Bit Server VM (build 25.321-b07, mixed mode)
```
