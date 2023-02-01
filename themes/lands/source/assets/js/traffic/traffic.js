$(function () {
    traffic();
    console.log("document.title：" + document.title)
});

// traffic statics
function traffic() {
    $.ajax({
        url:"https://hongkezhang.com/gene/traffic/save",
        type:"post",
        contentType: "application/json",
        data: JSON.stringify(
            {postName: document.title}
        ),
        scriptCharset: 'UTF-8',
        beforeSend:function(xhr){
            // alert(this.data)
            console.log("before send");
        },
        success:function(data){
            console.log(data);
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