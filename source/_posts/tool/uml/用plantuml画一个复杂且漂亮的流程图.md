---
title: 用plantuml画一个复杂且漂亮的流程图
date: 2022-08-17 17:18:51
category:
- tool
- uml

tags: 用plantuml画一个复杂且漂亮的流程图

---

**效果展示**

<img src='/images/tool/uml/用plantuml画一个复杂且漂亮的流程图/img.png' />

**源码**

```puml
@startuml
scale 4000 width

' 引入主题
!include https://puml.littletools.ml/theme/frlh.style

start
:进入XXXX目录;
:创建作页文件夹;
:创建作业（脚本）;

repeat
:编辑XXXX;

fork
-> 配置XXXX基本信息;
split
:配置基本信息;
split
:修改XXXX中文名称;
note #cccccc
**注意信息**
----
XXXX中文名称不可以重名，
XXXX英文名称不可重名且不可修改
end note
split again
:修改数据源;
end split
split again
:添加代码参数;
end split

fork again
-> 查看版本信息;
split
:查看设计版本;
split again
:查看生产版本;
end split

fork again
-> 配置三大组件;

split
partition #orange "配置输入组件" {
:拖入出入组件;
:双击节点;
:配置输入组件;
split
:填写节点英文名;
split again
:填写节点中文名;
split again
:从schema列表中选择表;
end split
:保存输入节点;
}

split again
partition #lightBlue "配置XX组件" {
:拖入XX组件;
:配置XX组件;
partition #00C5CD 配置DSQL {
note #cccccc
**注意信息**
----
可配置不同的数据源，
但是采用同一种SQL
XXXX
end note
:双击XX组件;
:选择数据源;
split
  :oracle;
split again
  :mysql;
end split
:输入要执行的DSQL语句;
:点击数据测试;
:关闭XXX窗口;
}
}
split again
partition #skyBlue 配置输出组件 {
:拖入输出组件;
:双击节点;
:配置输出组件;
split
:填写节点英文名;
split again
:填写节点中文名;
split again
:从schema列表中选择表;
end split
:保存输出节点;
}
end split

:串联输入、XX、输出组件;

note right #cccccc
**提示**
----
通过带箭头的连线，
将组件进行连接，三种组件缺一不可
end note


fork again
:调整画布组件样式;

split
:放大组件;
split again
:缩小组件;
split again
:实际大小;
split again
:适应画布;
end split

end fork

:保存作页;
note #cccccc
**注意信息**
----
保存作业即生成作页的XX版本,
保存作页之后才能进行发布操作
end note
:生成设计版本;

repeat while(是否重复编辑) is (是) not (否)

:发布作业到XX系统;
:生成XX版本;
stop
@enduml
```