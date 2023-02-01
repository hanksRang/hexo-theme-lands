---
title: dubbo连接zookeeper失败情况总结
date: 2022-02-23 11:44:16
category: 
- backend
- dubbo
tags: 
---

### 1、超时无法连接
```yml
dubbo:
  application:
    id: dubbo-account-example
    name: dubbo-account-example
    qosEnable: false
  protocol:
    id: dubbo
    name: dubbo
    port: 20880
  registry:
    id: dubbo-account-example-registry
    address: zookeeper://ip:port
    timeout: 6000
  config-center:
    address: zookeeper://ip:port
    timeout: 6000
  metadata-report:
    address: zookeeper://ip:port
    timeout: 6000
```

解决办法：将timeout设置为60000
