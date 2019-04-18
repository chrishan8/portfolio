<template>
  <div id="page-home">
    <div id="section-splash" class="section">
      <div class="img-profile">
        <img :src="profileImageUrl" />
      </div>
      <p class="summary">{{ shortSummary }}</p>
      <nuxt-link to="/About" class="btn-projects">Learn More</nuxt-link>
    </div>
    <div id="section-projects" class="section">
      <h1 class="title">Projects</h1>
      <div class="cards">
        <component-card
          v-for="p in projects" 
          :key="p.id"
          :project-id="p.id"
          :show-details="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Card from '~/components/Card'

  export default {
    async fetch({store, params}) {
      await store.dispatch('biography/getBio')
      await store.dispatch('projects/getProjects')
    },
    components: {
      'component-card': Card
    },
    computed: {
      ...mapState({
        'profileImageUrl': state => state.biography.profileImageUrl,
        'projects': state => Object.keys(state.projects.data).map(key => ({ id: key, ...state.projects.data[key] })).sort((a, b) => a.sequence - b.sequence ).slice(0, 4),
        'shortSummary': state => state.biography.shortSummary
      })
    }
  }
</script>

<style lang="scss" scoped>
  #section-splash {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas: 
      "img-profile"
      "summary"
      "btn-projects";
    background-color: $color-primary-bg;
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
    font-size: 16pt;
    text-align: center;
    color: white;
  }
  .img-profile {
    grid-area: img-profile;
    width: 300px;
    height: 300px;
    margin: auto;
  }
  .img-profile img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }
  .cards {
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 300px;
    margin: auto;
  }
  .section {
    margin: 5% 8px;
  }
  #section-projects .title {
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    #section-splash {
      grid-template-columns: auto auto auto;
      grid-template-rows: auto;
      grid-template-areas: 
        "img-profile summary summary"
        "img-profile btn-projects .";
      padding: 0 10%;
      height: calc(100vh - 112px);
      margin: 0;
    }
    .img-profile {
      align-self: center;
      justify-self: center;
      margin: 0 3em;
    }
    .summary {
      text-align: left;
      align-self: end;
    }
    .cards {
      grid-template-columns: 300px 300px;
      grid-template-rows: auto;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin: auto;
      width: 620px;
    }
  }
</style>
