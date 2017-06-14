<template>
   <div id="header">
     <div @click="backto"><img src="../assets/ar-left.png" alt=""></div>
     <p>{{msg}}</p>
   </div>
</template>

<script>
  export default {
    name: 'hello',
    props: ['msg'],
    data () {
      return {
        hello: ''
      }
    },
    methods: {
      backto: function () {
        this.$router.go(-1)
      }
    }
  }
</script>


<style scoped>
#header{
  background-color: white;
  height: 8vh;
  line-height: 8vh;
  width: 100%;
  position: fixed;
  top: 0;
}
  #header div{
    position: absolute;
    left: 4vw;
    top: 1.5vh;
  }
  #header p{
    color: #ffb319;
    font-size: 3vh;
  }
</style>
