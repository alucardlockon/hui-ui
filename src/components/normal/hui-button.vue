<template>
  <div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
    <button class="btn btn-default" :class="cssClass" :id="id"
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
