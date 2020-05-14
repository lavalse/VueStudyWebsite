<template>
<div class="personflow">
  <swiper class="personwiper" :options="swiperOption" v-if="info">
    <swiper-slide v-for="index in 5" :key="index"> 
      <router-link :to="url">
        <p>------  {{info.name}}  /  {{info.website}}   -------</p>
      </router-link>
    </swiper-slide>

  </swiper>

</div>  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'person-swiper',
    title: 'Multiple slides per view',
    props:['info'],
    components: {
      Swiper,
      SwiperSlide
    },
    data() {     
      return {
        url:this.info.type + "/" + this.info.url,
        swiperOption: {
          loop : true,
          speed: 3000,
          autoplay: {
            delay: 500,//1秒切换一次
          },
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }      
    }
  }
</script>
    
<style lang="scss" scoped>

</style>