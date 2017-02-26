<template>
<div class="h-text-center h-xs-24">
  <div class="h-alert-success">{{value}}</div>
</div>
</template>

<script>
export default {
  props: {
    value: String,
    id: String,
    type: String
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
