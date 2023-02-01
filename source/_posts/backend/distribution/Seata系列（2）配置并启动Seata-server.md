---
title: Seata系列（2）配置并启动Seata-server
date: 2022-02-16 13:12:20
category:
- backend
- distribution
tags: seata, 分布式
---

### 1、下载安装文件
1、cd /usr/local
2、首先创建seata文件夹：mkdir seata
3、cd到seata目录
4、下载安装文件：`wget https://github.com/seata/seata/releases/download/v1.4.2/seata-server-1.4.2.tar.gz`
5、解压：`tar -zxvf seata-server-1.4.2.tar.gz`
6、cd bin文件夹下
7、执行`nohup ./seata-server.sh -h 124.222.11.116 -p 8091 &`启动server



