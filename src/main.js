import Vue from "vue";
import App from "./App.vue";
import router, { VueRouter } from "./router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
