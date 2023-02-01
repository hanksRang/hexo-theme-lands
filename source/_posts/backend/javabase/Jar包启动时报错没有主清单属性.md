---
title: Jar包启动时报错没有主清单属性
excerpt: java -jar 报错没有主清单属性
date: 2022-04-03 16:13:29
category: 
- backend
- javabase
tags: Java, 工具, 编程
---

<p style="font-size: 16px; ">
今天在打包部署的时候报错没有主清单属性，下面记录一下解决过程。
</p>

### 什么是主清单属性
主清单配置位于META-INF -> MANIFEST.MF，下面来看两份文件的对比

没有主清单属性的文件：
```java
Manifest-Version: 1.0
Archiver-Version: Plexus Archiver
Created-By: Apache Maven 3.6.3
Built-By: hongk
Build-Jdk: 11.0.10
```

有主清单属性的文件：
```java
Manifest-Version: 1.0
Implementation-Title: plantuml-landscape
Implementation-Version: 0.0.1-SNAPSHOT
Built-By: hongk
Implementation-Vendor-Id: com.hongkezhang
Spring-Boot-Version: 2.0.1.RELEASE
Main-Class: org.springframework.boot.loader.JarLauncher
Start-Class: com.test.landscape.LandscapeApplication
Spring-Boot-Classes: BOOT-INF/classes/
Spring-Boot-Lib: BOOT-INF/lib/
Created-By: Apache Maven 3.6.3
Build-Jdk: 1.8.0_171
Implementation-URL: https://projects.spring.io/spring-boot/#/spring-bo
 ot-starter-parent/plantuml-landscape
```

从上面看到，第二份文件比第一份文件多了的代码里，包含了主类和启动类：
```java
Main-Class: org.springframework.boot.loader.JarLauncher
Start-Class: com.test.landscape.LandscapeApplication
```

### 为什么出现这个问题
出现这个问题，多半是打包不正确。

我们先看正确的包文件结构，其中BOOT-INF文件夹下存放classes文件夹和lib文件夹
<img src='/images/java/nomainlist/2.png'/>

而打包失败的文件结构是：
<img src='/images/java/nomainlist/1.png'/>

### 解决办法
添加spring-boot-maven-plugin插件
```xml
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
    <version>2.0.1.RELEASE</version>
</plugin>
```

添加上述插件之后，打包就可以正常进行了


