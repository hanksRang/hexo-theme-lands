---
title: dubbo使用中的spring-context-support依赖问题
date: 2022-02-14 20:33:12
category: 
- backend
- dubbo
tags:
---

<font size=4>
由于才开始接触dubbo，难免遇到很多坑；今天在使用springboot+duboo+Seata构建分布式系统的时候，就出现了依赖包的问题，以下纪录一下解决问题的过程，便于以后的学习
</font>

### 1、报错`Caused by: java.lang.NoClassDefFoundError: com/alibaba/spring/context/OnceApplicationContextEventListener`
这个类找不到，起初还以为是包冲突了，但是后来一想应该去排查已有的包中是否有这个类，于是检查发现确实没有。

### 2、再看这个包里面包含context路径，试着去添加相关的包，经过搜索发现spring-contex-support可能合适，于是添加以下包试一试：
`        <dependency>
            <groupId>com.alibaba.spring</groupId>
            <artifactId>spring-context-support</artifactId>
            <version>1.0.10</version>
        </dependency>`

### 3、第2步确实解决了问题1，但是又引出了新问题
`Description:
An attempt was made to call a method that does not exist. The attempt was made from the following location:
    org.apache.dubbo.config.spring.beans.factory.annotation.ReferenceAnnotationBeanPostProcessor.<init>(ReferenceAnnotationBeanPostProcessor.java:106)
The following method did not exist:
    org.apache.dubbo.config.spring.beans.factory.annotation.ReferenceAnnotationBeanPostProcessor.setClassValuesAsString(Z)V
The method's class, org.apache.dubbo.config.spring.beans.factory.annotation.ReferenceAnnotationBeanPostProcessor, is available from the following locations:`

### 4、第3步出现的问题具体解决如下
将第2步中添加的包升级到1.0.11即可解决问题，具体可参照`https://github.com/alibaba/spring-cloud-alibaba/issues/2310`
