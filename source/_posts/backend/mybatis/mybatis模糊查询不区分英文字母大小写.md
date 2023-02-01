---
title: mybatis模糊查询不区分英文字母大小写
date: 2022-08-31 12:09:00
category:
- backend
- mybatis

tags: mybatis模糊查询不区分英文字母大小写

---

**使用upper函数**

```xml
upper() like upper()
```

**MYSQL示例**

```xml
upper(tab_en) like upper(CONCAT(CONCAT('%'，#{TabEn})，'%'))
```