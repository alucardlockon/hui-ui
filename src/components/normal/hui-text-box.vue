<template>
  <input 
    type="text" 
    class="form-control col-sm-3"
    v-bind:id="dataId" 
    v-bind:name="name" 
    v-bind:value="dataValue"
    >
</template>

<script>
export default {
  props: ['dataId', 'dataValue'],
  data () {
    return {
      name: 'name'
    }
  }
}
</script>

<style scoped>
input{
  width: 20rem
}
</style>
