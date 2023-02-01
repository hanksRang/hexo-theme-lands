---
title: js的for循环遍历
date: 2022-03-25 00:45:34
category:
- frontend
- js
tags:
---

```js
for (var cat in cats) {
    console.log("item: " + cats[cat]) 
    // 这里cat遍历出来是索引下标，需要用数组+下标的形式引用
}
```