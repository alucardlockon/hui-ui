<template>
<div class="h-text-right h-xs-6 h-sm-4 h-md-2 h-lg-2">
  <label class="h-text-default" :id="id" :for="labelFor" 
      :title="value?value:''">
      {{value}}
  </label>
</div>
</template>

<script>
export default {
  props: {
    value: String,
    id: String,
    labelFor: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
label {
  font-size: 16px;
  padding-top: 5px;
}
div {
  overflow: hidden;
}
</style>
