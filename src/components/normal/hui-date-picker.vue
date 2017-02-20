<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
  <div v-show="visible" :class="cssClass" :style="style" >
    <input id="datepicker" type="text" class="form-control datepicker">
  </div>
</div>
</template>

<script>
var $ = require('jquery')

import '../../../static/js/bootstrap-datepicker.min.js'

export default {
  name: 'HuiTemp',
  props: {
    value: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: true
    },
    cssClass: {
      type: String,
      default: ''
    },
    style: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  created: function () {
  },
  mounted: function () {
    $('#datepicker').datepicker({
      format: 'yyyy-mm-dd',
      startDate: '-3d',
      language: 'cn'
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
