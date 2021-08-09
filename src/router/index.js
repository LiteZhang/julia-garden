import { createRouter, createWebHistory } from "vue-router";
import login from "../views/Login.vue";
// import index from "../views/index.vue";

const routes = [
  {
    path: "/login",
    name: "登录",
    component: login,
    meta: {
      requireAuth: false,
    },
  }, 
  {
    path: "/",
    name: "首页",
    component: login,
    // meta: {
    //   requireAuth: true,
    // },
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;