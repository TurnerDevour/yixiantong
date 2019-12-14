<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
  import CommonHeader from "../components/header/Common.vue";

  export default {
    name: "List",
    data() {
      return {
        title: '列表'
      }
    },
    components: {
      CommonHeader,
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';
</style>
