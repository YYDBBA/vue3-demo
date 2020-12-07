import { createApp } from 'vue'
import Router from './router/index'
import Store from './store/index'
import App from './App.vue'
import { Tab, Tabs, Tabbar, TabbarItem, Button, Icon, Swipe, SwipeItem, NavBar, Tag, Image, Loading } from 'vant'
import 'vant/lib/index.css';
import './index.less'

createApp(App)
  .use(Router)
  .use(Store)
  .use(Tabs)
  .use(Tab)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Button)
  .use(Icon)
  .use(SwipeItem)
  .use(Swipe)
  .use(NavBar)
  .use(Tag)
  .use(Image)
  .use(Loading)
  .mount('#app')
