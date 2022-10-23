import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import appHeader from "@/components/common/appHeader.vue"
import appBookmarkList from "@/components/common/appBookmarkList"

import "@/assets/style.css"
import "./assets/tailwind.css"

createApp(App)
  .use(store)
  .use(router)
  .component("appHeader", appHeader)
  .component("appBookmarkList", appBookmarkList)
  .mount("#app")
