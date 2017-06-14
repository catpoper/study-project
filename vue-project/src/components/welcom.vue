<template>
  <div id="welcom">
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item><img src="../../static/wel1.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/wel2.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../../static/wel3.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item>
        <img src="../../static/wel4.jpg" alt="">
        <div class="gogogo"><router-link to="/Hello/topic">立即体验</router-link></div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
<style scoped>
#welcom{
  width: 100%;
  height: 100vh;
}
img {
  width: 100%;
  height: 100vh;
}
  .gogogo{
    width: 31vw;
    height: 10vw;
    text-align: center;
    font-size: 4vw;
    background-color: #ffb318;
    color: white;
    line-height: 10vw;
    border-radius: 2vw;
    position: absolute;
    bottom: 7vh;
    left: 34vw;
  }

</style>

