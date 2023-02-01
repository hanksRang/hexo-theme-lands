---
title: mysql事务死锁解决
date: 2022-02-15 18:32:20
category:
- database
- mysql

tags:

---

<font size=4>
今天在搭建seata分布式事务的时候，遇到了Mysql死锁的问题，可能是在全局事务获取到User表行级锁之后，线程意外中断，导致锁无法释放。此时被锁住的User表仍能查询和插入，但是无法drop。下面是解决步骤。
</font>

### 1、查看事务列表
1、执行`SELECT * FROM INFORMATION_SCHEMA.INNODB_TRX;`
2、如果没有查询结果，说明没有执行中的事务。
3、如果有事务，查看trx_mysql_thread_id字段值

### 2、比对进程列表
1、执行`show processlist;`
2、比对步骤1中的trx_mysql_thread_id字段对应的进程，是否符合预期。比如数据库是否一致，描述信息是否是要找的，如果这些信息都有效，基本可以锁定是这个进程死锁了。

### 3、杀死指定进程
执行`kill trx_mysql_thread_id`即可杀死该进程
