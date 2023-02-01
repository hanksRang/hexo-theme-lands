---
title: MAC github 访问加速
date: 2022-02-12 17:42:28
category:
- cs
- mac
tags: Apple, Mac, 苹果
---

<p style="font-size: 16px; ">
由于国内的一些政策，可能在访问Github页面时产生延迟甚至无法访问，我们可以采取使用代理主机的方式来访问。
</p>

修改hosts文件，添加如下加速地址：
```
140.82.113.3    github.com
185.199.108.153 assets-cdn.github.com
199.232.69.194  github.global.ssl.fastly.net
```
