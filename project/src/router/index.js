import Vue from "vue";
import Router from "vue-router";
import dataBackups from "@/components/dataBackups/dataBackups.vue";
import dataUser from "@/components/dataUser/dataUser.vue";
import dataLink from "@/components/dataLink/dataLink.vue";
import dataEvalution from "@/components/dataEvalution/dataEvalution.vue";
import dataNotice from "@/components/dataNotice/dataNotice.vue";
import dataOrder from "@/components/dataOrder/dataOrder.vue";
import dataScenic from "@/components/dataScenic/dataScenic.vue";
import pageLogin from "@/components/pageLogin/pageLogin.vue";
import pageRegister from "@/components/pageRegister/pageRegister.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "pageLogin",
      component: pageLogin
    },
    {
      path: "/pageLogin",
      name: "pageLogin",
      component: pageLogin
    },
    {
      path: "/dataUser",
      name: "dataUser",
      component: dataUser
    },
    {
      path: "/dataBackups",
      name: "dataBackups",
      component: dataBackups
    },
    {
      path: "/dataNotice",
      name: "dataNotice",
      component: dataNotice
    },
    {
      path: "/dataEvalution",
      name: "dataEvalution",
      component: dataEvalution
    },
    {
      path: "/dataLink",
      name: "dataLink",
      component: dataLink
    },
    {
      path: "/dataScenic",
      name: "dataScenic",
      component: dataScenic
    },
    {
      path: "/dataOrder",
      name: "dataOrder",
      component: dataOrder
    },
    {
      path: "/pageRegister",
      name: "pageRegister",
      component: pageRegister
    }
  ]
});
