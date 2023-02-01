
let wrappers = document.getElementsByClassName("ruankao-opt-wrapper");
for (let i = 0; i < wrappers.length; i ++) {
    console.log("" + wrappers[i].tagName);
    let childNodes_11 = wrappers[i].childNodes;
    for (let j = 0; j < childNodes_11.length; j ++) {
        let childNode_2 = childNodes_11[j];
        if (childNode_2.nodeType !== 1) {
            continue;
        }
        console.log(childNode_2.childNodes[1]);
        let html = childNode_2.childNodes[1].innerHTML;
        console.log("html: " + html);
        if (html.length > 10) {
            wrappers[i].style.display = "block";
            childNode_2.style.display = "block";
            childNode_2.style.width = "100%";
        } else {
            continue;
        }
        let childNodes_33 = childNode_2.childNodes;
        for (let m = 0; m < childNodes_33.length; m ++) {
            if (childNodes_33[m].nodeType !== 1) {
                continue;
            }
            childNodes_33[0].style.width = "5%";
            childNodes_33[1].style.width = "95%";
            childNodes_33[m].style.display = "inline-block";
            childNodes_33[m].style.marginRight = "0px";
        }
    }
}