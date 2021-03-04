import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// global styles
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.scss'

import { ElementPlus } from './plugins/element'
import { FontAwesomeIcon } from './plugins/fontAwesome'

import { formatNumber } from './filters/numeral'

import focus from './directives'
import diablo from './directives/diablo'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.component('font-awesome-icon', FontAwesomeIcon)

app.directive('focus', focus)
app.directive('diablo', diablo)

app.config.globalProperties.$filters = {
  formatNumber,
}

app.mount('#app')
