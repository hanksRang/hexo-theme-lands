---
title: easyExcel设置列宽
date: 2022-10-11 12:09:00
category:
- backend
- opensource

tags: easyExcel设置列宽

---

### 代码

```java
public class JobColumnWidthHandler extends AbstractColumnWidthstylestrategy {
    private static final Logger LOGGER = LoggerFactory.getLogger(JobColumnWidthHandler.class);
    private static final int MAX_COLUNN_WIDTH = 50;
    
    @override
    protected void setColumWidth(WriteSheetHolder wciteSheetHolder,ListelWlriteCellData<?>> cellDatalist，Cell cell,
        Head head,Integer relativeRowIndex,Boolean isHead) {
        if (cell.getRowIndex() == 0) {
            writeSheetHolder.getSheet().setColumnWidth(cell.getColumnIndex()，width: 256 * 16);
        }
        Integer[] columnIndex = {2,3，4，5，6，19，21，22};Arrays.stream(columnIndex).forEach(x -> { 
            if (cell.getRowIndex() > 0 && x == cell.getColumnIndex()) {
writeSheetHolder.getsheet().setColumnWidth(cell.getColumnIndex()， width:256 * 28);}
        });
        Integer[ ] columnIndexs = {10,15};
        Arrays.stream(columnIndexs).forEach(x ->{
        if (cell.getRowIndex() > 0 && x == cell.getColumnIndex()) {
            writeSheetHolder.getSheet().setColumnWidth(cell.getColumnIndex(), width: 256 * 36);
        );
    }
}

```

```java
WriteSheet writesheet = EasyExcel.writerSheet( sheetNo: 0，sheetName: "配置")
        .registerwriteHandler(new JobFlowColumnWidthHandler())
        .registerWriteHandler(new SimpleRowHeightstylestrategy((short)35,contentRowHeight: null).head(JobFlowExcelModel.class).relativeHeadRowIndex(0).build();
        excelWriter.write(jobFlowExcelModelList,writesheet);

```