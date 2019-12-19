<template>
  <nav class="tab">
    <tab-sub v-for="(item,index) of citieDatas"
             :city-info="item"
             :key="index">
    </tab-sub>
  </nav>
</template>

<script>
  import citieDatas from "data/cities";
  import TabSub from "./Sub.vue";

  export default {
    name: "ListTab",
    data() {
      return {
        citieDatas
      }
    },
    components: {
      TabSub,
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .tab {
    @include flex-row;
    flex-wrap: nowrap;
    height: .44rem;
    background-color: #FFF;
    border-bottom: 1px solid #ddd;
    z-index: 100;
  }
</style>
