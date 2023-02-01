---
title: java正则表达式匹配年-月-日 时:分:秒并返回匹配到的值
date: 2022-06-01 19:25:29
category:
- backend
- javabase
  
tags: java正则表达式匹配年-月-日 时:分:秒并返回匹配到的值

---

### 背景
网上很多地方给出的是错的，很多雷同的错误答案也是未经验值就直接拷贝，本文章给出的解决办法真实可用。

### 解决办法

参考完整代码：
```java
    public static String REGEX_YYYY_MM_DD_HH_mm_SS =
            "(\\d{4})[-/](1[0,1,2]|0?\\d)[-/](3[0,1]|[1,2]\\d|0?\\d)\\s+(20|21|22|23|[0-1]\\d):[0-5]\\d:[0-5]\\d";

    public static String matchDate(String a, String regex) {
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(a);
        Boolean flag = matcher.find();
        String str = matcher.group();
        return str;
    }

    public static void main(String[] args) {
        matchDate("测试2012-12-12 01:22:33测试结束", REGEX_YYYY_MM_DD_HH_mm_SS);
    }
```