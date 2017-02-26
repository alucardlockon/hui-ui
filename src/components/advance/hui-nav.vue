<template>
<div class="h-xs-24" v-show="visible">
    <ul class="h-nav h-nav-pills"> 
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
