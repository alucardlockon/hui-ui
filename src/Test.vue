<template>
  <div id="app2">
    <hui-test-1 show-size="visible-xs" cssClass="h-btn">按钮A</hui-test-1>
    <div class="col-sm-3 container">
      <label for="inputname">{{inputValue}}</label>
      <input id="inputname" v-model="inputValue" type="text" class="form-control"/>
    </div>
  </div>
</template>

<script>
import HuiTest1 from './components/test/hui-test-1'

export default {
  name: 'Test',
  components: {
    HuiTest1
  },
  props: [ ],
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style>
#app {
  
}
</style>
