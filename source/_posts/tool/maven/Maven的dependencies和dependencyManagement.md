---
title: Maven的dependencies和dependencyManagement标签
date: 2022-02-22 17:04:37
category:
- tool
- maven
tags: maven
---

<font size=4>
dependencies和dependencyManagement标签的作用都是引入依赖，但是应用场景不同。假设现在有两个项目，base（父项目），son（子项目）
<font/>

### dependencies应用场景

base项目的pom.xml如下
```xml
  <groupId>com.hongkezhang</groupId>
  <artifactId>base</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>pom</packaging>
  <name>base</name>

<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>${junit.version}</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

son项目的pom.xml如下：
```xml
<parent>
    <groupId>com.hongkezhang</groupId>
    <artifactId>base</artifactId>
    <version>1.0-SNAPSHOT</version>
    <relativePath>../pom.xml</relativePath>
  </parent>
```

如上，son项目将继承base项目dependencies标签中的依赖

### dependencyManagement应用场景
base项目的pom.xml如下
```xml
  <groupId>com.hongkezhang</groupId>
  <artifactId>base</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>pom</packaging>
  <name>base</name>

<dependencyManagement>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>${junit.version}</version>
        <scope>test</scope>
    </dependency>
</dependencyManagement>
```
son项目的pom.xml如下：
```xml
<parent>
    <groupId>com.hongkezhang</groupId>
    <artifactId>base</artifactId>
    <version>1.0-SNAPSHOT</version>
    <relativePath>../pom.xml</relativePath>
  </parent>

<dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
    </dependency>
<dependencies>
```
如上，子项目将依赖父项目的中依赖（包括scope），而不用指定版本号；如果子项目中指定了一个新的版本号，那这个新的版本号将覆盖继承而来的版本，这也使得继承更加灵活。
