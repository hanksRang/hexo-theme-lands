---
title: 如何禁止www.code.91tw.net这个垃圾网站上网
date: 2022-08-16 17:54:17
category:
- cs
- windows

tags: 如何禁止www.code.91tw.net这个垃圾网站上网

---

笔者最近被这个域名为www.code.91tw.net垃圾广告网站困扰，弹窗、屏保各种恶心，于是想办法禁止他上网。

其实方法也很简单，找到hosts文件，位置：C:\Windows\System32\drivers\etc，编辑，在末尾加上如下这段

```text
# 禁止上网的网站，垃圾网站滚粗吧
127.0.0.1 www.code.91tw.net
```

此时这个域名就不能上网啦！