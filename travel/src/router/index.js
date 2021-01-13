import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/home.vue'
import about from '@/components/about/about.vue'
import news from '@/components/news/news.vue'
import domestic from '@/components/domestic/domestic.vue'
import overseas from '@/components/overseas/overseas.vue'
import hotel from '@/components/hotel/hotel.vue'
import sichuan from '@/components/sichuan/sichuan.vue'
import chongqing from '@/components/chongqing/chongqing.vue'
import yunnan from '@/components/yunnan/yunnan.vue'
 Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/domestic',
      name: 'domestic',
      component: domestic
    },
    {
      path: '/overseas',
      name: 'overseas',
      component: overseas
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel
    },
    {
      path: '/sichuan',
      name: 'sichuan',
      component: sichuan
    },
    {
      path: '/chongqing',
      name: 'chongqing',
      component: chongqing
    },
    {
      path: '/yunnan',
      name: 'yunnan',
      component: yunnan
    },

  ]
})
