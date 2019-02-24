<template>
  <div id="app">
    <component-nav-desktop />
    <nuxt />
  </div>
</template>

<script>
  import NavDesktop from '~/components/NavDesktop'

  export default {
    components: {
      'component-nav-desktop': NavDesktop
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>
