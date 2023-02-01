---
title: idea无法下载源码问题解决
date: 2022-02-23 19:24:34
category: 
- tool
- idea
tags:
---

### 解决办法

打开idea终端，在pom同级目录执行`mvn dependency:resolve -Dclassifier=sources`
