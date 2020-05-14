<template>

  <div class="memberbox">

    <PersonFlow v-for="data in datas" v-bind:key="data.id" :info = data ></PersonFlow>

  </div>

</template>

<script>
import PersonFlow from '@/components/infoFlow/PersonFlow'
import mydata from '@/json/members.json'

export default {
  name: 'App',
  data(){
    return {
      datas:mydata,      
    }
  },
  components:{
    PersonFlow
  }
}
</script>

<style lang="scss">

.memberbox {
  margin-top: 500px;
}

</style>
