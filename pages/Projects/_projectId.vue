<template>
  <div id="page-project-details">
    <img class="splash" :src="this.backgroundImageUrl" />
    <div class="summary">
      <h1 class="title">{{ this.title }}</h1>
      <p class="description">{{ this.description }}</p>
    </div>
    <div class="aside">
      <div class="date">
        <h2 class="title">Date</h2>
        <p>{{ startDate }} - {{ endDate }}</p>
      </div>
      <div class="skills">
        <h2 class="title">Responsibilities</h2>
        <ul class="skills-list">
          <li v-for="(s, index) of skillNames" :key="index" class="skills-list-item">
            {{ s }}
          </li>
        </ul>
      </div>
    </div>
    <div class="skills-detailed">
      <div class="content" v-for="(s, index) of skills" :key="index">
        <h2>{{ s.name }}</h2>
        <div v-html="s.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    async asyncData({ params, store }) {
      await store.dispatch('projects/getProject', params.projectId)
      return {
        projectId: params.projectId
      }
    },
    data() {
      return {
        projectId: ''
      }
    },
    computed: {
      ...mapState({
        backgroundImageUrl(state) {
          return state.projects.data[this.projectId].backgroundImageUrl
        },
        description(state) {
          return state.projects.data[this.projectId].description
        },
        endDate(state) {
          return this.$moment.unix(state.projects.data[this.projectId].endDate.seconds).format('MMM YYYY')
        },
        skillNames(state) {
          return state.projects.data[this.projectId].skills.map(skill => skill.name)
        },
        skills(state) {
          return state.projects.data[this.projectId].skills.map(skill => ({ name: skill.name, description: this.$sanitize(skill.description) }))
        },
        startDate(state) {
          return this.$moment.unix(state.projects.data[this.projectId].startDate.seconds).format('MMM YYYY')
        },
        title(state) {
          return state.projects.data[this.projectId].title
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  #page-project-details {
    display: grid;
    grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "splash"
        "summary"
        "aside"
        "skills-detailed";
  }
  .splash {
    grid-area: splash;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  .summary {
    grid-area: summary;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: white;
    padding: 1em;
  }
  .aside {
    grid-area: aside;
    color: white;
    background-color: $color-primary-bg;
    padding: 1em;
  }
  .skills-list {
    list-style-type: none;
    padding: 0;
  }
  .skills-list-item {
    margin: 1em 0;
  }
  .skills-detailed {
    grid-area: skills-detailed;
  }
  .skills-detailed .content {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: white;
    padding: 1em;
    margin: 1em 0;
  }
  @media only screen and (min-width: 768px) {
    #page-project-details {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "splash splash splash splash splash"
        ". summary summary aside ."
        ". skills-detailed skills-detailed skills-detailed .";
    }
    .splash {
      margin-bottom: 20px;
    }
    .aside {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
  }
</style>