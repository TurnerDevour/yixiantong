<template>
  <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price-text">￥{{price || 0}}元起</span>
  </div>
</template>

<script>
  export default {
    name: "DetailPrice",
    props: {
      price: {
        type: Number,
        default() {
          return '0';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .price-bd {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
    line-height: .39rem;
    box-sizing: border-box;

    .icon-price {
      font-size: .18rem;
      color: #000;
    }

    .price-text {
      font-size: .16rem;
      margin-left: .1rem;
      color: $defaultOrange;
    }
  }
</style>
