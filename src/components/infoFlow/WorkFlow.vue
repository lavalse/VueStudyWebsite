<template>
<div class="project_flow">

  <div class="redtouch" v-on:touchstart="touchjump()" > </div>

  <div class="container" v-on:touchstart="touchjump()">

    <swiper class="project_wiper" :style="initstyle()" :options="swiperOption" v-if="info">
      <swiper-slide v-for="index in 5" :key="index"> 

        
        <router-link  :to="url">
          

            <div class="name">
              <p> {{info.name}} </p>
            </div>

            <div class="logo">
              <img :src="logourl" alt="project_logo">
            </div>

            <div class="website">
                <p> {{ info.website }} </p>
            </div>

        </router-link>

      </swiper-slide>
    </swiper>

  </div>

</div>  
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'project-swiper',
    title: 'Multiple slides per view',
    props:['info','slice'],

    components: {
      Swiper,
      SwiperSlide
    },

    data() {     
      return {
        url:this.info.type + "/" + this.info.url,

        swiperOption: {
          loop : true,
          speed: 5000,

          preventClicks : false,
          preventClicksPropagation : false,

          autoplay: {
            delay: this.initdelay(),
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },

          slidesPerView: this.slice,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }      
    },

    created:function(){
    this.initstyle();
    },

    methods:{
      ////////用来调整初始的位置//////////
      initstyle(){
        var pos = - Math.floor((Math.random() * 800)) ;
        var css = "margin-left: " + pos + "px;" ;
        return css ;
      },

      initdelay(){
        var temp = Math.floor((Math.random() * 1500));
        return temp ;
      },

      touchjump(){
        console.log("jump");
        alert("jump");
      },
    },

    computed:{
      logourl: function(){
        var temp = require("@/assets/projectphoto/" +  this.info.url + "/logo.svg") ;
        return temp ;
      }
      
    },
  }
</script>
    
<style lang="scss" scoped>
.project_flow {
  width: 100%;
  overflow: hidden;
  

}

.project_wiper {
  background-color: chartreuse;
  width:3500px;
  margin-left: -100px;
}

.container {
  background-color: burlywood;
  height:800px;


}

.name {
background-color: chocolate;
  p {
    font-size: 30px;
    white-space:nowrap;
  }
}



.website {
  background-color: chocolate;
  p {
      font-size: 20px;
    }
}

.logo {
  background-color: chocolate;
  width: 150px;
  height: 150px;
  
}

a {
  text-decoration: none;
  color: black;
  } 

  .redtouch {
    width: 50px;
    height: 50px;
    background-color: brown;

  }

</style>