
---
title: Hibernate Validator 实现注解式校验示例
date: 2022-06-11 12:09:00
category:
- backend
- hibernate

related: Spring整合Hibernate Validator校验（附完整源码）
tags: Hibernate Validator 实现注解式校验示例

---

### 介绍
Hibernate Validator实现了注解式校验的功能，使得开发人员能够很方便地对对象参数进行校验

### 使用方式
校验类：
```java
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import java.util.Set;

public class ValidatorTest {


   public static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
   
    /**
     * @param obj
     * @param <T>
     */
    public static <T> Set validate(T obj) {
        String msg = "";
        Set<ConstraintViolation<T>> constraintViolations = validator.validate(obj);
        // 抛出检验异常
        if (constraintViolations.size() > 0) {
            return constraintViolations;
        }
        return null;
    }

    public static void main(String[] args) {
        Customer customer = new Customer();
        customer.setName("xl");
        customer.setAge(11);
        customer.setMobile("15577889900");
        customer.setIdcard("3323232367");
        Set validIdcard = validate(customer);
        System.out.println(validIdcard);
    }

}
```

POJO类：
```java
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Value;

@Data
public class Customer {

     private String name;

     private int age;

     @Length(min = 0, max = 1)
     private String mobile;

}
```
