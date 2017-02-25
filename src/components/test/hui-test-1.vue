<template>
<div>
  <h3>hui-ui主要样式:</h3>
  <h4>按钮h-btn:</h4>
  <button v-for="(theme,index) in themes" :class="'h-btn h-btn-link'">
    {{names[index]}}按钮
  </button>
  <h4>表单控件h-form-control:</h4>
  <input type="text" :placeholder="'表单输入框'" class="h-form-control" />
  <h4>布局控件</h4>
  <div class="h-sm-8 h-text-primary h-bg-light">
    你好啦1-1
  </div>
  <div class="h-sm-8 h-text-warning h-bg-primary">
    你好啦1-2
  </div>
  <div class="h-sm-8 h-text-danger h-bg-success">
    你好啦1-3
  </div>
  <div class="h-sm-6 h-text-primary h-bg-dark">
    你好啦2-1
  </div>
  <div class="h-sm-6 h-text-warning h-bg-danger">
    你好啦2-2
  </div>
  <div class="h-sm-6 h-text-danger h-bg-success">
    你好啦2-3
  </div>
  <div class="h-sm-6 h-text-primary h-bg-warning">
    你好啦2-4
  </div>
  <div class="h-sm-12 h-text-warning h-bg-light">
    你好啦3-1
  </div>
  <div class="h-sm-12 h-text-danger h-bg-dark">
    你好啦3-2
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
