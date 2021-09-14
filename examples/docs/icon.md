
# Icon 图标

----
语义化的矢量图形，```VV-UI``` 使用开源的 Iconfont (阿里妈妈MUX倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 ```icon font```。
### 如何使用

使用 ```class="icon"``` 来声明图标，具体图标的名称请 ```copy``` 相应的标签


::: demo
```html

<i class="w-icon-close fs-24"></i>
<i class="w-icon-link fs-24"></i>
<i class="w-icon-tag fs-24"></i>
<i class="w-icon-smile fs-24"></i>

```
:::

### 图标示例

:::demo

```html
<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'w-' + name"></i>
      {{'w-' + name}}
    </span>
  </li>
</ul>
<script>
  var iconList = require('../icon.json');
  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style lang="less">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

</style>

```
:::