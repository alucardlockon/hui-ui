<template>
<div :class="[showSize,cssClass]">
  {{cValue}}
  <input type="text" name="text" v-model="cValue" id="text1">
  <button class="btn btn-default" @click="computeValue()"><slot></slot></button>
  {{dCar.name}}的信息:{{dCar.price}}
  {{dCar.name?dCar.toString():""}}
</div>
</template>
<script>

var $ = require('jquery')

class MyCar {
  constructor (name, price) {
    this.name = name
    this.price = price
  }
  toString () {
    return '这是你的车:' + this.name + ',' + this.price + '。'
  }
}

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
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      a: 1,
      b: 2,
      tempValue: 0,
      dCar: {
        type: MyCar
      }
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
      let testArr = Array.of(a, b, c, d, e, f)
      // let testArr = [a, b, c, d, e, f]
      testArr.forEach((value) => {
        this.tempValue += value
      })
      for (const item of testArr) {
        this.tempValue += item === a ? b : c
      }
      this.dCar = new MyCar('AE86', 50000)
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
