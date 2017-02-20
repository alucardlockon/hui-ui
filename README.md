# hui-ui

> 我的Vue.js 2.0 网页UI组件。

注：本项目由个人开发，仅为了熟悉vue而开发，组件较简单，并不适合真实的网页开发。  

## 文档

[hui-ui说明文档](docs/index.md)

## 下载源码

```bash
git clone https://github.com/alucardlockon/Hui-UI.git
```

## 快速上手
样式使用了bootstrap，所以在页面中需要添加bootstrap.css  

```html
<link rel="stylesheet" href="/static/css/bootstrap.min.css">
```

### 引入hui-ui

```html
<script type="text/javascript" src="hui-ui.js" > </script>  
```
### 运行&构建

``` bash
# 安装依赖
npm install

# 开发环境
npm run dev

# 生产环境
npm run build
```

## 组件
### 布局
#### 布局组件 hui-col

```html
<hui-col-xs-24>这是文字</hui-col-xs-24>
```

### 常用组件
#### 文本框组件 hui-text-box 

```html
<hui-text-box valuie="123" />
```

#### 文本标签 hui-label  

```html
<hui-label value="文本A" /> 
```

#### 选项框 hui-checkbox  

```html
<hui-checkbox value="选项A" checked />
```

#### 按钮 hui-button  

```html
<hui-button value="按钮A" />
```

#### 表格 hui-table  

```html
<hui-table dataurl="../static/json/tabledata.json" page-size="6"
  page-count="1" show-line-number="false"/>
```
  
#### 日期组件 hui-date-picker  

```html
<hui-date-picker />
```
  
#### 时间组件 hui-time-picker  

```html
<hui-time-picker />
```
  
#### 数字选择器 hui-number-picker  

```html
<hui-number-picker :min="0" :max="10" :step="1"/>
```
  
#### 选择列表 hui-select  

```html
<hui-select :value="selectData"/>
```

```javascript
data () {
  return {
    selectData: [
      {value: '1', text: '选择1'},
      {value: '2', text: '选择2'},
      {value: '3', text: '选择3'}
    ]
  }
}
```

### 消息组件
#### 消息通知 hui-info  

```html
<hui-info value="显示通知"/>
```
  
#### 提示框 hui-alert  

```html
<hui-alert value="点我弹提示"/>
```

#### 确认框 hui-confirm  

```html
<hui-confirm value="点击弹出对话框"/>
```

#### 信息框 hui-msg-box  

```html
<hui-msg-box value="信息框" :buttons="['确定','取消']"
  :evnets="msgBoxEvnets" />
```

### 高级组件
#### 标签页 hui-tab  

```html
<hui-tab :value="navData" />
```
 
#### 窗口 hui-window  

```html
<hui-window />
```

#### 导航栏 hui-nav  

```html
<hui-nav :visible="true" :value="navData"/>
```

```javascript
data () {
  return {
    navData: [
      { title: '首页', url: 'index.html', active: true },
      { title: '新闻', url: 'news.html' },
      { title: '收藏', url: 'fav.html' },
      { title: '视频', url: 'video.html' },
      { title: '我的', url: 'my.html' },
      { title: '设置', url: 'settings.html' }
    ]
  }
}
```

#### 树形栏 hui-tree  

```html
<hui-tree :value="treeData" />
```

```javascript
data () {
  return {
    treeData: {
      list: [
        { title: '系统A',
          list: [
            { title: '系统A-1', url: 'a-1.html' }
          ],
          active: true
        },
        { title: '系统B',
          list: [
            {
              title: '系统B-1',
              url: 'b-1.html',
              list: [
                { title: '系统功能B12', url: 'b-12.html' }
              ]
            },
            { title: '系统B-2', url: 'b-2.html' },
            { title: '功能B' }
          ]
        },
        { title: '系统C', url: 'c.html' },
        { title: '系统D', url: 'd.html' }
      ]
    }
  }
}
```

#### 表单组合项 hui-form-field  

```html
<hui-form-field value="表单A" />
```

## 使用项目
[bootstrap](https://github.com/twbs/bootstrap)  
[bootstrap-datepicker](https://github.com/uxsolutions/bootstrap-datepicker)   
[bootstrap-timepicker](https://github.com/jdewit/bootstrap-timepicker)
[jquery](https://github.com/jquery/jquery)  
[Vue.js](https://github.com/vuejs/vue)  
