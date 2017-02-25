<template>
<div class="h-xs-8 h-sm-8 h-md-4 h-lg-2">
  <div v-show="visible" :class="cssClass" :style="style" >
    {{value}}
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
