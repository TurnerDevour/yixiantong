<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
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
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        eventPassthrough: 'vertical',
      });
    }
  }
</script>

<style lang="scss" scoped>

</style>
