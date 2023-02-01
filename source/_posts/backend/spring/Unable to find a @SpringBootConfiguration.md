---
title: Unable to find a @SpringBootConfiguration
date: 2022-04-27 13:35:13
category:
- backend
- spring
tags: Sprin MVC Unable to find a @SpringBootConfiguration
---

### 背景
今天在新建项目的时候，跑了一个测试类，出现这个问题；排查了一下，原来是因为测试包名字创建错了，导致Springboot扫描不到。

### 问题
```composer log
java.lang.IllegalStateException: Unable to find a @SpringBootConfiguration, you need to use @ContextConfiguration or @SpringBootTest(classes=...) with your test
```

具体原因：源文件类位置：com.a.b.c.controller.AClass，测试类位置：com.a.b.controller.TestAClass。

### 解决办法
将com.a.b.controller.TestAClass修改到：com.a.b.c.controller.TestAClass

这里也不是说AClass和TestAClass一定要在同一个包名下面，这个要看你的SpringbootApplication启动类在哪个位置，在启动类
下一级的包都可以被扫描到。我这里的启动类就在com.a.b.c下面，所以这里测试类在com.a.b.controller目录下，是无法被启动类扫描到的。
