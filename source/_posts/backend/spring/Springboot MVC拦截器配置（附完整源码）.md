---
title: Springboot MVC拦截器配置（附完整源码）
date: 2022-05-13 12:09:00
category:
- backend
- spring

tags: Springboot mvc, Spring 拦截器, 完整源码

---

<img style="width: 100%;  "
src='/images/backend/spring/Springboot MVC拦截器配置（附完整源码）/3.png' />


### 简介
本文介绍如何利用Springboot mvc实现拦截器功能

### 准备
Springboot版本为2.0.1.RELEASE，开发工具：idea、jdk1.8、maven3.5.3

### 开发
pom.xml文件
<img src='/images/backend/spring/Springboot MVC拦截器配置（附完整源码）/img.png' />

实现拦截器：
```java
package com.hanksrang.springboot.mvcinterceptor.interceptor;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class UrlInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("intercepted successfully");
        String uri = request.getRequestURI();
        System.out.println("uri: " + uri);
        String param1 = request.getParameter("param1");
        System.out.println("param1: " + param1);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}

```

将拦截器注册到WebMvcConfigurerAdapter:
```java
package com.hanksrang.springboot.mvcinterceptor.config;

import com.hanksrang.springboot.mvcinterceptor.interceptor.UrlInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 *
 * @author hanks rang
 * */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    /*
     * 拦截器注册
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 注册自定义拦截器，添加拦截路径和排除拦截路径
        registry.addInterceptor(new UrlInterceptor()) // 添加拦截器
                .addPathPatterns("/**") // 拦截路径
                .excludePathPatterns("/login") // 添加排除拦截路径
                .order(0); //执行顺序
        super.addInterceptors(registry);
    }
}
```

测试类：
```java
package com.hanksrang.springboot.mvcinterceptor.mvc;


import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
public class MvcTest {

    protected MockMvc mockMvc;

    @Autowired
    protected WebApplicationContext wac;

    @Before()
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();  //初始化MockMvc对象
    }

    @Test
    public void testGetStu() throws Exception {
        MvcResult result = mockMvc.perform(get("/stu/getStu?param1=100")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk()) // 模拟发送get请求
                .andReturn();
        System.out.println("返回值：" + result.getResponse().getContentAsString());
    }
}
```

### 资源
如需完整代码的小伙伴，请前往：<a href="https://github.com/hanksRang/springboot-mvc-interceptor">完整代码</a>