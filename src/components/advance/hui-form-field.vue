<template>
  <div class="form-group">
    <hui-label :id="labelId" :value="dValue" :label-for="dId" />
    <hui-text-box v-model="dTextBoxValue" :place-holder="dValue" :id="dId"
      :name="dId" />
  </div>
</template>

<script>
/* hui-ui tools */
import HuiTextBox from '../normal/hui-text-box'
import HuiLabel from '../normal/hui-label'

export default {
  components: {
    HuiTextBox, HuiLabel
  },
  props: {
    id: String,
    value: String
  },
  data () {
    return {
      dId: this.id ? this.id : (Math.random() * 1000000).toFixed(0).toString(),
      dValue: this.value ? this.value : (Math.random() * 1000000).toFixed(0).toString(),
      dTextBoxValue: ''
    }
  },
  created: function () {
  },
  computed: {
    labelId: function () {
      return this.dId + '_label'
    }
  }
}
</script>

<style scoped>
div{
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
