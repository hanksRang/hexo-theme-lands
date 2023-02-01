---
title: Hash系列（3）Java-String类的hashCode函数
date: 2022-02-27 11:29:54
category:
- cs
- ds
tags:
---

<font size=4>
哈希操作中，使用String类型做为key的场景十分普遍，分析String的hashCode函数很有意义
</font>

```
Returns a hash code for this string. The hash code for a String object is computed as

       s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]

using int arithmetic, where s[i] is the ith character of the string, n is the length of the string, 
and ^ indicates exponentiation. (The hash value of the empty string is zero.)
Returns:
a hash code value for this object.
```

```java

public int hashCode() {
        int h = hash;
        if (h == 0 && value.length > 0) {
            char val[] = value;

            for (int i = 0; i < value.length; i++) {
                h = 31 * h + val[i];
            }
            hash = h;
        }
        return h;
    }
```

文章一开头的代码注释，给出了String的hash code计算方式为：s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]，下面采用数学归纳法分析此公式是如何和hashCode()这个方法等价的：

注：int h = hash; hash的初始值为0，所以h初始值为0;  将`h = 31 * h + val[i];`中的h替换为`h(i + 1) = 31 * h(i) + val[i];`，其中h(0) = h = 0

当i = 0, h(1) = 31 * h(0) + val[0]
当i = 1, h(2) = 31 * h(1) + val[1] = 31 * (31 * h(0) + val[0]) + val[1] = 31 * val[0] + val[1]
当i = 2, h(3) = 31 * h(2) + val[2] = 31 * (31 * val[0] + val[1]) + val[2] = 31 ^ 2 * val[0] + 31 * val[1] + val[2]
.
.
.
当i = n - 1（n为数组val[]的长度）时，h(n) = 31 ^ (n - 1) * val[0] + 31 ^ (n - 2) * val[1] + ... + 31 * val[n - 2] + val[n - 1]，将val替换为s就得到了注释中给出的公式。



