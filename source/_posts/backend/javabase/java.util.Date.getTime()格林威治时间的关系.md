---
title: java.util.Date.getTime()和格林威治时间的关系
date: 2022-05-27 16:13:29
category:
- backend
- javabase
  
tags: java.util.Date.getTime()和格林威治时间的关系

---

### 背景
看下面这段熟悉的代码：
```java
Date date = new Date();
Long time = date.getTime();
```
我们都知道`date.getTime()`获取的是Long型的时间值。但是少有人知道这个时间背后隐藏的一些秘密。

### 源码分析
```java
/**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT
     * represented by this <tt>Date</tt> object.
     *
     * @return  the number of milliseconds since January 1, 1970, 00:00:00 GMT
     *          represented by this date.
     */
    public long getTime() {
        return getTimeImpl();
    }
```
<P>注意这个方法返回的是自从格林威治时间1970年01月1日0点0分0秒以后的毫秒数值。中国处于格林威治时间的GMT + 8区，
经实验，只能获取1970年01月01日08点0分0秒以后的毫秒数值。其实也不难理解，GMT = GMT + 0区，即英国伦敦处于这个时间，
从1970年01月1日0点0分0秒开始授时的时候，GMT + 8区已经到达8点，所以只能取到这以后的数值。
</P>

