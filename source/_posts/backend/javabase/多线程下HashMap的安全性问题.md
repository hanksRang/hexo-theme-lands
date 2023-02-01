---
title: 多线程下HashMap的安全性问题
date: 2022-10-11 20:20:28
category:
- backend
- javabase

tags: 多线程下HashMap的安全性问题

---

### 多线程线程安全
<p>JVM是支持多线程的，多线程环境下，要考虑线程安全的问题。Java中有些类的对象是多线程下线程安全的，有的则
是线程不安全的。线程安全的类如HashTable，线程不安全的类如ArrayList、HashMap。因此，我们在多线程
环境下使用这些类时，需要考虑线程安全的问题。</p>

### 如何使用线程不安全的类
诸如ArrayList、HashMap这些类，在多线程下，我们可以将其对象变为线程安全的。
其中一种方法是使用java.util.Collections类中的方法：
```java
List syncList = Collections.sychronizedList(new ArrayList());
Map syncMap = Collections.sychronizedMap(new HashMap());
```