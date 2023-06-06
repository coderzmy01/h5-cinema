<template>
  <ul>
    <router-link active-class="header-active" tag="li" to="/nowFilming">
      正在热映
    </router-link>
    <router-link active-class="header-active" tag="li" to="/comingSoon">
      即将上映</router-link
    >
  </ul>
</template>

<script>
export default {
  name: "film-header",
  data () { return {} }

}
</script>

<style lang="less" scoped>
ul {
  display: flex;
  height: 50px;
  line-height: 50px;
  text-align: center;
  li {
    flex: 1;
  }
  .header-active {
    color: #ff5f16;
    border-bottom: 2px solid #ff5f16;
  }
}
</style>