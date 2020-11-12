import { createApp } from 'vue'
import Router from './router/index'
import Store from './store/index'
import App from './App.vue'
// import Vant from 'vant'
import { Tab,Tabs,Tabbar, TabbarItem, Button, Icon,Swipe,SwipeItem,NavBar } from 'vant'
import 'vant/lib/index.css';
import './index.less'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(Tabs)
app.use(Tab)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Button)
app.use(Icon)
app.use(SwipeItem)
app.use(Swipe)
app.use(NavBar)
// app.use(Vant)
app.mount('#app')
