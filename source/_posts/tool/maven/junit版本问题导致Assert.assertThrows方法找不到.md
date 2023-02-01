---
title: junit版本问题导致Assert.assertThrows方法找不到
date: 2022-05-09 17:04:37
category:
- tool
- maven

tags: maven，junit4.13.2，junit版本问题解决

---

### 背景
<p>junit由于其版本的问题，有的方法在老版本中找不到</p>

### 问题
<p>
今天在使用easyexcel组件的时候，报了一个Assert.assertThrows方法找不到的问题，
查看了一下junit的版本为4.12。怀疑是版本的问题，于是更换版本，最后发现在4.13.x版本中有这个方法。
<p>

### 解决办法
pom中引入如下依赖：
```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
</dependency>
```