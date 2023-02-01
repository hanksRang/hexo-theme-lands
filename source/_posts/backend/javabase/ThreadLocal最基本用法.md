---
title: ThreadLocal最基本用法
date: 2022-06-30 16:13:29
category:
- backend
- javabase

tags: ThreadLocal最基本用法

---

### ThreadLocal知识点
ThreadLocal源码注释：
```composer log
This class provides thread-local variables.  These variables differ from
their normal counterparts in that each thread that accesses one (via its
{@code get} or {@code set} method) has its own, independently initialized
copy of the variable.  {@code ThreadLocal} instances are typically private
static fields in classes that wish to associate state with a thread (e.g.,
a user ID or Transaction ID)
```

<p>
翻译：这个类提供本地线程的变量，各个线程拥有自己独立的已初始化的副本变量，且互不相同。
ThreadLocal实例通常是多个类中的私有属性，以期在类之间
共享同一个线程的状态。
</p>

### 使用示例

现在有两个类AMain和BMain，在第一个类中设置变量，在第二个类中获取变量，比较多线程之间变量是否独立，线程内部变量是否相通。

```java
public class AMain {

    public static void a() {
        String curr = System.currentTimeMillis() + "";
        System.out.println("a设置当前线程：" + Thread.currentThread() + ", " + curr);
        ThreadLocalUtil.setValue("a", curr);
    }

}
```

```java
public class BMain {
    public static void b() {
        String a = ThreadLocalUtil.getValue("a");
        System.out.println("b获取当前线程：" + Thread.currentThread() + ", " + a);
    }
}
```

```java
public class ThreadLocalUtil {

    private static final ThreadLocal<Map<String, String>> threadLocal= ThreadLocal.withInitial(() -> new HashMap<>(10));

    public static Map<String, String> getMap() {
        return threadLocal.get();
    }

    public static String getValue(String key) {
        Map<String, String> map = threadLocal.get();
        return map.get(key);
    }

    public static void setValue(String key, String value) {
        Map<String, String> map = threadLocal.get();
        map.put(key, value);
    }

    public static void remove() {
        threadLocal.remove();
    }

    public static void main(String[] args) {
        int i = 10;
        while (i > 0) {
            new Thread(() -> {
                AMain.a();
                BMain.b();
            }).start();
            i --;
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}
```

输出结果：
```composer log
a设置当前线程：Thread[Thread-0,5,main], 1656589457636
b获取当前线程：Thread[Thread-0,5,main], 1656589457636
a设置当前线程：Thread[Thread-1,5,main], 1656589458143
b获取当前线程：Thread[Thread-1,5,main], 1656589458143
a设置当前线程：Thread[Thread-2,5,main], 1656589458646
b获取当前线程：Thread[Thread-2,5,main], 1656589458646
a设置当前线程：Thread[Thread-3,5,main], 1656589459158
b获取当前线程：Thread[Thread-3,5,main], 1656589459158
a设置当前线程：Thread[Thread-4,5,main], 1656589459670
b获取当前线程：Thread[Thread-4,5,main], 1656589459670
a设置当前线程：Thread[Thread-5,5,main], 1656589460185
b获取当前线程：Thread[Thread-5,5,main], 1656589460185
a设置当前线程：Thread[Thread-6,5,main], 1656589460698
b获取当前线程：Thread[Thread-6,5,main], 1656589460698
a设置当前线程：Thread[Thread-7,5,main], 1656589461201
b获取当前线程：Thread[Thread-7,5,main], 1656589461201
a设置当前线程：Thread[Thread-8,5,main], 1656589461714
b获取当前线程：Thread[Thread-8,5,main], 1656589461714
a设置当前线程：Thread[Thread-9,5,main], 1656589462223
b获取当前线程：Thread[Thread-9,5,main], 1656589462223
```