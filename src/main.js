import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Cell, Image as Vimage, List, Toast, ImagePreview, NavBar, Icon, Search, IndexBar, IndexAnchor } from 'vant';
import store from './store';
Vue.use(Button);
Vue.use(Toast);
Vue.use(List);
Vue.use(Cell);
Vue.use(Vimage);
Vue.use(ImagePreview)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Search)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
