---
title: input输入框英文发生转换解决办法
date: 2022-06-10 00:45:34
category:
- frontend
- css
  
tags: input输入框英文发生转换解决办法

---

### 介绍
css text-transform属性有四个可选值： 

> none 默认值，不转换发生

> capitalize 将每个单词的第一个字母转换成大写，其余无转换发生

> uppercase 转换成大写

> lowercase 转换成小写

### 使用方式
若不想要输入的文本发生转换，使用：`<input name="s" type="text" style="text-transform: none;" />`