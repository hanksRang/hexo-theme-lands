---
title: Apache监听多个服务端口
date: 2022-04-21 17:33:34
category:
- server
- apache
tags: Apache监听多个服务端口
---

### 进入conf文件夹，打开文件httpd.conf
<img src='/images/apache/Apache监听多个服务端口/1.png' />

### 配置两个监听端口
<img src='/images/apache/Apache监听多个服务端口/2.png' />

### 配置虚拟机
```conf
NameVirtualHost *:8072
<VirtualHost *:8072>
ServerName localhost
DocumentRoot "D:\test\projects\t\he\public"
<Directory "D:\test\projects\t\he\public">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   AllowOverride FileInfo AuthConfig Limit
    #
    AllowOverride None

    #
    # Controls who can get stuff from this server.
    #
    Require all granted
</Directory>
</VirtualHost>
```

```conf
NameVirtualHost *:8082
<VirtualHost *:8082>
ServerName localhost
DocumentRoot "D:\test\projects\t\she\public"
<Directory "D:\test\projects\t\she\public">
    #
    # Possible values for the Options directive are "None", "All",
    # or any combination of:
    #   Indexes Includes FollowSymLinks SymLinksifOwnerMatch ExecCGI MultiViews
    #
    # Note that "MultiViews" must be named *explicitly* --- "Options All"
    # doesn't give it to you.
    #
    # The Options directive is both complicated and important.  Please see
    # http://httpd.apache.org/docs/2.4/mod/core.html#options
    # for more information.
    #
    Options Indexes FollowSymLinks

    #
    # AllowOverride controls what directives may be placed in .htaccess files.
    # It can be "All", "None", or any combination of the keywords:
    #   AllowOverride FileInfo AuthConfig Limit
    #
    AllowOverride None

    #
    # Controls who can get stuff from this server.
    #
    Require all granted
</Directory>
</VirtualHost>
```

### 访问
在浏览器中使用localhost:8072和localhost:8082即可访问资源

### 注意
我这里起初是在extra目录下的httpd-vhosts.conf下配置的虚拟机，但是不起作用，暂不清楚具体问题，有知道原因的同学，可以留言讨论。

<img src='/images/apache/Apache监听多个服务端口/3.png' />
