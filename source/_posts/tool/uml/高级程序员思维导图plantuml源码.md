---
title: 高级程序员思维导图plantuml源码
date: 2022-07-07 17:18:51
category:
- tool
- uml
  
tags: 高级程序员思维导图plantuml源码

---

```text
@startmindmap

scale 4000 width

!include plantuml-themes/sketchy/puml-theme-sketchy.puml

<style>

mindmapDiagram {
fontColor: #000000
fontSize: 70
height: 10px
BackgroundColor #ffffff
latter-spacing 10

.zero {
BackgroundColor lightGray
fontColor: Navy
}

.first {
BackgroundColor lightGreen
}
.second {
    BackgroundColor DarkSeaGreen
  }
  .third {
    BackgroundColor lightSteelBlue
  }
  .fourth {
    BackgroundColor lightSteelBlue
  }
  .fifth {
    BackgroundColor lightSteelBlue
  }
  .sixth {
    BackgroundColor mediumVioletRed
  }
.seventh {
BackgroundColor Teal
}

.eighth {
BackgroundColor cadetBlue
}

.ninth {
BackgroundColor lightSteelBlue
}

.tenth {
BackgroundColor skyblue
}

.eleventh { 
BackgroundColor skyblue 
}

.twelfth { 
BackgroundColor lightGreen
 }

.fourteenth {
BackgroundColor DarkSeaGreen
}

.thirteenth {
BackgroundColor cadetBlue
}
}
</style>

+ Java高级工程师 <<zero>>
++ 计算机基础 <<first>>
+++ 网络 <<first>>
++++ OSI 七层模型<<first>>
+++++ 应用层<<first>>
++++++ HTTP<<first>>
++++++ HTTPS<<first>>
++++++ FTP<<first>>
+++++ 表示层<<first>>
+++++ 会话层<<first>>
+++++ 传输层<<first>>
++++++ TCP<<first>>
+++++ 网络层<<first>>
++++++ IP<<first>>
+++++ 数据链路层<<first>>
+++++ 物理层<<first>>
++++ TCP / IP五层体系结构<<first>>
+++++ TCP协议<<first>>
++++++ 可靠传输<<first>>
+++++++ 校验和<<first>>
+++++++ 确认应答和序列号<<first>>
+++++++ 超时重传<<first>>
+++++++ 连接管理<<first>>
++++++++ 三次握手<<first>>
+++++++ 流量控制<<first>>
+++++++ 拥塞控制<<first>>
++++++++ 慢开始<<first>>
++++++++ 避免拥塞<<first>>
++++++++ 快重传<<first>>
++++++++ 快恢复<<first>>
++++++ 滑动窗口<<first>>
+++++ IP协议<<first>>
+++ 操作系统 <<first>>
++++ 进程、信号量 <<first>>
++ 数据结构与算法<<tenth>>
+++ 数据结构<<tenth>>
++++ 链表<<tenth>>
++++ 队列<<tenth>>
++++ 栈<<tenth>>
++++ 树<<tenth>>
++++ 图<<tenth>>
++++ 数组<<tenth>>
++++ 哈希表<<tenth>>
+++ 算法<<tenth>>
++++ 排序算法<<tenth>>
+++++ 比较类<<tenth>>
++++++ 交换排序<<tenth>>
+++++++ 冒泡排序<<tenth>>
+++++++ 快速排序<<tenth>>
++++++ 插入排序<<tenth>>
+++++++ 简单插入排序<<tenth>>
+++++++ 希尔排序<<tenth>>
++++++ 选择排序<<tenth>>
+++++++ 简单选择<<tenth>>
+++++++ 堆排序<<tenth>>
++++++ 归并排序<<tenth>>
+++++++ 二路归并<<tenth>>
+++++++ 多路归并<<tenth>>
+++++ 非比较类<<tenth>>
++++++ 计数排序<<tenth>>
++++++ 桶排序<<tenth>>
++++++ 基数排序<<tenth>>
++ Java基础核心 <<second>>
+++ 面向对象 <<second>>
++++ 封装 <<second>>
++++ 继承 <<second>>
+++++ Java是单继承的，一个类只能有一个直接父类，但是可以往上有多个次生父类<<second>>
++++ 多态 <<second>>
+++++ 即多种状态，接口的多种实现是多态的体现。<<second>>
+++ 集合 <<second>>
++++ Iterable <<second>>
+++++ Collection <<second>>
++++++ List <<second>>
+++++++ LinkedList <<second>>
+++++++ ArrayList <<second>>
++++++ Set <<second>>
+++++++ HashSet <<second>>
+++++++ TreeSet <<second>>
++++++ Queue <<second>>
+++++++ PriorityQueue<<second>>
+++++++ Deque<<second>>
++++++++ ArrayDeque<<second>>
+++ Map <<second>>
++++ HashMap<<second>>
+++++ LinkedHashMap<<second>>
++++ HashTable<<second>>
+++++ Properties<<second>>
++++ IdentityHashMap<<second>>
++++ WeakHashMap<<second>>
++++ SortedMap<<second>>
+++++ NavigableMap<<second>>
++++++ TreeMap<<second>>
+++ IO <<second>>
++++ NIO<<second>>
++++ AIO<<second>>
+++ 线程 <<second>>
++++ 线程的5个状态<<second>>
++++ 使用方式<<second>>
+++++ 继承Thread类<<second>>
+++++ 实现Runnable接口<<second>>
+++++ Callable、FutureTask方式<<second>>
++++ start和run方法区别<<second>>
++++ 常用关键字<<second>>
+++++ sleep、\nwait、\nnotify、\nnotifyAll、\nyield、\njoin<<second>>
++++ 线程通信的方式<<second>>
+++++ 共享变量、\n wait/notify、\n lock/ Condition<<second>>
++++ ThreadLocal类<<second>>
++++ 临界区资源访问<<second>>
++++ 线程池 <<second>>
+++ 代理<<second>>
++++ jdk proxy代理<<second>>
++++ cglib代理<<second>>
+++ 反射<<second>>
+++ Java锁 <<second>>
++++ 锁的类型<<second>>
+++++ 线程对访问资源是否上锁<<second>>
++++++ 是<<second>>
+++++++ 悲观锁<<second>>
++++++ 否<<second>>
+++++++ 乐观锁<<second>>
+++++ 锁住同步资源失败，要不要阻塞<<second>>
++++++ 阻塞<<second>>
++++++ 不阻塞<<second>>
+++++++ 自旋锁<<second>>
+++++ 多线程竞争资源获取锁的方式有区别（锁升级）<<second>>
++++++ 同一个线程执行同步资源不需要竞争自动获取锁<<second>>
+++++++ 偏向锁<<second>>
++++++ 多个线程竞争同步资源，未获取到锁的线程自旋等待<<second>>
+++++++ 轻量级锁<<second>>
++++++ 多个线程竞争同步资源，为获取到锁的线程进入阻塞状态，等待唤醒<<second>>
+++++++ 重量级锁<<second>>
+++++ 多个线程竞争锁时，要不要排队<<second>>
++++++ 排队<<second>>
+++++++ 公平锁<<second>>
++++++ 先尝试插队，插队失败再排队<<second>>
+++++++ 非公平锁<<second>>
+++++ 一个线程已经获取到锁，在未释放的情况下再次获取同一把锁，是否能成功<<second>>
++++++ 是<<second>>
+++++++ 可重入锁<<second>>
++++++ 否<<second>>
+++++++ 不可重入<<second>>
+++++ 多个线程是否可以共享一把锁<<second>>
++++++ 是<<second>>
+++++++ 共享锁<<second>>
++++++++ 共享锁只能再加共享锁，不能再加排他锁<<second>>
++++++ 否<<second>>
+++++++ 排他锁<<second>>
++++++++ 排他锁不能再加其他任何锁<<second>>
+++ JDK1.8新特新<<second>>
++++ 流式编程<<second>>
+++++ 创建流<<second>>
+++++ 操作流<<second>>
+++++ 终结流<<second>>
++ JVM <<third>>
+++ 内存模型 <<third>>
++++ 方法区<<third>>
++++ 堆<<third>>
++++ 栈<<third>>
++++ 本地方法栈<<third>>
++++ 程序计数器<<third>>
+++ 垃圾收集器<<third>>
++++ 新生代<<third>>
+++++ Serial<<third>>
+++++ ParNew<<third>>
+++++ Parallel Scavenge<<third>>
++++ 老年代<<third>>
+++++ CMS<<third>>
+++++ Serial Old<<third>>
+++++ Parallel Old<<third>>
++++ G1<<third>>
+++ 内存监控工具<<third>>
++++ JConsole
+++ 类加载<<third>>
++++ 类加载器<<third>>
++++ 类加载机制<<third>>
+++++ 双亲委派<<third>>
+++++ 打破双亲委派<<third>>
-- 开源项目<<fourth>>
--- 核心开源项目<<fourth>>
---- Spring <<fourth>>
----- Spring core <<fourth>>
----- Spring boot<<fourth>>
----- Spring Cloud  <<fourth>>
---- ORM框架<<fourth>>
----- Mybatis<<fourth>>
------ # 符号，通过#号替换为字符串，mybatis会预编译，有效预防SQL注入<<fourth>>
------ $ 符号，直接替换，主要用于表对象名的替换，可能造成SQL注入<<fourth>>
------ 缓存<<fourth>>
------- 一级缓存<<fourth>>
-------- 默认开启，一级缓存是SqlSession级别的，各session对象缓存独立，随着session的消亡而消失。SelSession第一次查询后，MyBatis会将其放在缓存中以后再查询的时候，如果没有声明需要刷新，并且缓存没有超时的情况下，SqlSession都会取出当前缓存的数据，而不会再次发送SQL到数据库。<<fourth>>
------- 二级缓存<<fourth>>
-------- SqlSession查询结果会放二级缓存，多个SqlSession对象共享二级缓存。不同的Sqlsession对象两次执行相同namespace下的SQL语句，\n第一次执行会将数据库中查询结果数据存储到二级缓存中，第二次会从二级缓存中获取数据，而不再从数据库中获取，从而提高效率<<fourth>>
-------- 二级缓存使用条件（1）只能在只有单表操作的表上使用缓存。（2）查询操作远大于更新，插入和修改查找操作的情况下使用缓存。（3）多表查询一定不能使用二级缓存，会导致查询结果不正确，出现脏数据。<<fourth>>
--- 常用开源项目 <<fourth>>
---- Dubbo<<fourth>>
---- Seata<<fourth>>
---- Eureka<<fourth>>
---- Nacos<<fourth>>
---- Zookeeper<<fourth>>
---- 缓存<<fourth>>
---- Memcached<<fourth>>
---- Redis<<fourth>>
----- 内存模型<<fourth>>
------ 单线程<<fourth>>
------ IO多路复用<<fourth>>
----- 内存淘汰机制<<fourth>>
----- 三种集群方式<<fourth>>
------ 主从模式<<fourth>>
------- 主节点提供存取能力，从节点拷贝主节点数据，提供读取能力<<fourth>>
------- 优点：配置简单，相对于单节点提升了可靠性<<fourth>>
------- 缺点：主节点挂掉后，从节点无法提供服务<<fourth>>
------ 哨兵模式<<fourth>>
------- 哨兵负责监控主节点的运行情况，\n 一旦主节点宕机，在从节点中竞选一个作为主节<<fourth>>
------- 哨兵也可以集群<<fourth>>
------ Cluster模式<<fourth>>
----- 缓存雪崩<<fourth>>
------ 概念：缓存在同一时间大面积失效，造成数据库压力陡增。好比摧枯拉朽般雪山崩塌一样。<<fourth>>
------ 解决办法<<fourth>>
------- 针对Redis服务不可用的情况：（1）采用集群模式，增大可用性<<fourth>>
------- 针对热点缓存失效问题：（1）随机设置失效时间，（2）设置永不过期<<fourth>>
----- 缓存穿透<<fourth>>
------ 概念：客户端不断请求某个缓存中、数据库都不存在的key，造成数据库空跑，很可能是恶意攻击<<fourth>>
------ 解决办法：（1）对客户端请求参数做校验，如id < 0的查询直接return（2）恶意用户大量请求，从代理服务器层做拉黑操作<<fourth>>
------- 布隆过滤器：利用算法高效判断key是否存在数据库中，不存在直接return，存在则更新缓存<<fourth>>
----- 缓存击穿<<fourth>>
------ 概念：某个热点key，在某一时刻突然失效，导致大量请求直接访问数据库，和雪崩的区别是雪崩是短时间内大面积key失效 <<fourth>>
---- 消息队列 <<fourth>>
----- Kafka<<fourth>>
----- Rocket MQ<<fourth>>
-- 数据库<<eighth>>
--- Mysql<<eighth>>
---- 引擎<<eighth>>
----- InnoDB<<eighth>>
----- MyISAM<<eighth>>
---- 索引<<eighth>>
----- Hash索引<<eighth>>
------ 无序排列，适合做等值查询，无法做范围查找<<eighth>>
----- B+树索引<<eighth>>
------ InnoDB默认索引<<eighth>>
------ 多路平衡树，有序排列<<eighth>>
------ 聚簇索引<<eighth>>
------- 主键索引是聚簇索引，叶子节点保存了数据<<eighth>>
------ 非聚簇索引<<eighth>>
------- 叶子节点保存的是地址，需要再次回表查询才能查到数据<<eighth>>
------- 覆盖索引：不用二次回表查询<<eighth>>
---- 数据库事务<<eighth>>
----- ACID<<eighth>>
------ 原子性：整体不可分割<<eighth>>
------ 一致性：事务前后，从一个一致性到另一个一致性<<eighth>>
------ 隔离性：事务之间不干扰，有级别区分<<eighth>>
------ 持久性：事务一旦提交，不可更改<<eighth>>
----- 隔离级别<<eighth>>
------ 读未提交，A事务读取了B事务未提交的数据，也称为脏读<<eighth>>
------ 读已提交<<eighth>>
------ 可重复读，相对于不可重复读（也称幻读）<<eighth>>
------ 串行化，事务之间完全串行执行，无并发<<eighth>>
---- 锁<<eighth>>
---- 读写分离<<eighth>>
----- 表结构<<eighth>>
------ 字段类型<<eighth>>
------- int<<eighth>>
------- varchar<<eighth>>
------ 约束<<eighth>>
------- 约束的种类<<eighth>>
----- DDL<<eighth>>
------ 表操作<<eighth>>
------- 创建表 <<eighth>>
------- 修改表<<eighth>>
------- 删除表<<eighth>>
---- DQL（database query language）<<eighth>>
----- 语法：select selection_list /*要查询的字段名称*/ \nfrom table_list /*要查询的表名称*/ \nwhere condition /*条件语句*/ \ngroup by columns /*对结果分组*/ \nhaving condition /*分组后的条件*/ \norder by columns /*对结果排序*/ \nlimit offset_start, row_count /*对结果限定*/<<eighth>>
----- select<<eighth>>
----- from<<eighth>>
----- where<<eighth>>
----- group by having<<eighth>>
-- 作图<<ninth>>
--- UML图<<ninth>>
---- 类图<<ninth>>
---- 时序图（顺序图）<<ninth>>
---- 用例图<<ninth>>
---- 活动图<<ninth>>
---- 组件图<<ninth>>
---- 状态图<<ninth>>
---- 部署图<<ninth>>
---- 对象图<<ninth>>
---- 定时图<<ninth>>
--- 非UML<<ninth>>
---- 甘特图<<ninth>>
---- 思维导图<<ninth>>
---- ER图<<ninth>>
---- 架构图<<ninth>>
-- 设计模式<<fourteenth>>
--- 创建型<<fourteenth>>
---- 工厂<<fourteenth>>
---- 抽象工厂<<fourteenth>>
---- 单例<<fourteenth>>
---- 建造者<<fourteenth>>
---- 原型<<fourteenth>>
--- 结构型<<fourteenth>>
---- 适配器<<fourteenth>>
---- 桥接<<fourteenth>>
---- 过滤器<<fourteenth>>
---- 组合<<fourteenth>>
---- 装饰器模式<<fourteenth>>
---- 外观模式<<fourteenth>>
---- 享元模式<<fourteenth>>
--- 行为型<<fourteenth>>
---- 责任链模式<<fourteenth>>
---- 命令模式<<fourteenth>>
---- 解释器模式<<fourteenth>>
---- 迭代器模式<<fourteenth>>
---- 中介者模式<<fourteenth>>
---- 备忘录模式<<fourteenth>>
---- 观察者模式<<fourteenth>>
---- 状态模式<<fourteenth>>
---- 空对象模式<<fourteenth>>
---- 策略模式<<fourteenth>>
---- 模板模式<<fourteenth>>
---- 访问者模式<<fourteenth>>
--- J2EE<<fourteenth>>
---- MVC<<fourteenth>>
---- 业务代表模式<<fourteenth>>
---- 组合实体模式<<fourteenth>>
---- 数据访问对象模式<<fourteenth>>
---- 前端控制模式<<fourteenth>>
---- 拦截过滤器模式<<fourteenth>>
---- 服务定位器模式<<fourteenth>>
---- 传输对象模式<<fourteenth>>
-- 工具<<eleventh>>
--- 包管理工具<<eleventh>>
---- Maven<<eleventh>>
---- Gradle<<eleventh>>
--- Git<<eleventh>>
--- IDE<<eleventh>>
---- Idea<<eleventh>>
--- 代码扫描工具<<eleventh>>
---- Sonar<<eleventh>>
-- 技术网站
-- 服务器<<twelfth>>
--- Web服务器<<twelfth>>
--- Apache<<twelfth>>
--- Nginx<<twelfth>>
--- 应用服务器<<twelfth>>
---- Tomcat<<twelfth>>
---- JBoss<<twelfth>>
-- 系统设计<<thirteenth>>
--- 秒杀<<thirteenth>>
--- 单点登录<<thirteenth>>
--- 权限<<thirteenth>>
--- 文件处理<<thirteenth>>
--- Excel导入导出<<thirteenth>>
--- 云打印<<thirteenth>>
@endmindmap
```