---
title: Java Stream 流式编程Sorted排序用法
date: 2022-06-08 16:13:29
category:
- backend
- javabase

type: 转

tags: Java Stream 流式编程Sorted排序用法

---

### 使用示例

```java
public class StreamTest {
public static void main(String[] args) {
List<Person> personList = new ArrayList<Person>();

personList.add(new Person("Sherry", 9000, 24, "female", "New York"));
personList.add(new Person("Tom", 8900, 22, "male", "Washington"));
personList.add(new Person("Jack", 9000, 25, "male", "Washington"));
personList.add(new Person("Lily", 8800, 26, "male", "New York"));
personList.add(new Person("Alisa", 9000, 26, "female", "New York"));

// 按工资升序排序（自然排序）
List<String> newList = personList.stream().sorted(Comparator.comparing(Person::getSalary)).map(Person::getName)
.collect(Collectors.toList());
// 按工资倒序排序
List<String> newList2 = personList.stream().sorted(Comparator.comparing(Person::getSalary).reversed())
.map(Person::getName).collect(Collectors.toList());
// 先按工资再按年龄升序排序
List<String> newList3 = personList.stream()
.sorted(Comparator.comparing(Person::getSalary).thenComparing(Person::getAge)).map(Person::getName)
.collect(Collectors.toList());
// 先按工资再按年龄自定义排序（降序）
List<String> newList4 = personList.stream().sorted((p1, p2) -> {
if (p1.getSalary() == p2.getSalary()) {
return p2.getAge() - p1.getAge();
} else {
return p2.getSalary() - p1.getSalary();
}
}).map(Person::getName).collect(Collectors.toList());

System.out.println("按工资升序排序：" + newList);
System.out.println("按工资降序排序：" + newList2);
System.out.println("先按工资再按年龄升序排序：" + newList3);
System.out.println("先按工资再按年龄自定义降序排序：" + newList4);
}
}
```

### 原文地址
本文转载自：`https://blog.csdn.net/listeningsea/article/details/123141950`