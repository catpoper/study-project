<template>
  <div class="setting">
    <div class="header">
      <img src="../assets/return1.png" alt="">
      <p class="title" @click="routerBack">设置</p>
    </div>
    <router-view class="router">

    </router-view>
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
  .setting{
    background-color: #f4f4f4;
  }
  .header{
    display: flex;
    font-size: 3vh;
    color: #ffb11e;
    height: 4vh;
    line-height: 4vh;
    margin-top: 2vh;
    padding-bottom: 2vh;
    margin-bottom: 1.5vh;
    background-color: white;
  }
  .header>img{
    margin-left: 2vh;
    width: 3vh;
    height: 3vh;
    margin-top: .5vh;
  }
  .title{
    width: 100vw;
    position: absolute;
    left: 0;
    text-align: center;
  }
  .router{
    background-color: #f4f4f4;
    height: 92vh;
  }
</style>
