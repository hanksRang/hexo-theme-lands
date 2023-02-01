---
title: Ajax post方式提交示例代码
date: 2022-03-07 18:08:14
category:
- frontend
- js
tags:
---

```javascript
function subsr(value) {
        $.ajax({
            // url:"http://localhost:8096/gene/sbsr/sbsr",
            url:"https://xxxx:8096/a/b/n",
            type:"post",
            contentType: "application/json",
            data: JSON.stringify(
                {mail: value}
            ),
            scriptCharset: 'UTF-8',
            beforeSend:function(xhr){
                // alert(this.data)
                console.log("before send");
            },
            success:function(data){
                console.log(data);
                alert(data.msg)
            },
            error:function(){
                console.log("请求error");
            },
            complete:function(xhr){
                console.log("complete");
                console.log(xhr);
            }
        })
    }
```