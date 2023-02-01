---
title: js中forEach函数
date: 2022-03-25 00:45:34
category:
- frontend
- js
tags:
---

<font size=4>
在使用forEach函数时，迭代方式需要注意
</font>

### 迭代一个function函数
利用如下方式：
```js
cats.forEach(rewrite)

function rewrite(item, index) {
    console.log("item: " + item)
    if (url.indexOf(item) > 0 && url.indexOf('#cat-location') < 1) {
        location.href = url + '#cat-location'
        console.log("item: " + item)
        document.getElementById("menu" + item).className = 'active'
        return ;
    }
}
```
其中item是元素，index是索引
