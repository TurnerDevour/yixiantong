<template>
  <div :class="['tab-item', {current: cityInfo.cityId === cityId}]" @click="tabClick(cityInfo)">
    <span>{{cityInfo.cityName}}</span>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: "ListTabSub",
    props: {
      cityInfo: Object,
    },
    computed: {
      ...mapState(['cityId'])
    },
    methods: {
      ...mapMutations(['selectCity']),
      tabClick(cityInfo) {
         this.selectCity(cityInfo);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .tab-item {
    @include vh-center;
    flex: 1;
    height: 100%;
    font-size: .16rem;
    box-sizing: border-box;
    border-bottom: 2px solid #FFF;


    &.current {
      color: $defaultGreen;
      border-color: $defaultGreen;
    }
  }
</style>
