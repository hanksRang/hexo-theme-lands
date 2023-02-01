---
title: Mysql Oracle 使用Mybatis批量插入的兼容写法
date: 2022-10-11 12:09:00
category:
- backend
- mybatis

tags: Mysql Oracle 使用Mybatis批量插入的兼容写法

---

### 兼容写法
```xml
<!--通用的批量插入-->
<insert id="batchInsertUser" databaseId="mysql">
    INSERT INTO USER
    (NAME,AGE,SEX)
    <foreach collection="userList" index="index" item="user" separator="union">
        SELECT
        #{user.name},#{user.age},#{user.sex}
        FROM DUAL
    </foreach>
</insert>
```