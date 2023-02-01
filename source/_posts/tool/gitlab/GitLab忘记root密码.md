---
title: GitLab忘记root密码
date: 2022-02-11 12:00:24
category:
- tool
- gitlab
tags: GitLab忘记root密码
---

## 1、登录GitLab的Rails控制台
gitlab-rails console

## 2、定位root用户
user = User.where(id:1).first

## 3、修改root密码
user.save!
