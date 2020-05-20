<template>
  <div class="personbox">

    <h1>
      {{ $route.params.id }}
    </h1>

    <PhotoFlow :datas= datas category= "memberphoto"></PhotoFlow>

    <h1>
      {{ datas }}
    </h1>

    <div class="namebox">
      <div class="nameflow">
        <NameFlow :info= fulldatas :speed=3000></NameFlow>
      </div>
    </div>
  </div>
  
</template>

<script>
import NameFlow from '@/components/infoFlow/NameFlow'
import PhotoFlow from '@/components/infoFlow/PhotoFlow'
import mydata from '@/json/members.json'


export default {
  name: 'personpage',
  props:['ispc'],

  data(){
    return {
      fulldatas: mydata,
      datas: mydata,

    }
  },

  components:{
    NameFlow,
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
  },
}
</script>

<style lang="scss">
.personbox {
  margin-top: 40%;
}
</style>