---
title: Java锁系列（2）Synchronized的使用
date: 2022-03-01 20:47:28
category:
- backend
- javabase
tags: 锁
---

<font size=4>
synchronized锁关键字，在Java中有着很重要的用途，本文从使用方式、可重入性、锁升级等方面来介绍synchronized。
</font>

### 1、四种使用方式
+ 修饰实例方法。
```java
public synchronized void method() {
    // do something
}
```

+ 修饰实例方法中的代码块。
```java
public void method() {
    synchronized(a) {
        // do something
    }
}
```
其中a可以是this，类，普通变量

+ 修饰静态方法
```java
public static synchronized void method() {
    // do something
}
```

+ 修饰静态方法中的代码块
```java
public static void method() {
    synchronized(a) {
        // do something
    }
}
```
其中a可以是类，普通变量

### 2、可重入性
可重入性概念：当一个线程请求已经被自身持有的锁时，可以再次成功获取，就说这个锁具有可重入性。
思考：如果锁不具备可重入性，会造成什么结果？一个叫S的线程持有锁A，在临界资源的执行过程中再次获取锁A，需要该S线程首先释放锁A，此时S线程正在临界资源中是无法释放锁的。申请的锁正式等待释放的锁，显然形成了死循环，死锁。
synchronized是可重入的。
```java
// 当子类继承父类时，子类可以在synchronized同步方法中调用父类的synchronized同步
// 方法。这里首先要明确一点，本代码中子类对象调用父类的同步方法，持有的是同一把锁。
import java.io.*;
 
 
class Parent    {
    public synchronized void willDo()    {
        System.out.println("我是父类的方法");
    }
}
 
 
class Child extends Parent {
 
    @Override
    public synchronized void willDo() {
    	super.willDo();
        System.out.println("我是子类方法");
    }
 
    public static void main(String[] args) {
        Child child = new Child();
        child.willDo();
    }
}
```
案例二：
```java
class Test implements Runnable    {
    static Test instance = new Test();
    static int i=0;
    static int j=0;

    @Override
    public void run() {
        for(int j = 0; j < 10; j++) {
 
            //当前实例对象锁
            synchronized(this){
                i++;
                inc();
            }
        }
    }
 
    public synchronized void inc()    {
        j++;
    }
 
    public static void main (String[] args) throws java.lang.Exception    {
        Thread t1 = new Thread(instance);
        t1.start();
        t1.join();
        System.out.println(i);
    }
}
```

### 3、锁升级过程
synchronized锁升级（锁膨胀）概念，是jdk1.6中引入的。synchronized锁状态具体可分为：无锁状态，偏向锁状态，轻量级锁状态，重量级锁状态。

#### 什么是无锁状态？
JVM配置参数中，可指定`-XX:BiasedLockingStartupDelay = 0`来延迟开启偏向锁，可用`-XX:-UseBiasedLocking=false`来关闭偏向锁，默认进入轻量级锁状态。如果设置`-XX:BiasedLockingStartupDelay = 5`延迟时间为5，则在Java应用后的5秒内，线程加锁的状态将直接为轻量级锁。如果无线程加锁，可认为此时为无锁状态。

#### 偏向锁状态
上文已经说了JVM参数设置偏向锁的延迟开启功能。当锁是可偏向状态时，线程对synchronized同步代码会加偏向锁。当线程S访问同步代码并获取锁时，会在Java对象的头部和栈帧中记录偏向的锁的threadID，如果有线程获取锁时，先比较该线程的threadID和Java对象头中的threadId是否一致，如果相等，则说明是同一个线程再次获取锁，可以直接获取（可重入特性）；如果threadId不相等，则查看线程S是否还活着，如果线程S已经dead，则线程2可获取该锁并设置为偏向锁。如果线程还活着，需要判断线程S是否还需要持有这个偏向锁，如果不需要则将该锁偏向新的线程，否则撤销偏向锁并将锁升级为轻量级锁。

#### 轻量级锁状态
上文在介绍“偏向锁状态”时，已经说明了何时偏向锁将切换成轻量级锁。轻量级锁相对于重量级锁而言，不需要申请互斥量，只需要将markwork中的部分信息执行CAS操作指向新的线程ID，如果更新成功，则表示成功获取锁，否则当前线程开始自旋等待锁。但是长时间的自旋是非常耗费CPU等资源的，所以随着锁竞争的加剧，这种忙等（busy waiting）会造成更大的资源浪费。此时便需要考虑锁的进一步升级。

#### 重量级锁状态
上面说了锁忙等现象，多个线程在自旋获取锁的情况加剧的时候，可将锁升级为重量级锁，持有重量级锁的线程正常执行，后续竞争该锁的线程将进入阻塞状态（非自旋）。
