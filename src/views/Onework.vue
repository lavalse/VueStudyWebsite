<template>
  <div class="oneworkbox">
    <h1>
      {{ $route.params.id }}
    </h1>

    <PhotoFlow :datas= datas category= "projectphoto"></PhotoFlow>

    <h1>
      {{ datas }}
    </h1>
  </div>
  
</template>

<script>
import PhotoFlow from '@/components/infoFlow/PhotoFlow'
import mydata from '@/json/projects.json'


export default {
  name: 'workIntroPage',
  props:['ispc'],

  data(){
    return {
      fulldatas: mydata,
      datas: mydata,

    }
  },

  components:{
    PhotoFlow
  },

  created:function(){
    this.filter();
  },

  methods:{
      filter(){
        console.log("this is methods");
        var temp = this.datas.filter(item => item.url === this.$route.params.id ) ;
        console.log(temp);
        if(temp.length === 0){
          console.log("ERROR!!");
          this.$router.push({path: '/404'});
        }
      this.datas = temp;
      }
    },

  watch: {
    '$route' () {
      this.datas = this.fulldatas;
      this.filter();
    }
  }

}
</script>

<style lang="scss">
.oneworkbox {
  margin-top: 40%;
}
</style>