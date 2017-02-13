<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
  <input type="checkbox" v-show="visible" :class="cssClass" :style="style"
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
