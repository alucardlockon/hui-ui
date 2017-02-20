<template>
<li :class="value.list?'dropdown':''">
  <a :href="value.url">{{value.title}}</a>
  <ul v-if="value.list" class="dropdown-menu">
    <hui-tree-item v-for="item in value.list" :value="item"></hui-tree-item>
  </ul>
</li>
</template>

<script>
export default {
  name: 'HuiTreeItem',
  props: {
    value: {
      type: Object
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
    }
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
