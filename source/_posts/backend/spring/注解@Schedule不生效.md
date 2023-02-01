---
title: 注解@Schedule不生效
excerpt: 注解@Sechedule不生效的解决办法
date: 2022-04-03 18:00:29
category: 
- backend
- spring
tags: Java, Spring
---

<p style="font-size: 16px; ">
如果在使用Springboot的过程中遇到这个问题，很可能是因为缺少一个注解。下面是解决办法：
</p>

### 在启动类上添加注解

```java
@EnableScheduling
```
