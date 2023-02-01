---
title: CentOs8安装elasticsearch7.x版本
date: 2022-05-12 12:09:00
category:
- backend
- opensource

tags: elasticsearch7.x版本安装, centos8

---

### 背景
<p>elasticsearch的大名早有耳闻，但是实际使用却不多。最近一直想做一个站内搜索功能，于是想到了结合elasticsearch来实现。</p>

### 准备
linux、CentOS8、jdk1.8

### 安装步骤

#### 下载安装包
`cd /usr/local/`

`mkdir elastic`

`wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.3-linux-x86_64.tar.gz`

#### 启动

`cd elasticsearch-7.17.3/bin`

常规启动：`./elasticsearch`；后台启动并将日志输出到my.txt文件：`nohup ./elasticsearch > my.txt &`

### 报错问题解决

<p>如果一切正常，启动是没问题的，但是很多时候因为软件之间版本不兼容、权限的问题，会出一些问题，那解决这些问题就好了。</p>

#### 不能以root用户运行
<img src='/images/backend/opensource/CentOs8安装elasticsearch7.x版本/img.png' />

<p>解决办法：</p>

+ 创建用户：`useradd user-elastic`
  
+ 给用户user-elastic赋予指定文件夹权限：`chown -R user-elastic /usr/local/elastic/elasticsearch-8.2.0`

#### 虚拟内存空间上限太小
<img src='/images/backend/opensource/CentOs8安装elasticsearch7.x版本/img_3.png' />

<p>解决办法：</p>

+ 切换到root：`su root`
  
+ 执行：`vim /etc/sysctl.conf`

+ 添加内容到末尾：`vm.max_map_count=262144`

+ 刷新配置：`sysctl -p`
  

### 配置优化

`vim config/elasticsearch.yml`

+ 修改内存配置
需要说明的是，默认内存给的比较大，如果对吞吐量要求不高的话，可以给定一个合理的值。
```properties
-Xms256m
-Xmx256m
```

注意这里-Xms和-Xmx的值，不能不一样，否则会报错:
<img src='/images/backend/opensource/CentOs8安装elasticsearch7.x版本/img_4.png' />

### 报警告
<p>如果报如下警告：</p>
<img src='/images/backend/opensource/CentOs8安装elasticsearch7.x版本/img_6.png' />

<p>可以用以下配置解决：</p>
<img src='/images/backend/opensource/CentOs8安装elasticsearch7.x版本/img_5.png' />

其中`Future Version of Elasticsearch will require jdk 11`这个其实不用解决，只要当前版本的jdk够用即可。

### 验证

执行命令：`curl http://127.0.0.1:9200`，打出如下日志就说明安装成功了：

```composer log

{
  "name" : "VM-12-4-centos",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "I9bM168GR***IOPOlxQ",
  "version" : {
    "number" : "7.17.3",
    "build_flavor" : "default",
    "build_type" : "tar",
    "build_hash" : "5ad023604c8d741***b6c0eadb62***e766caff",
    "build_date" : "2022-04-19T08:11:19.070913226Z",
    "build_snapshot" : false,
    "lucene_version" : "8.11.1",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}

```