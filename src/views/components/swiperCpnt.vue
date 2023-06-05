<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default {
  name: "swiper-cpnt",
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      }
    });
  }

}
</script>

<style>
</style>