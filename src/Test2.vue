<template>
  <div id="app3">
    <hui-test-3 :value="message" ></hui-test-3>
  </div>
</template>

<script>
import HuiTest3 from './components/test/hui-test-3'

export default {
  name: 'Test2',
  components: {
    HuiTest3
  },
  props: [ ],
  data () {
    return {
      message: 'Hello World2'
    }
  }
}
</script>

<style>
</style>
