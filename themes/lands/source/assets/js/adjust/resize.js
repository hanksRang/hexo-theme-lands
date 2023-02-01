window.addEventListener('resize', () => { //监听浏览器窗口大小改变
    resizess();
});

function resizess() {
    if (window.innerWidth < 700) {
        var markdownContent = document.getElementById("markdown-content");
        var headerArea = document.getElementById("header-area");
        if (headerArea != null) {
            headerArea.style.display = "none";
        }
        if(markdownContent != undefined) {
            markdownContent.style.width = "100%";
        }
        var markdownContentWrapper = document.getElementById("markdown-content-wrapper");
        if (markdownContentWrapper != undefined) {
            markdownContentWrapper.style.width = "90%";
        }
        var markdownContentWrapperSpuer = document.getElementById("markdown-content-wrapper-super");
        if (markdownContentWrapperSpuer != undefined) {
            markdownContentWrapperSpuer.style.width = "100%";
        }
        var indexLatest = document.getElementById("index-latests");
        if(indexLatest != undefined) {
            indexLatest.style.width = "100%";
        }
        var latestSlider = document.getElementById("latest-slider");
        if (latestSlider != undefined) {
            latestSlider.style.display = "block";
        }
        var indexLeftSide = document.getElementById("index-left-side");
        if (indexLeftSide != undefined) {
            indexLeftSide.style.width = "100%";
        }
        var indexRihtSide = document.getElementById("index-right-side");
        if (indexRihtSide != undefined) {
            indexRihtSide.style.width = "100%";
        }
        var datestrs = document.getElementsByClassName("datestr");
        if (datestrs != undefined) {
            datestrs = Array.from(datestrs)
            datestrs.forEach(function (item){
                console.log("item: " + item)
                item.style.display = "none";
            })
        }
        var youMayLike = document.getElementById("you-may-like");
        if (youMayLike != undefined) {
            youMayLike.style.display = "none";
        }
    } else {
        var headerArea = document.getElementById("header-area");
        if (headerArea != null) {
            headerArea.style.display = "block";
        }
        var markdownContent = document.getElementById("markdown-content");
        if(markdownContent != undefined) {
            markdownContent.style.width = "100%";
        }
        var markdownContentWrapper = document.getElementById("markdown-content-wrapper");
        if (markdownContentWrapper != undefined) {
            markdownContentWrapper.style.width = "80%";
        }
        var markdownContentWrapperSpuer = document.getElementById("markdown-content-wrapper-super");
        if (markdownContentWrapperSpuer != undefined) {
            markdownContentWrapperSpuer.style.width = "80%";
        }
        var indexLatest = document.getElementById("index-latests");
        if(indexLatest != undefined) {
            indexLatest.style.width = "100%";
        }
        var latestSlider = document.getElementById("latest-slider");
        if (latestSlider != undefined) {
            latestSlider.style.display = "flex";
        }
        var indexLeftSide = document.getElementById("index-left-side");
        if (indexLeftSide != undefined) {
            indexLeftSide.style.width = "50%";
        }
        var indexRihtSide = document.getElementById("index-right-side");
        if (indexRihtSide != undefined) {
            indexRihtSide.style.width = "50%";
        }
        var datestrs = document.getElementsByClassName("datestr");
        if (datestrs != undefined) {
            // alert("item: " + datestrs[0].style.display)
            datestrs = Array.from(datestrs)
            datestrs.forEach(function (item){
                // console.log("item: " + item)
                // alert(item.style.display)
                item.style.display = "inline-block";
            })
        }
        var youMayLike = document.getElementById("you-may-like");
        if (youMayLike != undefined) {
            youMayLike.style.display = "block";
        }
    }
}

if (window.innerWidth < 700) {
    var markdownContent = document.getElementById("markdown-content");
    if(markdownContent != undefined) {
        markdownContent.style.width = "100%";
    }
    var markdownContentWrapper = document.getElementById("markdown-content-wrapper");
    if (markdownContentWrapper != undefined) {
        markdownContentWrapper.style.width = "90%";
    }
    var markdownContentWrapperSpuer = document.getElementById("markdown-content-wrapper-super");
    if (markdownContentWrapperSpuer != undefined) {
        markdownContentWrapperSpuer.style.width = "100%";
    }
    var indexLatest = document.getElementById("index-latests");
    if(indexLatest != undefined) {
        indexLatest.style.width = "100%";
    }
    var latestSlider = document.getElementById("latest-slider");
    if (latestSlider != undefined) {
        latestSlider.style.display = "block";
    }
    var indexLeftSide = document.getElementById("index-left-side");
    if (indexLeftSide != undefined) {
        indexLeftSide.style.width = "100%";
    }
    var indexRihtSide = document.getElementById("index-right-side");
    if (indexRihtSide != undefined) {
        indexRihtSide.style.width = "100%";
    }
    var datestrs = document.getElementsByClassName("datestr");
    if (datestrs != undefined) {
        // alert("item: " + datestrs[0].style.display)
        datestrs = Array.from(datestrs)
        datestrs.forEach(function (item){
            // console.log("item: " + item)
            item.style.display = "none";
        })
    }
    var youMayLike = document.getElementById("you-may-like");
    if (youMayLike != undefined) {
        youMayLike.style.display = "none";
    }
    var topIndex = document.getElementById("topIndex");
    if (topIndex != null) {
        topIndex.setAttribute("href", "#")
    }
} else {
    var headerArea = document.getElementById("header-area");
    if (headerArea != null) {
        headerArea.style.display = "block";
    }
    var markdownContent = document.getElementById("markdown-content");
    if(markdownContent != undefined) {
        markdownContent.style.width = "100%";
    }
    var markdownContentWrapper = document.getElementById("markdown-content-wrapper");
    if (markdownContentWrapper != undefined) {
        markdownContentWrapper.style.width = "80%";
    }
    var markdownContentWrapperSpuer = document.getElementById("markdown-content-wrapper-super");
    if (markdownContentWrapperSpuer != undefined) {
        markdownContentWrapperSpuer.style.width = "80%";
    }
    var indexLatest = document.getElementById("index-latests");
    if(indexLatest != undefined) {
        indexLatest.style.width = "100%";
    }
    var latestSlider = document.getElementById("latest-slider");
    if (latestSlider != undefined) {
        latestSlider.style.display = "flex";
    }
    var indexLeftSide = document.getElementById("index-left-side");
    if (indexLeftSide != undefined) {
        indexLeftSide.style.width = "50%";
    }
    var indexRihtSide = document.getElementById("index-right-side");
    if (indexRihtSide != undefined) {
        indexRihtSide.style.width = "50%";
    }
    var datestrs = document.getElementsByClassName("datestr");
    if (datestrs != undefined) {
        // alert("item: " + datestrs[0].style.display)
        // datestrs = Array.from(datestrs)
        for (let i = 0; i < datestrs.length; i ++) {
            let item = datestrs[i]
            // console.log("item: " + item)
            item.style.display = "inline-block";
        }
    }
    var youMayLike = document.getElementById("you-may-like");
    if (youMayLike != undefined) {
        youMayLike.style.display = "block";
    }
}