import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Cell,List,Toast } from 'vant';
Vue.use(Button);
Vue.use(Toast);
Vue.use(List);
Vue.use(Cell)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
