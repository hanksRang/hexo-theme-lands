title: Css实现段落首字下沉效果
date: 2022-03-25 00:45:34
category:
- frontend
- css
tags: Css实现段落首字下沉效果, first-letter伪元素
---

对class="paragraph"的段落首字进行下沉显示
```css
.paragraph::first-letter {
    color: #cccccc;
    font-size: 2em;
    float:left;
    margin: 0 0 0 0;
}
```
