---
title: nacos客户端链接服务器一直报localhost 8848连不上的问题
date: 2022-06-17 12:09:00
category:
- backend
- opensource

tags: nacos客户端链接服务器一直报localhost 8848连不上的问题

---

### 问题描述
```composer log
c.a.n.c.config.http.ServerHttpAgent      : [NACOS SocketTimeoutException httpGet] currentServerAddr:http://localhost:8848， err : connect timed out
c.a.n.c.config.http.ServerHttpAgent      : [NACOS SocketTimeoutException httpGet] currentServerAddr:http://localhost:8848， err : connect timed out
```

### 解决办法
将nacos的相关配置配置到bootstrap.yml或者bootstrap.properties文件中