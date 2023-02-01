---
title: Maven打包时跳过单元测试
excerpt: maven install, maven package命令时跳过单元测试
date: 2022-04-03 17:55:29
category:
- tool
- maven
tags: Java, 工具, 编程
---

<p style="font-size: 16px; ">
有时候，在打包的时候，为了避免单元测试报错和快速的构建项目，我们可以跳过这些单元测试。在pom.xml文件中添加如下配置即可：
</p>

```xml
<plugin>    
    <groupId>org.apache.maven.plugins</groupId>    
    <artifactId>maven-surefire-plugin</artifactId>    
    <version>2.5</version>    
    <configuration>    
        <skip>true</skip>    
    </configuration>    
</plugin>
```