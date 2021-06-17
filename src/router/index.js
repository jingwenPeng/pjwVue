import Vue from 'vue'
import Router from 'vue-router'
import NotFoundComponent from '../view/NotFound'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/Test1',
      children: [
        {
          path: '/Test1',
          name: 'Test1',
          component: () => import('@/view/otherTest/Test1')
        }
      ],
      hidden: true
    },
    {
      path: '/editPage',
      component: Layout,
      redirect: '/editPage',
      children: [
        {
          path: '/editPage',
          name: 'editPage',
          component: () => import('@/view/editPage'),
          meta: {
            title: '编辑页',
            icon: 'test'
          }
        }
      ],
      hidden: true
    },
    {
      path: '/Test',
      name: 'Test',
      component: () => import('@/view/StoreTest/Test'),
      meta: {
        title: 'StoreTest',
        icon: 'test'
      }
    },
    {
      path: '/otherTest/Test1',
      name: 'Test1',
      component: () => import('@/view/otherTest/Test1'),
      meta: {
        title: 'StoreTest',
        icon: 'test'
      }
    },
    {
      path: '/',
      name: 'menuTest',
      component: () => import('@/view/menuTest/index'),
      meta: {
        title: 'menuTest',
        icon: 'test'
      }
    },
    { path: '*', component: NotFoundComponent }
  ]
})
