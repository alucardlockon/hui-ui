<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <hui-text-box />
    <!-- <hui-table 
      dataurl="static/json/tabledata.json"
      page-size="10"
      show-line-number="true"
      >
    </hui-table> -->
  </div>
</template>

<script>
/* hui-ui tools */
import HuiTextBox from './components/normal/hui-text-box'
// import HuiTable from './components/normal/hui-table'

export default {
  name: 'app',
  components: {
    HuiTextBox
  }
}
</script>

<style>
#app {
  
}
</style>
