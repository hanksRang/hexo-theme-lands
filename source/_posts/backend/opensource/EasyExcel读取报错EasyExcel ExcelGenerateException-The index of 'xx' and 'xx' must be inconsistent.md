---
title: EasyExcel读取报错EasyExcel ExcelGenerateException-The index of 'xx' and 'xx' must be inconsistent
date: 2022-06-13 12:09:00
category:
- backend
- opensource

tags: EasyExcel读取报错EasyExcel ExcelGenerateException-The index of 'xx' and 'xx' must be inconsistent

---

### 原因

这个问题的出现，是因为@ExcelProperty() 中index的值重复，修改index值解决问题