<template>
  <div id="app2">
    <hui-test-1 show-size="visible-xs" cssClass="col-xs-12">show_xs:小屏幕显示</hui-test-1>
    <hui-test-1 show-size="visible-sm" cssClass="col-sm-6">show_sm:中小屏幕显示</hui-test-1>
    <hui-test-1 show-size="visible-md" cssClass="col-md-6">show_md:中屏幕显示</hui-test-1>
    <hui-test-1 show-size="visible-lg" cssClass="col-lg-6">show_lg:大屏幕显示</hui-test-1>
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
    }
  }
}
</script>

<style>
#app {
  
}
</style>
