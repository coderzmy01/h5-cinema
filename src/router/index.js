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
    component: () => import('@/views/film.vue'),
    children: [
      {
        path: '/nowFilming',
        name: "nowMovie",
        component:()=>import("@/views/components/nowMovie.vue")
      },
      {
        path: '/comingSoon',
        name: "futureMovie",
        component:()=>import("@/views/components/futureMovie")
      }
    ]
  }
]

export default new VueRouter({
  mode:"hash",
  routes
})