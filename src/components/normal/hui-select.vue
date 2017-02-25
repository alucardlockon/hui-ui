<template>
<div class="h-xs-8 h-sm-8 h-md-4 h-lg-2">
  <select v-show="visible" class="h-form-control" 
      :class="cssClass" :style="style" >
      <option v-for="item in value" :value="item.value">{{item.text}}</option>
  </select>
</div>
</template>

<script>
export default {
  name: 'HuiSelect',
  props: {
    value: {
      type: Array,
      default: []
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
