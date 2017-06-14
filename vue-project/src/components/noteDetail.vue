<template>
  <div id="notedetail">
    <areatitle msg="日记详情"></areatitle>
    <div class="content">
      <img class="img1"  :src="img1" alt="">
      <div class="user">
        <div><img :src="userpic" alt=""></div>
        <div>
          <h5>{{user}}</h5>
          <p>2015.11.11</p>
        </div>
        <div class="style">
          <img src="../assets/preqian.png" alt=""><span v-for="val in style">#{{val}}#</span>
        </div>
      </div>
      <div class="text">
        <h1>{{title1}}</h1>
        <h4>2015年06月08日</h4>
        <p>{{text1}}</p>
        <img class="img1" :src="img2" alt="">
        <h4>2015年09月02日</h4>
        <p>{{text2}}</p>
        <div class="img2">
          <img :src="img3" alt="">
          <img :src="img4" alt="">
        </div>
        <p>{{text3}}</p>
        <h4>2015年09月05日</h4>
        <div class="img2">
          <img :src="img5" alt="">
          <img :src="img7" alt="">
        </div>
        <p>{{text4}}</p>
        <div class="img2">
          <img :src="img7" alt="">
          <img :src="img5" alt="">
        </div>
      </div>
    </div>
    <detailTab></detailTab>
  </div>
</template>
<script>
  import areatitle from './areatitle.vue'
  import detailTab from './detailTab.vue'
  export default {
    name: 'hello',
    data () {
      return {
        text1: '',
        text2: '',
        text3: '',
        text4: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: '',
        img6: '',
        img7: '',
        img8: '',
        style: [],
        user: '',
        userpic: '',
        title1: '',
        title2: ''
      }
    },
    components: {
      'areatitle': areatitle,
      'detailTab': detailTab
    },
    activated () {
      console.log(1111)
      this.title = this.$route.query.title
      this.text1 = this.$route.query.text1
      this.text2 = this.$route.query.text2
      this.text3 = this.$route.query.text3
      this.text4 = this.$route.query.text4
      this.img1 = this.$route.query.img1
      this.img2 = this.$route.query.img2
      this.img3 = this.$route.query.img3
      this.img4 = this.$route.query.img4
      this.img5 = this.$route.query.img5
      this.img6 = this.$route.query.img6
      this.img7 = this.$route.query.img7
      this.img8 = this.$route.query.img8
      this.user = this.$route.query.user
      this.userpic = this.$route.query.userpic
      this.style = this.$route.query.style
      this.title1 = this.$route.query.title1
      this.title2 = this.$route.query.title2
    },
    created () {
      console.log(this.$route)
      this.title = this.$route.query.title
      this.text1 = this.$route.query.text1
      this.text2 = this.$route.query.text2
      this.text3 = this.$route.query.text3
      this.text4 = this.$route.query.text4
      this.img1 = this.$route.query.img1
      this.img2 = this.$route.query.img2
      this.img3 = this.$route.query.img3
      this.img4 = this.$route.query.img4
      this.img5 = this.$route.query.img5
      this.img6 = this.$route.query.img6
      this.img7 = this.$route.query.img7
      this.img8 = this.$route.query.img8
      this.user = this.$route.query.user
      this.userpic = this.$route.query.userpic
      this.style = this.$route.query.style
      this.title1 = this.$route.query.title1
      this.title2 = this.$route.query.title2
    }
  }
</script>
<style scoped>
 .img1{
   width: 100%;
 }
 .img2{
   width: 100vw;
   margin-left: -4vw;
 }
 .img2 img{
   display: block;
   width: 50vw;
   padding: 0;
   float: left;
 }
 .user{
   background-color: white;
   text-align: left;
   margin-top: 3vw;
   overflow: hidden;
 }
 .user div{
   float: left;
   margin-left: 4vw;
 }
 .user div img{
   width: 12vw;
 }
 .user h5{
   font-size: 4vw;
   color: #818181;
   padding-bottom:1vw;

 }
 .user p{
   font-size: 3.5vw;
   color: #ababaa;
   padding-bottom: 3.5vw;
 }
  .user .style{
    float: right;
    font-size: 3.8vw;
    line-height: 6vh;
    color: #b2b2b2;
    margin-right: 3vw;
  }
 .user .style img{
   width: 4vw;
 }
 .user .style span{
   padding: 0 1vw;
 }
 .text{
   width: 92%;
   margin: 0 auto;
 }
 .text h1{
   font-size: 16px;
 }
 .text h4{
   font-size: 12px;
   text-align: left;
   text-indent: 2em;
   line-height: 8vw;
 }
  .text p{
    text-indent: 2em;
    text-align: left;
    font-size: 14px;
    line-height: 8vw;
    color: #676767;
    letter-spacing: 0.2vw;
  }
</style>
