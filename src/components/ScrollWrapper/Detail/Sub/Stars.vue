<template>
  <div class="stars-bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum"></stars>
    <span class="score">{{score}}分</span>
  </div>
</template>

<script>
  import Stars from "components/ScrollWrapper/Sub/Stars.vue";

  export default {
    name: "DetailStars",
    props: {
      starNum: {
        type: Number,
        default() {
          return 0;
        }
      },
      score: {
        type: String,
        default() {
          return '0.0';
        }
      },
    },
    components: {
      Stars,
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .stars-bd {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
    box-sizing: border-box;

    .icon-smile {
      font-size: .18rem;
      margin: .08rem .1rem 0 0;
      color: #999;
    }

    .score {
      font-size: .16rem;
      margin: .1rem 0 0 .15rem;
      color: $defaultOrange;
    }
  }
</style>
