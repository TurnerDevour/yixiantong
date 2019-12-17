<template>
  <div class="comment-bd">
    <detail-title icon="icon-haoping" title="评论关键词"></detail-title>
    <div class="comment-keyword">
      <span class="keyword"
            v-for="(item, index) of commentKeyword"
            :key="item.id">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
  import DetailTitle from "./Title.vue";

  export default {
    name: "CommentKeyword",
    components: {
      DetailTitle,
    },
    props: {
      commentKeyword: Array,
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .comment-bd {
    @include flex-column;
    margin-top: .1rem;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
    box-sizing: border-box;

    .comment-keyword {
      @include flex-row;
      flex-wrap: wrap;
      padding: .1rem .15rem;
      font-size: .14rem;
      line-height: .18rem;
      box-sizing: border-box;

      .keyword {
        @include vh-center;
        height: .25rem;
        padding: 0 .05rem;
        margin: 0 .05rem .05rem 0;
        border: 1px solid $defaultGreen;
        border-radius: .03rem;
        color: $defaultGreen;
      }
    }
  }
</style>
