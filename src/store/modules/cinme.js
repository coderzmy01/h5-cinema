import req from "@/utils"

const store = {
  state: {
    cinemaInfo:[]
  },
  mutations: {
    setCinemaInfo (state, payload) {
      state.cinemaInfo = payload
   }
  },
  actions: {
    async getCinemaInfo ({ commit }, cityId) {
      const { data: { data: { cinemas } } } = await req({
        url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=2500238`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      })
      commit('setCinemaInfo', cinemas)
      // console.log(cinemas);
    }
  }
}
export default store