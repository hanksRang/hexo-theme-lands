---
title: Java的Optional类用法
date: 2022-06-01 19:25:29
category:
- backend
- javabase

tags: Java的Optional类用法

---

**用法**
判空，如果不为空则返回属性值，否则范围Unkown提示
`return Optional.ofNullable(student).map(u -> u.getGender()).orElse("Unkown");`   