---
title: Redis系列（1）Redis介绍
date: 2022-02-27 23:53:11
category:
- backend
- redis
tags:
---

<font size=4>
Redis的官网介绍：Redis是一个开源项目，基于内存存储，可用作为数据库、缓存、流引擎和消息中介。中文文档：
<a href="http://www.redis.cn/documentation.html">Redis中文文档</a>
</font>

### 1、数据类型
Redis提供的数据结构有：String，Hash，List，Set，Sorted Set，Bitmap，Hyperloglogs，Geospatial
indexes，stream。

### 2、主从复制
Redis提供的复制策略可以使得主从之间进行安全、精确的复制操作。

### 3、哨兵
Sentinel是Redis的高可用解决方案，它可作为一个系统用于管理多尔Redis服务器。Sentinel是一个分布式系统，运行多个
Sentinel进程来管理Redis主从服务器。

### 4、集群
Redis集群是一个提供在多个Redis节点间共享数据的程序集，通过分区（分片），主从复制模型来提高可用性。
