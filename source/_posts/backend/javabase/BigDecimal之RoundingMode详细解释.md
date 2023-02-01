---
title: BigDecimal之RoundingMode详细解释
date: 2022-06-01 16:13:29
category:
- backend
- javabase

tags: BigDecimal之RoundingMode详细解释

---

### 介绍
<p>BigDecimal作为精确计算的基础，在Java中有着很重要的地位。在要求高精度计算的时候，需要借助BigDecimal类提供的一些方法。
RoundingMode指明了在做精确计算时，如何对精度进行保留。
</p>

### 用法

如下：5除以3，以四舍五入的模式保留6位小数
```java
new BigDecimal("5").divide(new BigDecimal("3"), 6, RoundingMode.HALF_UP);
```

以下示例均以scale = 2，即保留两位小数

#### RoundingMode.DOWN
等价于 BigDecimal.ROUND_DOWN，直接舍弃多余的位
如，3.56788888 -> 3.56

#### RoundingMode.UP
等价于BigDecimal.ROUND_UP，绝对值向上取整（远离坐标原点的方向进位）
如，3.5638 -> 3.57，-3.5638 -> -3.57

#### RoundingMode.CEILING
等价于：BigDecimal.ROUND_CEILING，向上取整（往坐标轴正方向进位）
如，-6.2689 -> -6.26，6.2689 -> 6.27，6.2612 -> 6.27

#### RoundingMode.FLOOR
等价于：BigDecimal.ROUND_FLOOR，向下取整（往坐标轴负方向进位）
如，5.677 -> 5.67，-5.677 -> -5.68

#### RoundingMode.HALF_UP
等价于：BigDecimal.ROUND_HALF_UP，绝对值四舍五入
如：5.677 -> 5.68，-5.677 -> -5.68，-5.612 -> -5.61

#### RoundingMode.HALF_DWON
等价于BigDecimal.ROUND_HALF_DWON，绝对值五舍六入
如：5.655 -> 5.65，5.656 -> 5.66，-5.655 -> -5.65

#### RoundingMode.HALF_EVEN
<p>等价于BigDecimal.ROUND_HALF_EVEN，银行家舍入，当舍入位非 5 时，绝对值四舍六入。
当舍入位为5时，看舍入位前一位，即保留位的最后一位，当其为奇数时进位，否则舍位。</p>

如：6.565 -> 6.56，6.555 -> 6.56，6.354 -> 6.35，6.366 -> 6.37

#### RoundingMode.UNNECESSARY
传入的数据一定满足指定的小数模式，如果不满足，抛出ArithmeticException异常
