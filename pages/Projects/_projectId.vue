<template>
  <div id="page-project-details">
    <img class="splash" :src="this.backgroundImageUrl" />
    <div class="summary">
      <h1 class="title">{{ this.title }}</h1>
      <p class="description">{{ this.description }}</p>
    </div>
    <div class="date">
      <h2 class="title">Date</h2>
      <p>{{ startDate }} - {{ endDate }}</p>
    </div>
    <div class="skills">
      <h2 class="title">Responsibilities</h2>
      <ul class="skills-list">
        <li v-for="(s, index) of skills" :key="index" class="skills-list-item">
          {{ s }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    asyncData({ params }) {
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
        skills(state) {
          return state.projects.data[this.projectId].skills
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
    grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "splash splash"
        "summary summary"
        "date skills";
  }
  .splash {
    grid-area: splash;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .summary {
    grid-area: summary;
    padding: 1em;
  }
  .date {
    grid-area: date;
    padding: 1em;
  }
  .skills {
    grid-area: skills;
    padding: 1em;
  }
  .skills-list {
    list-style-type: none;
    padding: 0;
  }
  .skills-list-item {
    margin: 1em 0;
  }
  @media only screen and (min-width: 768px) {
    #page-project-details {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas:
        "splash splash splash splash splash"
        ". summary summary date ."
        ". summary summary skills .";
    }
  }
</style>