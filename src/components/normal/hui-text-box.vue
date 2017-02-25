<template>
  <div class="h-xs-18 h-sm-8 h-md-6 h-lg-4">
    <input 
      type="text"
      class="h-form-control" 
      :class="cssClass"
      :id="id"
      :name="name"
      :placeholder="placeHolder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="goToNext()"
      >
  </div>
</template>

<script>
var $ = require('jquery')

export default {
  props: {
    value: String,
    id: String,
    cssClass: String,
    name: String,
    placeHolder: String
  },
  data () {
    return {
    }
  },
  created: function () {
  },
  methods: {
    goToNext: function () {
      $('#' + this.id).parent().parent().next().find('input[type=text]').focus()
    }
  }
}
</script>

<style scoped>

</style>
