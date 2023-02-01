---
title: CentOs8安装gitlab，并对配置进行优化
date: 2022-02-21 20:38:50
category:
- cs
- linux
tags: gitlab
---

### 1、下载安装包
（1）`cd /usr/local`
（2）`mkdir gitlab`
（3）下载最新版本：`wget https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el8/gitlab-ce-14.7.3-ce.0.el8.x86_64.rpm`

### 2、配置并启动
（1）解压文件：`tar -zxvf gitlab-ce-14.7.3-ce.0.el8.x86_64.rpm`
（2）执行`rpm -i gitlab-ce-14.7.3-ce.0.el8.x86_64.rpm`
（3）修改IP和端口：
+ vim /etc/gitlab/gitlab.rb
`external_url 'http://ip:port'`
*注意这里如果不写端口表示默认监听80端口*
（4）执行`gitlab-ctl reconfigure`，如下日志表示配置成功：
```
Running handlers:
Running handlers complete
Chef Infra Client finished, 9/785 resources updated in 38 seconds
gitlab Reconfigured!
```
（5）启动服务
`gitlab-ctl start`
<br/>
<div style="border-top: 5px dotted  #cccccc; margin-top: 10px;"></div>
<br/>
<br/>
<font size=4>gitlab优化及参数介绍</font>
<br/>

### 1、基本命令
（1）停止服务：gitlab-ctl stop
（2）启动服务：gitlab-ctl start
（3）重启服务：gitlab-ctl restart
（4）重新配置：gitlab-ctl reconfigure

### 2、配置参数优化
*注意：所有的配置修改都要执行gitlab-ctl reconfigure和gitlab-ctl restart才能生效*。gitlab本身启动占用内存较多，个人建议要至少提供4G运行内存。在此之外，需要对参数进行优化。配置文件中注释的配置，都是默认配置。执行命令`vim /etc/gitlab/gitlab.rb`修改配置。官方文档：https://docs.gitlab.com/ee

（1）Puma
Puma是一个简单、快速、多线程、高并发的支持http1.1的服务器。在Gitlab13.0版本之后，Puma已经取代了Unicorn成为Gitlab的默认服务器，从14.0开始，不再支持Unicorn。
Puma Worker Killer，是woker processes的监听线程，当worker process会随着用户使用占用越来越高的内存，当其内存达到设置的最大上限，Puma worker killer就会重启该worker process。
+ puma['worker_processes']，工作进程。官方建议2 cores / 8GB memery设置为2，4 cores / 8GB memery设置为4。个人建议最少设置为2，结合官方的建议和使用的人数来增加进程数，如果你的硬件配置为6 cores / 16GB memery，给8个进程也可以。

+ puma['per_worker_max_memory_mb']，每个工作进程的内存上限，单位为兆字节。默认为1024，这个参数可以根据实际情况调整。官方的建议是，如果worker killer频繁的清理workers的内存，就应该考虑扩大per_worker_max_memory_mb的值。具体可通过日志来分析，`/var/log/gitlab/puma/puma_stdout.log`，如下是GitLab13.5的日志：
```
PumaWorkerKiller: Out of memory. 4 workers consuming total: 4871.23828125 MB
out of max: 4798.08 MB. Sending TERM to pid 26668 consuming 1001.00390625 MB.
```
观察日志，如果每分钟大于等于一次，就应该考虑调整

+ puma['min_threads']，puma['max_threads']，线程。如果你只有2GB的内存，建议给1个线程即可，如果是4GB或者更高，给4个线程即可，大于4GB也不建议给更大的数量。
