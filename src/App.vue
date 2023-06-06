<template>
  <div id="app">
    <router-view> </router-view>
    <tabbarVue></tabbarVue>
  </div>
</template>

<script>
import tabbarVue from './views/tabbar.vue'
export default {
  name: 'App',
  components: {
    tabbarVue
  }
}
</script>

<style  >
html,
body,
ul,h3,p{
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
