import { createApp } from 'vue'

import 'uno.css'
import './styles/index.css'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import App from './App.vue'
import store from './store'
import router from './router'

import svgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('svg-icon', svgIcon)

app.mount('#app')
