<template>
  <div class="massage-item">
    <router-link :to="{path: '/detail', query: {field: 'massage', id: data.id}}">
      <div class="img">
        <img class="massage-img" :src="data.img" :alt="data.name"/>
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <div class="stars">
          <stars :starNum="Number(data.star)"></stars>
          <span class="score">{{data.score}}分</span>
        </div>
        <div class="others">
          <span class="item">￥<span class="price">{{data.default_price}}</span>/元</span>
          <span class="item">{{data.city_name}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Stars from 'components/ScrollWrapper/Sub/Stars.vue';

  export default {
    name: "MassageListSub",
    components: {
      Stars
    },
    props: {
      data: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .massage-item {
    position: relative;
    border-bottom: 1px solid #ddd;
    background-color: #FFF;

    .img {
      width: 1.2rem;
      height: 1.2rem;
      padding: .14rem;
      box-sizing: border-box;

      .massage-img {
        width: 100%;
        height: 100%;
      }
    }

    .info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: .1rem .1rem 0 1.2rem;
      box-sizing: border-box;

      .title {
        @include ellipsis;
        font-size: .18rem;
        color: #000000;
        line-height: .2rem;
      }

      .stars {
        font-size: .14rem;
        line-height: .5rem;

        .score {
          color: $startColor;
        }
      }

      .others {
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        line-height: .35rem;

        .price {
          color: $defaultOrange;
          font-size: .2rem;
        }
      }
    }
  }
</style>
