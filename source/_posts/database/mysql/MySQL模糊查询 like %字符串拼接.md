---
title: MySQL模糊查询 like %字符串拼接
date: 2022-06-28 11:29:15
category:
- database
- mysql
  
tags: MySQL模糊查询 like %字符串拼接

---

### 解决办法

采用CONCAT函数嵌套的方式拼接%%，
`(CONCAT(CONCAT('%', #{key, jdbcType=VARCHAR}),'%'))` 或者`(CONCAT(CONCAT('%', #{key}),'%'))`