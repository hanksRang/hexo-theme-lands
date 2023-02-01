---
title: 你可能把getElementsByClassName用错了
date: 2022-05-21 14:45:34
category:
- frontend
- js
  
tags: 你可能把getElementsByClassName用错了

---

### 背景
<p>DOM，全称Document Object Model，文档对象模型。对DOM常用的操作包括document.getElementById，
document.getElementsByClassName，前者是获取指定ID的节点，一个dom对象中只有一个指定的ID节点；后者是获取指定
className来获取节点。
</p>

### getElementsByClassName遇坑
这个方法，乍一看返回的是一个数组形式的对象，如果直接使用forEach来遍历，会报错no function named forEach的错误。

### 正确用法

#### for循环遍历
```js
var datestrs = document.getElementsByClassName("datestr");
    if (datestrs != undefined) {
        for (let i = 0; i < datestrs.length; i ++) {
            let item = datestrs[i]
            // do something
        }
    }
```

#### Array.from转换

```js
var datestrs = document.getElementsByClassName("datestr");
if (datestrs != undefined) {
    datestrs = Array.from(datestrs)
    datestrs.forEach(function (item){
        // do something
    })
}
```
---

2022-05-29更新
上述两种使用方式中，Array.from转换后虽然也能遍历，但是有些场景会改变原有对象的属性，需要谨慎使用。
