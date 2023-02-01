$(function () {
    var url = decodeURIComponent(location.href.split('#')[0]);//当前页面的地址
    url = encodeURI(url)
    console.log("url: " + url)
    var title = document.title
    var descript = document.getElementsByName("description")
    // alert(descript)
    var description = descript[0].content
    var imgArr = document.getElementById("markdown-content").getElementsByTagName("img")
    var imgUrl = ""
    if (imgArr != undefined) {
        imgUrl = imgArr[0].src // .getAttribute("share-src")
        console.log(imgUrl)
    } else {
        imgUrl = "http://cn.hongkezhang.com/assets/img/favicon.ico"
    }
    // alert(title + description + imgUrl)
    var api_1 = "https://hongkezhang.com/wechat-center/gene/wechat/share/config"
    // var api_2 = "http://localhost:8103/wechat-center/gene/wechat/share/config"
    data.ajaxPost(api_1, url, function (res) {
        var sign = res.sign;
        // alert(sign.appId + ", " + sign.timestamp + ", " + sign.noncestr + ", " + sign.signature)
        // var share = res.share;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: sign.appId, // 必填，公众号的唯一标识
            timestamp: sign.timestamp, // 必填，生成签名的时间戳
            nonceStr: sign.noncestr, // 必填，生成签名的随机串
            signature: sign.signature,// 必填，签名
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });

        wx.ready(function () {
            // 分享接口
            console.log("分享到朋友圈")
            // “分享到朋友”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: description, // 分享描述
                link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户点击了分享后执行的回调函数
                    // alert("Shared successfully")
                }
            });
            // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口

            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                desc: description,
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户点击了分享后执行的回调函数
                    // alert("Shared successfully")
                }
            })

            wx.error(function (res) {
                // alert(JSON.stringify(res));
            });

        });
    })
})
//异步请求
var data = {
    ajaxPost: function (api, url, callback) {
        $.ajaxSetup({
            async: true
        });
        jQuery.ajax({
            url: api,
            data: JSON.stringify(
                {url: url}
            ),
            type: "POST",
            contentType: "application/json",
            beforeSend: function () {
            },
            success: function (res) {
                // alert("成功：" + res.sign.noncestr)
                // if (arguments.length == 3) {
                //
                // } else {
                //     layer.msg(res.message);
                // }
                callback(res);
            }
            , error: function (res) {
                alert("失败" + res)
                console.log("请求失败");
            },
            complete: function () {
            }
        });
    }
}