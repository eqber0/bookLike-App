import { createRouter, createWebHistory } from "vue-router"

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

export default router
