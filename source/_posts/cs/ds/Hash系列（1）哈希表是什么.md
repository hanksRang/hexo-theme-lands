---
title: Hash系列（1）哈希表是什么
date: 2022-02-25 14:51:31
category: 
- cs
- ds
tags:
---

<p style="text-indent: 2em; font-size: 16px; ">
<b>哈希表定义：</b>给定表M，存在函数f(key)，对任意给定的关键字key，都存在y=f(key)的关系，其中y表示该关键字在表中的地址，称表M为哈希表，f(key)为哈希函数。
</p>
<p style="text-indent: 2em; font-size: 16px; ">
<b>哈希冲突的定义：</b>对不同的关键字可能得到同一散列地址，即k1≠k2，而f(k1)==f(k2)，这种现象称为冲突（英语：Collision）。
</p>
<p style="text-indent: 2em; font-size: 16px; ">
哈希表也叫做散列表，下文中提到的“散列”可等价于“哈希”。
</p>

### 哈希函数的几种构造方法

#### 1、直接定址法
这个方法可以描述为， 取关键字值或关键字的某个线性函数值为哈希地址：`f(key) = a*key + b)`
应用场景：
（1）如要存储1900年以来，每一年的人口统计。哈希函数可描述为，常数a=1，b=-1900：`f(key) = key -1900`；此时当key = 1900时，对应的f(key) = 0，即对应地址为0。
（2）存储0-100岁年龄人群每个整数值年龄的人口，哈希函数可描述为，常熟a=1，b=0：`f(key) = key`

*直接定址法优点是简单、均匀，不会产生冲突。但是需要事先知道关键字的分布情况，适合较小且元素连续的哈希表，由于这个限制，导致这种算法十分不通用，是其一大缺点。*

#### 2、平方取中法
以关键字的平方值的中间几位作为存储地址。

#### 3、除余法
设定散列函数为：`f(key) = key mod q`，q为不大于表长的素数（质数）。
如，key集合为100、107、108、151、155，表长为10，q=10（可取不大于10的任何正整数），则f(100) = 0，f(107) = 7，f(108) = 8，f(151) = 1，f(155) = 5。为了简单，这里暂不涉及哈希冲突的情况。上述可以看到，几个key分别落到了地址为0、7、8、1、5的位置。

*哈希函数的构造方法有很多种，上面只是列出其中几种，具体采用哪种哈希函数，需要结合具体的应用场景。通常有以下几点来评价哈希函数的优劣：（1）能否将关键字均匀映射到哈下表上，（2）是否有好的方法来解决哈希冲突，（3）是否有简单高效（快速）*

### 哈希冲突的几种解决办法

#### 1、开放寻址法
算法：`Fi = (F(key) + Di) mod m; i = 1, 2, 3, 4, 5, ..., k(k <= m - 1)`，F(key)为散列函数，Fi为冲突后第i次再寻址后的地址。Di为增量序列，通常有三种方式：
+ Di = 1，2，3，...，m - 1；此时Fi函数称作“线性探测再散列”函数。如上文中介绍的例子，95、105两个key值，按10取模，都得到了地址5，产生了哈希冲突，利用线性探测再散列方法，在计算f(105)时，可探测(f(105) + 1) % 10，得到结果为6，正好6的位置空缺，所以探测成功，将key=105的节点存入此位置。
+ Di = 1^2，-1^2，2^2，-2^2，...，k^2，-k^2，(k<=m/2)；Fi称为“平方探测再散列”函数
+ Di = 伪随机数序列；Fi称为“伪随机探测再散列”函数

#### 2、再散列法
算法：Hi = Fi(key)，i = 1，2，3，...，k；Fi为不同的散列函数。
再散列的意思是，不同的key值在第一次散列后，得到的地址已经被占用，则换一种哈希函数，可以不停的更换散列函数直到找到不产生冲突的地址。

#### 3、链地址法（拉链法）
链地址法是采用数组+链表的结构来解决哈希冲突，当哈希冲突发生时，将冲突的节点存储在一个链表中，并将链表头指向被冲突的数组位置。现有key集合为：100, 107, 108, 151, 155, 157, 159, 175, 185, 178, 199, 202, 203, 204, 234, 334, 614；将这组集合用拉链法散列到哈希表中，如图所示：

![拉链法](/images/hash_1/拉链法.png)

#### 4、建立公共溢出区
设置溢出区，将冲突的key，放到一个公共的溢出区中。但有个问题是如果冲突的key太多，溢出区中的数据查找起来也十分费劲。

*哈希冲突的解决办法有很多种，但是都应该围绕一点：在合理的空间和时间复杂度之内*

### 对哈希表的插入和查找
哈希表的插入和查找是两个反过程，都是将key做哈希操作散列到具体的数组位置。插入的过程：将key通过哈希函数映射到数组位置，如果此位置上面已经有节点占用，则探寻下一个位置，直至找到位置插入。查找的过程：将key通过哈希函数映射到数组位置，如果该位置为空，直接返回空；如果该位置有值则比较其key值和待查找的key值是否相等（因为哈希冲突的存在，所以key可能不等），如果相等则返回该节点，否则继续探寻下一个数组位置直到找到待查找的key。由此可见，插入和查找的时间复杂度相等。

### 对哈希表的删除操作
哈希表的删除操作要注意：不能因为删除了节点导致后续节点无法探测。如：现有8个不同key产生了哈希冲突，经过线性探测再散列的方式都解决了地址冲突的问题，此时将其中一个key值删除，要保证后面的节点仍然能探测到，所以这里的删除，应该以标记的形式设计成假删除。
