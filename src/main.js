import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/icons";
import Element from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import axios from 'axios'
// Vue.use(ElementUI)
// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// });

const app = createApp(App).use(router);
app.mount("#app");
app.use(Element);
// app.use(axios)

//Vue.prototype.$axios = axios;


