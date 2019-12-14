<template>
  <div class="icons-wrapper">
    <category-icons-sub v-for="item of itemList"
                        :bgColor="item.bgColor"
                        :field="item.field"
                        :icon="item.icon"
                        :icon-text="item.iconText"
                        :key="item.id">
    </category-icons-sub>
  </div>
</template>

<script>
  import CategoryIconsSub from './Sub.vue';
  import FieldDatas from 'data/fields';

  export default {
    name: "CategoryIcons",
    components: {
      CategoryIconsSub,
    },
    data() {
      return {
        itemList: FieldDatas
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .icons-wrapper {
    @include flex-row;
    flex-wrap: wrap;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
  }
</style>
