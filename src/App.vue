<template>
  <div id="app">
    <router-link to="/example" class="h-btn h-btn-primary">Example</router-link>
    <router-link to="/test" class="h-btn h-btn-danger">Styles</router-link>
    <router-link to="/test2" class="h-btn h-btn-default">Learn Vue</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
require('scss/hui-ui.scss')
// import Router from './router/index'

export default {
  name: 'app',
  components: {
    // Router
  },
  mounted: function () {
    this.$router.push({ path: 'test' })
  }
}
</script>

<style>
</style>
