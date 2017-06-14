<template>
  <div id="template">
    <img src="../assets/return.png" alt="" class="return" @click="routerBack">
    <p>个人中心</p>
    <router-link to="/setting">
      <img src="../assets/setting.png" alt="" class="setting">
    </router-link>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        msg: 'hello Samadhi'
      }
    },
    components: {},
    methods: {
      routerBack: function () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  #template{
    width: 100vw;
    height: 7vh;
    background-color: #ffb11e;
    opacity: .7;
    display: flex;
  }
  .return{
    margin-top: 2vh;
    width: 3vh;
    height: 3vh;
    margin-left: 5vw;
    position: absolute;
    z-index: 99;
  }
  .setting{
    margin-top: 1.5vh;
    width: 4vh;
    height: 4vh;
    position: absolute;
    right: 5vw;
  }
  p{
    line-height: 7vh;
    width: 100vw;
    text-align: center;
    color: #Fff;
    font-size: 3vh;
    position: absolute;
    left: 0;
  }
</style>
