---
title: Plantuml作图工具安装和使用
date: 2022-03-04 16:44:44
category:
- tool
- uml
tags: plantuml, uml, 作图工具, 编码式作图工具, 类图、用例图、思维导图作图工具
---

### 背景
前几天为了画UML图，安装了graphviz工具，用了两天体验实在不佳。于是准备尝试一个新的工具plantuml，用起来顺手很多，下面就来看一下怎么安装的。

### 1、plantuml官网
打开网页：`https://plantuml.com/zh/starting`

### 2、下载可执行jar包
地址（以官网的下载地址为准，因为版本可能变动）：`http://sourceforge.net/projects/plantuml/files/plantuml.jar/download`

### 3、安装graphviz-dot
这一步不是必须的，但是如果需要绘制除了“时序图”、“活动图”之外的图，如类图，就需要安装。
这里给出Linux上的安装办法：`yum -y install graphviz`，-y表示安装过程中遇到询问全部同意的意思。更多关于graphviz工具的介绍，可以查看：<a target="_blank"  href="http://cn.hongkezhang.com/2022/02/27/tool/uml/Graphviz%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8/">graphviz安装和使用</a>

### 4、使用方式
（1）将下载的可执行jar包置于某一文件夹下
（2）创建文件test.txt，输入代码，保存文件并退出
（3）执行`java -jar plantuml.jar test.txt`，执行成功会生成一个test.png的图片

### 5、示例
实现一个继承关系的类图
```txt
@startuml
'引入主题，单行注释用一对单引号引起来'
!include ../sketchy-outline/puml-theme-sketchy-outline.puml
scale 1080*720

Car <|-- Bus
Car <|-- Taxi

class Car {
+ name: String
+ drivers(): List
}

class Bus {

}

class Taxi {

}

@enduml
```

效果展示：
<img src="/images/drawtools/plantuml-inherit.png" style="width: 500px; height: 500px"/>
