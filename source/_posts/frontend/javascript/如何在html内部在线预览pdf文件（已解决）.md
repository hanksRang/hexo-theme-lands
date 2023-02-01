---
title: 如何在html内部在线预览pdf文件（使用jquery.media.js插件，已解决）
date: 2022-06-07 14:45:34
category:
- frontend
- js

tags: 如何在html内部在线预览pdf文件（已解决）

---

### 背景
有时候，我们需要在HTML页面中预览PDF文件，而不是将PDF下载到本地或者在浏览器的新建窗口中预览。

### 实现方式
js代码：
```js
<script src="/jquery-1.12.4.min.js"></script> 
<script src="/jquery.media.js"></script>
```
html代码：
```html
<div class="panel-body">
    <a id="media" href="pdf1.pdf"></a>  
</div>
```
js代码：
```js
<script type="text/javascript">
$('#media').media({width:800, height:600});  
</script>
```

### 资源
js下载地址：
https://github.com/hanksRang/resources/blob/master/src/main/resources/jquery-1.12.4.min.js
https://github.com/hanksRang/resources/blob/master/src/main/resources/jquery.media.js

### 在线效果
在线效果预览地址：<a target="_blank" href="http://cn.hongkezhang.com/2022/06/06/graduate/eng/2021%E5%B9%B4%E8%80%83%E7%A0%94%E8%8B%B1%E8%AF%AD%E7%9C%9F%E9%A2%981/">预览</a>