<!--
评论组件
自定义属性值messg 为设置自定义评论数量
点击图标评论数量+1
例：
<icon-messg messg="444"></icon-messg>
-->
<template>
    <div class="icon-messg-box">
        <img class="icon-messg-img" :src="src" alt="">
      <div class="icon-messg-txt" :style="color">{{messg}}</div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        src: require('../assets/评论.png')
      }
    },
    props: ['messg', 'src', 'color']
  }
</script>

<style>
  .icon-messg-box{
    width:15vw;
    height:5vw;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon-messg-img{
    width:6vw;
    height:6vw;
  }
  .icon-messg-txt{
    font-size: 2rem;
    text-decoration: none;
  }
  a{
    text-decoration: none;
  }
  a:link a:visited{
    color: #000;
  }
</style>
