import { createApp } from 'vue'
// Traer la librería
import ElementPlus from 'element-plus'

import App from '@/App.vue'
import router from './router'
import store from './store'

import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
