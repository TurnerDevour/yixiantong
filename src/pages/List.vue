<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <tab></tab>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
  import fieldsDatas from "data/fields";
  import {mapState} from 'vuex';

  import CommonHeader from "../components/header/Common.vue";
  import ListScrollWrapper from "components/ScrollWrapper/List";
  import Tab from "components/Tab/Index.vue";


  export default {
    name: "List",
    computed: {
      ...mapState(['field']),
      title() {
        if (this.field) {
          return fieldsDatas.filter((item) => item.field === this.field)[0].iconText + '列表';
        }
      }
    },
    components: {
      CommonHeader,
      ListScrollWrapper,
      Tab,
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';
</style>
