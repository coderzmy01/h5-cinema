<template>
  <nav>
    <ul>
      <router-link active-class="tab-active" tag="li" to="/film">
        <i class="iconfont icon-electronics"></i>
        <span>电影</span>
      </router-link>
      <router-link active-class="tab-active" tag="li" to="/cinema">
        <i class="iconfont icon-box"></i>
        <span>影院</span>
      </router-link>
      <router-link active-class="tab-active" tag="li" to="/film">
        <i class="iconfont icon-gerenzhongxin"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "tab-bar"

}
</script>

<style lang="less" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 25px;
  text-align: center;
  background-color: #fff;
  z-index: 99;
  ul {
    display: flex;
    li {
      display: flex;
      flex-direction: column;
      flex: 1;
      i {
        font-size: 20px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
.tab-active {
  color: red;
}
</style>