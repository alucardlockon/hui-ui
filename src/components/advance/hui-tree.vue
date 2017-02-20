<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
  <div v-show="visible" :class="cssClass" :style="style" >
    {{value}}
    <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Contents</a></li>
                <li><a href="#">Settings</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Links <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li role="separator" class="divider"></li>
                        <li class="dropdown-header">Other Links</li>
                        <li><a href="#">Separated link</a></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#">UserName</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HuiTemp',
  props: {
    value: {
      type: Array
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
