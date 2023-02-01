---
title: Mybatis Plus设置自增主键
date: 2022-05-09 12:09:00
category:
- backend
- mybatis 
  
tags: Mybatis Plus, 自增主键

---

### 设置方法

看如下代码：
```java
	/**
	 * 
	 */
	@TableId(type = IdType.AUTO)
	private Long id;
```