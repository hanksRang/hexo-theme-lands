---
title: Vue系列（2）整合Ant-Design-Vue及遇到的问题
date: 2022-03-06 21:47:35
category:
- frontend
- vue
tags: ant design vue
---

<font size=4>
之前使用的vue ui组件是element-ui，目前element-ui并未对vue3.0进行支持，所以改用ant design vue作为vue的ui组件。下面介绍如何整合ant design vue和vue，以及使用过程中遇到的问题。
</font>

### 1、安装
`npm i --save ant-design-vue@next`

安装完成，我本地的安装包显示ant-design-vue版本号为2.2.8

### 2、引入
本系列文章（1）：<strong><a href="https://www.hongkezhang.com/2022/03/06/vue/Vue%E7%B3%BB%E5%88%97%EF%BC%881%EF%BC%89%E8%B5%B7%E6%AD%A5%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA/">Vue系列（1）起步框架搭建</a>的“代码分析”部分</strong>已经介绍了如何引入ant design vue。

### 3、使用问题

#### （1）icons使用的问题
这里要特别注意，ant design vue的版本变化，随之而来的icons使用也发生了变化，上文中说了我是用的是2.2.8的版本，所以对应的icons也是2.x版本的。参阅官方文档：<strong><a href="https://2x.antdv.com/components/icon-cn">https://2x.antdv.com/components/icon-cn</a></strong>

在代码中使用形式：
```html
 <RightCircleOutlined v-on:click="runCmd" :style="{fontSize: '50px', color: 'green', margin: '275px auto', }" />
```

#### （2）v-model使用问题
在使用textarea标签的时候碰到了这个问题，是我把vue和ant design vue两者的属性混淆了。
v-model是vue的属性，v-model:value是ant design vue的属性。我尝试用以下代码设置value到content变量，始终不能成功：
```html
<a-textarea v-model="content" id="plantuml-input" :style="{width: '100%',  height: '600px'}"/>
```
而使用如下形式：
```html
<textarea v-model:value="content" id="plantuml-input" :style="{width: '100%',  height: '600px'}"/>
```
将直接报错：
```log
[vite] Internal server error: v-model argument is not supported on plain elements.
  Plugin: vite:vue
  File: /src/App-online-invoker.vue
  3  |        <a-row>
  4  |          <a-col :span="8">
  5  |            <textarea v-model:value="content" id="plantuml-input" :style="{width: '100%',  height: '600px'}"/>
     |                               ^
  6  |          </a-col>
  7  |          <a-col :span="8">

```
出现上述问题的原因是：使用了a-标签，表示使用ant design vue组件的标签，就要遵循ant design vue的格式，未使用a标签的时候，就不能使用v-model:value的形式。这里可以理解是ant design vue在vue之上做了一层封装。

正确的做法是下面两种方式：
+ 不使用a-标签
```html
<textarea v-model="content" id="plantuml-input" :style="{width: '100%',  height: '600px'}"/>
```
+ 或者
```html
<a-textarea v-model:value="content" id="plantuml-input" :style="{width: '100%',  height: '600px'}"/>
```

总结：类似的带a-标签的代码也需要参照ant design vue官方给出的使用方式；另外，不同的UI组件使用方式可能不同，比如有的UI组件可能使用v-model也可以设置变量值，应根据具体情况而定。

