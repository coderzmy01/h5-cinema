import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    redirect:"/film"
  },
  {
    path: '/film',
    name: "film",
    component:()=>import( '@/views/film.vue')
  }
]

export default new VueRouter({
  mode:"hash",
  routes
})