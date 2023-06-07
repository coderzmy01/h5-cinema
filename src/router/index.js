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
    redirect:"/nowFilming",
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
  },
  {
    path: '/detail',
    name: "detail",
    component:()=>import("../views/components/filmDetail.vue")
  },
  {
    path: '/cinema',
    name: "cinema",
    component:()=>import("@/views/cinemaList.vue")
  },
  {
    path: '/search',
    name: 'search',
    component:()=>import('@/views/cinemaSearch.vue')
  },
  {
    path: '/city',
    component:()=>import('@/views/cinemaCityList.vue')
  }
]

export default new VueRouter({
  mode:"hash",
  routes
})