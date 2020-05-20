<template>

<div class="personflow">
  <swiper class="personwiper" :style="initstyle()" :options="swiperOption" v-if="info">
    <swiper-slide v-for="index in 5" :key="index"> 
      <router-link class="container" :to="url">

        <div class="name">
          <p>
            {{info.name}}  /  {{info.ename}}
          </p>
        </div>

        <div class="icon" v-if=" randomico[index] ">
          <img :src="svgurl" alt="person_icon">
        </div>

        <div class="icon" v-if=" index == 5 ">
          <img :src="svgurl" alt="person_icon">
        </div>
        
        <div class="title">
          <p>
            ------  {{info.title}}  ------
          </p>
        </div>



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

    props:['info', 'speed'],
    components: {
      Swiper,
      SwiperSlide
    },

    data() {
      return {
        url:"members/" + this.info.url,
        randomico:[],

        swiperOption: {
          loop : true,
          speed: this.speed,

          preventClicks : false,
          preventClicksPropagation : false,

          autoplay: {
            delay: this.initdelay(),
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },

          slidesPerView: 5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }      
    },

  created:function(){
    this.initstyle();
    this.randomarray(5);
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
      ////////用来控制icon出现的概率////////
      randomarray(n){
        var temp = [n];
        for (var i=0; i <n; i++){
          if(Math.random() > 0.66){
            temp[i]=true;
          }
          else {
            temp[i]=false;
          }
        }
        this.randomico = temp;
      }
    },
    computed:{
      svgurl: function(){
        var temp = require("@/assets/memberphoto/" +  this.info.url + "/icon.svg") ;
        return temp ;
      }
    },
  }
</script>
    
<style lang="scss" scoped>

.personflow {
  width: 100%;
  overflow: hidden;
  

}

.personwiper {
  width:3500px;
  margin-left: -100px;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

}

.name {

  p {
    font-size: 26px;
    white-space:nowrap;
  }
}

.space {
  width:30px;
}

.title {
  p {
      font-size: 16px;
      white-space:nowrap;
    }
}

.icon {
  width: 50px;
  height: 50px;
  
}

a {
  text-decoration: none;
  color: black;
  } 

</style>