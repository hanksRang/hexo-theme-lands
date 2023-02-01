---
title: com.sun.image爆红的解决方案
date: 2022-04-12 16:28:37
category:
- tool
- maven
tags: maven, com.sun.image爆红, jre lib引入的解决方案
---

在使用jre -> lib 下的包的时候，显示image爆红，无法引入如下package

```java
import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageEncoder;
```

解决办法，在pom中引入如下依赖：

```xml
<dependency>
			<groupId>com.sun</groupId>
			<artifactId>tools</artifactId>
			<version>1.8.0</version>
			<scope>system</scope>
			<systemPath>${env.JAVA_HOME}/jre/lib/rt.jar</systemPath>
			<optional>true</optional>
		</dependency>
```