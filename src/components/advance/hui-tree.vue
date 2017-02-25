<template>
<div class="h-xs-6 h-sm-4 h-md-3 h-lg-2">
  <div class="container" v-show="visible" :class="cssClass" :style="style" >
    <div class="row">
      <div id="navbar" class="span2">
        <ul class="nav nav-pills nav-stacked">
          <hui-tree-item v-for="item in value.list" :value="item"></hui-tree-item>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HuiTreeItem from './hui-tree-item'

export default {
  name: 'HuiTree',
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
  },
  components: {
    HuiTreeItem
  }
}
</script>

<style scoped>

</style>
