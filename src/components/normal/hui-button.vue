<template>
  <div class="h-xs-8 h-sm-8 h-md-4 h-lg-2">
    <button class="h-btn h-btn-default" :class="cssClass" :id="id"
        :title="value?value:''" >
        <span v-show="dIconPos === 'head'" class="glyphicon" :class="dIcon" ></span>
        {{value}}
        <span v-show="dIconPos === 'foot'" class="glyphicon" :class="dIcon" ></span>
    </button>
  </div>
  </template>

<script>
export default {
  props: {
    value: String,
    id: String,
    cssClass: String,
    icon: String,
    iconPos: String
  },
  data () {
    return {
      dIconPos: (this.iconPos && this.iconPos === 'foot') ? 'foot' : 'head',
      dIcon: 'glyphicon-' + (this.icon ? this.icon : '')
    }
  }
}
</script>

<style scoped>

</style>
