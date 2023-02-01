---
title: Hexo g命令卡死打包CPU占用百分之百解决办法
date: 2022-06-30 17:03:27
category:
- sitebuilding
- hexo 
  
tags: Hexo g命令卡死打包CPU占用百分之百解决办法

---

### 背景
今天在用`hexo g`打包命令发布的时候，CPU占用100%，直接导致服务器宕机。

### 解决办法
在打包的时候规定线程数，如`hexo g -c 2`，规定使用两个线程，`hexo g -c 8`用8个线程。一般而言，线程数不要超过CPU核心数。