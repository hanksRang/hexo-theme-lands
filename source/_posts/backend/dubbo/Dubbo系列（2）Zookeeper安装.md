---
title: Dubbo系列（2）Zookeeper安装
date: 2022-02-19 22:54:18
category: 
- backend
- dubbo
tags: dubbo
---

<font size=4>
dubbo建议采用Zookeeper作为注册中心。下面介绍以下如何安装zookeeper。
</font>

### 1、下载安装文件
（1）`cd /usr/local`
（2）`mkdir zookeeper`
（3）`wget http://mirror.bit.edu.cn/apache/zookeeper/stable/zookeeper-3.4.12.tar.gz`
*注意这里下载的版本，zookeeper 3.5.5 以上的版本需要下载bin文件，否则启动会报找不到或无法加载主类 org.apache.zookeeper.server.quorum.QuorumPeerMain*

### 2、安装配置
（1）解压文件：`tar -zxvf zookeeper-3.4.12.tar.gz`
（2）`cd zookeeper-3.4.12`
（3）`cd conf`
（4）`cp zoo_sample.cfg zoo.cfg`

### 3、启动服务
（1）`cd bin`
（2）`nohup ./zkServer.sh start &`

---

在启动dubbo服务时，无法注册到zookeeper，报错：`Will not attempt to authenticate using SASL`，可能是防火墙端口未放行的原因。


