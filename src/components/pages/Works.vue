<template>

  <div class="worksbox">
    <WorkFlow v-for="data in datas" v-bind:key="data.id" :info = data v-if="data.type==='works'"></WorkFlow>

  </div>

</template>

<script>
import WorkFlow from '@/components/infoFlow/WorkFlow'
import mydata from '@/json/projects.json'

export default {
  name: 'App',
  data(){
    return {
      datas:mydata,      
    }
  },
  components:{
    WorkFlow
  }
}
</script>

<style lang="scss">

.worksbox {
  margin-top: 500px;
}

</style>
