import Vue from "vue";
import Router from "vue-router";

import home from "@/components/home/home.vue";
import about from "@/components/about/about.vue";
import news from "@/components/news/news.vue";
import domestic from "@/components/domestic/domestic.vue";
import overseas from "@/components/overseas/overseas.vue";
import hotel from "@/components/hotel/hotel.vue";
import sichuan from "@/components/sichuan/sichuan.vue";
import chongqing from "@/components/chongqing/chongqing.vue";
import yunnan from "@/components/yunnan/yunnan.vue";
import hot from "@/components/hot/hot.vue";
import hotAttractions from "@/components/hotAttractions/hotAttractions.vue";
import newsDetails from "@/components/newsDetails/newsDetails.vue";
import login from "@/components/login/login.vue";
import register from "@/components/register/register.vue";
import orders from "@/components/orders/orders.vue"
import personal from "@/components/personal/personal.vue"
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: "about",
      component: about
    },
    {
      path: "/news",
      name: "news",
      component: news
    },
    {
      path: "/theme/domestic",
      name: "domestic",
      component: domestic
    },
    {
      path: "/theme/overseas",
      name: "overseas",
      component: overseas
    },
    {
      path: "/hotel",
      name: "hotel",
      component: hotel
    },
    {
      path: "/hot",
      name: "hot",
      component: hot,
      children: [
        {
          path: "sichuan",
          name: "sichuan",
          component: sichuan
        },
        {
          path: "chongqing",
          name: "chongqing",
          component: chongqing
        },
        {
          path: "yunnan",
          name: "yunnan",
          component: yunnan
        }
      ]
    },
    {
      path: "/hotAttractions",
      name: "hotAttractions",
      component: hotAttractions
    },
    {
      path: "/newsDetails",
      name: "newsDetails",
      component: newsDetails
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/orders",
      name: "orders",
      component: orders,
    },
    {
      path: "/personal",
      name: "personal",
      component: personal,
    }
  ]
});
