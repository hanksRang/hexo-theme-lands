---
title: npm全局安装和本地安装的区别
date: 2022-04-27 11:28:11
category:
- server
- nodejs
tags: npm全局安装和本地安装的区别
---

<img style="width: 100%" src='/images/server/nodejs/npm全局安装和本地安装的区别/1.png' />

### -g 和 -d

#### 安装目录区别
<p>使用node install webpack -g的方式来进行全局安装，安装目录默认是node安装目录下的node_moudle文件夹。使用node install webpack -d的方式来进行本地安装，
将默认安装在当前项目的node_modules文件夹。</p>

#### 全局安装使用方式
（1）可以在命令行中去使用安装的包，（2）在项目中要使用，需要修该包导入方可使用。

#### 本地安装使用方式
本地安装完成后将在项目的package.json中的devdependencies或者dependencies加入安装包的版本号信息。需要在项目中使用时，只需要使用import或者require()导入即可使用。


### 总结
<p>本地安装可以为不同项目安装不同的依赖包，对全局安装是一定的补充，很大程度上是解决全局安装的不完善的问题，
各种版本的包很多的时候会出现某些冲突，本地安装可以根据自己选择的需要的版本，避免冲突。</p>