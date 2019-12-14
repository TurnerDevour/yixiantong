<template>
  <div class="scroll-wrapper" ref="wrapper">
    <ul class="scroll-content">
      <category-icons></category-icons>
      <home-title :title="homeTitle.viewTitle"></home-title>
      <view-list :view-datas="homeDatas.viewDatas"></view-list>
      <home-title :title="homeTitle.foodTitle"></home-title>
      <home-title :title="homeTitle.hotelTitle"></home-title>
      <home-title :title="homeTitle.messageTitle"></home-title>
      <home-title :title="homeTitle.ktvTitle"></home-title>
    </ul>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import {mapState} from 'vuex';
  import {IndexModel} from 'models/index.js';
  import CategoryIcons from './CategoryIcons/Index.vue';
  import HomeTitle from "./Sub/HomeTitle";
  import ViewList from './ViewLlist/Index.vue';

  export default {
    name: "HomeScrollWrapper",
    data() {
      return {
        homeTitle:{
          foodTitle: '推荐美食',
          ktvTitle: '推荐KTV',
          viewTitle: '推荐景点',
          hotelTitle: '推荐酒店',
          messageTitle: '推荐按摩',
        },
        homeDatas: {
          foodDatas: [],
          ktvDatas: [],
          viewDatas: [],
          hotelDatas: [],
          messageDatas: [],
        }
      }
    },
    components: {
      CategoryIcons,
      HomeTitle,
      ViewList,
    },
    methods: {
      getHomeDatas(cityId) {
        const indexModel = new IndexModel();
        indexModel.getHomeDatas(cityId).then((res) => {
          if (res && res.status === 0) {
            const data = res.data;
            this.homeDatas.foodDatas = data.foodDatas;
            this.homeDatas.ktvDatasDatas = data.ktvDatas;
            this.homeDatas.viewDatas = data.viewDatas;
            this.homeDatas.hotelDatas = data.hotelDatas;
            this.homeDatas.messageDatas = data.messageDatas;
          }
        });
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper);
      this.getHomeDatas(this.cityId);

    }
  }
</script>

<style lang="scss" scoped>

</style>
