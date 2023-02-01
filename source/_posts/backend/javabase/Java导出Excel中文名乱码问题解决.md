---
title: Java导出Excel中文名乱码问题解决
date: 2022-08-30 00:03:29
category:
- backend
- javabase

tags: Java导出Excel中文名乱码问题解决

---

```java
 /**
     * 报表命名兼容浏览器转换
      * @param request request
     * @param fileName 报表名
     * @return
     */
    public static String exportFileName(HttpServletRequest request, String fileName) {
        final String userAgent = request.getHeader("USER-AGENT");
        String exportfilename = fileName;
        try {
            if (org.apache.commons.lang3.StringUtils.contains(userAgent, "MSIE")) {
                //IE浏览器
                exportfilename = URLEncoder.encode(exportfilename, "UTF8");
            } else if (org.apache.commons.lang3.StringUtils.contains(userAgent, "Mozilla")) {
                //google,火狐浏览器
                exportfilename = new String(exportfilename.getBytes(), "ISO8859-1");
            } else {
                exportfilename = URLEncoder.encode(exportfilename, "UTF8");
                //其他浏览器
            }
        } catch (UnsupportedEncodingException e) {
            logger.error("EXCEL报表命名兼容浏览器转换失败");
        }
        return exportfilename;
    }

```

```java
response.addHeader("Content-Disposition", "attachment;filename="+fileName);
response.setContentType("application/octet-stream");
```