<template>
  <div id="app">
    <keep-alive exclude="Detail,Category">
      <router-view/>
    </keep-alive>
    <MainTabBar />
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style lang="scss" scoped>
  @import 'assets/css/base.css'
</style>
