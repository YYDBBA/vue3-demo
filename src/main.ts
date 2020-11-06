import { createApp } from 'vue'
import Router from './router/index'
import Store from './store/index'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css';
import './index.css'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(Vant)
app.mount('#app')
