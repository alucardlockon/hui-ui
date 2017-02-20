<template>
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" style="float:auto">
  <div v-show="visible" :class="cssClass" :style="style" >
    <div class="alert alert-warning">
      <div class="text-left">
      窗体
      </div>
      <div class="text-right">
        <button class="btn btn-primary">-</button>
        <button class="btn btn-danger">x</button>
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
