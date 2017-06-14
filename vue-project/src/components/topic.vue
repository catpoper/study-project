<template>
  <div id="topic">
    <ul>
      <li v-for="item in topic">
        <router-link :to="{path:'/topicdetail',query:{title:item.title , img1: item.img1,img2: item.img2,text: item.text,text2: item.text2,text3: item.text3}}">
          <div class="content">
            <img :src="item.imgSrc" alt="">
            <div class="title">
              <div class="bg"></div>
              <div class="user">
                <img :src="item.userPic" alt="">
              </div>
              <div class="text">
                #{{item.title}}#
              </div>
              <div class="hot">
                <hot></hot>
              </div>
            </div>
          </div>
        </router-link>

        <div class="wrap">
          <div class="icon">
            <div class="star">
              <star :star="item.star" src="../../static/星星.png"></star>
            </div>
            <div class="messg">
              <messg :messg="item.reply" src="../../static/评论.png"></messg>
            </div>
            <div class="share">
              <share :share="item.share" src="../../static/分享.png"></share>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import star from './icon-star.vue'
  import share from './icon-share.vue'
  import messg from './icon-messg.vue'
  import hot from './icon-hot.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '',
        topic: []
      }
    },
    components: {
      'star': star,
      'share': share,
      'messg': messg,
      'hot': hot
    },
    created () {
      this.$http.get('static/data.json', {}, {
        emulateJSON: true
      }).then(function (resp) {
        console.log(resp.data)
        this.topic = resp.data.topic
      })
    }
  }
</script>
<style scoped>
#topic{
  margin-top: 8vh;
  margin-bottom: 9vh;
}
ul li{
  width: 100%;
  list-style: none;
  height: 40vh;
}
ul li .content{
  position: relative;
  width: 100%;
}
ul li .title{
  font-size: 4vw;
  color: white;
  height: 10vw;
  line-height: 6vh;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 99;
}
ul li .title .user{
  width: 8vw;
  position: absolute;
  z-index: 99;
  left: 1vw;
  top: 0.5vh;
}
ul li .title .hot{
  position: absolute;
  right: 1vw;
  z-index: 99;
  top: 0.5vh;
}
ul li .title .bg{
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 10vw;
  position: absolute;
  z-index: 5;
}
ul li .title .text{
  position: absolute;
  z-index: 99;
  left: 0;
  right: 0;
}
  ul li img {
    width: 100%;
  }
 ul li .wrap{
  height: 6vh;
  border-bottom: 1px solid #999;

}
ul li .wrap .icon{
  /*border: 1px solid red;*/
  width: 50vw;
  height: 6vh;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2vw;
}

</style>
