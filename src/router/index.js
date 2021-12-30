import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/AdminBasic',
      name: 'AdminBasic',
      component: () => import('@/components/AdminBasic.vue')
    },
    {
      path: '/GuestBasic',
      name: 'GuestBasic',
      component: () => import('@/components/GuestBasic.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('@/view/login.vue')
    },
    {
      path: '/guest',
      component: () => import('@/components/GuestBasic.vue'),
      children: [
        {
          path: '/GuestIndex',
          name: 'Index',
          component: () => import('@/view/guest/GuestIndex.vue')
        }]
    },
    {
      path: '/guest',
      component: () => import('@/components/GuestBasic.vue'),
      children: [
        {
          path: '/info',
          name: 'Index',
          component: () => import('@/view/guest/info.vue')
        }]
    },
    {
      path: '/guest',
      component: () => import('@/components/GuestBasic.vue'),
      children: [
        {
          path: '/search',
          name: 'search',
          component: () => import('@/view/guest/search.vue')
        }]
    },
    {
      path: '/guest',
      component: () => import('@/components/GuestBasic.vue'),
      children: [
        {
          path: '/searchStaff',
          name: 'searchStaff',
          component: () => import('@/view/guest/searchStaff.vue')
        }]
    },
    {
      path: '/guest',
      component: () => import('@/components/GuestBasic.vue'),
      children: [
        {
          path: '/staffInfo',
          name: 'staffInfo',
          component: () => import('@/view/guest/staffInfo.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/1_1',
          name: '1_1',
          component: () => import('@/view/admin/Postgres/1_1.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/1_2',
          name: '1_2',
          component: () => import('@/view/admin/Postgres/1_2.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/1_3',
          name: '1_3',
          component: () => import('@/view/admin/Postgres/1_3.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/1_4',
          name: '1_4',
          component: () => import('@/view/admin/Postgres/1_4.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/1_5',
          name: '1_5',
          component: () => import('@/view/admin/Postgres/1_5.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/1_6',
          name: '1_6',
          component: () => import('@/view/admin/Postgres/1_6.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/2_4',
          name: '2_4',
          component: () => import('@/view/admin/Postgres/2_4.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/2_5',
          name: '2_5',
          component: () => import('@/view/admin/Postgres/2_5.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/2_6',
          name: '2_6',
          component: () => import('@/view/admin/Postgres/2_6.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/2_7',
          name: '2_7',
          component: () => import('@/view/admin/Postgres/2_7.vue')
        }]
    },
    {
      path: '/admin',
      component: () => import('@/components/AdminBasic.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/view/index.vue')
        }]
    }
  ]
})
