import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
} from '@fortawesome/free-solid-svg-icons'
import {
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Traer la librería
import ElementPlus from 'element-plus'

import App from '@/App.vue'
import router from './router'
import store from './store'

import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

library.add(
  faSkull,
  faCrown,
  faDungeon,
  faHatWizard,
  faHammer,
  faGem,
  faVuejs,
  faBootstrap,
  faFontAwesome,
  faGithub,
  faBattleNet,
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
