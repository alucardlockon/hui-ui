<template>
  <div class="h-xs-8 h-sm-8 h-md-4 h-lg-2" v-show="visible">
    <button class="btn" data-toggle="modal" data-target="#myModal" >
      {{value}}
    </button>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    	<div class="modal-dialog">
    		<div class="modal-content">
    			<div class="modal-header">
    				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
    					&times;
    				</button>
    				<h4 class="modal-title" id="myModalLabel">
    					提示
    				</h4>
    			</div>
    			<div class="modal-body">
    				提示文本
    			</div>
    			<div class="modal-footer">
    				<button type="button" class="h-btn h-btn-primary" data-dismiss="modal">
              确定
    				</button>
    			</div>
    		</div><!-- /.modal-content -->
    	</div><!-- /.modal -->
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
