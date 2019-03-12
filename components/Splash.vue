<template>
  <div id="component-splash">
    <div class="img-profile">
      <img :src="profileImgSrc" />
    </div>
    <p class="summary">{{ shortSummary }}</p>
    <nuxt-link to="/About" class="btn-projects">Learn More</nuxt-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        'shortSummary': state => state.biography.shortSummary,
        'profileImgSrc': state => state.biography.profileImgSrc
      })
    }
  }
</script>

<style lang="scss" scoped>
  #component-splash {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-template-areas: 
      "img-profile summary summary"
      "img-profile btn-projects .";
    margin: 0 15%;
  }
  .btn-projects {
    grid-area: btn-projects;
    font-size: 14pt;
    background: $color-primary;
    color: white;
    text-align: center;
    border-radius: 20px;
    height: 3em;
    line-height: 3em;
    padding: 0 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .summary {
    grid-area: summary;
    font-size: 18pt;
  }
  .img-profile {
    grid-area: img-profile;
    width: 300px;
    height: 300px;
    margin: 0 3em;
  }
  .img-profile img {
    max-width:100%;
    max-height:100%;
    border-radius: 50%;
  }
</style>