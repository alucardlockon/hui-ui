<template>
<div>
  <h3>hui-ui主要样式:</h3>
  <h4>按钮h-btn:</h4>
  <button v-for="(theme,index) in themes" :class="'h-btn h-btn-'+theme">
    {{names[index]}}按钮
  </button>
  <h4>表单控件h-form-control:</h4>
  <input type="text" :placeholder="'表单输入框'" class="h-form-control" />
  <h4>布局控件h-size-number:</h4>
  <div class="h-xs-12 h-sm-8 h-text-primary h-bg-light">
    你好啦1-1
  </div>
  <div class="h-xs-12 h-sm-8 h-text-warning h-bg-primary">
    你好啦1-2
  </div>
  <div class="h-xs-12 h-sm-8 h-text-danger h-bg-success">
    你好啦1-3
  </div>
  <div class="h-sm-6 h-lg-4 h-text-primary h-bg-dark">
    你好啦2-1
  </div>
  <div class="h-sm-6 h-lg-8 h-text-warning h-bg-danger">
    你好啦2-2
  </div>
  <div class="h-sm-6 h-lg-4 h-text-danger h-bg-success">
    你好啦2-3
  </div>
  <div class="h-sm-6 h-lg-8 h-text-primary h-bg-warning">
    你好啦2-4
  </div>
  <div class="h-sm-12 h-lg-6 h-text-warning h-bg-light">
    你好啦3-1
  </div>
  <div class="h-sm-12 h-lg-18 h-text-danger h-bg-dark">
    你好啦3-2
  </div>
  <h4>消息控件:h-alert</h4>
  <div class="h-sm-12 h-alert-success">
    成功了!<br>
    succss;<br>
    yes;
  </div>
  <div class="h-sm-12 h-alert-danger">
    失败了!<br>
    fail;<br>
    no;
  </div>
  <h4>表格:h-table</h4>
  <table class="h-table">
    <caption>caption1</caption>
    <tr>
      <th>th1</th>
      <th>th2</th>
      <th>th3</th>
      <th>th4</th>
    </tr>
    <tr>
      <td>td1</td>
      <td>td2</td>
      <td>td3</td>
      <td>td4</td>
    </tr>
    <tr>
      <td>td1</td>
      <td>td2</td>
      <td>td3</td>
      <td>td4</td>
    </tr>
    <tr>
      <td>td1</td>
      <td>td2</td>
      <td>td3</td>
      <td>td4</td>
    </tr>
  </table>
  <h4>导航:h-nav</h4>
  <ul class="h-nav h-nav-pills h-nav-buttons">
    <li><a href="#">导航1</a></li>
    <li><a href="#">导航2</a></li>
    <li><a href="#">导航3</a></li>
    <li><a href="#">导航4</a></li>
    <li><a href="#">导航5</a></li>
    <li><a href="#">导航6</a></li>
  </ul>
  <h4>模态窗:h-modal</h4>
  <div class="h-modal">
    <div class="h-modal-header">
      <button type="button" class="h-close">
				&times;
			</button>
      这是标题
    </div>
    <div class="h-modal-body">
      这是内容
    </div>
    <div class="h-modal-footer">
      <button class="h-btn h-btn-primary">确定</button>
      <button class="h-btn h-btn-defalut">取消</button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'HuiTest1',
  props: {
  },
  data () {
    return {
      themes: ['dark', 'light', 'default', 'primary', 'success', 'warning', 'danger'],
      names: ['暗', '亮', '默认', '主要', '成功', '警告', '危险']
    }
  },
  created: function () {
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
