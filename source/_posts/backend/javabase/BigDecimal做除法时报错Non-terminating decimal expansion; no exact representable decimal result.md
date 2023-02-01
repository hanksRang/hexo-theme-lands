---
title: BigDecimal做除法时报错Non-terminating decimal expansion; no exact representable decimal result
date: 2022-06-01 16:13:29
category:
- backend
- javabase
  
tags: Java, 工具, 编程

---

### 问题描述
如果按以下方式执行将报错：
```java
BigDecimal consequence = new BigDecimal("5").divide(new BigDecimal("3"));
```

报错信息：
```composer log
Exception in thread "main" java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.
```

意思是：非小数扩展，没有明确的小数结果。

理解：其实就是说明这个除法除不尽，但是没有申明保留几位小数。

### 解决办法

```java
new BigDecimal("5").divide(new BigDecimal("3"), 6, RoundingMode.HALF_UP);
```

<p>保留6位小数，最后一位小数由四舍五入得来。RoundingMode.HALF_UP表明四舍五入。
RoundingMode详细介绍请参考：{% post_link backend/javabase/BigDecimal之RoundingMode详细解释 %}
</p>