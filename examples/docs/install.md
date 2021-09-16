# 安装

----

## 使用 npm 安装
推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用

```bash
npm install vvui --save
```





#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 babel.config.js 修改为：

```js
{
  "plugins": [
    [
      [
            "import",
            {
                "libraryName": "vvui",
                "style": (name, file) => {
                    console.log('name=>> ', name);
                    return `vvui/lib/theme-default/${name.split('/')[2]}.css`
                }
            }
        ]
    ]
  ]
}
```

```js
import { Button } from 'vvui';
等同于
var button = require('vvui/lib/button')
require('vvui/lib/theme-default/button.css')
```


接下来，如果你只希望引入部分组件，比如 只需要引入素材通用模块中的Content（latex转义html解析），那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Input } from 'vvui';
import App from './App.vue';

Vue.component(Input.name, Input);
/* 或写为
 * Vue.use(Input)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
