import { createRouter, createWebHistory } from "vue-router"
import store from "@/store"

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home.vue"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/Register.vue"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new-bookmark",
    component: () => import("@/views/NewBookmark.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/Register.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRequiredRoutes = ["HomePage"]
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"]
  const _isAuthenticated = store.getters._isAuthenticated
  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) {
    next(false)
  }
  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) {
      next()
    } else {
      next({ name: "LoginPage" })
    }
  } else {
    next()
  }
})

export default router
