<template>
<div class="h-xs-24">
  <div v-show="visible" :class="cssClass" :style="style" >
    <ul class="nav nav-pills"> 
        <li v-for="(data,index) in value" :class="dIndex==index?'active':''">
          <a @click="showTab(index)">{{data.title}}</a>
        </li> 
    </ul>
    <div v-for="(data,index) in value" class="alert alert-success"
      :class="dIndex==index?'show':'hide'">
      这是: {{data.title}}
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'HuiTab',
  props: {
    value: {
      type: Array,
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
      dIndex: {
        type: Number,
        default: 0
      }
    }
  },
  created: function () {
    this.dIndex = 0
  },
  methods: {
    showTab: function (index) {
      this.dIndex = index
    }
  }
}
</script>

<style scoped>

</style>
