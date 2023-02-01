---
title: idea插件市场打不开
date: 2022-04-13 22:32:17
category: 
- tool
- idea
tags: idea, 插件市场, setting, plugins
---

今天在使用idea的时候，发现插件市场打不开，开始还怀疑被qiang了，后来查阅了很久才发现是需要配置hosts文件。

### 原因
造成这个原因，主要还是对应的域名解析的ip无法访问，故可以使用域名查询对应ip的方式找到对应的能使用的ip，可以使用ping的方式看一下哪些可以ping通。

<img src='/images/idea/marketplugin/1.png'/>

ping 99.86.199.23 能正常通信

### 修改hosts文件
添加如下两行代码到hosts文件，问题解决
```
99.86.199.23 plugins.jetbrains.com
99.86.199.23 jetbrains.com
```