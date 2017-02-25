<template>
<div class="h-xs-24 h-sm-12 h-md-8 h-lg-6" style="float:auto">
  <div v-show="visible" :class="cssClass" :style="style" >
    <div class="alert alert-warning">
      <div class="h-text-left">
      窗体
      </div>
      <div class="h-text-right">
        <button class="h-btn h-btn-primary">-</button>
        <button class="h-btn h-btn-danger">x</button>
      </div>
    </div>
    <div class="alert alert-success">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
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
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
