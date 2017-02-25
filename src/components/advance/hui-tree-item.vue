<template>
<li :class="value.list?'dropdown':''">
  <a v-if="value.list" @click="toogle()" >{{value.title}}</a>
  <a v-else :href="value.url" class="h-text-danger">{{value.title}}</a>
  <ul v-show="value.list" v-if="value.list" :class="dToogleClass">
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
      dToogleClass: String
    }
  },
  created: function () {
    this.dToogleClass = 'hide'
  },
  methods: {
    toogle: function () {
      this.dToogleClass = this.dToogleClass === 'show' ? 'hide' : 'show'
    }
  }
}
</script>

<style scoped>

</style>
