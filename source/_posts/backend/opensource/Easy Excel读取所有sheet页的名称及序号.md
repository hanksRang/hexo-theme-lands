---
title: Easy Excel读取所有sheet页的名称及序号
date: 2022-06-13 12:09:00
category:
- backend
- opensource

tags: Easy Excel读取所有sheet页的名称及序号

---

### 实现方式

```java
 public static List<ReadSheet> listSheet(InputStream inputStream) {
        if (inputStream == null) {
            throw new RuntimeException("inputStream is null");
        }
        ExcelReader build = EasyExcel.read(inputStream).build();
        List<ReadSheet> readSheets = build.excelExecutor().sheetList();
        return readSheets;
    }
```