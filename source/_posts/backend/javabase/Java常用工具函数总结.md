---
title: Java常用工具函数总结
excerpt: 日常编程中的常用Java代码总结
date: 2022-04-03 00:03:29
category:
- backend
- javabase
tags: Java, 工具, 编程
---

<p style="font-size: 16px; ">
在日常编程中，Java自带的方法和我们自己写的代码块，很多都是重复使用，但是往往记不住，一到用的时候就不停的搜索。
其实很多时候这些代码是会写的，只要再瞄一眼就懂怎么写。下面就来总结一下这些常用的代码。
</p>


### Java基础
（1）将List转成Array
```java
String[] arr =  list.toArray(new String[list.size()]);
```
（2）递归遍历文件夹
```java
/**
 * 
 * @site cn.hongkezhang.com
*/
private void listFile(File dir, String spance)
    {
        File[] files = dir.listFiles();   //列出所有的子文件
        for(File file :files)
        {
            if(file.isFile()) //如果是文件，则输出文件名字
            {
                // print the file name
                System.out.println(spance);
            }else if(file.isDirectory()) //如果是文件夹，则输出文件夹的名字，并递归遍历该文件夹
            {
                // print the dir name
                System.out.println(spance);
                //递归遍历，第二个参数为拼接的文件路径
                listFile(file, spance + file.getName() + "/"); 
            }
        }
    }
```

### Spring
（1）@Scheduled注解

@Scheduled(cron = "* * * * * *")，cron中参数依次为秒、分钟、小时、日期、月、星期、年

字段 | 允许值 |  允许的特殊字符 | 注意
-|-|-|-
秒	 |	0-59	 |	, - * / | 
分	 |	0-59	 |	, - * / |
小时	 |	0-23	 |	, - * / |
日期	 |	1-31	 |	, - * ? / L W C |
月份	 |	1-12 或者 JAN-DEC	| 	, - * / |
星期	 |	1-7 或者 SUN-SAT	 |	, - * ? / L C # | 注意1=SUN
年（可选）	| 	留空, 1970-2099	 |	, - * / | 

字符 | 解释 | 举例
-|-|-
,和- | 用于表达范围 | 例如：子表达式（星期）可以为 “MON-FRI”，“MON，WED，FRI”，“MON-WED,SAT”
\* | 代表所有可能的值 | 例如，“\*”在子表达式（月）里表示每个月的含义，“\*”在子表达式（星期）表示星期的每一天
/ | 用来指定数值的增量 | 例如：在子表达式（分钟）里的“0/15”表示从第0分钟开始，每15分钟；“3/20”表示从第3分钟开始，每20分钟（它和“3，23，43”）的含义一样
？ | 仅被用于（日期）和（星期）两个子表达式，表示不指定值，二者只选其一，当2个子表达式其中之一被指定了值以后，为了避免冲突，需要将另一个子表达式的值设为“？” | 
L | 仅被用于（日期）和（星期）两个子表达式，它是单词“last”的缩写。它在两个子表达式里的含义是不同的。在（日期）子表达式中，“L”表示一个月的最后一天，在（星期）自表达式中，“L”表示一个星期的最后一天，也就是SAT，如果在“L”前有具体的内容，它就具有其他的含义了。 | 例如：“6L”表示这个月的倒数第６天，“ＦＲＩＬ”表示这个月的最一个星期五

---
持续更新中...