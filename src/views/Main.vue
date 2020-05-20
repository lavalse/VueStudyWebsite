<template>

  <div>
    <div class="storyboard">
      storyboard
    </div>

    <div class="logobox">
      <div class="logoflow">
        <LogoFlow></LogoFlow>
      </div>
    </div>

    <div class="namebox">
      <div class="nameflow">
        <NameFlow :info= filtednamedataA :speed=8000></NameFlow>
      </div>
      <div class="nameflow">
        <NameFlow :info= filtednamedataB :speed=5000></NameFlow>
      </div>
    </div>
    
    <div class="selectworkbox">
      <div class="workflow">
        <WorkFlow v-for="data in filtedmydate" v-bind:key="data.id" :info = data :slice= 6></WorkFlow>
      </div>
    </div>

  </div>

</template>

<script>
import LogoFlow from '@/components/infoFlow/LogoFlow'
import NameFlow from '@/components/infoFlow/NameFlow'
import WorkFlow from '@/components/infoFlow/WorkFlow'
import mydata from '@/json/projects.json'
import mynamedata from '@/json/members.json'

export default {
  name: 'mainPage',
  components:{
    LogoFlow,
    NameFlow,
    WorkFlow
  },
  computed:{
    filtedmydate: () => mydata.filter( item => item.select === true ),
    filtednamedataA: () => mynamedata.filter( item => item.id < 4 ),
    filtednamedataB: () => mynamedata.filter( item => item.id > 3 ),
  }
}
</script>


<style lang="scss">

.storyboard {
  margin-top: 80px;
  height: 800px;
  background-color: silver;
}
.logobox {
  overflow: hidden;
  width: 100%;
  height: 200px;
  margin-top: 20px;

  .logoflow {
    width: 2000px;
  }
}

.namebox {
  overflow: hidden;
  width:100%;

  .nameflow {
    margin-top:50px;
    width:2000px;
  }
}

.selectworkbox {

  margin-top: 100px;

}
</style>
