<template>
  <div id="news">
    <header-li msg="专题" title1="专题" title2="攻略"  path1="/Hello/top" path2="/Hello/note"></header-li>
    <router-view></router-view>
  </div>
</template>
<script>
  import header from './header.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: ''
      }
    },
    components: {
      'header-li': header
    }
  }
</script>

<style scoped>


</style>
