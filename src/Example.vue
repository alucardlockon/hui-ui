<template>
  <div id="app2">
    <!-- <hui-toc target="app" /> -->
    <hui-title value="Demo" align="left" />
    <hui-title value="用户注册" level="2" />
    <hui-form-field value="姓名" id="name" />
    <hui-form-field value="年龄" id="age" />
    <hui-form-field value="性别" id="sex" />
    <hui-form-field value="密码" id="password" />
    <hui-form-field value="确认密码" id="repassword" />
    <hui-col />
    <div class="col-xs-12">
      <hui-button value="确定" icon="save" cssClass="btn-primary" />
      <hui-button value="取消" icon="star" />
    </div>
    <hui-title value="组件" align="left" />
    <hui-title value="常用组件" level="2" align="left" />
    <hui-title small-text="hui-text-box  文本框组件" level="3" align="left" />
    <hui-text-box valuie="123" />
    <hui-title small-text="hui-label  文本标签" level="3" align="left" />
    <hui-label value="文本A" /> 
    <hui-title small-text="hui-checkbox  选项框" level="3" align="left" />
    <hui-checkbox value="选项A" checked />
    <hui-title small-text="hui-button  按钮" level="3" align="left" />
    <hui-button value="按钮A" />
    <hui-title small-text="hui-table  表格" level="3" align="left" />
    <hui-table dataurl="../static/json/tabledata.json" page-size="6"
      page-count="1" show-line-number="false"/>
    <hui-title small-text="hui-date-picker  日期组件" level="3" align="left" />
    <hui-date-picker />
    <hui-title small-text="hui-time-picker  时间组件" level="3" align="left" />
    <hui-time-picker />
    <hui-title small-text="hui-number-picker  数字选择器" level="3" align="left" />
    <hui-number-picker :min="0" :max="10" :step="1"/>
    <hui-title small-text="hui-select  选择列表" level="3" align="left" />
    <hui-select :value="selectData"/>
    <hui-title value="消息组件" level="2" align="left" />
    <hui-title small-text="hui-info  边角消息通知" level="3" align="left" />
    <hui-info value="显示通知"/>
    <hui-title small-text="hui-alert  提示框" level="3" align="left" />
    <hui-alert value="点我弹提示"/>
    <hui-title small-text="hui-confirm  确认框" level="3" align="left" />
    <hui-confirm value="点击弹出对话框"/>
    <hui-title small-text="hui-msg-box  信息框" level="3" align="left" />
    <hui-msg-box value="信息框" :buttons="['确定','取消']"
      :evnets="msgBoxEvnets" />
    <hui-title value="高级组件" level="2" align="left" />
    <hui-title small-text="hui-tab  标签页" level="3" align="left" />
    <hui-tab :value="navData" />
    <hui-title small-text="hui-window  窗口" level="3" align="left" />
    <hui-window />
    <hui-title small-text="hui-nav  导航栏" level="3" align="left" />
    <hui-nav :visible="true" :value="navData"/>
    <hui-title small-text="hui-tree  树形栏" level="3" align="left" />
    <hui-tree :value="treeData" />
    <hui-title small-text="hui-form-field  表单项，由一个标签和输入框组成" level="3" align="left" />
    <hui-form-field value="表单A" />
  </div>
</template>

<script>
/* hui-ui tools */
/* layout */
import HuiCol from './components/layout/hui-col'
/* normal */
import HuiTitle from './components/normal/hui-title'
import HuiButton from './components/normal/hui-button'
import HuiLabel from './components/normal/hui-label'
import HuiTextBox from './components/normal/hui-text-box'
import HuiCheckbox from './components/normal/hui-checkbox'
import HuiTable from './components/normal/hui-table'
import HuiDatePicker from './components/normal/hui-date-picker'
import HuiTimePicker from './components/normal/hui-time-picker'
import HuiNumberPicker from './components/normal/hui-number-picker'
import HuiSelect from './components/normal/hui-select'
/* information */
import HuiInfo from './components/information/hui-info'
import HuiAlert from './components/information/hui-alert'
import HuiConfirm from './components/information/hui-confirm'
import HuiMsgBox from './components/information/hui-msg-box'
/* advance */
import HuiTab from './components/advance/hui-tab'
import HuiWindow from './components/advance/hui-window'
import HuiNav from './components/advance/hui-nav'
import HuiTree from './components/advance/hui-tree'
import HuiFormField from './components/advance/hui-form-field'
import HuiToc from './components/advance/hui-toc'

export default {
  name: 'Example',
  components: {
    /* layout */
    HuiCol,
    /* normal */
    HuiTitle,
    HuiButton,
    HuiLabel,
    HuiTextBox,
    HuiCheckbox,
    HuiTable,
    HuiDatePicker,
    HuiTimePicker,
    HuiNumberPicker,
    HuiSelect,
    /* information */
    HuiInfo,
    HuiAlert,
    HuiConfirm,
    HuiMsgBox,
    /* advance */
    HuiTab,
    HuiWindow,
    HuiNav,
    HuiTree,
    HuiFormField,
    HuiToc
  },
  props: [ ],
  data () {
    return {
      labelText: 'hey',
      navData: [
        { title: '首页', url: 'index.html', active: true },
        { title: '新闻', url: 'news.html' },
        { title: '收藏', url: 'fav.html' },
        { title: '视频', url: 'video.html' },
        { title: '我的', url: 'my.html' },
        { title: '设置', url: 'settings.html' }
      ],
      selectData: [
        {value: '1', text: '选择1'},
        {value: '2', text: '选择2'},
        {value: '3', text: '选择3'}
      ],
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
      },
      msgBoxEvnets: [
        function () {
          window.alert('确定')
        },
        function () {
          window.alert('取消')
        }
      ]
    }
  }
}
</script>

<style>
</style>
