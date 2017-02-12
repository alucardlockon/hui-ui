<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <hui-title h-value="hui-ui用户注册"></hui-title>
    <hui-form-field h-label-text="姓名" h-id="name"></hui-form-field>
    <hui-form-field h-label-text="年龄" h-id="age"></hui-form-field>
    <hui-form-field h-label-text="密码" h-id="password"></hui-form-field>
    <hui-form-field h-label-text="确认密码" h-id="repassword"></hui-form-field>
    <hui-button h-value="评分" h-icon="star" h-icon-pos="foot"></hui-button>
    <!-- <hui-table 
      dataurl="static/json/tabledata.json"
      page-size="10"
      show-line-number="true"
      >
    </hui-table> -->
  </div>
</template>

<script>
/* hui-ui tools */
import HuiFormField from './components/advance/hui-form-field'
import HuiTitle from './components/normal/hui-title'
import HuiButton from './components/normal/hui-button'
// import HuiTable from './components/normal/hui-table'

export default {
  name: 'app',
  components: {
    HuiFormField, HuiTitle, HuiButton
  },
  props: [ ],
  data () {
    return {
      labelText: 'hey'
    }
  }
}
</script>

<style>
#app {
  
}
</style>
