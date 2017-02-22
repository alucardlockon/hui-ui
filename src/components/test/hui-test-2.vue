<template>
<div :class="[showSize,cssClass]">
  
</div>
</template>

<script>
var $ = require('jquery')

export default {
  name: 'HuiTest2',
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
    }
  },
  created: function () {
  },
  methods: {
    computeValue: function () {
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
