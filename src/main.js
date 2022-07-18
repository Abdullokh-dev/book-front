import { createApp } from 'vue'
import App from './App.vue'
import router from "@/plugins/router";
import store from "@/plugins/vuex/store";

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
