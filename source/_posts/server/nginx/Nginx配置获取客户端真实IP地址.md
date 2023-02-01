---
title: Nginx配置获取客户端真实IP地址
date: 2022-06-02 19:26:19
category:
- server
- nginx
  
tags: Nginx配置获取客户端真实IP地址

---

### 配置方法
在http标签下一级配置：
```lombok.config
http {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
}
```

