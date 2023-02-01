---
title: UML系列（1）类图
date: 2022-03-03 09:16:13
category:
- tool
- uml
tags: uml, 类图
---

<font size=4>
UML类图是一种结构图，反映了类和类之间的关系，其是一种静态建模方法，适用于软件的设计阶段。
</font>

### 1、类与类之间的关系
+ **继承。继承也称为泛化，用于描述父类和子类之间的关系。**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-inherit.png" align=center  style="width: 400px; "/></div>

+ **实现。用于描述接口和实现类之间的关系。**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-implement.png" align=center  style="width: 400px; "/></div>

+ **组合。用于描述整体与部分之间的关系。**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-composition.png" align=center  style="width: 400px; "/></div>

+ **聚合。也是用于描述整体和部分之间的关系。**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-aggregation.png" align=center  style="width: 400px; "/></div>

+ **关联。一个类引用了另一个的实例。**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-association.png" align=center  style="width: 400px; "/></div>

+ **依赖。类A的变化引起了类B的变化，则B依赖于A。**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-dependency.png" align=center  style="width: 400px; "/></div>

+ **汇总图**
<div style="text-align: center;" ><img src="/images/uml_1/plantuml-summary.png" align=center  style="width: 100%; "/></div>

