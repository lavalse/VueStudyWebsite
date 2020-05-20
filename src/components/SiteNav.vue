<template>
    <div class="nav">

      <div class="logo">
        <router-link to="/">
          <img src="@/assets/small_logo.svg" alt="small_logo">
        </router-link>        
      </div>
      
      <div class="nav_container">
        <div class="nav_pc" v-if="ispc">
          <div class="nav_button">
            <router-link to="/about">about</router-link>
          </div>
          <div class="nav_button">
            <router-link to="/members">member</router-link>
          </div>
          <div class="nav_button">
            <router-link to="/researches">research</router-link>
          </div>
          <div class="nav_button">
            <router-link to="/works">works</router-link>
          </div>
          <div class="nav_button">
            <router-link to="/join">Join us</router-link>
          </div>
          <div class="nav_button">
            <a href="https://github.com/darwin-education">
              <img src="@/assets/gitIcon.svg" style="width:40px" alt="git_icon">
            </a>
          </div>
        </div>

        <div class="nav_mb" v-if="!ispc">
          <div class="mb_button">
            <img src="@/assets/hamburger.svg" alt="hamgurger_icon" v-on:click="showbutton">
          </div>
          <div class="mb_list" v-if="isshow" >
            <div class="nav_button">
              <router-link to="/about">about</router-link>
            </div>
            <div class="nav_button">
              <router-link to="/members">member</router-link>
            </div>
            <div class="nav_button">
              <router-link to="/researches">research</router-link>
            </div>
            <div class="nav_button">
              <router-link to="/works">works</router-link>
            </div>
            <div class="nav_button">
              <router-link to="/join">Join us</router-link>
            </div>
            <div class="nav_button">
              <a href="https://github.com/darwin-education">
                github
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  
</template>

<script>
export default {
  name: 'websideNav',
  props:['ispc'],

  data() {
    return {
      isshow: false,
    }
  },

  methods:{
    showbutton: function(){
      this.isshow = !this.isshow
    }
  },

  watch: {
      '$route' () {
        this.isshow = false // 对路由变化作出响应...
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$navBg: rgba(255,255,255,0.8);

.nav {
  width: 100%;
  min-width: 150px;
  height: 80px;
  background-color: $navBg;
  position: fixed;
  top: 0px;
  z-index: 30;

  .logo {
    width: 30px;
    height: 30px;
    float: left;
    margin-top: 25px;
    margin-left: 20px;
    }
    
  .nav_container{
    width: 60%;
    float: right;
    margin-right: 5%;

  }
}

.nav_pc {
  width: 100%;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content:flex-end;
  align-items: center;
  margin-top: 20px;
}

.nav_mb {
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;
  margin-right: 15px;
}


.mb_button{
  width: 30px;
}

.mb_list{
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:flex-end;
  margin-top: 10px;
  }


.nav_button {
  width: 30%;
  min-width: 80px;

  a {
    float: right;
  }
}
</style>