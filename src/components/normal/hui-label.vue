<template>
<div class="text-right col-xs-3 col-sm-2 col-md-1 col-lg-1">
  <label class="text-muted control-label" :id="id" :for="labelFor" 
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
