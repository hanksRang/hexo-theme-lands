---
title: scrapy框架如何进行debug调试
date: 2022-07-10 15:24:11
category:
- backend
- python
  
tags: scrapy框架如何进行debug调试

---

```python
from scrapy import cmdline

cmdline.execute(['scrapy','crawl','images'])

```