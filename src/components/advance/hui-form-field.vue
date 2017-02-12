<template>
  <div class="form-group">
    <hui-label :h-id="hLabelId" :value="dLabelText" :h-for="dId" />
    <hui-text-box v-model="dTextBoxValue" :h-place-holder="dLabelText" :h-id="dId"
      :h-name="dId" />
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
    hId: String,
    hLabelText: String
  },
  data () {
    return {
      dId: this.hId ? this.hId : new Date().toLocaleDateString() + '_' + Math.random().toString(),
      dLabelText: this.hLabelText ? this.hLabelText : new Date().toLocaleDateString() + '_' + Math.random().toString(),
      dTextBoxValue: ''
    }
  },
  created: function () {
  },
  computed: {
    hLabelId: function () {
      return this.hId + '_label'
    }
  }
}
</script>

<style scoped>
div{
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>
