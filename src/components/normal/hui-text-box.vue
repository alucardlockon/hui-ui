<template>
  <div class="col-xs-9 col-sm-4 col-md-3 col-lg-2">
    <input 
      type="text"
      class="form-control" 
      :class="hClass"
      :id="hId"
      :name="hName"
      :placeholder="dPlaceHolder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keyup.enter="goToNext"
      >
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    hId: String,
    hClass: String,
    hName: String,
    hPlaceHolder: String
  },
  data () {
    return {
      dPlaceHolder: this.hPlaceHolder ? '请输入' + this.hPlaceHolder : ''
    }
  },
  created: function () {
  },
  methods: {
    goToNext: function () {
      // 从子节点遍历查找下一个input text
      let next = document.getElementById(this.hId)
      while (next) {
        if (next.parentElement && next.parentElement.nextElementSibling) {
          next = next.parentElement.nextElementSibling
          if (next) {
            let nextText = next.querySelector('input')
            if (nextText) {
              nextText.focus()
              break
            }
          }
        } else {
          next = next.parentElement
        }
      }
    }
  }
}
</script>

<style scoped>
input{
  
}
</style>
