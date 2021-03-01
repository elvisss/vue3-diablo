import { createApp } from 'vue'

import App from '@/App.vue'
import router from './router'
import store from './store'

// global styles
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.scss'

import { ElementPlus } from '@/plugins/element'
import { FontAwesomeIcon } from '@/plugins/fontAwesome'

import { formatNumber } from '@/filters/numeral'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(ElementPlus)

app.config.globalProperties.$filters = {
  formatNumber,
}

app.mount('#app')
