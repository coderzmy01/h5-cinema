<template>
  <div class="app">
    <swiperCpntVue>
      <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
        <div
          class="swiper-image"
          :style="{ backgroundImage: `url(${item})` }"
        ></div>
      </div>
    </swiperCpntVue>
    <filmHeaderVue></filmHeaderVue>
    <router-view></router-view>
  </div>
</template>

<script>
import filmHeaderVue from './components/filmHeader.vue'
import swiperCpntVue from './components/swiperCpnt.vue'
export default {
  name: "film-page",
  data () {
    return {
      imgList: [
        'http://124.223.69.156:5500/h5-01.jpg',
        'http://124.223.69.156:5500/h5-02.jpg',
        'http://124.223.69.156:5500/h5-03.png']
    }
  },
  components: {
    swiperCpntVue,
    filmHeaderVue
  }

}
</script>

<style lang="less" scoped>
.swiper-slide {
  .swiper-image {
    height: 200px;
    background-size: cover;
    background-position: center center;
  }
}
</style>