<template>
<div class="col-xs-12" v-show="visible">
  <div class="col-xs-12" :class="[cssClass, cCol]" :style="style" >
  </div>
  <div class="col-xs-12" :class="[cssClass, cCol]" :style="style" >
  </div>
</div>
</template>

<script>
export default {
  name: 'HuiCol',
  props: {
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
    },
    col: {
      type: String
    }
  },
  computed: {
    cCol: function () {
      return this.col
    }
  }
}
</script>

<style scoped>

</style>
