<template>
  <div id="app">
    <router-view> </router-view>
    <tabbarVue v-if="checkTabbar()"></tabbarVue>
  </div>
</template>

<script>
import tabbarVue from './views/tabbar.vue'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    tabbarVue
  },
  methods: {
    checkTabbar () {
      return !['/detail'].includes(this.$route.path)
    }
  }
}
</script>

<style  >
html,
body,
ul,
h3,
p {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
