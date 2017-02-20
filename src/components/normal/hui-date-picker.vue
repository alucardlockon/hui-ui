<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
  <div v-show="visible" :class="cssClass" :style="style" >
    <input type="text" class="form-control datepicker">
  </div>
</div>
</template>

<script>
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
    window.$('.datepicker').datepicker({
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
