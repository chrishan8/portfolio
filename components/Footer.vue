<template>
  <div id="component-footer">
    <div v-for="r in routes" :key="r.id" class="nav-item" :class="r.id">
        <a class="nav-item-link" :href="r.url">
          <span v-if="r.icon" :title="r.description">
            <font-awesome-icon :icon="r.icon" />
          </span>
          <span v-else>{{ r.title }}</span>
        </a>
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
      'routes': state => state.navigation.routes.filter(r => r.external)
    })
  }
}
</script>

<style lang="scss" scoped>
  #component-footer {
    display: flex;
    justify-content: space-around;
    background: $color-secondary;
  }
  .nav-item {
    line-height: 100px;
  }
  .nav-item-link {
    font-size: 2rem;
    color: white;
    text-decoration: none;
  }
  @media only screen and (min-width: 760px) {
    #component-footer {
      justify-content: center;
    }
    .nav-item {
      padding: 2em;
    }
  }
</style>