<template>
<div>
  <input type="text" name="text" :value="tempValue" id="text1">
  <button class="btn btn-danger" @click="computeValue()">Press This!</button>
</div>
</template>

<script>
var $ = require('jquery')

export default {
  name: 'HuiTest1',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      a: 1,
      b: 2,
      tempValue: 0
    }
  },
  created: function () {
  },
  methods: {
    computeValue: function () {
      const [a, b, c, d, e, f] = [1, 3, 4, 5, 7, 5]
      // this.tempValue = a + b + c + d + e + f
      $('#text1').blur(() => {
        this.tempValue += 1
      })
      // let testArr = Array.from(a, b, c, d, e, f)
      let testArr = [a, b, c, d, e, f]
      testArr.forEach((value) => {
        this.tempValue += value
      })
      // for (const item of testArr) {
      //   this.tempValue += item === a ? b : c
      // }
    }
  }
}
</script>

<style scoped>

</style>
