---
title: Class not found vfs2.FileSelector
date: 2022-04-01 13:52:00
category:
- others
tags:
---

Caused by: java.lang.ClassNotFoundException: org.apache.commons.vfs2.FileSelector
at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:581)
at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:522)
... 58 more

### 解决

```xml
<dependency>
    <groupId>com.oracle.jdbc</groupId>
    <artifactId>commons-vfs2</artifactId>
    <version>2.2</version>
    <scope>system</scope>
    <systemPath>${project.basedir}/.../commons-vfs2-2.2.jar</systemPath>
</dependency>
```