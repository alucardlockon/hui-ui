<template>
<div class="h-xs-8 h-sm-8 h-md-4 h-lg-2">
  <input type="checkbox" v-show="visible" class="h-form-control" 
    :class="cssClass" :style="style"
    :value="value" :checked="checked" />
</div>
</template>

<script>
export default {
  name: 'HuiCheckbox',
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
    },
    checked: {
      type: Boolean,
      default: false
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
