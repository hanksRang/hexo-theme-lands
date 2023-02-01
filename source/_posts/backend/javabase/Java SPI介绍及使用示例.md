---
title: Java SPI介绍及使用示例
date: 2022-07-07 16:13:29
category:
- backend
- javabase

tags: Java SPI介绍及使用示例

---

### 介绍
<p>
JAVA SPI 是 Java 提供的一种服务加载方式，全名为 Service Provider Interface。
根据 Java 的 SPI 规范，我们可以定义一个服务接口，具体的实现由对应的实现者去提供，
即服务提供者。然后在使用的时候再根据 SPI 的规范去获取对应的服务提供者的服务实现。
通过 SPI 服务加载机制进行服务的注册和发现，可以有效的避免在代码中将服务提供者写死。
从而可以基于接口编程，实现模块间的解耦。
</p>

**SPI 机制**
1、在 META-INF/services/ 目录中创建以接口全限定名命名的文件，该文件内容为API具体实现类的全限定名
2、使用 ServiceLoader 类动态加载 META-INF 中的实现类
3、如 SPI 的实现类为 Jar 则需要放在主程序 ClassPath 中
4、API 具体实现类必须有一个不带参数的构造方法

<img src='/images/backend/javabase/Java-SPI介绍及使用示例/img.png'/>

### 示例
完整示例源码：https://github.com/hanksRang/java-spi-demo

### 关于本文
本文中的思维导图是由plantuml软件画的，源码：<a href='/images/backend/javabase/Java-SPI介绍及使用示例/img-source.dot'>java-SPI</a>