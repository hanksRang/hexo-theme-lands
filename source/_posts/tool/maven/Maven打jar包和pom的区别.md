---
title: Maven打jar包和pom的区别
date: 2022-02-14 19:36:53
category:
- tool
- maven 

tags: Maven打包方式, packaging jar, packaging pom

---

### 背景
<p>Maven常用的两种打包方式是<packaging>jar</packaging>和<packaging>pom</packaging>，但是
很少人想过这两者的区别。
</p>

### <packaging>jar</packaging>和<packaging>pom</packaging>的区别
如图名为common-utils的jar包：

如图是名为common-utils的pom包：

#### 具体区别：
<p>jar包中包含common-utils的源码，而pom包只包含pom文件中的依赖等信息。假如我这里要引用common-utils的源码
显然就要打成jar包，如果我只需要使用common-utils所包含的依赖包信息，那么就达成pom。</p>