---
title: easyexcel3.x整合springboot+mybatisplus实现导入导出功能（附完整源码）
date: 2022-05-09 12:09:00
category:
- backend
- opensource

tags: Mybatis Plus, Springboot, easyexcel, 完整源码

---

<img style="width: 100%;  " 
src='/images/backend/opensource/easyexcel整合springboot+mybatisplus实现导入导出功能（附完整源码）/img.png' />

<div style=" ">

### 简介
本文介绍如何利用Springboot、mybatis plus、mysql整合easyexcel实现导入导出功能。

### 准备
Springboot版本为2.0.1.RELEASE，Easyexcel版本为3.x，MySql8.x版本，开发工具：idea、jdk1.8、maven3.5.3

### 开发

application.yml:
```yml
server:
  port: 9001

spring:
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    #MySQL配置
    driverClassName: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://####:3306/project_open?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=Asia/Shanghai
    username: root
    password: ######
```

service层（导入）:
```java

@Slf4j
@Service
public class FileReadAndWriteService {

    private String rootPath = "D:\\";

    @Autowired
    private EasyexcelSpringbootCourseDao easyexcelSpringbootCourseDao;

    public void readAndSave() {
        String fileName = rootPath + "course.xlsx";
        // 这里 需要指定读用哪个class去读，然后读取第一个sheet 文件流会自动关闭
        // 这里每次会读取3000条数据 然后返回过来 直接调用使用数据就行
        EasyExcel.read(fileName, EasyexcelSpringbootCourseEntity.class, new PageReadListener<EasyexcelSpringbootCourseEntity>(dataList -> {
            for (EasyexcelSpringbootCourseEntity demoData : dataList) {
                log.info("读取到一条数据{}", JSON.toJSONString(demoData));
                demoData.setId(null);
                easyexcelSpringbootCourseDao.insert(demoData);
            }
        })).sheet().doRead();
    }

}

```

service层（导出）:
```java

@Slf4j
@Service
public class DbLoadAndExportService {

    @Autowired
    private EasyexcelSpringbootCourseDao easyexcelSpringbootCourseDao;

    private String rootPath = "D:\\a\\b\\easyexcel-springboot\\file\\";

    public void loadAndExport() {
        String fileName = rootPath + "export.xlsx";
        EasyExcel.write(fileName, EasyexcelSpringbootCourseEntity.class).sheet("模板").doWrite(data());
    }

    private List<EasyexcelSpringbootCourseEntity> data() {
        List<Long> ids = new ArrayList<>();
        ids.add(1l);
        ids.add(2l);
        List<EasyexcelSpringbootCourseEntity> easyexcelSpringbootCourseEntityList = easyexcelSpringbootCourseDao.selectBatchIds(ids);
        return easyexcelSpringbootCourseEntityList;
    }
}
```

dao层:
```java

/**
 * 
 * 
 * @author hanksRang
 * @date 2022-05-09 16:34:37
 */
@Mapper
public interface EasyexcelSpringbootCourseDao extends BaseMapper<EasyexcelSpringbootCourseEntity> {

    /**
    *  根据实体类查询
    * */
    List<EasyexcelSpringbootCourseEntity> query(EasyexcelSpringbootCourseEntity easyexcelSpringbootCourse);

}
```

实体类：
```java

/**
 *
 *
 * @author hanksRang
 * @date 2022-05-09 16:34:37
 */
@Mapper
public interface EasyexcelSpringbootCourseDao extends BaseMapper<EasyexcelSpringbootCourseEntity> {

    /**
     *  根据实体类查询
     * */
    List<EasyexcelSpringbootCourseEntity> query(EasyexcelSpringbootCourseEntity easyexcelSpringbootCourse);

}

```

Service测试类（导入）：
```java

@RunWith(SpringRunner.class)
@SpringBootTest
public class FileReadAndWriteServiceTest {

    @Autowired
    private FileReadAndWriteService fileReadAndWriteService;

    @Test
    public void testReadAndWrite() {
        fileReadAndWriteService.readAndSave();
    }

}

```

Service测试类（导出）：
```java

@RunWith(SpringRunner.class)
@SpringBootTest
public class DbLoadAndExportServiceTest {

    @Autowired
    private DbLoadAndExportService dbLoadAndExportService;

    @Test
    public void testLoadAndExport() {
        dbLoadAndExportService.loadAndExport();
    }

}
```

### 完整代码地址
如有需要完整代码的看官，请前往：<a href="https://github.com/hanksRang/easyexcel-springboot">完整代码</a>


</div>