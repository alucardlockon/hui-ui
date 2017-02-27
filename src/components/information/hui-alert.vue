<template>
  <div class="h-xs-24" v-show="visible">
    <button class="h-btn">
      {{value}}
    </button>
    <div class="h-modal" id="myModal">
  			<div class="h-modal-header">
  				<button type="button" class="h-close">
  					&times;
  				</button>
  				提示
  			</div>
  			<div class="h-modal-body">
  				提示文本
  			</div>
  			<div class="h-modal-footer">
  				<button type="button" class="h-btn h-btn-primary">
            确定
  				</button>
  			</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HuiTemp',
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
