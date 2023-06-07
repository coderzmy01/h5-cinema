import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button, Cell, Image as Vimage, List, Toast, ImagePreview, NavBar, Icon } from 'vant';
Vue.use(Button);
Vue.use(Toast);
Vue.use(List);
Vue.use(Cell);
Vue.use(Vimage);
Vue.use(ImagePreview)
Vue.use(NavBar)
Vue.use(Icon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
