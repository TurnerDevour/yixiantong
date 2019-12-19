<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="data.status !== -1">
        <!--没有搜索到相关结果-->
        <no-data-tip v-show="(!data.viewDatas || data.viewDatas.length<=0)&&
                           (!data.foodDatas || data.foodDatas.length<=0)&&
                           (!data.massageDatas || data.massageDatas.length<=0)&&
                           (!data.hotelDatas || data.hotelDatas.length<=0)&&
                           (!data.ktvDatas || data.ktvDatas.length<=0)">
        </no-data-tip>
        <!--景点-->
        <div v-if="data.viewDatas && data.viewDatas.length>0">
          <home-title title="景点："></home-title>
          <view-list :view-datas="data.viewDatas"></view-list>
        </div>
        <!--美食-->
        <div v-if="data.foodDatas && data.foodDatas.length>0">
          <home-title title="美食："/>
          <food-list :food-datas="data.foodDatas"></food-list>
        </div>
        <!--酒店-->
        <div v-if="data.hotelDatas && data.hotelDatas.length>0">
          <home-title title="酒店："></home-title>
          <hotel-list :hotel-datas="data.hotelDatas"></hotel-list>
        </div>
        <!--按摩-->
        <div v-if="data.massageDatas && data.massageDatas.length>0">
          <home-title title="按摩："></home-title>
          <massage-list :massage-datas="data.massageDatas"></massage-list>
        </div>
        <!--KTV-->
        <div v-if="data.ktvDatas && data.ktvDatas.length>0">
          <home-title title="KTV："></home-title>
          <ktv-list :ktv-datas="data.ktvDatas"></ktv-list>
        </div>
      </div>
      <error :error-show="data.status === -1"></error>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';

  import ViewList from "./ViewLlist/Index.vue";
  import FoodList from "./FoodList/Index.vue";
  import HotelList from "./HotelList/Index.vue";
  import MassageList from "./MassageList/Index.vue";
  import KtvList from "./KtvList/Index.vue";
  import HomeTitle from "./Sub/HomeTitle";
  import NoDataTip from "./Sub/NoDataTip";
  import Error from "./Sub/Error";

  export default {
    name: "SearchScrollWrapper",
    components: {
      Error,
      HomeTitle,
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      NoDataTip,
    },
    props: {
      data: Object,
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper);
    }
  }
</script>
