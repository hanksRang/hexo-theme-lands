---
title: Dubbo系列（3）官方示例dubbo-samples-protobuf 调试
date: 2022-02-20 18:47:54
category: 
- backend
- dubbo
tags: dubbo
---

<font size=4>
本文介绍一个dubbo官方的示例，调试一些基本的参数，作为dubbo的入门级学习。本文将展示在调试过程中出现的问题，并给出解决办法。
<font/> 

### 1、下载dubbo示例源码
`git clone -b master  https://github.com/apache/dubbo-samples`

### 2、进入dubbo-samples-protobuf项目
`cd dubbo-samples/dubbo-samples-protobuf`

### 3、将项目导入idea编辑器
在最上层pom添加插件，用于自动生成protobuf相关代码（本文不对protobuf做介绍）：
```
<plugin>
    <groupId>org.xolstice.maven.plugins</groupId>
    <artifactId>protobuf-maven-plugin</artifactId>
    <version>0.5.1</version>
    <configuration>
        <protocArtifact>com.google.protobuf:protoc:3.7.1:exe:${os.detected.classifier}</protocArtifact>
        <outputDirectory>build/generated/source/proto/main/java</outputDirectory>
        <clearOutputDirectory>false</clearOutputDirectory>
        <protocPlugins>
            <protocPlugin>
                <id>dubbo</id>
                <groupId>org.apache.dubbo</groupId>
                <artifactId>dubbo-compiler</artifactId>
                <version>${dubbo.compiler.version}</version>
                <mainClass>org.apache.dubbo.gen.dubbo.Dubbo3Generator</mainClass>
            </protocPlugin>
        </protocPlugins>
    </configuration>
    <executions>
        <execution>
            <goals>
                <goal>compile</goal>
                <goal>test-compile</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

### 4、执行一次打包操作
执行`mvn clean package`命令，会看到protobug-provider和protobuf-consumer下都生成了一个build文件夹，并且包含demoService接口相关的内容。

### 5、修改Spring dubbo相关配置文件
（1）修改dubbo-provider.xml配置，将如下代码中的ip和port改成zookeeper对应的地址和端口
```xml
<dubbo:registry address="zookeeper://ip:port?timeout=60000"/>
```
*注意上述代码中的timeout参数，默认为5000ms，可能导致连接zookeeper超时而报如下错误，所以这里将timeout设置为60000ms*
```
Exception in thread "main" java.lang.IllegalStateException: zookeeper not connected
	at org.apache.dubbo.remoting.zookeeper.curator.CuratorZookeeperClient.<init>(CuratorZookeeperClient.java:84)
	at org.apache.dubbo.remoting.zookeeper.curator.CuratorZookeeperTransporter.createZookeeperClient(CuratorZookeeperTransporter.java:26)
	at org.apache.dubbo.remoting.zookeeper.AbstractZookeeperTransporter.connect(AbstractZookeeperTransporter.java:68)
	at org.apache.dubbo.configcenter.support.zookeeper.ZookeeperDynamicConfiguration.<init>(ZookeeperDynamicConfiguration.java:66)
```
（2）修改dubbo-consumer.xml，同第（1）步
### 6、启动protobuf服务
（1）启动protobuf-provider服务
```
[20/02/22 22:32:30:819 CST] main  INFO bootstrap.DubboBootstrap:  [DUBBO] DubboBootstrap has started., dubbo version: 2.7.13, current host: 192.168.1.3
```
（4）启动protobuf-consumer服务，同第（3）步，日志显示`result: Hello Hello`说明远程接口访问成功
```
[20/02/22 22:42:06:598 CST] DubboSaveMetadataReport-thread-1  INFO zookeeper.ZookeeperMetadataReport:  [DUBBO] store consumer metadata. Identifier : org.apache.dubbo.metadata.report.identifier.MetadataIdentifier@1078d7e; definition: {init=false, side=consumer, metadata-type=remote, application=demo-consumer, release=2.7.13, methods=sayHello,sayHelloAsync, qos.port=33333, sticky=false, dubbo=2.0.2, check=false, interface=org.apache.dubbo.demo.DemoService}, dubbo version: 2.7.13, current host: 192.168.1.3
[20/02/22 22:42:06:610 CST] main  INFO support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker: Bean 'demoService' of type [org.apache.dubbo.common.bytecode.proxy0] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
result: Hello Hello, response from provider: 192.168.1.3:23889
```
<br/>
<br/>
<div style="border-top: 5px dotted  #cccccc; margin-top: 10px;"></div>
<br/>
<font size=4>几个注意点</font>

### 1、服务供应者暴露接口必须和服务消费者引用接口的包名、类名一致，如下：

服务提供者暴露接口：
```xml
<dubbo:service interface="org.apache.dubbo.noon.NoonService" ref="noonServiceImpl"/>
```
服务消费者引用接口：
```xml
<dubbo:reference id="noonService" check="false" 
	       	    interface="org.apache.dubbo.noon1.NoonService" "/>
```

*上文所示，服务提供者和消费者的接口不一样，将报如下错误：*
```
Exception in thread "main" org.apache.dubbo.rpc.RpcException: No provider available from registry 124.222.113.146:2181 for service demo-provider1/org.apache.dubbo.noon1.NoonService on consumer 192.168.1.3 use dubbo version 2.7.13, please check status of providers(disabled, not registered or in blacklist).
```

### 2、dubbo:service和dubbo:referrence标签的group属性，group是服务分组，当一个接口有多个实现，可以用分组区分

如下所示，NoonService有两个实现类，分别用demo-provider-noon-1和demo-provider-noon-2分组，对应的消费者在调用同一个接口的不同实现时，标记不同组名即可调用不同的实现类
dubbo-provider.xml配置：
```xml
<bean id="noonServiceImpl" class="org.apache.dubbo.demo.provider.NoonServiceImpl"/>

<dubbo:service interface="org.apache.dubbo.noon.NoonService"
                   ref="noonServiceImpl" group="demo-provider-noon-1"/>

<bean id="myNoonServiceImpl" 
   	     	   class="org.apache.dubbo.demo.provider.MyNoonServiceImpl"/>

<dubbo:service interface="org.apache.dubbo.noon.NoonService"
                   ref="myNoonServiceImpl" group="demo-provider-noon-2"/>
```

dubbo-consumer.xml配置：
如下将调用NoonService的MyNoonServiceImpl实现类
```xml
<dubbo:reference id="noonService" 
		   check="false" interface="org.apache.dubbo.noon.NoonService" 
	           group="demo-provider-noon-1"/>
```
