---
title: 纯原生js监听DOM文档加载完成后执行方法
date: 2022-06-10 10:22:02
category:
- frontend
- js
  
tags: 前端

---

### 实现方式
```js
// 通过事件监听执行
		// DOMContentLoaded事件只会等到dom元素加载完毕就会执行
document.addEventListener("DOMContentLoaded", function(){
    console.log(1);
    // do something
})
```

<p>相较于上述方式，`window.onload = function() {}`也可以实现类似功能，但是一个页面只能引入一个`window.onload = function() {}`，
两种方式协同使用，可以让代码更加灵活。</p>