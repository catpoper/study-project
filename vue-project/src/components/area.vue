<template>
  <div>
    <header-li msg="话题" title1="话题" title2="日记" isS="true" path1="/Hello/topic" path2="/Hello/note"></header-li>
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
