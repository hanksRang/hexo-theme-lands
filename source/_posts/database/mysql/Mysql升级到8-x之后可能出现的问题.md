---
title: Mysql升级到8.x之后可能出现的问题
date: 2022-02-10 22:19:09
category:
- database
- mysql
tags: Mysql升级到8.x之后可能出现的问题

---

### 1、将驱动升级为8.x
`<dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.16</version>
 </dependency>`

### 2、但是此时仍可能出现以下问题
Loading class `com.mysql.jdbc.Driver`. This is deprecated. The new driver class is `com.mysql.cj.jdbc.Driver`. The driver is automatically registered via the SPI and manual loading of the driver class is generally unnecessary.

此时按照要求更换配置文件中的驱动报名即可
