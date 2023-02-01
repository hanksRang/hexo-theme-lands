---
title: SpringContextUtil用法及源码展示
date: 2022-06-101 12:09:00
category:
- backend
- spring

tags: SpringContextUtil用法及源码展示

---

### 代码
SpringContextUtil类：
```java
/**
 *
 * @author hanksrang
 * @site cn.hongkezhang.com
 * @date 2022年06月01日
 */
@Component
public class SpringContextUtil implements ApplicationContextAware {

    private static ApplicationContext context;

    @Override
    public void setApplicationContext(ApplicationContext contex) throws BeansException {
        System.out.println("---------context initialize completed---------" + contex);
        SpringContextUtil.context = contex;
    }

    public static ApplicationContext getApplicationContext() {
        return context;
    }

    public static <T> T getBean(Class<T> clazz) {
        return context.getBean(clazz);
    }
    
    public static <T> T getBean(String beanName) { 
      return (T) context.getBean(beanName); 
    }
    
    public static String getMessage(String key) { 
      return context.getMessage(key, null, Locale.getDefault());
    } 

    // 获取当前profile
    public static String getActiveProfile() { 
      return context.getEnvironment().getActiveProfiles()[0]; 
    }

}
```

调用类：comments2ExcelHeaderHelper是一个Spring Bean，是Comments2ExcelHeaderHelper的类对象
```java
Comments2ExcelHeaderHelper comments2ExcelHeaderHelper =
                SpringContextUtil.getBean("comments2ExcelHeaderHelper");
```