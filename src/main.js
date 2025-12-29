import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import { i18n } from "@/utils/lang.js";

createApp(App)
.use(i18n)
.use(router)
.mount('#app')
