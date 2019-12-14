<template>
  <div class="scroll-wrapper" ref="wrapper">
    <ul class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </ul>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import CurrentCity from "./CityList/CurrentCity";
  import CityList from './CityList/Index.vue';

  export default {
    name: "CityScrollWrapper",
    components: {
      CurrentCity,
      CityList
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>

<style lang="scss" scoped>

</style>
