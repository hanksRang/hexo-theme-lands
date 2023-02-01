
---
title: mongod.conf文件修改
date: 2022-04-15 16:47:15
category:
- database
- mongodb
tags: mongodb, database, nosql
---

通过rpm安装的文件，默认路劲为/etc/mongod.conf下

### 修改ip使得通过外网可以访问mongodb
修改配置文件mongod.conf
```conf
net:
port: 27017
bindIp: 127.0.0.1 
```
改为：
```conf
net:
port: 27017
bindIp: 0.0.0.0 
```

### 创建初始密码
`mongo`命令进入命令行

```
use admin
db.createUser(
  {
    user: "myUserAdmin",
    pwd: passwordPrompt(), // or cleartext password
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
```
在Enter:处输入设置的密码

exit退出

`vim /etc/mongd.conf`修改配置文件：

```composer log
security:
authorization: "enabled"
```

以带密码方式登录：
mongo --port 27017 --authenticationDatabase "admin" -u "myUserAdmin" -p
`



