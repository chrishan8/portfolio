<template>
  <div id="component-card">
    <div class="summary">
      <img :src="backgroundImageUrl" class="background-image" />
      <div class="overlay">
        <div class="text">
          <p class="title">{{ title }}</p>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <div class="skill" v-for="(s, index) of skills" :key="index">
        {{ s }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      projectId: String,
      showDetails: Boolean
    },
    data() {
      return {

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
        skills(state) {
          return state.projects.data[this.projectId].skills
        },
        title(state) {
          return state.projects.data[this.projectId].title
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .summary {
    position: relative;
  }
  .background-image {
    object-fit: cover;
    width: 100%;
    display: block;
  }
  .overlay {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
  }
  .text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    text-align: center;
  }
  .title {
    font-size: 16pt;
    font-weight: bold;
  }
  .description {
    font-size: 12pt;
  }
  .details {
    background: #22252C;
    display: flex;
    flex-wrap: wrap;
  }
  .skill {
    margin: 0.5em;
    background: $color-primary;
    padding: 0.5em;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 10pt;
    color: white;
  }
  @media only screen and (min-width: 768px) {
    .overlay {
      visibility: hidden;
      opacity: 0;
    }
    #component-card:hover .overlay {
      visibility: visible;
      opacity: 1;
    }
  }
</style>