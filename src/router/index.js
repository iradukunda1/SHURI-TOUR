/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import NProgress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
import webLayout from "@/components/webLayout/layout/webLayout";
import home from "@/components/webLayout/pages/views/home";

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
      redirect: "/",
      component: webLayout,
      children: [
        {
          path: "/",
          name: "Home",
          component: home
        },
        {
          path: "/tours",
          name: "Tours",
          component: () =>
            import("@/components/webLayout/pages/tours/tours.vue")
        },
        {
          path: "tours/:id",
          name: "Tour Profile",
          component: () => import("@/components/webLayout/pages/tours/tour")
        },
        {
          path: "request-a-tour-proposal",
          name: "Request-Tour",
          component: () =>
            import("@/components/webLayout/pages/tours/request-tour")
        }
      ]
    },
    {
      path: "*",
      name: "404-page",
      component: () => import("../404-page")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    let position = { x: 0, y: 0 };
    if (savedPosition) {
      position = savedPosition;
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position);
      }, 1000);
    });
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
