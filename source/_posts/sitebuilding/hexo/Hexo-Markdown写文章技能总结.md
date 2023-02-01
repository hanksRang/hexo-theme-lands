---
title: Hexo-Markdown写文章技能总结
date: 2022-02-16 17:03:27
category:
- sitebuilding
- hexo
tags: Hexo-Markdown写文章技能总结，Hexo-Markdown写文章高级玩法
---

### 1、在文章内引用本地的其他文章
语法：`{% post_link 文章文件名（不要后缀） '文章标题（可选）' %}`
以本站文章为例：`{% post_link 文章路径（以_post为根路径）/Seata系列（2）配置并启动Seata-server Seata系列（2）配置并启动Seata-server  %}`

如_post文件夹下有子文件夹mytest，mytest下有文章：my.md，则正确的引用为：
`{% post_link mytest/my '不写标题直接显示链接名字为my' %}`

*注意以上格式只适用于_post文件夹下的文件，如果在_post的子文件夹下，则无法引用到*

### 2、链接加粗技能
通常需要将链接进行显而易见的展示，此时可以运用加粗的方式，下面介绍常见的加粗情况：
（1）文件超链接：`[**registry.conf**](/files/seata_3/registry.conf)`
（2）站内文章跳转跳转到其他文章：`<b>{% post_link Seata系列（2）配置并启动Seata-server Seata系列（2）>配置并启动Seata-server  %}</b>`

---
2022/02/17更新
### 3、文章中插入代码
今天在写Seata相关的文章时发现插入代码有问题，按W3C的教程采用两个单反引号来显示总是有问题，后来查找了很多资料终于解决问题。
正确的做法展示：
（1）Java
\`\`\`java
  public class Demo{
    private String a;
  }
\`\`\`
效果：
```java
  public class Demo{
    private String a;
  }
```
（2）SQL
\`\`\`sql
CREATE TABLE "user" (
  "id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(32) NOT NULL,
  "passwords" varchar(32) NOT NULL,
  PRIMARY KEY (`id`)CREATE TABLE "trade" (
  "id" int NOT NULL AUTO_INCREMENT,
  "userid" int NOT NULL,
  "value" int NOT NULL,
  PRIMARY KEY ("id")
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
\`\`\`
效果：
```sql
CREATE TABLE "user" (
  "id" int NOT NULL AUTO_INCREMENT,
  "name" varchar(32) NOT NULL,
  "passwords" varchar(32) NOT NULL,
  PRIMARY KEY (`id`)CREATE TABLE "trade" (
  "id" int NOT NULL AUTO_INCREMENT,
  "userid" int NOT NULL,
  "value" int NOT NULL,
  PRIMARY KEY ("id")
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;
```


---
2022/03/08更新
### 4、写文章段落首行空格缩进

```html
<p style="font-size: 16px; text-indent:2em;"></p>
```

---
2022/06/08更新
### 5、左侧用竖线分割归类

根据`>`的数量进行层次缩进
```markdown
>
>>
>>>
```

> 第一级
>> 第二级
>>> 第三级