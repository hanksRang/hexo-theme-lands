
---
title: Java Velocity模板引擎语法详解（完整版）
date: 2022-06-08 12:09:00
category:
- backend
- tutorial

tags: Java Velocity模板引擎语法详解（完整版）

---

- [介绍](#%E4%BB%8B%E7%BB%8D)
- [语法](#%E8%AF%AD%E6%B3%95)
  - [符号](#%E7%AC%A6%E5%8F%B7)
  - [变量](#%E5%8F%98%E9%87%8F)
  - [转义字符](#%E8%BD%AC%E4%B9%89%E5%AD%97%E7%AC%A6)
  - [循环](#%E5%BE%AA%E7%8E%AF)
  - [条件](#%E6%9D%A1%E4%BB%B6)
  - [关系和逻辑运算符](#%E5%85%B3%E7%B3%BB%E5%92%8C%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6)
  - [注释](#%E6%B3%A8%E9%87%8A)
  - [宏](#%E5%AE%8F)
  - [终止指令](#%E7%BB%88%E6%AD%A2%E6%8C%87%E4%BB%A4)
  - [引入外部资源](#%E5%BC%95%E5%85%A5%E5%A4%96%E9%83%A8%E8%B5%84%E6%BA%90)

### 介绍
<p class="paragraph">
Velocity是一个基于java的模板引擎（template engine），它允许任何人仅仅简单的使用模板语言（template language）
来引用由java代码定义的对象。
它作为一款成熟的基于java的模板引擎，能够帮我们实现页面静态化，同时它将Java代码与网页分开，
使网站在其生命周期内更加可维护，并为Java Server Pages（JSP）或PHP提供了可行的替代方案。
</p>

### 语法
#### 符号

`#` 关键字

Velocity关键字都是使用#开头的，如#set、#if、#else、#end、#foreach等

$ 变量

Velocity变量都是使用$开头的，如：$name、$msg

{}变量

Velocity对于需要明确表示的Velocity变量，可以使用{}将变量包含起来。如在页面中，需要有$someoneName这种内容，此时为了让Velocity能够区分，可以使用${someone}Name。

！变量

如果某个Velocity变量不存在，那么页面中就会显示$xxx的形式，为了避免这种形式，可以在变量名称前加上！如页面中含有$msg，如果msg有值，将显示msg的值；如果不存在就会显示$msg。这是我们不希望看到的，为了把不存在的变量显示为空白，可以使用$!msg。

#### 变量

变量定义：
```js
#set($root = "www")  
#set($name = "index")  
#set($template = "$root/$name")  
$template
```
输出：www/index

变量赋值：赋值的左边必须是一个变量，或者是属性的引用。右边可以是：变量引用、字面字符串、属性引用、方法引用、字面数字、数组
```js
#set($name = $bill)   ##变量引用  
#set($name.pre = "monica")  ##字符串  
#set($name.last = $address.num) ##属性引用  
#set($name.mid = $hotel.find($web)) ##方法引用  
#set($name.num = 123) ##数字  
#set($name.say = ["yes",$my,"yes"]) ##数组  
```
velocity会将属性解释为属性的get方法，如：
```js
$foo.Bar   等同于 $foo.getBar()
$foo.User("join")  等同于 $foo.getUser("join")
$foo.Request.ServerName 等同于 $foo.getRequest().getServerName()
```

#### 转义字符
```js
#set($mail = "foo")  
$mail  
\$mail  
\\$mail  
\\\$mail
```
输出：foo $mail \foo \$mail

单引号和双引号进行转义：

> 最外层是用单引号包围时，双引号直接使用就可以了，两个连续的单引号表示一个单引号
`#set($var2 = 'A"B''C') --> $var2 的值为 A"B'C`

> 最外层是用双引号包围时，单引号直接使用就可以了，两个连续的双引号表示一个双引号
`#set($var2 = "A""B'C") --> $var2 的值为 A"B'C`

> 字符串中的变量需要被解析，则最外层用双引号包围
`#set($var2 = "A""B'C_$var1") --> $var2 的值为 A"B'C_test1`

> 字符串中的变量不能被解析，则最外层用单引号包围
`#set($var2 = 'A"B''C_$var1') --> $var2 的值为 A"B'C__$var1`

#### 循环
语法：
```js
#foreach( 单个元素名称 in 集合)  
         ....  
#end
```
示例：
```js
#foreach( $num in [2..-2])  
    this is $num.</br>  
#end
```

输出：
```
this is 2.
this is 1.
this is 0.
this is -1.
this is -2
```

遍历Map方法：
```js
#foreach($data in $mapData.entrySet())
key:${data.key}   value:${data.value}
#end
```

`#break跳出循环`

示例：
```js
#foreach($item in $items)
  #if($item == "over")
    #break;
  #end
  $item
#end
```

#### 条件
```js
#if(condition)  
......
#elseif(condition)  
......
#else  
......
#end 
```

#### 关系和逻辑运算符
&& 并且  || 或者   ！ 取反

#### 注释
单行注释##
多行注释#*  *#

#### 宏
定义：
```js
#macro(宏的名称  $参数1  $参数2 .....)
       语句体（即函数体）  
#end
```
调用：
```js
#宏的名称 ($参数1  $参数2 .....)  
```

#### 终止指令
`#stop`之后的代码将不再解析
示例：
```js
#set($cmd="stop")
$cmd
#if($cmd == "stop")
  #stop
#end
$cmd  // 此语句将不执行
```

#### 引入外部资源

```js
## foo.vm文件
#set($name = "velocity")
```

`#parse("foo.vm")`

输出结果为：

velocity

`#include("foo.vm")`

输出结果为：

`#set($name = "velocity")`

