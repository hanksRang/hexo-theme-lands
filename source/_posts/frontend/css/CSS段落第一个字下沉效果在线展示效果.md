title: CSS段落第一个字下沉效果在线展示效果
date: 2022-05-13 00:45:34
category:
- frontend
- css

tags: Css实现段落首字下沉效果, first-letter伪元素的应用场景

---

### 背景
今天在优化网站高亮展示的时候，想到把段落第一个字做下沉处理。解决方法如下文，大家看看吧。

### 实现
对class="paragraph"的段落首字进行下沉显示
```css
.paragraph::first-letter {
    color: #cccccc;
    font-size: 2em;
    float:left;
    margin: 0 0 0 0;
}
```

### 在线展示
显示效果展示：http://en.hongkezhang.com/2022/04/23/literature/Every%20breath%20you%20take/
