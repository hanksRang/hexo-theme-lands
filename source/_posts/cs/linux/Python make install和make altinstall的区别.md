---
title: Python make install和make altinstall的区别
date: 2022-04-25 15:18:30
category:
- cs
- linux
tags: linux, Python安装, make install 和 make altinstall
---

### 解释
make altinstall与make install的区别，altinstall跳过创建python链接和手册页链接的操作。

如果使用make install，在系统中将会有两个不同版本的Python在/usr/bin/目录中，这将可能会导致很多问题。
