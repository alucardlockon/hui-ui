<template>
  <button class="btn btn-default" :class="hClass" :id="hId"
      :title="hValue?hValue:''" >
      <span v-show="dIconPos === 'head'" class="glyphicon" :class="dIcon" ></span>
      {{hValue}}
      <span v-show="dIconPos === 'foot'" class="glyphicon" :class="dIcon" ></span>
  </button>
</template>

<script>
export default {
  props: {
    hValue: String,
    hId: String,
    hClass: String,
    hIcon: String,
    hIconPos: String
  },
  data () {
    return {
      dIconPos: (this.hIconPos && this.hIconPos === 'foot') ? 'foot' : 'head',
      dIcon: 'glyphicon-' + (this.hIcon ? this.hIcon : '')
    }
  }
}
</script>

<style scoped>

</style>
