<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1" v-show="visible">
  <button class="btn" data-toggle="modal" data-target="#myModal3" >
    {{value}}
  </button>
  <div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  	<div class="modal-dialog">
  		<div class="modal-content">
  			<div class="modal-header">
  				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
  					&times;
  				</button>
  				<h4 class="modal-title" id="myModalLabel">
  					确认
  				</h4>
  			</div>
  			<div class="modal-body">
  				是否确定
  			</div>
  			<div class="modal-footer">
  				<button v-for="(item,index) in buttons" type="button" 
            class="btn" data-dismiss="modal" 
            :class="index===0?'btn-primary':'btn-default'">
            {{item}}
  				</button>
  			</div>
  		</div><!-- /.modal-content -->
  	</div><!-- /.modal -->
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
