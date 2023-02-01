---
title: Seata系列（1）rm、tm、tc的概念及其联系
date: 2022-02-15 21:41:51
category:
- backend
- distribution
tags:
---

<font size=4 >
RM、TM、TC是Seata的三大组成部分。RM（Resouce Manager）-资源管理器，管理分支事务处理的资源，与TC交互，向TC注册事务分支和报告事务分支的状态，驱动事务分支的提交或回滚。TM（Transaction Manager）-事务管理器，定义全局事务的范围，开始全局事务，提交或回滚全局事务。TC（Transaction Coorddinator）-事务协调者，维护全局和分支事务的状态，驱动全局事务提交或回滚。
</font>

### 三者的关系可大致由下图表示（图片来源于Seata官网）：
![Seata(1)](/images/seata_1/seata.png)

<font size=4>同一个服务可以同时注册RM和TM，因为同一个服务可能同时存在调用和被调用的情况，当A服务调用B服务时，可在A服务开启全局事务管理器；当B服务调用A服务时，可在B服务开启全局事务管理器</font>
