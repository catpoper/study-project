<template>
    <div>
      <div class="header">
        <div class="personnal"><img @click="backff" src="../assets/ar-left.png" alt=""></div>
        <h3>专题详情</h3>
      </div>
     <img :src="imgSrc">
     <div class="div">
       {{title}}
     </div>
      <div v-for="item in details">
        <h1>——{{item.h1}}——</h1>
        <!--第一种-->
        <div class="dediv">
          {{item.title1}}
        </div>
        <img :src="item.img1">
        <!--第二种-->
        <div class="dediv">
          {{item.title2}}
        </div>
        <div class="dediv">
          {{item.title3}}
        </div>
        <img :src="item.img2">
      </div>
    </div>
</template>
<style scoped>
  .header{
    height: 8vh;
    width: 100%;
    position: relative;
    line-height: 8vh;
    font-size: 4vw;
    color: #ffb319;
    letter-spacing: 0.5vw;
  }
  .personnal{
    margin: 0;
    position: absolute;
    left: 4vw;
    top: 3vw;
  }
  .personnal img{
    width: 8vw;
    height: 8vw;
    margin: 0;
  }
  img{
    width:100%;
  }
  .div{
    font-size:30px;
    text-indent:2em;
    line-height:100px;
  }
  h1{
    text-align: center;
    font-size:35px;
  }
  .dediv{
    font-size:24px;
    text-indent:2em;
    line-height:100px;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        imgSrc: '',
        title: '',
        details: []
      }
    },
    created () {
      this.imgSrc = this.$route.query.imgSrc
      this.title = this.$route.query.title
      this.details = this.$route.query.details
    },
    methods: {
      backff: function () {
        this.$router.go(-1)
      }
    }
  }
</script>
