---
title: 借助easyexcel实现字段注释动态生成Excel表头（附源码）
date: 2022-06-02 12:09:00
category:
- backend
- opensource

tags: 借助easyexcel实现字段注释动态生成Excel表头（附源码）

---

### 背景
本文介绍如何读取数据库字段的注释并生成Excel表头，大幅提升开发效率。

### 环境
Mybatis plus 3.3.1，Springboot 2.1.7，EasyExcel 3.x

### 核心代码

#### TableDao
```java
/**
 * 列的属性
 *
 * @author hanksrang
 * @site cn.hongkezhang.com
 * @date 2022年06月01日
 */
@Mapper
public interface TableDao {

    List<Map<String, Object>> queryList(Map<String, Object> map);

    Map<String, String> queryTable(String tableName);

    List<Map<String, String>> queryColumns(String tableName);

}
```

#### ColumnEntity
```java
/**
 * 列的属性
 * 
 * @author hanksrang
 * @site cn.hongkezhang.com
 * @date 2022年06月01日
 */
public class ColumnEntity {

    //列名
    private String columnName;

    //列名类型
    private String dataType;

    //列名备注
    private String comments;

    //属性名称(第一个字母大写)，如：user_name => UserName
    private String attrName;

    //属性名称(第一个字母小写)，如：user_name => userName
    private String attrname;

    //属性类型
    private String attrType;

    //auto_increment
    private String extra;
}
```

#### Comments2ExcelHeaderHelper
```java
/**
 *
 * @author hanksrang
 * @site cn.hongkezhang.com
 * @date 2022年06月01日
 */
@Service
@Log
public class Comments2ExcelHeaderHelper {

    @Autowired
    private TableDao tableDao;

    @Value("${tablename}")
    private String tableName;

    @Value("${filepath}")
    private String filePath;

    public void export() {
        String[] tables = tableName.split(",");
        if (tables == null || tables.length < 1) {
            log.info("===== 没有输入任何表名！=====");
            return;
        }
        for (String ta : tables) {
            Map<String, String> map = tableDao.queryTable(ta);
            log.info("map: " + map);
            List<Map<String, String>> mapList = tableDao.queryColumns(ta);
            List<String> cols = new ArrayList<>();
            mapList.stream().map(x -> x.get("columnComment")).forEach(x -> cols.add(x));
            EasyExcel.write(filePath + ta + ".xlsx").head(getHead(cols)).sheet("模板").doWrite((Collection<?>) null);
        }
    }

    private List<List<String>> getHead(List<String> columns) {
        List<List<String>> res = new ArrayList<>();
        for(String col : columns) {
            List<String> head = new ArrayList<>();
            head.add(col);
            res.add(head);
        }
        return res;
    }

}
```

### 源码
github地址：<a href="https://github.com/hanksRang/easyexcel-header-export-by-comments">asyexcel-header-export-by-comments</a>