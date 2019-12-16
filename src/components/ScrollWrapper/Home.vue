<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>

      <div v-if="!errorShow">
        <!--推荐景点-->
        <home-title :title="homeTitle.viewTitle"></home-title>
        <view-list :view-datas="homeDatas.viewDatas"></view-list>
        <!--推荐美食-->
        <home-title :title="homeTitle.foodTitle"></home-title>
        <food-list :food-datas="homeDatas.foodDatas"></food-list>
        <!--推荐酒店-->
        <home-title :title="homeTitle.hotelTitle"></home-title>
        <hotel-list :hotel-datas="homeDatas.hotelDatas"></hotel-list>
        <!--推荐按摩-->
        <home-title :title="homeTitle.massageTitle"></home-title>
        <massage-list :massage-datas="homeDatas.massageDatas"></massage-list>
        <!--推荐KTV-->
        <home-title :title="homeTitle.ktvTitle"></home-title>
        <ktv-list :ktv-datas="homeDatas.ktvDatas"></ktv-list>
      </div>
      <error :error-show="errorShow"></error>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import {mapState} from 'vuex';
  import {IndexModel} from 'models/index.js';
  import CategoryIcons from './CategoryIcons/Index.vue';
  import HomeTitle from "./Sub/HomeTitle";
  import ViewList from './ViewLlist/Index.vue';
  import FoodList from './FoodList/Index.vue';
  import HotelList from './HotelList/Index.vue';
  import MassageList from './MassageList/Index.vue';
  import KtvList from './KtvList/Index.vue';
  import Error from "./Sub/Error";
  import tools from 'utils/tool.js';

  export default {
    name: "HomeScrollWrapper",
    data() {
      return {
        errorShow: false,
        currentId: 0,
        homeTitle: {
          viewTitle: '推荐景点',
          foodTitle: '推荐美食',
          hotelTitle: '推荐酒店',
          massageTitle: '推荐按摩',
          ktvTitle: '推荐KTV',
        },
        homeDatas: {
          viewDatas: [],
          foodDatas: [],
          hotelDatas: [],
          massageDatas: [],
          ktvDatas: [],
        },
      }
    },
    components: {
      CategoryIcons,
      HomeTitle,
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Error,
    },
    methods: {
      getHomeDatas(cityId) {
        const indexModel = new IndexModel();
        indexModel.getHomeDatas(cityId).then((res) => {
          if (res && res.status === 0) {
            const data = res.data;
            this.errorShow = false;

            this.homeDatas.viewDatas = data.viewDatas;
            this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword');
            this.homeDatas.hotelDatas = data.hotelDatas;
            this.homeDatas.massageDatas = data.massageDatas;
            this.homeDatas.ktvDatas = data.ktvDatas;
          } else {
            this.errorShow = true;
          }
        });
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        eventPassthrough: 'vertical',
      });
      this.currentId = this.cityId;
      this.getHomeDatas(this.cityId);
    },
    activated() {
      if (this.currentId !== this.cityId){
        this.currentId = this.cityId;
        this.getHomeDatas(this.currentId);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
