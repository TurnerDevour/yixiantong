<template>
  <div class="view-list">
    <view-list-sub v-for="(item, index) of viewDatas"
                   :data="item"
                   :key="item.id">
    </view-list-sub>
  </div>
</template>

<script>
  import ViewListSub from './Sub.vue';

  export default {
    name: "ViewList",
    components: {
      ViewListSub
    },
    props: {
      viewDatas: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .view-list{
    @include flex-row;
    flex-wrap: wrap;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
  }
</style>
