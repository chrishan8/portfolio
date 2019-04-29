<template>
  <div id="page-contact">
    <h1 class="title">{{ title }}</h1>
    <div class="card">
      <div class="form-contact">
        <contact-form></contact-form>
      </div>
      <div class="contact">
        <div class="info">
          <h2 class="text">{{ phone }}</h2>
          <h2 class="text">{{ address1 }}<br>{{ address2 }}</h2>
          <h2 class="text">{{ city }}, {{ state }} {{ zipCode }}</h2>
        </div>
        <div class="spacer"></div>
        <div class="routes">
          <a v-for="r of routes" :key="r.id" :href="r.url" :class="r.id" class="icon" :title="r.description">
            <font-awesome-icon v-if="r.icon" :icon="r.icon" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ContactForm from '../components/ContactForm'

  export default {
    components: {
      'contact-form': ContactForm
    },
    async fetch({store, params}) {
      await store.dispatch('biography/getBio')
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        'address1': state => state.biography['chrishan'].address1,
        'address2': state => state.biography['chrishan'].address2,
        'city': state => state.biography['chrishan'].city,
        'phone': state => state.biography['chrishan'].phone,
        profile(state) {
          return this.$sanitize(state.biography['chrishan'].profile)
        },
        'routes': state => Object.keys(state.navigation.routes).map(key => ({ id: key, ...state.navigation.routes[key] })).filter(route => route.external),
        'profileImageUrl': state => state.biography['chrishan'].profileImageBannerUrl,
        'state': state => state.biography['chrishan'].state,
        'title': state => state.biography['chrishan'].title,
        'zipCode': state => state.biography['chrishan'].zipCode,
      })
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 1em;
    font-weight: bold;
  }
  .form-contact {
    flex-basis: 75%;
    padding: 1em;
  }
  .contact {
    color: white;
    flex-basis: 25%;
    display: flex;
    flex-direction: column;
    background-color: $color-primary-bg;
    padding: 2em;
  }
  .info {
    text-align: center;
  }
  .info .text {
    text-decoration: underline;
  }
  .routes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .routes .icon {
    color: $color-primary;
    font-size: 36pt;
  }
  @media only screen and (min-width: 768px) {
    .card {
      flex-direction: row;
    }
    .info {
      text-align: left;
    }
  }
</style>