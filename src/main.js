import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import appHeader from "@/components/common/appHeader.vue"
import appBookmarkList from "@/components/common/appBookmarkList"
import { appAxios } from "@/utils/appAxios"

import "@/assets/style.css"
import "./assets/tailwind.css"

const app = createApp(App)

app.use(store)
app.use(router)
app.config.globalProperties.$appAxios = appAxios
app.component("appHeader", appHeader)
app.component("appBookmarkList", appBookmarkList)
app.mount("#app")
