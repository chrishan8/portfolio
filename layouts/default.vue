<template>
  <div id="app">
    <div id="desktop">
      <component-nav-desktop />
    </div>
    <div id="mobile">
      <component-nav-mobile />
    </div>
    <nuxt />
    <component-footer />
  </div>
</template>

<script>
  import Footer from '~/components/Footer'
  import NavDesktop from '~/components/NavDesktop'
  import NavMobile from '~/components/NavMobile'

  export default {
    components: {
      'component-footer': Footer,
      'component-nav-desktop': NavDesktop,
      'component-nav-mobile': NavMobile
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
  #desktop {
    display: none;
  }
  #mobile {
    display: block;
  }
  @media only screen and (min-width: 760px) {
    #desktop {
      display: block;
    }
    #mobile {
      display: none;
    }
  }
</style>
