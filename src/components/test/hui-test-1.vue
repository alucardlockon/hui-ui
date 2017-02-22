<template>
<div :class="[showSize,cssClass]">
  {{cValue}}
  <input type="text" name="text" v-model="cValue" id="text1">
  <button class="btn btn-default" @click="computeValue()"><slot></slot></button>
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
    },
    showSize: {
      type: String
    },
    cssClass: {
      type: String
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
  },
  computed: {
    cValue: function () {
      return this.a + this.b + this.tempValue
    }
  }
}
</script>

<style scoped>

</style>
