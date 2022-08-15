import VueRouter from "vue-router";
export { VueRouter };

const router = new VueRouter({
  routes: [
    { path: "/", name: "home", component: () => import("../views/home") }
  ]
});

export default router;
