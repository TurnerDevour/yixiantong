<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
  import CommonHeader from "components/header/Common.vue";

  export default {
    name: "Search",
    components: {
      CommonHeader
    },
    data(){
      return{
        title: '商家搜索'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';
</style>
