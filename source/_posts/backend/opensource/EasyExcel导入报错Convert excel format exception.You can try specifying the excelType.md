---
title: EasyExcel导入报错Convert excel format exception.You can try specifying the excelType
date: 2022-06-10 12:09:00
category:
- backend
- opensource

tags: EasyExcel导入报错Convert excel format exception.You can try specifying the excelType

---

### 问题分析
出现这个问题，多半是因为两次读取同一个流，但是前一个读取操作改变了流的类型，导致后一个读取报错。

```java

inputStream = file.getInputStream();

// 这里已经改变了流的类型
List<ReadSheet> sheets = EasyExcel.read(inputStream).build().excelExecutor().sheetList();

// 再使用相同的流，将导致EasyExcel报错
EasyExcel.read(inputStream , SettlementDetailTemplate.class, listener).sheet(sheet.getSheetNo()).headRowNumber(8).doRead();
        
// 重新获取流
inputStream_1 = file.getInputStream();
...

```
### 解决办法

第二次读取重新获取流：

```java
inputStream2 = file.getInputStream();
EasyExcel.read(inputStream , SettlementDetailTemplate.class, listener).sheet(sheet.getSheetNo()).headRowNumber(8).doRead();
```
