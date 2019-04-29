<template>
  <div id="component-nav-desktop">
    <div class="nav-item">
      <nuxt-link class="nav-item-link" to="/">Home</nuxt-link>
    </div>
    <div class="spacer"></div>
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
        'routes': state => Object.keys(state.navigation.routes).map(k => ({ id: k, ...state.navigation.routes[k] })).filter(route => !route.external).sort((a, b) => a.sequence - b.sequence )
      })
    }
  }
</script>

<style lang="scss" scoped>
  #component-nav-desktop {
    display: flex;
    background-color: $color-secondary;
  }
  .nav-item:before {
    content: '';
    position: absolute;
    width: 0;
    border-bottom: 4px solid white;
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
    margin: 0 1em;
  }
  .nav-item-link {
    line-height: 3.5em;
    text-decoration: none;
    color: white;
    font-size: 2rem;
  }
</style>
