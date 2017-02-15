<template>
<div class="text-center col-xs-12">
  <div class="alert alert-success">{{value}}</div>
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
