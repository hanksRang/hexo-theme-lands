---
title: js获取浏览器地址栏地址
date: 2022-10-11 01:09:52
category:
- frontend
- js

tags: js获取浏览器地址栏地址

---

### JS代码

```javascript
<script type="text/javascript">

    function beian() {
    var url = window.location.href;
    if (url.indexOf("hongkezhang.com") > 0) {
        alert("恭喜你获取到hongkezhang.com")
    }
    if (url.indexOf("xuejianwang.top") > 0) {
        alert("恭喜你获取到xuejianwang.top")
    }
    }

    beian();
</script>
```