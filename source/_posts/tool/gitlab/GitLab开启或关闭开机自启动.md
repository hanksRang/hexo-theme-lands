---
title: GitLab开启或关闭开机自启动
date: 2022-02-14 12:07:37
category:
- tool
- gitlab
tags: GitLab开启或关闭开机自启动
---

禁止 Gitlab 开机自启动：`systemctl disable gitlab-runsvdir.service`

启用 Gitlab 开机自启动：`enable gitlab-runsvdir.service`
