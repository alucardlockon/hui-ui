# Vue
## Vue是什么?
> Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的 渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用。

## 如何安装或引入?

### 引入js
```js
<script src="https://unpkg.com/vue/dist/vue.js"></script>
```

### npm
```bash
npm install vue
```

### vue-cli
官方命令行工具，可提供构建大型应用的快速配置，开发环境。  
```bash
npm install -g vue-cli
```

## 使用基础
### Hello World
```html
<div id="app">
  {{ message }}
</div>
```
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

### Vue基本参数

#### el
指令所绑定的元素，可以用来直接操作 DOM 。  

#### data
data表示该vue实例的属性，这些属性都是响应式的。  
 
#### methods
Vue实例的方法  

#### computed
计算属性  

### 生命周期
![vue生命周期图示](img_learn-vue/vue-life-cycle.png)  

#### created
Vue实例创建时  

#### mounted
Vue实例绑定到el标签所在的dom时  

#### updated
Vue实例属性更新时  

#### destroyed
Vue实例调用了destroy方法后  

### Vue常用指令

#### v-bind
绑定标签的属性
```html
// v-bind
<button v-bind:class="{ btn: 'btn' }"></button>
// 简写
<button :class="{ btn: 'btn' }"></button>
// 绑定多个class
<button :class="['btn', 'btn-default']"></button>
```

#### v-show
```html
<div v-show="show">
  {{value}}
</div>
```
#### v-if
```html
<div v-if="show">
  第一个div
</div>
<div v-else>
  另一个div
</div>
```

#### v-for
```html
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>
```
```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      {message: 'Foo' },
      {message: 'Bar' }
    ]
  }
})
```

#### v-on
```html
<div id="example-1">
  <button v-on:click="counter += 1">增加 1</button>
  <!-- 这是简写 -->
  <button @:click="counter += 2">增加 2</button> 
  <input v-on:keyup.13="submit">
  <input v-on:keyup.enter="submit">
  <p>这个按钮被点击了 {{ counter }} 次。</p>
</div>
```
```js
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

### 组件

#### template
组件的模板  

#### components
该组件引用的组件  

#### props
组件参数 