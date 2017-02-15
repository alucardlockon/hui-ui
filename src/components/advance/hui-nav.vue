<template>
<div class="nav col-xs-12" v-show="visible">
      <ul class="nav nav-pills"> 
          <li v-for="data in value" :class="data.active?'active':''">
            <a :href="data.url">{{data.title}}</a>
          </li> 
      </ul> 
</div>
</template>

<script>
export default {
  name: 'HuiNav',
  props: {
    value: {
      type: Array,
      default: []
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
