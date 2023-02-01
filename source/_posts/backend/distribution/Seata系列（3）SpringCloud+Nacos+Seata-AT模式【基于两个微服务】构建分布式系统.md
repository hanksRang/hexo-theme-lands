---
title: Seata系列（3）SpringCloud+Nacos+Seata AT模式【基于两个微服务】构建分布式系统
date: 2022-02-16 01:15:07
category:
- backend
- distribution
tags: seata, 分布式
---

<font size=4>
昨天用SpringCloud+Nacos+Seata的方式搭建了一个分布式事务的demo，今天就来记录一下如何搭建，以便后续进一步的学习。Seata的整合方式有很多种，之所以采用这一套架构，是因为我对SpringCloud+Nacos这个组合更熟悉，后续会出Springboot+Dubbo+Nacos+Seata架构的文章。
</font>

### Seata AT模式介绍
<font size=4>AT，Auto Transcription的缩写， 基于支持本地ACID事务的关系型数据库（如Mysql的InnoDB）。AT模式类似于2PC。这里先不讲过多空洞的概念，后面通过实例来分析。
</font>

---
<font size=4>进入正题</font>

### 1、修改seata-server配置
1、修改conf目录下的registry.conf文件，将seata-server注册到nacos
（1）将registry配置下type值修改为nacos，`type = "nacos"`
（2）nacos.namespace改为nacos对应的命名空间，如我的配置：`namespace = "3d9a7f6c-32f0-4797-a7a2-11375f47b522"`
（3）修改config下的配置，和registry类似
完整配置参考： [**registry.conf**](/files/seata_3/registry.conf)

*关于registry.conf有一个小测试*
*将registry.type改成file模式，client端启动时的报错信息：
`2022-02-16 16:29:20.324 ERROR 42576 --- [eoutChecker_1_1] i.s.c.r.netty.NettyClientChannelManager  : no available service found in cluster 'default', please make sure registry config correct and keep your seata server running`*
*以上说明，registry.type="nacos"时，seata-server才能正常注册到nacos上*

### 2、启动seata-server
具体请参照：<b>{% post_link Seata系列（2）配置并启动Seata-server Seata系列（2）配置并启动Seata-server  %}</b>

### 3、添加nacos配置
如图所示：
![seatagroup-mapping.png](/images/seata_3/seata-nacos-groupMapping-config-1.png)
注意上图中的user-service-group和trade-service-group要和服务中的组名对应
如图以user服务为例：
![seata3-nacos-service-group-config-1.png](/images/seata_3/seata3-nacos-service-group-config-1.png)
在service.vgroupMapping.user-service-group中的user-service-group是自己定义的名称，其值default是集群名称，需要与seata-server端registry.conf中nacos配置的集群名称一致。如图是seata-server端nacos配置：
![seata-server-cluster-1.png](/images/seata_3/seata-server-cluster-1.png)

### 5、建表
这里我们需要创建两个库my_user和my_trade，my_user库包含user表和undo_log表，my_trade库包含trade和undo_log表

```sql
CREATE TABLE "undo_log" (
  "id" bigint NOT NULL AUTO_INCREMENT,
  "branch_id" bigint NOT NULL,
  "xid" varchar(100) NOT NULL,
  "context" varchar(128) NOT NULL,
  "rollback_info" longblob NOT NULL,
  "log_status" int NOT NULL,
  "log_created" datetime NOT NULL,
  "log_modified" datetime NOT NULL,
  "ext" varchar(100) DEFAULT NULL,
  PRIMARY KEY ("id"),
  UNIQUE KEY "ux_undo_log" ("xid","branch_id")
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
```

```sql
CREATE TABLE "user" (
  "id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(32) NOT NULL,
  "passwords" varchar(32) NOT NULL,
  PRIMARY KEY ("id")
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
```

```sql
CREATE TABLE "user" (
  "id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(32) NOT NULL,
  "passwords" varchar(32) NOT NULL,
  PRIMARY KEY (`id`)CREATE TABLE "trade" (
  "id" int NOT NULL AUTO_INCREMENT,
  "userid" int NOT NULL,
  "value" int NOT NULL,
  PRIMARY KEY ("id")
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
```

### 4、创建my-user项目
（1）完整的pom.xml文件：[**pom.xml**](/files/seata_3/pom.xml)
（2）UserController代码

```java
@RestController
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("save")
    public String save(int id,String name,String passwords,int value){
        try {
            if (service.save(id, name, passwords, value)) {
                return "保存成功";
            }
            return "保存失败";
        }catch (Exception e){
            return e.getMessage();
        }
    }
}
```
（3）UserService
```java
@Service
public class UserService {
    @Autowired
    private TradeService service;
    @Autowired
    private UserMapper mapper;

    @GlobalTransactional
    @Transactional(rollbackFor = Exception.class)
    public boolean save(int userid,String name,String passwords,int value){
        mapper.insert(userid,name,passwords);
        service.save(userid,value);
        if(userid % 2 == 0){
            throw new RuntimeException("不给保存双数id");
        }
        return true;
    }
}
```
（4）TradeService
```java
@FeignClient("my-trade-service")
public interface TradeService {
    @RequestMapping("trade/save")
    boolean save(@RequestParam("userid") int userid, @RequestParam("value") int value);
}
```
（5）UserMapper类
```java
@Mapper
public interface UserMapper {

    @Insert({"insert user(id,name,passwords) values(#{id},#{name},#{passwords})"})
    int insert(int id,String name,String passwords);
}
```
（6）UserApplication启动类
```java
@EnableDiscoveryClient
@EnableFeignClients
@SpringBootApplication(scanBasePackages = {"com.hongkezhang"}, exclude = DataSourceAutoConfiguration.class)
public class UserApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class, args);
    }

}
```
（6）完整的yaml文件：[application.yml](/files/seata_3/application.yml-d)

### 6、创建项目my-trade
（1）pom文件和my-user类似
（2）TradeController类
```java
@RestController
public class TradeController {

    @Autowired
    private TradeService tradeService;

    @RequestMapping("trade/save")
    public boolean save(int userid,int value){
        return tradeService.saveTrade(userid,value);
    }

}
```
（3）TradeService类
```java
@Service
public class TradeService {
    @Autowired
    private TradeMapper mapper;

    @Transactional(rollbackFor = Exception.class)
    public boolean saveTrade(int userid,int value){
        return mapper.insertTrade(userid,value) > 0;
    }
}
```
（4）TradeMapper类
```java
@Mapper
public interface TradeMapper {

    @Insert({"insert into trade(userid,`value`) values(#{userid},#{value})"})
    int insertTrade(int userid,int value);

}
```
（5）TradeApplication启动类
```java
@EnableDiscoveryClient
@EnableFeignClients
@SpringBootApplication(scanBasePackages = {"com.hongkezhang"}, exclude = DataSourceAutoConfiguration.class)
public class TradeApplication {

    public static void main(String[] args) {
        SpringApplication.run(TradeApplication.class, args);
    }

}
```
（6）application.yml文件和my-user类似

### 7、启动两个项目
如图展示的是my-user的启动日志，如果控制台日志正常，表示项目启动成功
![my-ser-start](/images/seata_3/seata-my-user-start.png)

<font size=4>
写在最后：本文主要介绍了如何利用nacos整合Seata进行分布式系统的搭建，避免篇幅过长，将在本系列下一篇文章中讨论调试本文涉及的内容。
</font>
