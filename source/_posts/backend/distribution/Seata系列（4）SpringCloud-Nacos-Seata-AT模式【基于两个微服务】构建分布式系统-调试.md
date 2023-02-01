---
title: Seata系列（4）SpringCloud+Nacos+Seata AT模式【基于两个微服务】构建分布式系统-调试
date: 2022-02-18 00:38:40
category:
- backend
- distribution
tags: seata, 分布式
---

<font size=4>
上文中已经讲了如何采用SpringCloud+Nacos+Seata AT模式搭建分布式系统，这一文主要介绍如何调试该系统。本文采用postman客户端进行请求模拟。调试之前，请确保my-user和my-trade两个项目已经启动。
</font>

### 1、开启postman客户端，构造请求参数
请求路径：`http://localhost:8083/save?id=17&name=raye&passwords=1234566&value=100`
如图：
<img src=/images/seata_4/0.png style="border: 1px solid #cccccc"/>

### 2、进入my-user服务
绿色方框所示，进入save方法时，全局开启
<img src=/images/seata_4/my-user-trade-1.png style="border: 1px solid #cccccc"/>

### 3、执行insert sql
虽然执行完insert sql，但是观察my-user数据库的user表和undo_log表并未插入任何数据，也很好理解，因为此时并未提交本地事务
<img src=/images/seata_4/my-user-trade-3.png style="border: 1px solid #cccccc"/>

<img src=/images/seata_4/my-user-trade-3.1.png style="border: 1px solid #cccccc"/>

### 4、feign调用my-trade服务
通过`service.save(userid,value);`语句调用my-trade的save方法
<img src=/images/seata_4/my-user-trade-4.png style="border: 1px solid #cccccc"/>

*在调试过程中，这一步出了问题，由于my-user服务等待my-trade服务响应时间超时，导致my-user全局事务直接回滚*
<img src=/images/seata_4/my-user-trade-5.1.png style="border: 1px solid #cccccc"/>

*通过修改feign配置，适当增大超时时间即可解决此问题*
<img src=/images/seata_4/my-user-trade-5.2.png style="border: 1px solid #cccccc"/>

### 5、执行完my-trade的saveTrade方法
控制台已经打印出sql执行完毕
<img src=/images/seata_4/my-user-trade-5.png style="border: 1px solid #cccccc"/>

*此时看到my-trade数据库的undo_log里插入了一条记录，说明saveTrade方法执行完的时候，my-trade服务的本地事务已提交*
<img src=/images/seata_4/my-user-trade-6.png style="border: 1px solid #cccccc"/>

### 6、my-trade服务执行完毕，执行线程回到my-user服务
执行完整条链路发现日志显示全局事务提交完毕
<img src=/images/seata_4/my-user-trade-7.png style="border: 1px solid #cccccc"/>

*此时检查数据库，发现数据正常插入，以下是我多次执行后的记录结果*
<img src=/images/seata_4/my-user-trade-7.1.png style="border: 1px solid #cccccc"/>

### 7、将id改为偶数，使得全局事务回滚
第6步中，user表插入的id全是基数，因为id为偶数时，服务会抛出运行时异常。
<img src=/images/seata_4/my-user-trade-8.png style="border: 1px solid #cccccc"/>

<img src=/images/seata_4/my-user-trade-10.png style="border: 1px solid #cccccc"/>
