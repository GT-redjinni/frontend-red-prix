import { createRouter, createWebHistory } from "vue-router";

// import dummy pages here
import DummyHome from "./components/dummy-home/DummyHome.vue";

import Signin from "./components/auth/Signin.vue";
import Signup from "./components/auth/Signup.vue";
import ForgetPassword from "./components/auth/ForgetPassword.vue";
import Home from "./components/Home.vue";
import DineIn from "./components/Dine-in/DineIn.vue";
import Notifications from "./components/notifications/Notifications.vue";
import Settings from "./components/setting/Settings.vue";

const routes = [
  {
    path: "/",
    name: "DummyHome",
    component: DummyHome,
  },

  //   auth rout here
  {
    path: "/Signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/ForgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },

  // home component
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },

  // DinIn
  {
    path: "/DineIn",
    name: "DineIn",
    component: DineIn,
  },

  // Notifications
  {
    path: "/Notifications",
    name: "Notifications",
    component: Notifications,
  },

  // Settings
  {
    path: "/Settings",
    name: "Settings",
    component: Settings,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "Home") {
//     // If token is not available, redirect to /Signin
//     if (!localStorage.getItem("token")) {
//       next("/Signin");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // If token is not available, redirect to /Signin and save the intended route
    if (!localStorage.getItem("token")) {
      next({
        name: "Signin",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
