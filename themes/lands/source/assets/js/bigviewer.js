window.onload=function() {
    var popup = document.getElementById("popup");
    var bodyContainer = document.getElementById("post-container");
    var markBody =  document.getElementById("markdown-content");
    // 图片点击放大效果，只适用于正文页面
    if (markBody != undefined) {
        var imgss = markBody.querySelectorAll("img");
        var lenss = imgss.length;
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        var w2h = windowWidth / windowHeight;
        var h2w = windowHeight / windowWidth;
        imgss.forEach(function (img) {
            // alert(img)
            img.title = "";
            img.style.cursor = 'pointer'
            imgHeight = img.height
            imgWidth = img.width
            // alert(imgWidth + ", " + img.src)
            imgW2h = imgWidth / imgHeight
            imgH2w = imgHeight / imgWidth
            // if (imgHeight > windowHeight) {
            //     return ;
            // }
            // 确定放大比例
            var bigPercentageWidth
            if (w2h >= 1) {
                if (imgW2h < w2h) {
                    bigPercentageWidth = imgW2h / w2h * 100
                    // alert(bigPercentageWidth)
                }
                // else if(imgW2h > 2) {
                //     bigPercentageWidth = 90
                // }
                else {
                    // bigPercentageWidth = w2h / imgW2h * 100
                    bigPercentageWidth = 90
                }
            } else {
                bigPercentageWidth = 90
            }
            var leftPer = (100 - bigPercentageWidth) / 2
            img.onclick = function (event){
                event = event||window.event;
                var target = document.elementFromPoint(event.clientX, event.clientY);
                showBig(target.src, event.clientY, bigPercentageWidth, leftPer, imgW2h, w2h);
                console.log(target.src);
            }
        })
        // 模拟鼠标点击一次，避免必须点击两次才能触发onclick事件
        document.getElementById('post-container').click();
        popup.onclick = function (){
            popup.style.display = "none";
            bodyContainer.style.opacity = "1";
        }
        function showBig(src, y, percentage, leftPer, imgW2h, w2h){
            // alert(y)
            bodyContainer.style.opacity = "0.1";
            popup.getElementsByTagName("img")[0].src = src;
            // popup.getElementsByTagName("img")[0].style.width = "80%";
            // popup.style.top = y + "px";
            popup.style.display = "block";
            popup.style.width = percentage + "%"
            popup.style.left = leftPer + "%"
            // popup.style.height = windowHeight;
            console.log("percentage: " + percentage + ", leftPer: " + leftPer + ", imgW2h: " + imgW2h + ", w2h: " + w2h)
        }
    }

    // 图片懒加载开始，针对所有页面
    var imgsss = document.getElementById("body-container").querySelectorAll("img");
    let ob = new IntersectionObserver(arg => {
        arg.forEach(item => {
            console.log(item)
            if (item.isIntersecting) {  // isIntersecting: true 可以理解为是否已监视
                let img = item.target
                let data_src = img.getAttribute('data-src')
                if (data_src == undefined) {
                    return ;
                }
                img.setAttribute('src', data_src)
                ob.unobserve(img) // 关闭监视
                console.log('observe finished');
            }
        })
    })

    imgsss.forEach(img => {
        ob.observe(img) // 将这些 img 作为监视对象
    })
    // 图片懒加载结束

}
