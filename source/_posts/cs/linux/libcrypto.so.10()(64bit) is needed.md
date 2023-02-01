---
title: libcrypto.so.10()(64bit) 被 mongodb-org-shell-5.0.5-1.el7.x86_64 需要
date: 2022-04-15 16:29:30
category:
- cs
- linux
tags: linux, centos 8, libcrypto.so.10, 安装mongodb
---

### 问题描述
今天在CentOS 8上安装mongo DB的时候，报错找不到依赖。这个依赖太熟悉了，以前也遇到过多次。这次就记录一下如何解决这类问题。
执行rpm -ivh mongodb-org-shell-5.0.5-1.el7.x86_64.rpm，报如下错误：
```composer log
警告：mongodb-org-shell-5.0.5-1.el7.x86_64.rpm: 头V3 RSA/SHA1 Signature, 密钥 ID                                                                                                              e2c63c11: NOKEY
错误：依赖检测失败：
        libcrypto.so.10()(64bit) 被 mongodb-org-shell-5.0.5-1.el7.x86_64 需要
        libcrypto.so.10(OPENSSL_1.0.1)(64bit) 被 mongodb-org-shell-5.0.5-1.el7.x                                                                                                             86_64 需要
        libcrypto.so.10(OPENSSL_1.0.1_EC)(64bit) 被 mongodb-org-shell-5.0.5-1.el                                                                                                             7.x86_64 需要
        libcrypto.so.10(libcrypto.so.10)(64bit) 被 mongodb-org-shell-5.0.5-1.el7                                                                                                             .x86_64 需要
        libssl.so.10()(64bit) 被 mongodb-org-shell-5.0.5-1.el7.x86_64 需要
        libssl.so.10(libssl.so.10)(64bit) 被 mongodb-org-shell-5.0.5-1.el7.x86_6 
```

### 解决问题
进入网站：https://pkgs.org/search，这个网站上面有很多包可以下载

搜索libcrypto.so.10，如图：
<img src='/images/linux/libcrypto/2.png' />

选择CentOS 8下面的官方包，点击进入

这里有两种安装方式，rpm和dnf，我选择的是下面一种
<img src='/images/linux/libcrypto/3.png' />

安装完成之后，再执行rpm -ivh mongodb-org-shell-5.0.5-1.el7.x86_64.rpm，正确
<img src='/images/linux/libcrypto/4.png' />
