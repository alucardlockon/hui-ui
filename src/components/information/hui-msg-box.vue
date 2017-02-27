<template>
<div class="h-xs-24" v-show="visible">
  <button class="h-btn" data-toggle="modal" data-target="#myModal3" >
    {{value}}
  </button>
  <div class="h-modal" id="myModal3">
		<div class="h-modal-header">
      <button type="button" class="h-close">
				&times;
			</button>
			确认
		</div>
		<div class="h-modal-body">
			是否确定
		</div>
		<div class="h-modal-footer">
			<button v-for="(item,index) in buttons" type="button" 
        class="h-btn" data-dismiss="modal" 
        :class="index===0?'btn-primary':'btn-default'">
        {{item}}
			</button>
		</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HuiMsgBox',
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
    buttons: {
      type: Array
    },
    events: {
      type: Array
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
