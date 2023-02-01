---
title: 记一次Js中JSON数据乱码的坑
date: 2022-04-29 22:45:34
category:
- frontend
- js
tags: Js中JSON数据乱码, html乱码
---

今天在用js遍历json数据的时候，一直出现json转成乱码的问题，搞了半天，最后在html文件中设置如下参数解决了问题：

```html
<head>
    <meta charset="UTF-8">
</head>
```