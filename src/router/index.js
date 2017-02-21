import Vue from 'vue'
import Router from 'vue-router'
import App from 'App'

import Example from 'Example'
import Test from 'Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
