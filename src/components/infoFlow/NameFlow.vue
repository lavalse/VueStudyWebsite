<template>
<div class="nameflow">
  <swiper class="nameswiper" :options="swiperOption">

    <swiper-slide v-for="data in datas" v-bind:key="data.id"> 
      <router-link :to="'/members/' + data.url">
        <span>-----</span>
          {{ data.name }} / {{ data.ename }} / {{ data.title}}
        <span>-----</span>
      </router-link>  
    </swiper-slide>

  </swiper>

</div>  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'name-swiper',
    title: 'Multiple slides per view',
    props:['info','speed'],
    components: {
      Swiper,
      SwiperSlide
    },

    data() {
      return {

        datas: this.info,

        swiperOption: {
          loop : true,
          speed: this.speed,
          autoplay: {
            delay: 500, //1秒切换一次
          },
          slidesPerView: 4,
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
    
<style scoped>

</style>