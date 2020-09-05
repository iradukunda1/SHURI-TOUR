/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import webLayout from "@/components/webLayout/layout/webLayout";

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "web layout",
      // redirect: "/",
      component: webLayout
      // children:[
            // {
            //   path: "/",
            //   name: "Home",
            //   component: webLayout
            // }
      // ]
    },
    {
      path: "*",
      name: "404-page",
      component: () => import("../404-page")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(to => {
  document.title = "SHURI-TOUR | " + to.name;
  NProgress.done();
});

// router.beforeEach((to, _, next) => {
//   const status = !!store.getters.auth.token;
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (status) {
//       next();
//     } else {
//       if (store.getters.auth.user.roles.includes("Admin"))
//         return next({ name: "Admin Login" });
//       next({ name: "User Login" });
//     }
//   } else if (to.matched.some(record => record.meta.noAuth)) {
//     if (status) {
//       if (store.getters.auth.user.role === "ADMIN")
//         next({ name: "Admin Dashboard" });
//       if (
//           store.getters.auth.user.role &&
//           store.getters.auth.user.role.type === "SCHOOL"
//       )
//         next({ name: "School Dashboard" });
//       if (
//           store.getters.auth.user.role &&
//           store.getters.auth.user.role.type === "TRANSPORT_COMPANY"
//       )
//         next({ name: "Company Dashboard" });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
export default router;
