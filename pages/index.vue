<template>
  <div id="page-home">
    <div id="section-splash" class="section">
      <div class="img-profile">
        <img v-lazy="profileImageUrl" />
      </div>
      <h1 class="title">{{ greeting }}</h1>
      <div class="summary" v-html="summary"></div>
      <nuxt-link to="/About" class="btn-cta">Learn More</nuxt-link>
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
  const PROFILE_NAME = 'chrishan'

  import { mapState } from 'vuex'
  import Card from '~/components/Card'

  export default {
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Chris Han is a freelance web developer at Nerd Foundry & Application Developer at Accenture' }
        ]
      }
    },
    async fetch({store, params}) {
      await store.dispatch('biography/getBio')
      await store.dispatch('projects/getProjects')
    },
    components: {
      'component-card': Card
    },
    data() {
      return {
        title: 'Home'
      }
    },
    computed: {
      ...mapState({
        'profileImageUrl': state => state.biography[PROFILE_NAME].profileImageUrl,
        'projects': state => Object.keys(state.projects.data).map(key => ({ id: key, ...state.projects.data[key] })).sort((a, b) => a.sequence - b.sequence ).slice(0, 4),
        summary(state) {
          return this.$sanitize(state.biography[PROFILE_NAME].summary)
        },
        'greeting': state => state.biography[PROFILE_NAME].greeting
      })
    }
  }
</script>

<style lang="scss" scoped>
  #section-splash {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-primary-bg;
    color: white;
  }
  .btn-cta {
    font-size: 14pt;
    background: $color-primary;
    color: white;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    line-height: 3em;
    padding: 0 1em;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
  }
  .btn-cta:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .summary {
    font-size: 16pt;
    text-align: center;
  }
  .img-profile {
    width: 300px;
    height: 300px;
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
    padding: 1em;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    #section-splash {
      padding: 0 20%;
      height: calc(100vh - 112px);
      margin: 0;
    }
    .btn-cta {
      width: inherit;
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
