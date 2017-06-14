<template>
  <div class="big">
    <span>{{msg}}</span><input type="text" class="myinput" placeholder="毫米">
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {}
    },
    props: ['msg']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .big{
    display: flex;
    width: 100%;
    height: 94px;
    font-size: 35px;
    justify-content:space-between;
    margin-bottom: 2px;
  }
  .myinput{
    width: 40vw;
    border:none;
    height:100%;
    font-size: 35px;
    text-align: right;
    margin-right: 2vw;
    color: #b0b0b0;
    border:0;
    margin-top: -1vw;
  }
  span{
    margin-top:2.5vh;
    margin-left: 2vw;
  }
</style>
