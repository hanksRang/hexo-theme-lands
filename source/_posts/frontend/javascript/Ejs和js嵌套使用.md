---
title: Ejs和js嵌套使用
date: 2022-03-25 01:09:52
category:
- frontend
- js
tags:
---

<font size=4>
今天在写Hexo主题的时候，需要在js脚本中引用Hexo变量，记录一下使用方式
</font>

### 引用数组的方式
（1）先在<%%>代码块中新生成数组arr
```js
<%var arr = [] %>
    <% for (var name in theme.menu){ %>
        <% arr.push(theme.menu[name]) %>
    </li>
<% } %>
```
（2）由于<%=%>会将变量转化成html，在js中利用split函数重新分割组合成数组
注意用双引号引入
```js
let  cats = "<%=arr%>".split(",");
```