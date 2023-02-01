---
title: Mysql DDL大全
date: 2022-06-24 18:32:20
category:
- database
- mysql

tags:

---

### 介绍
MySQL DDL总结，涵盖绝大部分应用场景

### 创建表

```sql
CREATE TABLE 表名(
字段名称1 字段类型（长度），
字段名称2 字段类型 注意 最后一列不要加逗号
);
```

需求1： 创建商品分类表

SQL实现:
```sql
-- 切换到数据库 db1
USE db1;
-- 创建表
CREATE TABLE category(
cid INT,
cname VARCHAR(20)
);
```


需求2： 创建测试表

SQL实现
```sql
-- 创建测试表
CREATE TABLE test1(
tid INT,
tdate DATE
);
```


需求3： 快速创建一个表结构相同的表（复制表结构）
语法格式
`create table 新表明 like 旧表名`

代码示例
```sql
-- 创建一个表结构与 test1 相同的 test2表
CREATE TABLE test2 LIKE test1;
-- 查看表结构
DESC test2;
```


需求4： 创建完整的用户表
```sql
CREATE TABLE `tb_user` (
`id` int(10) NOT NULL AUTO_INCREMENT COMMENT '主键ID，自增',
`name` varchar(30) DEFAULT NULL COMMENT '用户名',
`pwd` varchar(50) DEFAULT NULL COMMENT '密码',
`create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
`update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新时间',
PRIMARY KEY (`id`),
UNIQUE KEY `unique_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
```


### 查看表

代码示例
```sql
-- 查看当前数据库中的所有表名
SHOW TABLES;
-- 显示当前数据表的结构
DESC category;
-- 查看创建表的SQL语句
SHOW CREATE TABLE category;
```

### 删除表

代码示例
```sql
-- 直接删除 test1 表
DROP TABLE test1;
-- 先判断 再删除test2表
DROP TABLE IF EXISTS test2;
```

### 修改表（常用）
**1）修改表名**
语法格式

`rename table 旧表名 to 新表名`

需求： 将category表 改为 category1
`RENAME TABLE category TO category1;`

**2）修改表的字符集**
语法格式

`alter table 表名 character set 字符集`

需求: 将category表的字符集 修改为gbk

`alter table category character set gbk;`

**3）向表中添加列， 关键字 ADD**
语法格式

`alert table 表名 add column 字段名称 字段类型`

需求： 为分类表添加一个新的字段为 分类描述 cdesc varchar(20)

为分类表添加一个新的字段为 分类描述 cdesc varchar(20)
`ALTER TABLE category ADD cdesc VARCHAR(20);`

-- 分类表中，在cname字段后面添加描述字段
`ALTER TABLE category ADD cdesc VARCHAR(20) DEFAULT NULL COMMENT '描述'  AFTER `cname`;`

**4）修改表中列的 数据类型或长度 ， 关键字 MODIFY**
语法格式

`alter table 表名 modify column 字段名称 字段类型`

需求：修改cdesc 字段的类型为 CHAR

-- 修改cdesc 字段的类型为 CHAR
`ALTER TABLE category1 MODIFY cdesc CHAR(20) DEFAULT NULL COMMENT '描述';`

需求：修改cdesc 字段的长度为 50

-- 修改字段长度为 50
`ALTER TABLE category MODIFY cdesc VARCHAR(50);`

**5）修改列名称 , 关键字 CHANGE**
语法格式

`alter table 表名 change 旧列名 新列名 类型(长度);`

需求: 对分类表中的 desc字段进行更换, 更换为 description varchar(30)

`ALTER TABLE category CHANGE cdesc description VARCHAR(30);`

**6）删除列 ，关键字 DROP**
语法格式

`alter table 表名 drop 列名;`

需求： 删除分类表中description这列

`ALTER TABLE category DROP description;`

### 引用链接
本文引用自：`https://blog.csdn.net/u012660464/article/details/116715810`