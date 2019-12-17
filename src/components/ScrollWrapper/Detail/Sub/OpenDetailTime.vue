<template>
  <div class="datetime-bd">
    <span class="iconfont icon-datetime"></span>
    <span class="datetime-text">{{openDateTime}}</span>
  </div>
</template>

<script>
  export default {
    name: "OpenDetailTime",
    props: {
      openDateTime: {
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

  .datetime-bd {
    display: flex;
    align-content: center;
    min-height: .44rem;
    padding: .1rem .15rem;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
    box-sizing: border-box;

    .icon-datetime {
      font-size: .18rem;
      margn-right: .1rem;
      color: #999;
    }

    .datetime-text {
      font-size: .14rem;
      line-height: .18rem;
      margin-left: .1rem;
    }
  }
</style>
