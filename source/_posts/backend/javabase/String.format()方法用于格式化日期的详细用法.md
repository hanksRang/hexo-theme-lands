---
title: String.format()方法用于格式化日期的详细用法
date: 2022-05-27 16:13:29
category:
- backend
- javabase

tags: String.format()方法用于格式化日期格式的详细用法

---

<img src='/images/backend/javabase/String.format()方法用于格式化日期的详细用法/1.png' />

### 介绍

首先引用官方API文档的解释：
```text
The format specifiers for types which are used to represents dates and times have the following syntax:
   %[argument_index$][flags][width]conversion
```

以上这段介绍说明了日期和时间格式转换的语法：`%[argument_index$][flags][width]conversion`

[]包含的参数是可选参数，分别代表的意思是“参数位置”，标志，宽度，本文暂不对flags和width两个可选参数做介绍。

conversion参数是必填项，由两位的字符组成。第一个字符是t或者T，第二个字符表示要转换成何种格式。例如用法：%1$tH，获取第一个参数表示的24小时制时间值。

### 用法

以下转换用于格式化时间：

名称 | 用法介绍 | 中文释义
--- | --- | ---
'H'	| Hour of the day for the 24-hour clock, formatted as two digits with a leading zero as necessary i.e. 00 - 23. | 00 - 23的24小时制时间值，如果小于两位首位用0补齐
'I'	| Hour for the 12-hour clock, formatted as two digits with a leading zero as necessary, i.e. 01 - 12. | 12小时制时间值
'k'	| Hour of the day for the 24-hour clock, i.e. 0 - 23. | 区别于H的用法在于：不用补齐首位
'l'	| Hour for the 12-hour clock, i.e. 1 - 12. | 12小时制，不用补齐首位
'M'	| Minute within the hour formatted as two digits with a leading zero as necessary, i.e. 00 - 59. | 
'S'	| Seconds within the minute, formatted as two digits with a leading zero as necessary, i.e. 00 - 60 ("60" is a special value required to support leap seconds).
'L'	| Millisecond within the second formatted as three digits with leading zeros as necessary, i.e. 000 - 999.
'N'	| Nanosecond within the second, formatted as nine digits with leading zeros as necessary, i.e. 000000000 - 999999999.
'p'	| Locale-specific morning or afternoon marker in lower case, e.g."am" or "pm". Use of the conversion prefix 'T' forces this output to upper case.
'z'	| RFC 822 style numeric time zone offset from GMT, e.g. -0800. This value will be adjusted as necessary for Daylight Saving Time. For long, Long, and Date the time zone used is the default time zone for this instance of the Java virtual machine.
'Z'	| A string representing the abbreviation for the time zone. This value will be adjusted as necessary for Daylight Saving Time. For long, Long, and Date the time zone used is the default time zone for this instance of the Java virtual machine. The Formatter's locale will supersede the locale of the argument (if any).
's'	| Seconds since the beginning of the epoch starting at 1 January 1970 00:00:00 UTC, i.e. Long.MIN_VALUE/1000 to Long.MAX_VALUE/1000.
'Q'	| Milliseconds since the beginning of the epoch starting at 1 January 1970 00:00:00 UTC, i.e. Long.MIN_VALUE to Long.MAX_VALUE.


以下转换用于格式化日期：

名称 | 用法介绍 | 中文释义
--- | --- | ---
'B'	| Locale-specific full month name, e.g. "January", "February". | 月份全称
'b'	| Locale-specific abbreviated month name, e.g. "Jan", "Feb". | 月份简称
'h'	| Same as 'b'. | 月份简称
'A'	| Locale-specific full name of the day of the week, e.g. "Sunday", "Monday" | 星期（几）
'a'	| Locale-specific short name of the day of the week, e.g. "Sun", "Mon" | 星期（几）简称
'C'	| Four-digit year divided by 100, formatted as two digits with leading zero as necessary, i.e. 00 - 99 | 年，除以100，如2000年表示为20,1988年表示为19
'Y'	| Year, formatted as at least four digits with leading zeros as necessary, e.g. 0092 equals 92 CE for the Gregorian calendar. | 
'y'	| Last two digits of the year, formatted with leading zeros as necessary, i.e. 00 - 99. | 年的后两位
'j'	| Day of year, formatted as three digits with leading zeros as necessary, e.g. 001 - 366 for the Gregorian calendar. | 一年中的第多少天
'm'	| Month, formatted as two digits with leading zeros as necessary, i.e. 01 - 13. | 
'd'	| Day of month, formatted as two digits with leading zeros as necessary, i.e. 01 - 31 | 一个月中的第几天，1位则用0补齐
'e'	| Day of month, formatted as two digits, i.e. 1 - 31. | 一个月中的第几天

日期和时间格式组合使用：

名称 | 用法介绍 | 中文释义
--- | --- | ---
'R'	| Time formatted for the 24-hour clock as "%tH:%tM" | 24小时制，H转换和M转换的组合，如7点过5分表示为07:05
'T'	| Time formatted for the 24-hour clock as "%tH:%tM:%tS".
'r'	| Time formatted for the 12-hour clock as "%tI:%tM:%tS %Tp". The location of the morning or afternoon marker ('%Tp') may be locale-dependent.
'D'	| Date formatted as "%tm/%td/%ty".
'F'	| ISO 8601 complete date formatted as "%tY-%tm-%td".
'c'	| Date and time formatted as "%ta %tb %td %tT %tZ %tY", e.g. "Sun Jul 20 16:17:00 EDT 1969".

### 测试代码
如下是对部分转换的应用举例：
```java
@Test
    public void testDateFormat() {
        Long time = new Date().getTime();
        // --- formatting time
        // 00 - 23
        String formatted = String.format("%1$tH", time);
        System.out.println("formatted: " + formatted);
        // 01 - 12
        formatted = String.format("%1$tH", time);
        System.out.println("formatted: " + formatted);
        // --- formatting dates
        // January - December
        formatted = String.format("%1$tB", time);
        System.out.println("formatted: " + formatted);
        // Jan - Dec
        formatted = String.format("%1$tb", time);
        System.out.println("formatted: " + formatted);
        // --- formatting date time composition
        formatted = String.format("%1$tR", time);
        System.out.println("formatted: " + formatted);
        formatted = String.format("%1$tF", time);
        System.out.println("formatted: " + formatted);
        formatted = String.format("%1$tF %1$tT", time);
        System.out.println("formatted: " + formatted);

        // two args
        formatted = String.format("%1$tF %1$tT %2$tF %2$td", time, 2000l);
        System.out.println("formatted: " + formatted);

        formatted = String.format("%1$tF %1$tC", time);
        System.out.println("formatted: " + formatted);
    }
```