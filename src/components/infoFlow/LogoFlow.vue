<template>
<div class="logoflow">
  <swiper class="logoswiper" :options="swiperOption">
    <swiper-slide><img src="@/assets/mainlogo.svg"></swiper-slide>
    <swiper-slide><img src="@/assets/mainlogo.svg"></swiper-slide>
    <swiper-slide><img src="@/assets/mainlogo.svg"></swiper-slide>
    <swiper-slide><img src="@/assets/mainlogo.svg"></swiper-slide>
  </swiper>
</div>  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'logo-swiper',
    title: 'Multiple slides per view',
    props:['ispc'],
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          loop : true,
          speed: 3000,
          autoplay: {
            delay: 1000,//1秒切换一次
          },
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>
    
<style scoped>
  .logoswiper {
    height: 200px;
  }
</style>