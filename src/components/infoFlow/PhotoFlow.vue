<template>
<div class="photoflow">
  <swiper class="photoswiper" :options="swiperOption">
    <swiper-slide v-for="item in 6" v-bind:key="item.id">
      <img class="personimage" :src= "makeurl[item-1]">
    </swiper-slide>
  </swiper>
</div>  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'photo-swiper',
    title: 'Multiple slides per view',
    props:['ispc','datas', 'category'],

    components: {
      Swiper,
      SwiperSlide
    },

    data() {
      return {
        id: this.datas[0].url,
        mycategory: this.category,

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
    },


    computed:{
      makeurl(){
        var imgurl = [6];
        for (var i =0; i<6; i++){
          imgurl[i]= require( "@/assets/" + this.mycategory + "/" + this.id + "/" + i + ".jpg" );
        }
        return imgurl;
      }
    },

    watch: {
      '$route' () {
        this.id = this.$route.params.id // 对路由变化作出响应...
      }
    },
  }
</script>
    
<style scoped>
  .photoswiper {
    height: 200px;
  }

  .personimage {
    width: 240px;
    height: 240px;
  }
</style>