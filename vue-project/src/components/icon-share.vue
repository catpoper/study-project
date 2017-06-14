<!--
分享组件
自定义属性值share 为设置自定义分享数量
点击图标点赞数量+1,并改变图标颜色，弹出提示框
再次点击均不变，弹出提示框
例：
 <icon-share share="777"></icon-share>
-->
<template>
  <div class="icon-share-box">
    <img class="icon-share-img" :src="src" alt="" @click="changshare" @click.once="changsharenum">
    <div class="icon-share-txt" :style="color">{{share}}</div>
    <mt-popup v-model="popupVisible" position="buttom" popup-transition="popup-fade">
      <child @sharechild="childcancel"></child>
    </mt-popup>
  </div>
</template>

<script>
  import { Popup } from 'mint-ui'
  import child from './icon-share-child'
  export default {
    data () {
      return {
        popupVisible: false
      }
    },
    components: {
      'mt-popup': Popup,
      'child': child
    },
    methods: {
      changshare: function () {
        this.popupVisible = true
      },
      changsharenum: function () {
        this.share = Number(this.share)
        this.share = this.share + 1
      },
      childcancel: function () {
        console.log(this)
        this.popupVisible = false
      }
    },
    props: ['share', 'src', 'color']
  }
</script>

<style>
  .icon-share-box{
    width:12vw;
    height:5vw;
    line-height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon-share-img{
    width:6vw;
    height:6vw;
  }
  .icon-share-txt{
    font-size: 2rem;
  }

/*组件*/
  .mint-popup {
    width:80vw;
    height:50vw;
    background-color: white;
  }

</style>
