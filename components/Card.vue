<template>
  <div id="component-card">
    <img :src="backgroundImageUrl" class="background-image" />
    <div class="overlay">
      <div class="text">
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    props: {
      backgroundImageUrl: String,
      description: String,
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  #component-card {
    max-width: 100%;
    height: 100%;
    position: relative;
  }
  .background-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .overlay {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
  }
  #component-card:hover .overlay {
    visibility: visible;
    opacity: 1;
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
</style>