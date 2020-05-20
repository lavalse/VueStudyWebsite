<template>

  <div class="memberbox">

    <PersonFlow class="row" v-for="data in datas" v-bind:key="data.id" :info = data :speed= randomspeed(5000) ></PersonFlow>

  </div>

</template>

<script>
import PersonFlow from '@/components/infoFlow/PersonFlow'
import mydata from '@/json/members.json'

export default {
  name: 'MembersPage',

  data(){
    return {
      datas:mydata,      
    }
  },

  components:{
    PersonFlow
  },

  methods:{
    randomspeed(val){
      return  Math.floor((Math.random() * 3000) + val);
    }
  },

}
</script>

<style lang="scss">

.memberbox {
  margin-top: 150px;

  .row {
    margin-top: -10px;
  }
}

</style>
