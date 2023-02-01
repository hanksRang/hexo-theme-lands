---
title: idea启动项目报jdk相关的class not found
date: 2022-04-08 15:35:17
category: 
- tool
- idea
tags: idea, tools.jar, jdk1.8, 找不到类sun.jvm...
---

<p style="font-size: 16px;">
今天解决了一个项目启动报错的问题。该错误报找不到jdk tools.jar下面的类。下面是具体的解决方案：
</p>

### 报错
```java
Class Not found: sun.jvm...
```

### 原因分析
找不到这个类，怀疑是相关的Java包没有引入。查了sun.jvm...相关的类在tools.jar包下面。

但是在pom文件里已经配置了tools.jar相关的路径：
```xml
<dependency>
    <groupId>com.sun</groupId>
    <artifactId>tools</artifactId>
    <version>1.8.0</version>
    <scope>system</scope>
    <systemPath>${env.JAVA_HOME}/lib/tools.jar</systemPath>
    <optional>true</optional>
</dependency>
```

这里要注意的是，因为环境的差异性，有的环境是可以找到的。实在找不到可以采用下列方式：

### 解决问题

进入idea -> File -> Project Structure -> SDKs

<img src='/images/idea/jdkclassnotfound/1.png' />

看一下classpath下面引入了tools.jar包没有，如果没有引入，则将其添加进来。通常情况下这样就可以解决问题了。