import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editPage',
      name: 'editPage',
      component: () => import('@/view/editPage'),
      meta: {
        title: '编辑页',
        icon: 'test'
      }
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('@/view/StoreTest/Test'),
      meta: {
        title: 'StoreTest',
        icon: 'test'
      }
    }
  ]
})
