
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