<template>
  <div>
    <van-nav-bar
      title="标题"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        {{ cityName }}<van-icon color="black" name="arrow-down" />
      </template>
      <template #right>
        <van-icon size="23" color="black" name="search" />
      </template>
    </van-nav-bar>
    <div class="cinema" :style="{ height: height }">
      <ul>
        <li v-for="data in cinemaList" :key="data.cinemaId">
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BetterScroll from 'better-scroll'

export default {
  data () {
    return {
      height: 0
    }
  },
  computed: {
    ...mapState({
      cinemaList: state => state.cinema.cinemaInfo,
      cityName: state => state.city.cityName,
      cityId: state => state.city.cityId
    })
  },
  methods: {
    ...mapActions(["getCinemaInfo"]),
    onClickRight () {
      this.$router.push('/search')
    },
    onClickLeft () {
      this.$router.push('/city')
    },
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 96 + 'px'
    if (!this.cinemaList.length) {
      this.getCinemaInfo(this.cityId)

    }
    this.$nextTick(() => {
      new BetterScroll('.cinema', {
        scrollbar: {
          fade: true
        }
      })
    })
  },
  watch: {
    cityId (cityId, newCityId) {

      this.getCinemaInfo(newCityId);

    }
  }


}
</script>

<style lang="less" scoped>
.cinema {
  height: 300px;
  overflow: hidden;
  position: relative;
  li {
    padding: 5px;
    .address {
      font-size: 12px;
      color: gray;
    }
  }
}
</style>