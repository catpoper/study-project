<!--
分享子组件
-->
<template>
    <div class="icon-share-child-box">
      <div class="icon-share-child-title">
        <span>分享到</span>
        <span class="icon-share-child-title-span" @click="childcancel">取消</span>
      </div>
      <div class="icon-share-child-cont">
        <div class="icon-share-child-friend" >
          <img src="../assets/微信.png" alt="" @click="weixin">
          <span>微信</span>
        </div>
        <div class="icon-share-child-friend">
          <img src="../assets/qq.png" alt="" @click="qq">
            <span>QQ</span>
        </div>
        <div class="icon-share-child-friend">
          <img src="../assets/微博.png" alt="" @click="sina">
          <span>微博</span>
        </div>
      </div>
    </div>
</template>

<script>
  import {login} from '../../static/js_sdk20170302'
  export default {
    data () {
      return {
        friend: [
          {
            name: '微信好友',
            src: '../static/微信.png'
          },
          {
            name: 'QQ好友',
            src: '../../static/微信.png'
          },
          {
            name: '微博好友',
            src: '../../static/微信.png'
          }
        ]
      }
    },
    methods: {
      childcancel: function () {
        console.log(this)
        this.$emit('sharechild')
      },
      weixin: function () {
        console.log(this)
        login('QQ', 'www.baidu.com', 'loginResult')
//        share('分享内容', 'http://test.com/sources/test.png', 'http://test.com/sources/testshare.html', '分享标题')
      },
      qq: function () {
        console.log(this)
        login('WEIXIN', 'www.baidu.com', 'loginResult')
      },
      sina: function () {
        console.log(this)
        login('SINA', 'www.baidu.com', 'loginResult')
      }
    }
  }
</script>

<style scoped>
.icon-share-child-box{
  width:80vw;
  height:50vw;
  border:1px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
}
.icon-share-child-title{
  width:70vw;
  margin: 7vw 0;
  /*height:18vw;*/
  /*line-height: 18vw;*/
  /*background-color: #999;*/
  font-size: 3.5rem;
  display: flex;
  justify-content: space-between;
}
.icon-share-child-title-span{
  font-size: 3rem;
  color: #999;
}
.icon-share-child-cont{
  width:70vw;
  height:30vw;
  /*background-color: #b2dba1;*/
  display: flex;
  justify-content: space-between;
}
.icon-share-child-friend{
  width:20vw;
  height:30vw;
  /*border:1px solid red;*/
}
.icon-share-child-friend>span{
  font-size: 2rem;
}
img{
  width:18vw;
  height:18vw;
  padding:1vw;
  margin-bottom: 3vw;
}
</style>
