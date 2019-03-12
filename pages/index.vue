<template>
  <div id="page-home">
    <component-splash />
  </div>
</template>

<script>
  import Splash from '~/components/Splash'

  export default {
    async fetch({store, params}) {
      await store.dispatch('biography/getBio')
    },
    components: {
      'component-splash': Splash
    }
  }
</script>

<style lang="scss" scoped>
</style>
