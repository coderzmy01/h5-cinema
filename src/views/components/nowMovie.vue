<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.filmId"
        @click="handleClick(item.filmId)"
      >
        <div class="left">
          <img :src="item.poster" alt="" />
        </div>
        <div class="right">
          <h3>{{ item.name }}</h3>
          <p class="actor">主演： {{ item.actors | actorFilter }}</p>
          <p>{{ item.nation }} | {{ item.runtime }} 分钟</p>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>


<script>
import req from '@/utils/index'
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      total: 0,
      current: 1
    }
  },
  methods: {
    onLoad () {
      if (this.list.length === this.total && this.list.length !== 0) {

        this.finished = true
        return
      }
      req({
        url: `gateway?cityId=310100&pageNum=${++this.current}&pageSize=10&type=1&k=136082`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(({ data: { data } }) => {
        const { films, total } = data
        this.list = [...this.list, ...films]
        this.total = total
        // 控制是否加载完成
        this.loading = false

      })
    },
    handleClick (id) {
      this.$router.push(`/detail?id=${id}`)
    }
  },
  mounted () {
    req({
      url: `gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=136082`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(({ data: { data } }) => {
      const { films, total } = data
      this.list = films
      this.total = total

    })
  },
  filters: {
    actorFilter (actors) {
      if (!actors) return "暂无演员信息"
      return actors.map(actor => actor.name).join("")
    }
  }
}
</script>

<style lang="less" scoped>
.actor {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.van-cell {
  overflow: hidden;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  .left {
    img {
      margin-right: 10px;
      float: left;
      width: 66px;
    }
  }
  .right {
    flex: 1;
  }
}
</style>