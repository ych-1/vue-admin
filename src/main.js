import { createApp } from 'vue'
import 'uno.css'
import './styles/index.css'
import App from './App.vue'
import store from './store'
import router from './router'

import svgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

import * as ionicons5 from '@vicons/ionicons5'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('svg-icon', svgIcon)

// 全局 icon 图标
for (const name in ionicons5) {
  app.component(name, ionicons5[name])
}

app.mount('#app')
