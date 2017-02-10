<template>
  <label 
    class="col-sm-1"
    v-bind:id="dataId"
    v-bind:for="forId"
    v-bind:value="dataValue">
    {{dataValue}}
  </label>
  
</template>

<script>
export default {
  props: ['dataId', 'dataValue'],
  data () {
    return {
      forId: 'forId'
    }
  }
}
</script>

<style scoped>
label{
  font-size: 1.5rem
}
</style>
