<template>
<div class="h-xs-24">
  <hui-tree :value="toc"/>
</div>
</template>

<script>
import HuiTree from './hui-tree'

export default {
  name: 'HuiTemp',
  props: {
    value: {
      type: String,
      default: ''
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
      toc: [
        { title: 'a', url: 'b' }
      ]
    }
  },
  created: function () {
  },
  methods: {
  },
  components: {
    HuiTree
  }
}
</script>

<style scoped>

</style>
