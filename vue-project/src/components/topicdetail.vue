<template>
    <div id="topic_detail">
      <areatitle msg="话题详情"></areatitle>
      <div class="top">
        <div class="left">
          <div class="user-pic">
            <img src="../../static/user1.png" alt="">
          </div>
          <div class="name">
            <p>过去式-gl</p>
            <p class="lord">楼主</p>
          </div>
        </div>
        <div class="date">2015.11.11</div>
      </div>
      <div class="content">
         <h4>{{title}}</h4>
         <p>{{text}}</p>
        <img :src="img1" alt="">
         <p>{{text2}}</p>
        <img :src="img2" alt="">
         <p>{{text3}}</p>
      </div>
    </div>
</template>
<script>
  import areatitle from './areatitle.vue'
  export default {
    name: 'hello',
    data () {
      return {
        title: '',
        text: '',
        text2: '',
        text3: '',
        img1: '',
        img2: ''
      }
    },
    components: {
      'areatitle': areatitle
    },
    activated () {
      console.log(this.$route)
    },
    created () {
      this.title = this.$route.query.title
      this.text = this.$route.query.text
      this.text2 = this.$route.query.text2
      this.text3 = this.$route.query.text3
      this.img1 = this.$route.query.img1
      this.img2 = this.$route.query.img2
    }
  }
</script>


<style scoped>
   #topic_detail{
     width: 100%;
     background-color: #f4f4f2;
     display: flex;
     flex-direction: column;
     justify-content: center;
   }
   .top{
     font-size: 4vw;
     height: 15vw;
     display: flex;
     justify-content: space-between;
     align-items:center;
     margin-top: 8vh;
   }
   .top>div{
     display: flex;
   }
   .user-pic{
     width: 14vw;
     height: 14vw;
   }
   .user-pic img{
     width: 100%;
   }
   .left{
     margin-left: 4vw;
   }
   .name{
     font-weight: normal;
     display: flex;
     flex-direction: column;
     justify-content:space-between;
     margin-left: 3vw;
     height: 7vh;
   }
   .lord{
     color: #ffb319;
     border: 2px solid #ffb319;
     border-radius: 3px;
     width: 10vw;
   }
  .date {
    margin-right: 4vw;
    font-size: 3.5vw;
    color: #999;
  }
  .content{
    width: 92vw;
    margin: 0 auto;

  }
  .content h4{
    font-size: 2vw;
    margin-top: 4vh;
    text-align: center;
  }
  .content p{
    margin-top: 4vh;
    font-size: 2vw;
    text-indent: 2em;
    line-height: 8vw;
    padding: 0;
    text-align: left;
    color: #646464;
  }
   .content img{
     width: 100vw;
     margin-left: -4vw;
   }
</style>
