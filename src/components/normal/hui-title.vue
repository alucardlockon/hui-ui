<template>
<div class="text-center col-xs-12" v-show="visible">
  <h1 v-if="level === '1'" :level="level" :class="[cssClass, dAlign]" :style="style" >
    {{value}}<small v-show="smallText">{{smallText}}</small>
  </h1>
  <h2 v-if="level === '2'" :level="level" :class="[cssClass, dAlign]" :style="style" >
    {{value}}<small v-show="smallText">{{smallText}}</small>
  </h2>
  <h3 v-if="level === '3'" :level="level" :class="[cssClass, dAlign]" :style="style" >
    {{value}}<small v-show="smallText">{{smallText}}</small>
  </h3>
  <h4 v-if="level === '4'" :level="level" :class="[cssClass, dAlign]" :style="style" >
    {{value}}<small v-show="smallText">{{smallText}}</small>
  </h4>
  <h5 v-if="level === '5'" :level="level" :class="[cssClass, dAlign]" :style="style" >
    {{value}}<small v-show="smallText">{{smallText}}</small>
  </h5>
  <h6 v-if="level === '6'" :level="level" :class="[cssClass, dAlign]" :style="style" >
    {{value}}<small v-show="smallText">{{smallText}}</small>
  </h6>
</div>
</template>

<script>
export default {
  name: 'HuiTitle',
  props: {
    value: {
      type: String,
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
    },
    level: {
      type: String,
      default: '1'
    },
    align: {
      type: String,
      default: 'center'
    },
    smallText: {
      type: String
    }
  },
  data () {
    return {
      dAlign: 'text-' + (this.align === 'left'
        ? 'left' : (this.align === 'right' ? 'right' : 'center'))
    }
  }
}
</script>

<style scoped>

</style>
