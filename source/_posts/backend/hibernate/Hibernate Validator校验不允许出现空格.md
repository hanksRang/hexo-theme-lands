---
title: Hibernate Validator校验字符串中不允许出现空格
date: 2022-06-28 16:13:29
category:
- backend
- javabase
  
tags: Hibernate Validator校验不允许出现空格

---

### 实现方式

**注解类**

```java
@Documented
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = {ValidatorForNoBlankChar.class})
public @interface NoBlankChar {

    String message() default "字符串不能包含空格";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

    /**
     * 是否可为空<br><br>
     * <b>默认为<code>true</code>；如果值为<code>false</code>，则入参为空串会校验失败</b>
     */
    boolean canBeBlank() default true;

}
```

**自定义校验类**

```java
/**
 * 校验字符串是否含有空格
 * @author hanksrang
 * @site cn.hongkezhang.com
 * @date 2020/11/2 10:57
 */
@Slf4j
public class ValidatorForNoBlankChar implements ConstraintValidator<NoBlankChar, CharSequence> {

    private boolean canBeBlank;

    @Override
    public void initialize(NoBlankChar parameters) {
        canBeBlank = parameters.canBeBlank();
    }

    /**
     * 校验字符串是否含有空格
     * @param charSequence The character sequence to validate.
     * @param constraintValidatorContext context in which the constraint is evaluated.
     * @return 如果字符串为null，或字符串不含空格，返回<code>true</code>，否则返回<code>false</code>
     */
    @Override
    public boolean isValid(CharSequence charSequence, ConstraintValidatorContext constraintValidatorContext) {
        if (charSequence == null) {
            return true;
        }
        if (StringUtils.isEmpty(charSequence)) {
            return canBeBlank ? true : false;
        }
        // 如果有空格就返回失败
        String res = MyStringUtil.findPlainString(charSequence.toString(), "[ ]{1,}");
        if (res != null) {
            return false;
        }
        return true;
    }

}
```

**POJO类**

```java
@Data
public class Customer {

     @NoBlankChar
     private String name;

}
```

**测试类**
````java
public class ValidatorTest {
    
   public static final Validator validator = Validation.buildDefaultValidatorFactory().getValidator();

    /**
     * 分组校验和组合校验
     * 不同的业务有不同的参数校验组合
     * @author hanksrang
     * @site cn.hongkezhang.com
     * @param obj
     * @param groups
     * @param <T>
     */
    public static <T> Set validate(T obj,Class ... groups) {
        String msg = "";
        Set<ConstraintViolation<T>> constraintViolations = validator.validate(obj);
        // 抛出检验异常
        if (constraintViolations.size() > 0) {
            // msg =constraintViolations.iterator().next().getMessage();
            return constraintViolations;
        }
        return null;
    }


    /**
     * 预期校验失败
     * */
    public static void main(String[] args) {
        Customer customer = new Customer();
        customer.setName("x l");
        Set valid = validate(customer);
        System.out.println(valid);
    }

}
````