---
title: Vue系列（1）起步框架搭建
date: 2022-03-06 21:43:49
category:
- frontend
- vue
tags: vue
---

<font size=4>
这两天再次学习vuejs，做后端久了之后，对前端的东西生疏了。现在vue已经来到了3.0版本，接下来准备对vue写一个系列的文章。今天先来看一下如何快速开始vuejs3.0的开发。
</font>

### 1、安装nodejs
注意安装nodejs的版本，如果是比较旧的版本，可能不兼容vue3.0。我在使用的过程中便遇到了这个问题，后来是将本地的nodejs升级到最新的16.x版本。

### 2、初始化项目
`npm init vue@latest`

如果打出如下日志，说明初始化成功，遇到不清楚的全部选择NO：
```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formating? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

### 3、安装并运行
（1）执行`npm install`，如果没报错才可进行下一步
（2）执行`npm run dev`，根据控制台打出的地址来访问应用

### 4、代码分析
（1）入口文件
入口文件为index.html，这个也是默认首页，如果将index.html改为indexs.html，在浏览器地址栏输入`ip:port`将无法直接访问，需要以`ip:port/indexs.html`的形式访问。具体原理暂不分析。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
<!--    <div>-->
<!--        <div id="app1"></div>-->
<!--        <div id="app2"></div>-->

<!--    </div>-->
    <div id="app3"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

<style>
#app3 {
    width: 100%;
    text-align: center;
}
</style>
```

index.html文件的代码其实很简单，只有一个app挂载节点`<div id="app3"></div>`，和一段js引入文件`<script type="module" src="/src/main.js"></script>`。可以看出，下一个跟踪文件便是main.js。

（2）main.js核心文件
这个文件称为核心文件，因为vue的核心库会在这个文件引入，并做一些全局的js操作。
```js
import { createApp } from 'vue'
import App3 from './App-online-invoker.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from "@ant-design/icons-vue";

const app3 = createApp(App3);
app3.use(Antd)
for (const i in Icons) {
    app3.component(i, Icons[i]);
}
app3.mount('#app3')
```

文件中引入了vue的一个核心函数createApp()，将App-online-invoker.vue这个文件以应用的形式创建出来`const app3 = createApp(App3);`。接下来对应用app3引入Ant design UI组件：调用app3的use方法`app3.use(Antd)`，由于Ant design ui的规定，icons的使用要单独引入，以下方式引入：

```js
for (const i in Icons) {
7app3.component(i, Icons[i]);
}
```

接下来将应用挂载到index.html的app3节点下：

```js
app3.mount('#app3')
```

（3）App-online-invoker.vue文件
这个文件就是应用的主文件，目前我只写了一个简单的template
```html
<template>
    <div id="container">
      <a-row>
        <a-col :span="8">
          <a-textarea id="plantuml-input" :style="{width: '100%',  height: '600px'}"/>
        </a-col>
        <a-col :span="8">
          <RightCircleOutlined :style="{fontSize: '50px', color: 'green', margin: '275px auto', }" />
        </a-col>
        <a-col :span="8">
          col-8
        </a-col>
      </a-row>
    </div>
</template>

<script>

export default {
  name: "App-online-invoker"
}
</script>
```

（4）index.html可否挂载多个应用节点
通过看上文中index.html文件的源码，可以发现注释掉了app1和app2节点的内容，经验证，可以在index.html下同时挂载多个应用节点。这样就可以针对不同的应用做不同的个性化解决方案。

（5）单页面项目
本项目是一个单页面项目，所有的内容最后都汇聚到了index.html文件下。
