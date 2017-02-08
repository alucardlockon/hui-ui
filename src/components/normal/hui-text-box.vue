<template>
  <input type="text" v-bind:id="id" v-bind:name="name" v-bind:value="value">
</template>

<script>
export default {
  data () {
    return {
      id: 'input',
      name: 'name',
      value: 'value'
    }
  }
}
</script>

<style scoped>

</style>
