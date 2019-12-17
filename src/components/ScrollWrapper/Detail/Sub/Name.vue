<template>
  <div class="name-bd">
    <span class="iconfont icon-name"></span>
    <span class="name-text">{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: "DetailName",
    props: {
      name: {
        type: String,
        default() {
          return '名称加载中...'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .name-bd {
    display: flex;
    height: .44rem;
    padding: .03rem .15rem 0;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
    line-height: .39rem;
    box-sizing: border-box;

    .icon-name {
      font-size: .18rem;
      color: #000;
    }

    .name-text {
      font-size: .14rem;
      margin-left: .1rem;
    }
  }
</style>
