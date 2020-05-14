<template>

  <div class="researchesbox">
    <WorkFlow v-for="data in datas" v-bind:key="data.id" :info = data v-if="data.type==='researches'"></WorkFlow>

  </div>

</template>

<script>
import WorkFlow from '@/components/infoFlow/WorkFlow'
import mydata from '@/json/projects.json'

export default {
  name: 'ResearchPage',
  data(){
    return {
      datas:this.mydatafilter(mydata),      
    }
  },
  components:{
    WorkFlow
  },
  methods:{
    mydatafilter(val){
      return val;
    }
  }
}
</script>

<style lang="scss">

.researchesbox {
  margin-top: 500px;
}

</style>
