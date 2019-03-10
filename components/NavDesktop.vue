<template>
  <div id="component-nav-desktop">
    <div v-for="r in routes" :key="r.id" class="nav-item" :class="r.id">
      <a v-if="r.external" class="nav-item-link" :href="r.url">
        <span v-if="r.icon" :title="r.description">
          <font-awesome-icon :icon="r.icon" />
        </span>
        <span v-else>{{ r.title }}</span>
      </a>
      <nuxt-link v-else class="nav-item-link" :to="r.url">
        <span v-if="r.icon" :title="r.description">
          <font-awesome-icon :icon="r.icon" />
        </span>
        <span v-else>{{ r.title }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


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
  #component-nav-desktop {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "link-home . link-about link-projects link-email link-linkedin link-resume";
    background-color: $color-primary-bg;
  }
  .nav-item:before {
    content: '';
    position: absolute;
    width: 0;
    border-bottom: 4px solid $color-primary;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  }
  .nav-item:hover:before {
    width: 80%;
    transition: width 0.5s;
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
