<template>
  <input 
    type="text" 
    class="form-control col-sm-3"
    :id="dataId" 
    :name="name" 
    :value="value"
    @input="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
  props: {
    dataId: String,
    dataValue: String,
    value: String
  },
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
