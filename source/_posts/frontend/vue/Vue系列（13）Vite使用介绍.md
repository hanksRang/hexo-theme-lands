---
title: Vue系列（13）Vite使用介绍
date: 2022-03-09 15:41:35
category: 
- frontend
- vue
tags: vue, vite
---

<font size=4>
Vite取代了webpack作为Vue3.0的打包工具，从性能上提升了很多。
</font>

### 1、vite.config.js配置
条件语句中，serve表示开发环境，else语句表示的是生产环境
```js
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      server: {
        port: 3000
      }
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [vue()],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      server: {
        port: 8000
      }
    }
  }
})
```

更多配置查看官网文档：`https://vitejs.cn/config/`。查阅package.json文件，这里有三个命令：

```json
"scripts": {
    "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
    "build": "vite build", // build for production
    "preview": "vite preview --port 5050" // locally preview production build
  }
```

三个命令分别指代：npm run dev，npm run build，bpm run preview。npm run dev指代vite，vite dev，vite serve，所以执行vite、vite dev、vite serve是一样的效果，都是运行的开发服务器。但是值得主义的是，vite.config.js中的command === 'serve'不能换成command === 'dev'，因为vite源码中只区分serve和build。如下关系：
npm 命令 | vite 命令 | 解释 |
--- | --- | ---
dev | vite, vite dev, vite serve | vite、vite dev、vite serve是一样的效果
build | vite build | build for production
preview | vite preview --port 5050 | locally preview production build，需要指明端口

### 2、区分development和production环境变量
官网的模式讲解：`https://vitejs.cn/guide/env-and-mode.html#intellisense`。
模式文件格式：.env.[mode]，mode可以是development或production，分别指代开发和生产环境。根据上表，dev命令将读取.env.developement的参数，build和preview将读取.env.production文件的参数。
npm 命令 | vite 命令 | 解释 | 环境文件
--- | --- | --- | ---
dev | vite, vite dev, vite serve | vite、vite dev、vite serve是一样的效果 | .env.development
build | vite build | build for production | .env.production
preview | vite preview --port 5050 | locally preview production build，需要指明端口 | .env.production

如.env.development文件中有如下变量：
```
VITE_BASE_API_URL = 'http://localhost:9000'
```
在vue（.js文件也可以）文件中的引入方式：
```
import.meta.env.VITE_BASE_API_URL
```

**这里要注意的是变量的前缀为VITE_，否则不会被vite读取，这个是官方的规定**
