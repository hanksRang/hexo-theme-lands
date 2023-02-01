---
title: 报错Receiver class com alibaba cloud nacos discovery logging NacosLoggingListener does not define
date: 2022-06-17 12:09:00
category:
- backend
- opensource

tags: 报错Receiver class com alibaba cloud nacos discovery logging NacosLoggingListener does not define

---

### 问题描述
Spring Cloud Alibaba Nacos启动失败，报错：
```composer log
java.lang.AbstractMethodError: Receiver class com.alibaba.cloud.nacos.discovery.logging.NacosLoggingListener does not define or inherit an implementation of the resolved method 'abstract boolean supportsSourceType(java.lang.Class)' of interface org.springframework.context.event.GenericApplicationListener.
	at org.springframework.context.event.AbstractApplicationEventMulticaster.supportsEvent(AbstractApplicationEventMulticaster.java:294)
	at org.springframework.context.event.AbstractApplicationEventMulticaster.retrieveApplicationListeners(AbstractApplicationEventMulticaster.java:224)
	at org.springframework.context.event.AbstractApplicationEventMulticaster.getApplicationListeners(AbstractApplicationEventMulticaster.java:195)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:133)
	at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:127)
```

### 问题分析
如果是在使用nacos的时候出现这个问题，很可能是包的版本问题。为了不少引包，建议使用如下依赖管理来引入包：
父级pom.xml：
```xml
<properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <spring-cloud-alibaba.version>2.1.2.RELEASE</spring-cloud-alibaba.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring-cloud-alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

子级pom.xml：
```xml
<!--nacos service discovery client依赖-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
        <!--nacos config client 依赖-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
        </dependency>
```