<template>
  <div id="page-project-details">
    <img class="splash" :src="this.backgroundImageUrl" />
    <div class="summary">
      <h1 class="title">{{ this.title }}</h1>
      <div class="description" v-html="description"></div>
    </div>
    <div class="aside">
      <div class="date">
        <h2 class="title">Date</h2>
        <p>{{ startDate }} - {{ endDate }}</p>
      </div>
      <div class="roles">
        <h2 class="title">Roles</h2>
        <ul class="roles-list">
          <li v-for="(r, index) of roleNames" :key="index" class="roles-list-item">
            {{ r }}
          </li>
        </ul>
      </div>
    </div>
    <div class="roles-detailed">
      <div class="content" v-for="(s, index) of roles" :key="index">
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
          return this.$sanitize(state.projects.data[this.projectId].description)
        },
        endDate(state) {
          return this.$moment.unix(state.projects.data[this.projectId].endDate.seconds).format('MMM YYYY')
        },
        roleNames(state) {
          return state.projects.data[this.projectId].roles.map(r => r.name)
        },
        roles(state) {
          return state.projects.data[this.projectId].roles
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
        "roles-detailed";
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
  .roles-list {
    list-style-type: none;
    padding: 0;
  }
  .roles-list-item {
    margin: 1em 0;
  }
  .roles-detailed {
    grid-area: roles-detailed;
  }
  .roles-detailed .content {
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
        ". roles-detailed roles-detailed roles-detailed .";
    }
    .splash {
      margin-bottom: 20px;
    }
    .aside {
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
  }
</style>