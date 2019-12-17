<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :star-num="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :open-date-time="openDateTime"></detail-open-date-time>
    <detail-recom :recom="recom"></detail-recom>
    <detail-comment-keyword :comment-keyword="commentKeyword"></detail-comment-keyword>
  </div>
</template>

<script>
  import DetailName from "./Sub/Name";
  import DetailStars from "./Sub/Stars";
  import DetailAddress from "./Sub/Address";
  import DetailPrice from "./Sub/Price.vue";
  import DetailOpenDateTime from './Sub/OpenDetailTime.vue';
  import DetailRecom from './Sub/Recom.vue';
  import DetailCommentKeyword from './Sub/CommentKeyword.vue';

  export default {
    name: "DetailFood",
    props: {
      name: String,
      starNum: Number,
      score: String,
      address: String,
      price: Number,
      openDateTime:String,
      recom: String,
      commentKeyword: Array,
    },
    components: {
      DetailPrice,
      DetailName,
      DetailStars,
      DetailAddress,
      DetailOpenDateTime,
      DetailRecom,
      DetailCommentKeyword,
    },
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

</style>
