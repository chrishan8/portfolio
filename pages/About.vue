<template>
  <div id="page-about">
    <div class="body">
      <h1 class="title">{{ title }}</h1>
      <p class="profile">{{ profile }}</p>
      <h1>Services</h1>
      <div class="service-item" v-for="(s, index) of services" :key="index">
        <h3 class="service-name">{{ s.name }}</h3>
        <p class="service-description">{{ s.description }}</p>
      </div>
    </div>
    <div class="cta">
      <h1>Need a nerd to take a look at something?</h1>
      <nuxt-link to="/Contact" class="btn-cta">Contact Me</nuxt-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  const PROFILE_NAME = 'chrishan'

  export default {
    head () {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: "About Chris Han | Services Offered" }
        ]
      }
    },
    async fetch({store, params}) {
      await store.dispatch('biography/getBio')
    },
    data() {
      return {
        title: 'About Me'
      }
    },
    computed: {
      ...mapState({
        'profile': state => state.biography[PROFILE_NAME].profile,
        'services': state => state.biography[PROFILE_NAME].services,
        'summary': state => state.biography[PROFILE_NAME].homeTitle
      })
    }
  }
</script>

<style lang="scss" scoped>
  .profile-image {
    display: block;
    object-fit: cover;
    height: 50vh;
    width: 100%;
    object-position: 0 0;
  }
  .body {
    max-width: none;
    margin: auto;
    padding: 1em;
  }
  .service-name {
    color: $color-primary;
  }
  .cta {
    background: $color-primary-bg;
    color: white;
    text-align: center;
    padding: 5em 0;
  }
  .btn-cta {
    display: inline-block;
    font-size: 14pt;
    background: $color-primary;
    color: white;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    line-height: 3em;
    padding: 0 1em;
    cursor: pointer;
    text-decoration: none;
  }
  .btn-cta:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  @media only screen and (min-width: 768px) {
    .body {
      max-width: 50vw;
    }
  }
</style>