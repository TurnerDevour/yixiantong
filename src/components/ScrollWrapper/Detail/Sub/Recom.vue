<template>
  <div class="recom-bd">
    <detail-title icon="icon-recom"
                  title="推荐菜品">
    </detail-title>
    <div class="recom-content">{{recom}}</div>
  </div>
</template>

<script>
  import DetailTitle from './Title.vue';

  export default {
    name: "DetailRecom",
    components: {
      DetailTitle,
    },
    props: {
      recom: {
        type: String,
        default(){
          return '加载中...';
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .recom-bd{
    @include flex-column;
    margin-top: .1rem;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;
  }

  .recom-content{
    padding: .1rem .15rem;
    font-size: .14rem;
    line-height: .18rem;
    box-sizing: border-box;
    text-indent: .2rem;
  }

</style>
