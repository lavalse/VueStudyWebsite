<template>
  <div id="app">

    <SiteNav :ispc="ispc"></SiteNav>

    <router-view></router-view>

    <SiteFooter :ispc="ispc"></SiteFooter>

  </div>
</template>



<script>
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'


export default {
  name: 'App',
  data() {
    return {
      screenwidth: document.body.clientWidth,
      screenheight: document.body.clientHeight,
      ispc: true,
    }
  },
  components:{
    SiteNav,
    SiteFooter
  },
  methods:{

  },
  mounted() {
      if(this.screenwidth > 751){
        this.ispc = true;
      } 
      else {
        this.ispc = false;
      }
      window.onresize = () => {
        return (() => {
          this.screenwidth = document.body.clientWidth;
          this.screenheight = document.body.clientHeight;
         })()
      };
  },

  watch:{
    screenwidth: function(screenwidth){
      if(screenwidth > 751){
        this.ispc = true;
      } 
      else {
        this.ispc = false;
      }
    }
  },
}
</script>


<style>
</style>
