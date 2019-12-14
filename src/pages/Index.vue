<template>
  <div class="container">
    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
  </div>
</template>

<script>
  import HomeHeader from 'components/header/Home.vue';
  import HomeScrollWrapper from 'components/ScrollWrapper/Home.vue';

  export default {
    name: "Index",
    components: {
      HomeHeader,
      HomeScrollWrapper,
    }
  }
</script>

<style lang="scss" scoped>

</style>
