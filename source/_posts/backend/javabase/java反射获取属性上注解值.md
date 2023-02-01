---
title: java反射获取属性上的注解值
date: 2022-06-15 00:03:29
category:
- backend
- javabase
  
tags: java反射获取属性上注解值

---

### 背景
今天在做数据导出的时候，需要读取属性上的注解值，想着写一个通用的方法，于是想到了用反射的方式来实现

### 实现思路
通过类名反射获取类及类的属性，将属性值进行循环遍历，找到指定的属性名之后，通过反射获取注解在属性上的属性值。

### 实现方式
注解类：
```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Excel {

    String name() default "";

    int index() ;

}
```

pojo类：
```java
@Data
public class ExportVo implements Serializable {
    private static final long serialVersionUID = 1L;

    /** 姓名 */
    @Excel(name = "姓名", index = 1)
    private String studentName;

    /** 身份证号 */
    @Excel(name = "身份证号", index = 2)
    private String identityId;

    /** 学号 */
    @Excel(name = "学号", index = 3)
    private String studentId;

    /** 出生日期 */
    @Excel(name = "出生日期", index = 4)
    private String birthday;

}
```

调用类：
```java
public class InvokerMain {

    public static Object getFieldAnnoProp(String className, String clazzAnno, String annoMethod, String prop) throws ClassNotFoundException, NoSuchFieldException, NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Field[] fields = Class.forName(className).getDeclaredFields();
        Class classAnno = Class.forName(clazzAnno);
        for (Field f : fields) {
            if(f.isAnnotationPresent(classAnno)){
                String fieldName = f.getName();
                if (fieldName.equals(prop)) {
                    Method method = f.getAnnotation(classAnno).annotationType().getMethod(annoMethod);
                    Object value = method.invoke(f.getAnnotation(classAnno));
                    return value;
                }
            }
        }
        return null;
    }

    public static void main(String[] args) {
        try {
            InvokerMain.getFieldAnnoProp("com.hanksrang.pojo.ExportVo", "com.hanksrang.anno.Excel", "name", "studentName");
        } catch (ClassNotFoundException | NoSuchFieldException | NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
    }

}

```

### 资源
github完整代码：https://github.com/hanksRang/java-senior-feature/blob/master/src/main/java/com/hanksrang/invoke/InvokerMain.java