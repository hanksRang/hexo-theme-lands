---
title: idea无法查看文档注释的问题解决
date: 2022-02-27 10:40:56
category: 
- tool
- idea
tags: idea, intellij
---

这个问题的出现，是因为我使用的是jdk11的编译版本，但是本地只有jdk8的源码，说明没有源码查看不了jdk文档。

File ——> Project Structure ——> Project Settings ——> Project
设置Project SDK和Project language level为1.8和8即可
