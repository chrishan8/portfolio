<template>
  <div id="page-projects">
    <h1 class="title">Portfolio</h1>
    <div class="cards">
      <component-card
        v-for="p in projects" 
        :key="p.id"
        :project-id="p.id"
        :show-details="true"
      />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Card from '~/components/Card'

  export default {
    async fetch({store, params}) {
      await store.dispatch('projects/getProjects')
    },
    components: {
      'component-card': Card
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        'projects': state => Object.keys(state.projects.data).map(key => ({ id: key, ...state.projects.data[key] })).sort((a, b) => a.sequence - b.sequence )
      })
    }
  }
</script>

<style lang="scss" scoped>
  #page-projects {
    margin: 5% 0;
  }
  .title {
    text-align: center;
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
  @media only screen and (min-width: 768px) {
    .cards {
      grid-template-columns: 300px 300px;
      grid-template-rows: auto;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin: auto;
      width: 620px;
    }
  }
  @media only screen and (min-width: 1024px) {
    .cards {
      grid-template-columns: 300px 300px 300px;
      grid-template-rows: auto;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      margin: auto;
      width: 920px;
    }
  }
</style>