---
title: DataX支持Mysql8.0
description: 安装Datax的时候，发现一直连不上数据库，结果是数据驱动和数据库版本不一致的问题，具体解决办法请看正文。
date: 2022-04-24 16:59:34
category:
- frontline
- bigdata
tags: DataX安装, DataX支持Mysql8.0, 
---

如果你对datax安装还有问题，请查阅文档：{% post_link bigdata/DataX安装遇坑解决 'DataX安装遇坑解决' %}

### 问题描述
在使用datax的时候，发现现有的datax 0.0.1版本和Mysql8.x不兼容

### 解决步骤

#### 下载源码
github地址：https://github.com/alibaba/DataX

#### 修改mysqlreader和mysqlwriter下pom文件的MySQL依赖版本：

<img src='/images/bigdata/dataxmysql8.0/1.png' />

```
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.25</version>
</dependency>
```

#### 修改plugin-rdbms-util模块下的DataBaseType类

将本文件下所有的com.mysql.jdbc.Driver类修改成com.mysql.cj.jdbc.Driver，
所有的convertToNull改成CONVERT_TO_NULL&serverTimezone=Asia/Shanghai

data-all根目录下的pom文件修改如下，将除了下列模块的其余模块注释掉，打包的时候只打包如下几个包：

```xml
<module>common</module>
<module>mysqlreader</module>
<module>mysqlwriter</module>
<module>plugin-rdbms-util</module>
```

#### 打包：
<img src='/images/bigdata/dataxmysql8.0/2.png' />

target目录下生成的jar包：

<img src='/images/bigdata/dataxmysql8.0/3.png' />

#### 拷贝替换jar

替换如下几个位置：

替换mysqlwriter目录下的mysqlwriter-0.0.1-SNAPSHOT.jar

<img src='/images/bigdata/dataxmysql8.0/4.png' />

lib下要替换的文件，我这里显示的MySQL是已经替换后的版本：

<img src='/images/bigdata/dataxmysql8.0/5.png' />
<img src='/images/bigdata/dataxmysql8.0/6.png' />

#### 如上就解决了Mysql8.x版本和datax不兼容的问题