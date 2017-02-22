# 常用组件(normal)

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