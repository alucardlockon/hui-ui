<template>
<div>
  <button class="btn btn-danger" @click="value2=add(1,2)">{{value}}</button>
  <input type="text" v-bind:value="value2" v-show="true" />
</div>
</template>

<script>
export default {
  name: 'HuiTest3',
  props: {
    value: {
      type: String,
      default: '123'
    }
  },
  data () {
    return {
      value2: '222'
    }
  },
  created: function () {
    this.value2 = '9999'
  },
  methods: {
    add: (a, b) => a + b
  },
  computed: {}
}
</script>

<style scoped>

</style>
