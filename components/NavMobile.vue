<template>
  <div id="component-nav-mobile">
    <div id="navbar">
      <div id="btn-menu-toggle" @click="toggleMenu" :class="{'active': menuIsActive}">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div id="menu" :class="{'active': menuIsActive}">
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
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        menuIsActive: false
      }
    },
    computed: {
      ...mapState({
        'routes': state => Object.keys(state.navigation.routes).map(k => ({id: k, ...state.navigation.routes[k]}))
      })
    },
    methods: {
      toggleMenu() {
        this.menuIsActive = !this.menuIsActive
      }
    }
  }
</script>

<style lang="scss" scoped>
  #component-nav-mobile {
    position: relative;
  }

  #navbar {
    display: flex;
    background-color: $color-primary-bg;
    padding: 1em;
    justify-content: flex-end;
  }

  #btn-menu-toggle .bar {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  #btn-menu-toggle .bar:first-child {
    transform-origin: 0% 0%;
  }

  #btn-menu-toggle .bar:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #btn-menu-toggle.active .bar {
    opacity: 1;
    transform: rotate(45deg) translate(-6px, -14px);
    background: #232323;
  }

  #btn-menu-toggle.active .bar:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #btn-menu-toggle.active .bar:nth-last-child(2) {
    transform: rotate(-45deg) translate(-6px, 14px);
  }
  
  #menu {
    position: absolute;
    top: -100vh;
    width: 100%;
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
    transform: translate(0, -100%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
  }

  #menu.active {
    transform: translate(0, 100%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
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
