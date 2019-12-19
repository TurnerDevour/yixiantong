<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <search-scroll-wrapper :data="data"></search-scroll-wrapper>
  </div>
</template>

<script>
  import CommonHeader from "components/header/Common.vue";
  import SearchInput from "components/SearchInput/Index.vue"
  import SearchScrollWrapper from "components/ScrollWrapper/Search";
  import tool from "utils/tool";

  export default {
    name: "Search",
    components: {
      CommonHeader,
      SearchInput,
      SearchScrollWrapper,
    },
    data() {
      return {
        title: '商家搜索',
        data: {}
      }
    },
    methods: {
      onSearch(res) {
        if (res && res.status === 0) {
          const data = res.data;
          data.foodDatas = tool.formatJSON(data.foodDatas, 'keyword');
          this.data = data;
        } else {
          this.data = res;
          console.log(this.data);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
