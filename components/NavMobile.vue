<template>
  <div id="component-nav-mobile">
    <div id="navbar">
      <div id="btn-menu-toggle" @click="toggleMenu" :class="{'active': menuIsActive}">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
    <div id="menu" :class="{'active': menuIsActive}">
      <div class="nav-items">
        <div class="nav-item">
          <nuxt-link class="nav-item-link" to="/Home">Home</nuxt-link>
        </div>
        <div v-for="r in routes" :key="r.id" class="nav-item">
          <a v-if="r.external" class="nav-item-link" :href="r.url">
            <span v-if="r.icon" :title="r.description">
              <font-awesome-icon :icon="r.icon" />
            </span>
            <span v-else>{{ r.displayName }}</span>
          </a>
          <nuxt-link v-else class="nav-item-link" :to="r.url">
            <span v-if="r.icon" :title="r.description">
              <font-awesome-icon :icon="r.icon" />
            </span>
            <span v-else>{{ r.displayName }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        'menuIsActive': state => state.navigation.menuIsActive,
        'routes': state => Object.keys(state.navigation.routes).map(k => ({id: k, ...state.navigation.routes[k]})).filter(route => !route.external).sort((a, b) => a.sequence - b.sequence )
      })
    },
    methods: {
      ...mapMutations({
        'toggleMenu': 'navigation/TOGGLE_MOBILE_MENU'
      })
    }
  }
</script>

<style lang="scss" scoped>
  #component-nav-mobile {
    position: relative;
  }
  #navbar {
    display: flex;
    background-color: $color-secondary;
    height: 50px;
    justify-content: flex-end;
  }
  #btn-menu-toggle {
    margin: auto 12.5px;
    z-index: 2;
    width: 40px;
    height: 25px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
  }
  #btn-menu-toggle .bar {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }
  #btn-menu-toggle .bar:nth-child(1) {
    top: 0px;
  }
  #btn-menu-toggle .bar:nth-child(2),#btn-menu-toggle .bar:nth-child(3) {
    top: 10px;
  }
  #btn-menu-toggle .bar:nth-child(4) {
    top: 20px;
  }
  #btn-menu-toggle.active .bar:nth-child(1) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  #btn-menu-toggle.active .bar:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  #btn-menu-toggle.active .bar:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  #btn-menu-toggle.active .bar:nth-child(4) {
    top: 18px;
    width: 0%;
    left: 50%;
  }
  #menu {
    position: fixed;
    z-index: 1;
    top: -100vh;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $color-primary-bg;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
  }
  #menu.active {
    transform: translate(0, 100%);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  .nav-items {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
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
</style>
