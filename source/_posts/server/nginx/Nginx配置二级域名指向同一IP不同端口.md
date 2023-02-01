---
title: Nginx配置二级域名指向同一IP不同端口
date: 2022-03-31 22:09:19
category:
- server
- nginx
tags: Nginx配置二级域名指向同一IP不同端口
---

<p style="font-size: 16px; ">
一台主机，一个一级域名，多个二级域名。如lollary.com是一级域名，www.lollary.com是二级域名，blog.lollary.com
也是二级域名。我们通常有需求在同一台服务器上部署多个服务，但是用不同的域名来指向这些服务。如果每个服务都使用一级域名+端口的形式来访问，
显然可以办到。那采用二级域名来绑定这些ip+port如何实现？下面来详细介绍。
</p>

### 多个域名指向同一个IP

如下图所示的三个二级域名到146主机

<img src='/images/nginx/sub_domain/dns_record.png' />

### 使用nginx配置监听、域名、转发
```conf
server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  *.abc.com;

        if ( $http_host ~* "^(.*)\.lollary\.com$") {
            set $domain $1;
        }

        location / {
        if ($domain ~* "page") {
            # 转发到10000端口，这里的page.lollary.com域名对应下方监听10000端口的域名。
            # 这里的page.lollary.com不可替换为lollary.com等其他域名，否则在地址栏的域名page.lollary.com
            # 可能跳转为lollary.com:10000。
            proxy_pass http://page.lollary.com:10000;
        }
}

server {
    listen       10000;
    server_name   page.lollary.com;

    location / {

    }

    error_page   500 502 503 504  /50x.html;

    location = /50x.html {
    
    }
    
}

```