---
title: Springboot mvc整合Hibernate Validator框架实现注解式参数校验（附完整源码）
date: 2022-05-27 12:09:00
category:
- backend
- hibernate

tags: Springboot mvc整合Hibernate Validator框架实现注解式参数校验（附完整源码）

---

<img src='/images/backend/hibernate/Spring整合Hibernate Validator校验（附完整源码）/1.png' />

### 背景
本文目的是介绍如何使用Springboot mvc整合hibernate validator校验框架，本项目只介绍几种常用的校验注解用法，不做深入的探讨。

### 准备
Springboot 2.0.1版本，

### 核心包引入
由于Spring-boot-starter-web中已经集成了hibernate validator，所以只需要引入如下依赖即可：
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

### 开发
#### 实现一个简单的Controller
```java
@RestController
@RequestMapping( "/validate")
@Log
public class ValidateController {

    @RequestMapping( value = "/query", method = RequestMethod.POST)
    public String query(@RequestBody(required = false) @Validated QueryParams queryParams) {
        log.info("in method");
        return null;
    }

}
```

#### 参数封装类
```java
public class QueryParams{


    private String id;

    // 这里如果不配置message参数，会默认使用框架自带的方式输出错误信息
    @Length(min = 0, max = 100, message = "参数错误，不在指定范围")
    private String name;

    @Length(min = 1)
    private String gender;

    @Range(min = 0, max = 200)
    private Integer age;

    @CreditCardNumber
    private String creditCardNumber;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }
}
```

#### Springboot MVC测试类
*需要注意的是，这里主动调用了getResolvedException()方法输出错误信息*
```java
/**
 * @author hanksrang
 * github地址：https://github.com/hanksRang/
 * */
public class ValidateControllerTest {

    protected MockMvc mockMvc;

    @Autowired
    protected WebApplicationContext wac;

    @Before()
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();  //初始化MockMvc对象
    }

    @Test
    public void testWhenAgeInvalid() throws Exception {
        QueryParams queryParams = new QueryParams();
        queryParams.setAge(300);
        queryParams.setGender("1231");
        queryParams.setName("小王1231313");
        // queryParams.setCreditCardNumber("622586396663888");
        String reqJson = JSON.toJSONString(queryParams);
        MvcResult result = mockMvc.perform(post("/validate/query")
                .contentType(MediaType.APPLICATION_JSON)
                .content(reqJson)
                .accept(MediaType.APPLICATION_JSON))
                .andReturn();
        System.out.println("返回值：" + result.getResponse().getStatus());
        if (result.getResponse().getStatus() != 200) {
            log.log(Level.OFF, "错误信息：" + result.getResolvedException());
        }
    }
}
```

### 资源
完整源码请前往：<a href="https://github.com/hanksRang/springboot-hibernate-validator">完整源码</a>