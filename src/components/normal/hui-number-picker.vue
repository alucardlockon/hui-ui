<template>
<div class="col-xs-4 col-sm-4 col-md-2 col-lg-1">
  <div v-show="visible" :class="cssClass" :style="style" >
    <div class="row">
        <div class="input-group">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" @click="reduce()">-</button>
            </span>
            <input type="text" class="form-control" :value="dValue">
            <span class="input-group-btn">
                <button class="btn btn-primary" type="button" @click="add()">+</button>
            </span>
        </div><!-- /input-group -->
    </div><!-- /.col-lg-6 -->
  </div>
</div>
</template>

<script>
export default {
  name: 'HuiTemp',
  props: {
    value: {
      type: Number,
      default: 0
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
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      dValue: Number
    }
  },
  created: function () {
    this.dValue = this.value
  },
  methods: {
    add: function () {
      if ((this.dValue + this.step) <= this.max) {
        this.dValue += this.step
      } else {
        this.dValue = this.max
      }
    },
    reduce: function () {
      if ((this.dValue - this.step) >= this.min) {
        this.dValue -= this.step
      } else {
        this.dValue = this.min
      }
    }
  }
}
</script>

<style scoped>

</style>
