---
title: 介绍一个漂亮的plantuml主题
date: 2022-08-10 17:18:51
category:
- tool
- uml

tags: 介绍一个漂亮的plantuml主题

---

**引入方式**
' 引入主题
!include xxx/frlh.style

**主题源码**

```puml
@startuml

' 预置颜色
!$c0="#transparent"
!$c1="#E1F5A9"
!$c2="#F3E2A9"
!$c3="#F5A9A9"
!$c4="#A9E2F3"
!$c5="#ECCEF5"


skinparam style strictuml
skinparam backgroundColor write
hide empty description


' 时序图
skinparam Sequence {

MessageAlign center

LifeLine {
BorderColor black
BackgroundColor write
}

Arrow {
Color black
BackgroundColor write
FontColor black
FontSize 13
FontName Monaco
}

Actor {
BorderColor black
BackgroundColor write
FontColor black
FontSize 14
FontName Monaco
}

Participant {
BorderColor black
BackgroundColor write
FontName Monaco
FontSize 14
FontColor black
}

Group {
BorderColor black
BorderThickness 0.7
FontName Monaco
FontSize 11
FontColor black

Header {
BorderColor black
BorderThickness 0.7
FontName Monaco
FontSize 11
FontColor black
}

Body {
BackgroundColor transparent
}
}

Box {
BorderColor black
}

}



' 流程图
skinparam Activity {

BorderColor black
BorderThickness 1
BackgroundColor write
LineColor red
FontColor black
FontName Monaco
FontSize 14

Arrow {
Color black
Thickness 0.5
BackgroundColor write
FontColor black
FontSize 14
FontName Monaco
MessageAlignment center
}

Diamond {
BorderColor black
BorderThickness 0.7
BackgroundColor write
LineColor black
FontColor black
FontName Monaco
FontSize 14
}

}

skinparam Condition {
Style InsideDiamond
EndStyle hline
}

'状态图
skinparam State {
BackgroundColor write
BorderColor black
ArrowThickness 1
}

right footer <font size=8 color=ghostwhite><&align-right>FRLH<&align-left></font>

@enduml

```