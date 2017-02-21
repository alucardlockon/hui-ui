<template>
  <div id="app">
    <router-link to="/example" class="btn btn-primary">Example</router-link>
    <router-link to="/test" class="btn btn-danger">Test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

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
