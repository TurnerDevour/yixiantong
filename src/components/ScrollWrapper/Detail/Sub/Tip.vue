<template>
  <div class="tip-bd">
    <span class="iconfont icon-tip"></span>
    <span class="tip">{{tip}}</span>
  </div>
</template>

<script>
  export default {
    name: "DetailTip",
    props: {
      tip: {
        type: String,
        default() {
          return '加载中...';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .tip-bd {
    display: flex;
    align-content: center;
    min-height: .44rem;
    padding: .1rem .15rem;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
    box-sizing: border-box;

    .icon-tip {
      font-size: .18rem;
      margn-right: .1rem;
      color: #999;
    }

    .tip {
      font-size: .14rem;
      line-height: .18rem;
    }
  }
</style>
