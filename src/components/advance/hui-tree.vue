<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
  <div v-show="visible" :class="cssClass" :style="style" >
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <hui-tree-item v-for="item in value.list" :value="item"></hui-tree-item>
      </ul>
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
