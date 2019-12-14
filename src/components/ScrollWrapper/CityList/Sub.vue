<template>
  <div class="city-item">
    <span class="city" @click="onCityClick(cityInfo)">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    name: "Sub",
    props: {
      cityInfo: Object
    },
    methods: {
      ...mapMutations(['selectCity']),
      onCityClick(cityInfo) {
        this.selectCity(cityInfo);
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .city-item {
    @include flex-row;
    align-items: center;
    height: .5rem;
    padding-left: .15rem;
    background-color: #FFF;
    border-bottom: 1px solid #ddd;
    font-size: .16rem;
  }
</style>
