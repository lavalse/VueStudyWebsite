<template>

  <div class="researchesbox">
    <WorkFlow v-for="data in filtedmydate" v-bind:key="data.id" :info = data ></WorkFlow>

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
  margin-top: 500px;
}

</style>
