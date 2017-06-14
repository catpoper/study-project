<template>
  <div class="div">
    <div class="header">
      <img src="../assets/return1.png" alt="" @click="routerBack">
      <p>关于</p>
    </div>
    <div class="edition">
      <p class="now">当前版本</p>
      <p class="code">v1.0.0</p>
    </div>
    <div class="edition">
      <p class="now">最新版本</p>
      <p class="code">无</p>
    </div>
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
.div{
  background-color: #f4f4f4;
}
  .header{
    display: flex;
    background-color: white;
    height: 7vh;
    line-height: 7vh;
  }
  .header>img{
    height: 3vh;
    width: 3vh;
    margin-top: 2vh;
    position: absolute;
    z-index: 99;
    left: 3vh;
  }
  .header>p{
    color: #ffb11e;
    font-size: 2.6vh;
    width: 100vw;
    position: absolute;
    left: 0;
    text-align: center;
  }
  .edition{
    height: 7vh;
    border-bottom: .1vh solid #dedede;
    display: flex;
    line-height: 7vh;
    font-size: 2.6vh;
    position: relative;
  }
  .now{
    position: absolute;
    left: 3vh;
  }
  .code{
    position: absolute;
    right: 3vh;
  }
</style>
