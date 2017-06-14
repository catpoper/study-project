<template>
  <div>
    <div id="content">
      <img src="../assets/friend.png" alt="" class="imgIcon">
      <img src="../assets/eye.png" alt="" id="myEye" class="imgIcon">
    </div>
    <div id="count">
      <p>{{count1}}</p>
      <p>{{count2}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        count1: 2,
        count2: 2
      }
    },
    components: {}
  }
</script>

<style scoped>
  #content{
    display: flex;
    justify-content:center;
  }
  .imgIcon{
    margin: 6vw;
  }
  #myEye{
    margin-top: 7vw;
  }
  #count{
    display: flex;
    color: white;
    justify-content: center;
  }
  #count>p{
    padding: 8.2vw;
    font-size: 4vw;
    margin-top: -14vw;
  }
</style>
