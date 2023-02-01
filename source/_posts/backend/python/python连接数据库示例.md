---
title: python连接数据库示例
date: 2022-04-14 15:24:11
category: 
- backend
- python
tags: python, database, mysql
---

### 直接上代码：

创建一个name为DBConnection.py的文件，内容如下：
```python
# coding=UTF-8
import pymysql

class DBCont(object):

    def __init__(self):
        self.getCon()

    # 获取连接
    def getCon(self):
        print("准备连接数据库")
        try:
            self.conn = pymysql.connect(
                host="ip",
                user="username",
                passwd="mysql_password",
                db="somedb",
                port=3306,
                charset="utf8"
            )
            print ("数据库已连接")
        except pymysql.Error as e:
            print ("Error is %s,数据库连接出错啦！！！" % e)

    # 关闭连接
    def closeCon(self):
        try:
            if self.conn:
                self.conn.close()
                print ("数据库已关闭")
        except pymysql.error as e:
            print ("Error is %s,数据库关闭错误！！！" % e)

    # 取出单个值
    def findOne(self):
        sql = "select * from news Limit 1"
        cursor = self.conn.cursor()
        cursor.execute(sql)
        rest = dict(zip([k[0] for k in cursor.description], cursor.fetchone()))
        print (rest)
        cursor.close()
        self.closeCon()

    # 取出多个值
    def findMore(self):
        sql = "select * from news authority"
        cursor = self.conn.cursor()
        cursor.execute(sql)
        rest = [dict(zip([k[0] for k in cursor.description], row))for row in cursor.fetchall()]
        for i in rest:
            print (i)
            print ("------")
        cursor.close()
        self.closeCon()

    # 添加一个值
    def addOne(self):
        try:
            sql = "INSERT INTO sina(title,content) VALUES(%s,%s);"
            cursor = self.conn.cursor()
            cursor.execute(sql, ("1", "2"))
            self.conn.commit()
            cursor.close()
            print ("插入数据成功")
        except Exception as e:
            print (e+"插入数据库异常")
            self.conn.rollback()
        self.closeCon()
```

创建名为main.py的文件，内容如下：
```python
# coding=UTF-8
import DBConnection

def main():
    obj = DBConnection.DBCont()
    # obj.findOne()
    # obj.findMore()
    obj.addOne()

if __name__ == '__main__':
    main()
```

### 运行
进入main.py文件，右键run main()函数即可