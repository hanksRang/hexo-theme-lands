---
title: maven install 无法打包的坑
date: 2022-02-14 19:36:53
category:
- tool
- maven
tags:
---

<font size=4>今天在使用maven打common的时候，出现`repackage failed: Unable to find main class `，很奇怪的问题，以前没遇到过，下面回忆一下解决此问题的过程
</font>
### 1、首先试着给spring-boot-maven-plugin添加repackage参数，但是不可行
```xml
<plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.6.3</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal> <!--可以把依赖的包都打包到生成的Jar包中 -->
                        </goals> <!--可以生成不含依赖包的不可执行Jar包 -->
                        <configuration>
                            <classifier>exec</classifier>
                        </configuration>
                    </execution>
                </executions>
            </plugin>`
```

### 2、有人说将`<packaging>jar</packaging>`中jar改成pom
这个方法虽然不会报错，但是无法在仓库中生成jar包

### 3、看到网上有人说去掉spring-boot-maven-plugin插件再打包
这个方法确实可行，也暂时没发现引出的其他问题。

---

2022.04.30

更新一下这个问题，这个问题的出现，common这个模块本身不是需要可执行，没有Springboot Application主类，却用了Springboot maven plugin
这个插件，自然会报错，去掉这个插件就不报错了。

补充：像打common这中不可执行的包，通常pom配置为<package>pom</package>，类似的打Springboot可执行jar，配置的就是
<package>jar</package>，打war包就用<package>war</package>

打Springboot可执行jar的时候，还是要用下面这个插件：
```xml
<plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.6.3</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
```

### 为什么有时候不引入Springboot maven plugin也可以打包？
其实打包这个问题，之前也出现果很多次，感觉每次出问题都解决的稀里糊涂的，最后都是使用搜索神器，虽然解决了，但是没仔细想为什么是这个问题。

其实有时候不用引入，当你在项目中引入了如下包的时候：
```xml
<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.1.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
```

项目如果继承了这个这个包，自然就不用再引入Springboot maven plugin这个插件了，因为spring-boot-starter-parent
已经包含了这个插件，项目直接继承了。

如果项目中没有引入parent这个包，那么就要引入Springboot maven plugin这个插件。

比如有时候我们用的是如下配置，而非继承spring-boot-starter-parent（不清楚这两个的区别同学可查阅相关资料），就要同时引入Springboot maven plugin这个插件：
```composer log
<dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-dependencies</artifactId>
				<version>${spring-boot-dependencies.version}</version>
				<type>pom</type>
				<scope>import</scope>
			</dependency>
		</dependencies>
</dependencyManagement>
```

以上就是关于打包中的一些坑，如果把这些细节搞清楚了，相信以后出现问题会很快排查出来。
