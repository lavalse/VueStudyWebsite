<template>

  <div class="worksbox">
    <WorkFlow v-for="data in filtedmydate" v-bind:key="data.id" :info = data ></WorkFlow>

  </div>

</template>

<script>
import WorkFlow from '@/components/infoFlow/WorkFlow';
import mydata from '@/json/projects.json';

export default {
  name: 'worksPage',
  data(){
    return {
      datas:mydata,      
    }
  },
  components:{
    WorkFlow
  },
  computed:{
    filtedmydate: () => mydata.filter(item => item.type === "works"),
  }
}
</script>

<style lang="scss">

.worksbox {
  margin-top: 500px;
}

</style>
