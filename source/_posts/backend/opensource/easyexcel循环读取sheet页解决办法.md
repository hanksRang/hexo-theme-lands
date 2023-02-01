---
title: easyexcel循环读取sheet页解决办法
date: 2022-06-10 12:09:00
category:
- backend
- opensource

tags: easyexcel循环读取sheet页解决办法

---

### 实现方式

```java
// 循环读取sheet页，将文件内容读到object对象
    public void read() {
        String fileName = rootPath + "course.xlsx";
        // 这里 需要指定读用哪个class去读，然后读取第一个sheet 文件流会自动关闭
        // 这里每次会读取3000条数据 然后返回过来 直接调用使用数据就行
        ExcelReader build = EasyExcel.read(fileName)
                .build();
        List<ReadSheet> readSheets = build.excelExecutor()
                .sheetList();
        for (ReadSheet readSheet : readSheets) {
            EasyExcel.read(fileName, new PageReadListener<>(dataList -> {
                for (Object demoData : dataList) {
                    log.info("读取到一条数据{}", JSON.toJSONString(demoData));

                }
            })).sheet(readSheet.getSheetNo()).doRead();
        }

    }
```

### 完整代码
如果你需要完整的代码，请前往：https://github.com/hanksRang/easyexcel-springboot/blob/main/src/main/java/com/hanksrang/easyexcel/service/FileReadAndWriteService.java