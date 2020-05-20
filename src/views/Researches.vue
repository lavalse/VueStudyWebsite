<template>

  <div class="researchesbox">
    <WorkFlow class="row" v-for="data in filtedmydate" v-bind:key="data.id" :info= data :slice= 6></WorkFlow>

  </div>

</template>

<script>
import WorkFlow from '@/components/infoFlow/WorkFlow';
import mydata from '@/json/projects.json';

export default {
  name: 'researchesPage',
  components:{
    WorkFlow
  },
  computed:{
    filtedmydate: () => mydata.filter(item => item.type === "researches"),
  }
}
</script>

<style lang="scss">

.researchesbox {
  margin-top: 200px;

  .row {
    margin-top: 20px;
  }
}

</style>
