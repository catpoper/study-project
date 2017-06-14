<template>
   <div id="detailTab">
      <ul>
        <li>
          <star star="666" src="../../static/星星.png"></star>
        </li>
        <li>
          <share share="555" src="../../static/评论.png"> </share>
        </li>
        <li>
          <messg messg="111" src="../../static/分享.png"></messg>
        </li>
      </ul>
   </div>
</template>

<script>
  import star from './icon-star.vue'
  import share from './icon-share.vue'
  import messg from './icon-messg.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      'star': star,
      'share': share,
      'messg': messg
    }
  }
</script>

<style scoped>
#detailTab{
  border: 1px solid red;
  height: 8vh;
  width: 100%;
}
ul{
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
