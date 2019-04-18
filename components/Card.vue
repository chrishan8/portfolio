<template>
  <nuxt-link id="component-card" :to="'/Projects/' + this.projectId">
    <div class="summary">
      <img :src="thumbnail" class="background-image" />
      <div class="overlay">
        <div class="text">
          <p class="title">{{ title }}</p>
          <p class="description">{{ description }}</p>
        </div>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <div class="skill" v-for="(s, index) of skillNames" :key="index">
        {{ s }}
      </div>
    </div>
  </nuxt-link>
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
        thumbnail(state) {
          return state.projects.data[this.projectId].thumbnail
        },
        description(state) {
          return state.projects.data[this.projectId].description
        },
        skillNames(state) {
          return state.projects.data[this.projectId].skills.map(skill => skill.name)
        },
        title(state) {
          return state.projects.data[this.projectId].title
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  #component-card {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  #component-card:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
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