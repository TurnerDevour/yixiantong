<template>
  <div class="intro-bd">
    <detail-title icon="icon-intro" title="详细介绍"></detail-title>
    <div class="intro-content">{{intro}}</div>
  </div>
</template>

<script>
  import DetailTitle from './Title.vue';

  export default {
    name: "DetailIntro",
    components: {
      DetailTitle,
    },
    props: {
      intro: {
        type: String,
        default() {
          return "加载中...";
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .intro-bd {
    @include flex-column;
    margin-top: .1rem;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
  }

  .intro-content {
    padding: .1rem .15rem;
    font-size: .14rem;
    line-height: .18rem;
    box-sizing: border-box;
    text-indent: .2rem;
  }

</style>
