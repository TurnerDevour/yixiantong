<template>
  <div class="scroll-wrapper" ref="wrapper">
    <ul class="scroll-content">
      <category-icons></category-icons>
    </ul>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import CategoryIcons from './CategoryIcons/Index.vue'

  export default {
    name: "HomeScrollWrapper",
    components: {
      CategoryIcons,
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>

<style lang="scss" scoped>

</style>
