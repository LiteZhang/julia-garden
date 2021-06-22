import Vue from "vue";
import Router from "vue-router";

// import VueLoading from 'vue-loading-template'
// Vue.use(VueLoading)

Vue.useContext(Router);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/*  webpackChunkName: "dashboard" */ "@/views/Login.vue"),
    meta: {
      meta: {
        title: "登录",
        tx: 0,
      },
    },
  },  
  {
    path: "/",
    name: "dashboard",
    component: () => import(/*  webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
    meta: {
      meta: {
        title: "主页",
        tx: 1,
      },
    },
  },
];

const router = new Router({
    // mode: 'history',
    // base: '/wx-portal/',
    routes
  })
  
  export default router