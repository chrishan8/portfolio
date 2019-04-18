<template>
  <div id="page-about">
    <img class="profile-image" :src="profileImageUrl" />
    <div class="content">
      <h1 class="title">About Me</h1>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    async fetch({store, params}) {
      await store.dispatch('biography/getBio')
    },
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState({
        'profileImageUrl': state => state.biography.profileImageBannerUrl
      })
    }
  }
</script>

<style lang="scss" scoped>
  #page-about {
    position: relative;
  }
  .title {
    text-align: center;
  }
  .profile-image {
    display: block;
    object-fit: cover;
    height: 50vh;
    width: 100%;
    object-position: 0 0;
  }
  @media only screen and (min-width: 768px) {
    .content {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 50%;
      color: white;
    }
  }
  @media only screen and (min-width: 1600px) {
    .profile-image {
      height: calc(100vh - 112px);
      width: 100%;
    }
  }
</style>