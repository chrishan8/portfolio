<template>
  <div id="component-nav-mobile">
    <div v-for="r in routes" :key="r.id" class="nav-item" :class="r.id">
      <a v-if="r.external" class="nav-item-link" :href="r.url">
        <span v-if="r.icon" :title="r.description">
          <img :src="r.icon" />
        </span>
        <span v-else>{{ r.title }}</span>
      </a>
      <nuxt-link v-else class="nav-item-link" :to="r.url">
        <span v-if="r.icon" :title="r.description">
          <img :src="r.icon" />
        </span>
        <span v-else>{{ r.title }}</span>
      </nuxt-link>
    </div>
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
        routes: state => state.navigation.routes
      })
    }
  }
</script>

<style lang="scss" scoped>
  #component-nav-mobile {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "link-home link-home link-home"
      "link-about link-about link-about"
      "link-projects link-projects link-projects"
      "link-email link-linkedin link-resume";
    background-color: $color-primary-bg;
  }
  .nav-item {
    position: relative;
    text-align: center;
  }
  .nav-item-link {
    line-height: 3.5em;
    text-decoration: none;
    color: white;
    font-size: 2rem;
  }
  .home {
    grid-area: link-home;
  }
  .about {
    grid-area: link-about;
  }
  .projects {
    grid-area: link-projects;
  }
  .email {
    grid-area: link-email;
  }
  .linkedin {
    grid-area: link-linkedin;
  }
  .resume {
    grid-area: link-resume;
  }
</style>
