<template>
    <div id="topic">
      <!--<img src="../assets/loading.gif">-->
      <div class="topic" v-for="item in topic">
          <router-link :to = "{path:'/topDetail',query:{imgSrc:item.imgSrc,title:item.title,details:item.details}}">
          <img class="img" :src="item.imgSrc">
          </router-link>
        <div class="topicM">
          <icon-star star="0" src="../../static/星星_1.png" color="color:white"></icon-star>
          <icon-share share="0" src="../../static/分享2.png" color="color:white"></icon-share>
        </div>
      </div>
    </div>
</template>
<style scoped>
  body{
    margin:0  }
  #topic{
    /*border: 1px red solid;*/
  }
  .topic{
    width:100%;
    height:650px;
    /*border: 1px red solid;*/
    position:relative;
    overflow: hidden;
  }
  img{
    width:100%;
    position:absolute;
    bottom:0;
    left: 0;
  }
  .topicM{
    width:90vw;
    height:80px;
    position: absolute;
    bottom:0;
    background-color: rgba(0, 0, 0, 0.47);
    display: flex;
    justify-content:space-between;
    padding: 0 5%;
    padding-top:25px;
    /*color: white;*/
  }
</style>
<script>
  import star from './icon-star'
  import share from './icon-share'
  export default{
    data () {
      return {
        msg: 'hello vue',
        topic: []
      }
    },
    created: function () {
      this.$http.get('static/topic.json').then(function (resp) {
        this.topic = resp.data.topic
      })
    },
    components: {
      'icon-star': star,
      'icon-share': share
    }
  }
</script>
