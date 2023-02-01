
---
title: DataX安装, 遇坑解决
description: 安装Datax的时候，报错plugin.json不存在
date: 2022-04-24 21:03:34
category:
- frontline
- bigdata
tags: DataX安装, 报错plugin.json不存在
---

- [datax安装步骤](#datax%E5%AE%89%E8%A3%85%E6%AD%A5%E9%AA%A4)
- [执行命令 python datax.py ../job/job.json 报错](#%E6%89%A7%E8%A1%8C%E5%91%BD%E4%BB%A4-python-dataxpy-jobjobjson-%E6%8A%A5%E9%94%99)
- [解决办法](#%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95)
  - [穿插一个问题](#%E7%A9%BF%E6%8F%92%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98)
- [兼容Mysql8.0](#%E5%85%BC%E5%AE%B9mysql80)

### datax安装步骤
https://developer.aliyun.com/article/247720

### 执行命令 python datax.py ../job/job.json 报错

<img src='/images/bigdata/datax/1.png' />

### 解决办法

删除datax/plugin目录下有下划线_前缀的文件

`ls -a`

<img src='/images/bigdata/datax/2.png' />

注意下面的子文件夹也要删除，我这里第一次就是没有删除子文件夹下的._文件报了同样的错误
`rm -rf  plugin/._*`
`rm -rf  plugin/*/._*`

再job目录下编辑文件mysqlrw.json
```json
{
    "job": {
        "content": [
            {
                "reader": {
                    "name": "mysqlreader",
                    "parameter": {
                        "column": ["id","real_name"],
                        "connection": [
                            {

                             "jdbcUrl": [
                                    "jdbc:mysql://12.222.0.0:3306/datax_r"
                                ],
                                "table": ["t_user"]
                            }
                        ],
                        "username": "root",
                        "password": "####"
                    }
                },
                "writer": {
                    "name": "mysqlwriter",
                    "parameter": {
                         "column": ["id","real_name"],
                        "connection": [
                            {
                                "jdbcUrl": "jdbc:mysql://12.222.0.0:3306/datax_w?characterEncoding=utf-8",
                                "table": ["t_user_w"]
                            }
                        ],
                        "username": "root",
                        "password": "####"
                    }
                }
            }
        ],
        "setting": {
            "speed": {
                "channel": "2"
            }
        }
    }
}
```

执行命令`python /usr/local/datax/datax/bin/datax.py mysqlrw.json`

#### 穿插一个问题
这里我json文件是拷贝阿里云官网文档改的，他这里有个坑是将password放在了username上面，导致我写反了这两个参数。
如果你也遇到同样的问题，请注意。

<img src='/images/bigdata/datax/3.png' />

把这些问题都解决了，再执行`python /usr/local/datax/datax/bin/datax.py mysqlrw.json`

还是报错无法认证：

进入目录`datax/plugin/reader/mysqlreader/libs`
查阅datax用的mysql驱动为5.1.34版本，而我的MySQL版本为8.x，如果你是MySQL5.x，应该到这里就没问题了。

成功执行的日志：
<img src='/images/bigdata/datax/8.png' />

### 兼容Mysql8.0
但是，如果你也是mysql8.x，解决办法：修改datax源码，重新打包发布，具体请参考： {% post_link bigdata/DataX支持Mysql8.0 'DataX支持Mysql8.0' %}



