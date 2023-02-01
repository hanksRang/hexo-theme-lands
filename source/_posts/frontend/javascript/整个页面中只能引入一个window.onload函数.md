---
title: 整个页面中只能引入一个window.onload函数
date: 2022-04-25 14:45:34
category:
- frontend
- js
tags: window.onload = funcion() {}引入问题, js, javascript
---

### 问题描述

<p>一个页面中，只能引入一个window.onload = function() {} 函数，如果引入多个，将造成
后面的window.onload = function() {}失效。</p>

### 解决办法

将两个window.onload = function() {}合并到一起如：

```js
window.onload = function() { 
    // doSomething a;
}
window.onload = function() { 
    // doSomething b; 
}
```

合并为：
```js
window.onload = function() { 
    // doSomething a; 
    // doSomething b; 
}
```

