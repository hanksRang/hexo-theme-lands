---
title: StreamGobbler类在哪个包？对应的maven依赖是哪个？（已解决）
date: 2022-06-06 17:04:37
category:
- tool
- maven
  
tags: StreamGobbler类在哪个包？对应的maven依赖是哪个？已解决

---

### 背景
很多人知道StreamGobbler在edu.stanford.nlp.util包下面，也知道StreamGobble.start()方法，但是不知道属于哪个maven依赖。

### maven依赖
当前最新版本：
```xml
<dependency>
  <groupId>edu.stanford.nlp</groupId>
  <artifactId>stanford-parser</artifactId>
  <version>3.9.2</version>
</dependency>
```