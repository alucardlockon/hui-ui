import Vue from 'vue'
import Router from 'vue-router'
import App from 'App'

import Example from 'Example'
import Test from 'Test'
import Test2 from 'Test2'

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
    },
    {
      path: '/test2',
      name: 'Test2',
      component: Test2
    }
  ]
})
