---
title: Gitlab占用内存过大问题解决
date: 2022-02-11 13:20:35
category:
- tool
- gitlab
tags: Gitlab占用内存过大问题解决
---

gitlab默认情况下会开启"线程数+物理CPU个数"个进程，导致内存被大量占用，对于小型服务器来说吃不消，需要修改相关配置参数

## 1、找到并编辑/etc/gitlab/gitlab.rb
unicorn['worker_processes'] = 2 --可根据具体配置来确定
postgresql['max_worker_processes'] = 2
nginx['worker_processes'] = 2

## 2、执行gitlab更新命令
gitlab-ctl reconfigure
gitlab-ctl restart
