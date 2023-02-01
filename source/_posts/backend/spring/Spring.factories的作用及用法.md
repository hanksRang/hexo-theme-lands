
---
title: Spring.factories的作用及用法
date: 2022-06-09 12:09:00
category:
- backend
- spring

tags: Spring.factories的作用及用法

---

### 作用

<p>配置spring.factories文件的目的是为了Spring Bean容器能够将指定的类进行加载。
我们通常有这么一种需求，以jar包的形式引入第三方组件（可能是自己写的），需要将组件中的部分类实例化并注入到 spring 容器中。
那么这样就引出了一个新的问题，我们都知道 Spring Boot的自动扫描包的扫描范围是SpringBootApplication启动类所在的包以及子包目录下。
因此要扫描其他组件的包，就需要引入spring.factories文件。
</p>

### 使用方式

在resources/META-INF文件夹下添加spring.factories文件，建议将spring.factories文件配置在被引入包的resources下，的配置如下

```java
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.a.b.impl.EtlToolDemoServiceImpl
```

配置多个类：
```java
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.a.b.impl.EtlToolDemoServiceImpl,\
com.a.b.impl.AnotherToolDemoServiceImpl,\
com.a.b.impl.ThreeToolDemoServiceImpl
```