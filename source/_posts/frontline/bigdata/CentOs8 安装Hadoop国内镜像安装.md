---
title: CentOs8 安装Hadoop国内镜像安装
description: CentOs8 安装Hadoop国内镜像安装，官网下载速度实在太慢，推荐使用国内镜像地址。
date: 2022-04-25 15:42:34
category:
- frontline
- bigdata
tags: Hadoop安装, Hadoop国内镜像安装
---

### 安装步骤
官网下载速度实在堪忧，推荐使用国内镜像地址。
国内清华大学镜像地址：https://mirrors.tuna.tsinghua.edu.cn/apache/hadoop/common/stable/

解压：
tar -zxvf 

vim /etc/profile

```shell
export JAVA_HOME=/usr/local/java/jdk1.8.0_331
export CLASSPATH=$JAVA_HOME/lib/
export PATH=$PATH:$JAVA_HOME/bin #:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
export HADOOP_HOME=/usr/local/hadoop/hadoop-3.3.2
export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
```

注意这里的`export`不能少

保存之后：`source /etc/profile`

### 遇到问题
hadoop version命令，
报错Error JAVA_HOME is not set and could not be found
这个问题多半就是在/etc/profile文件中没有`export JAVA_HOME=...`