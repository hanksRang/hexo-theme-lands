---
title: Hexo配置git方式发布
date: 2022-02-10 16:54:09
category:
- sitebuilding
- hexo
tags: Hexo配置git方式发布
---

## 1、安装hexo-deployer-git
1、进入hexo安装目录
2、执行npm install hexo-deployer-git --save

## 2、编辑站点下_config.yml文件
vim config_.yml

## 3、修改对应的参数
deploy:
  type: git
  repo: root@服务器公网IP:/home/git/hexoBlog
