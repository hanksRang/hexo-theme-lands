---
title: SpringCloud Feign治理下的断路器功能实现【附完整源码】
date: 2022-06-17 12:09:00
category:
- backend
- spring

tags: SpringCloud Feign治理下的断路器功能实现

---

### 断路器介绍
<p>断路器的主要作用是熔断、保护。Spring Cloud微服务体系下，feign作为服务治理的手段，
其运用断路器来避免服务调用异常后的连锁反应（服务雪崩）。
</p>

### 完整实现
本文运用nacos作为注册中心，构建两个微服务：shop-service和order-service，并将它们注册到nacos上。shop-service作为调用方，
采用feign调用的方式主动调用order-service暴露出来的接口。

父模块pom.xml：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.hanksrang</groupId>
    <artifactId>springcloud-circuit</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>pom</packaging>

    <!-- 父工程 -->
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.1.RELEASE</version>
        <relativePath/>
    </parent>

    <!-- 依赖版本管理 -->
    <!-- spring-cloud版本可以去 https://start.spring.io 根据springBoot自己查看 -->
    <properties>
        <java.version>1.8</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <spring-cloud.version>Greenwich.SR5</spring-cloud.version>
        <spring-cloud-alibaba.version>2.1.2.RELEASE</spring-cloud-alibaba.version>
    </properties>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>${spring-cloud-alibaba.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <!--lombok⼯具-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.4</version>
            <scope>provided</scope>
        </dependency>
        <!--日志依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </dependency>
        <!--测试依赖-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <!--编译插件-->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>8</source>
                    <target>8</target>
                    <encoding>utf-8</encoding>
                </configuration>
            </plugin>
            <!--打包插件-->
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

#### order-service
pom.xml：
```xml
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.hanksrang</groupId>
    <artifactId>order-service</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <spring.cloud.alibaba.version>2.2.6.RELEASE</spring.cloud.alibaba.version>
    </properties>

    <parent>
        <groupId>com.hanksrang</groupId>
        <artifactId>springcloud-circuit</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
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
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>2.6.4</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.60</version>
        </dependency>
    </dependencies>
```

bootstrap.yml：
```yaml
server:
  port: 8632

spring:
  cloud:
    nacos:
      discovery:
        server-addr: ####:8848
        namespace: 3d9a7f6c-32f0-4797-a7a2-1137
      config:
        server-addr: ####:8848
        namespace: 3d9a7f6c-32f0-4797-a7a2-1137
        group: DEFAULT_GROUP  # 默认分组就是DEFAULT_GROUP，如果使用默认分组可以不配置
        file-extension: yml   #默认properties
  application:
    name: order-service
```

OrderController：
```java
@RestController
@RequestMapping("/order")
public class OrderController {

    @RequestMapping("/hello")
    public String hello() {
        if (true) {
            throw new RuntimeException("---运行时异常");
        }
        return "yes, it is.";
    }

}
```

Application启动类：
```java
@SpringBootApplication
@EnableDiscoveryClient
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }

}
```

#### shop-service
```xml
<modelVersion>4.0.0</modelVersion>
    <groupId>com.hanksrang</groupId>
    <artifactId>shop-service</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <spring.cloud.alibaba.version>2.2.6.RELEASE</spring.cloud.alibaba.version>
    </properties>

    <parent>
        <groupId>com.hanksrang</groupId>
        <artifactId>springcloud-circuit</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
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
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-feign</artifactId>
            <version>1.4.7.RELEASE</version>
        </dependency>
        <!--让feign支持断路器添加hystrix依赖-->
<!--        <dependency>-->
<!--            <groupId>org.springframework.cloud</groupId>-->
<!--            <artifactId>spring-cloud-starter-hystrix</artifactId>-->
<!--            <version>1.4.7.RELEASE</version>-->
<!--        </dependency>-->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.22</version>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.13.2</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <version>2.6.4</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>1.2.60</version>
        </dependency>
    </dependencies>
```

bootstrap.yml：
```yaml
server:
  port: 8631

spring:
  cloud:
    nacos:
      discovery:
        server-addr: ####:8848
        namespace: 3d9a7f6c-32f0-4797-a7a2-11375f47b5
      config:
        server-addr: ####:8848
        namespace: 3d9a7f6c-32f0-4797-a7a2-11375f47b5
        group: DEFAULT_GROUP  # 默认分组就是DEFAULT_GROUP，如果使用默认分组可以不配置
        file-extension: yml   #默认properties

feign:
  hystrix:
    enabled: true
```

OrderApiClient调用类：
```java
@Primary
@FeignClient(value = "order-service", fallback = OrderApiClientFallBack.class)
public interface OrderApiClient {

    @RequestMapping(value="/order/hello", method = RequestMethod.GET)
    String hello(@RequestParam("a") Integer a, @RequestParam("b") Integer b);

}
```

断路器回调类：
```java
@Component
public class OrderApiClientFallBack implements OrderApiClient{

    @Override
    public String hello(Integer a, Integer b) {
        System.out.println("hello fall back");
        return null;
    }

}
```

Application启动类：
```java
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
// @EnableCircuitBreaker
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }

}
```

### 资源
github完整源码：https://github.com/hanksRang/springcloud-feign-circuit-breaker