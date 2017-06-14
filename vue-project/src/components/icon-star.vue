<!--
收藏组件
自定义属性值star 为设置自定义收藏数量
点击图标收藏数量+1,并改变图标颜色，提示收藏成功
再次点击只提示收藏成功，收藏数量不变，颜色不变
例：
 <icon-star star="555"></icon-star>
-->
<template>
    <div class="icon-star-box">
      <img class="icon-star-img" :src="src" alt="" @click="changstar" @click.once="changstarnum">
      <div class="icon-star-txt" :style="color">{{star}}</div>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        num: 0
      }
    },
    props: ['star', 'src', 'color'],
    methods: {
      changstar: function () {
        console.log(this)
        this.src = require('../assets/星星 (2).png')
        Toast({
          message: '收藏成功',
          duration: 2000,
          iconClass: 'mintui mintui-success'
        })
      },
      changstarnum: function () {
        this.star = Number(this.star)
        this.star = this.star + 1
      }
    }
  }
</script>

<style>
.icon-star-box{
  width:15vw;
  height:5vw;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon-star-img{
  width:6vw;
  height:6vw;
}
.icon-star-txt{
  font-size: 2rem;
}
/*收藏样式*/
.is-placemiddle{
  width:40vw;
  height:40vw;
}
.is-placemiddle i{
  padding-top: 22px;
}
.is-placemiddle>span{
  font-size: 3rem ;
}
.mint-toast-icon:before{
  font-size: 8rem;
}
</style>
