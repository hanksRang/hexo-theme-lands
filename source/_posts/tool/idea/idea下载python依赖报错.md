---
title: idea下载python依赖django-request报错
date: 2022-04-13 22:37:17
category: 
- tool
- idea
tags: idea, 插件市场, setting, plugins, django-request
---

<img src='/images/idea/marketplugin/1.png'/>

如上图中报错，按照提示执行如下代码：
```
python -m pip install --upgrade pip
```

执行成功该命令，但是问题依然存在，这里我便尝试升级python2.7到python3.10，问题果然被解决了。

以上可以作为参考，如果你也报了同样的错误，可以尝试升级python来解决。