<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <div v-if="!errorShow">
        <view-list v-if="field==='view'" :view-datas="listDatas[cityId]"></view-list>
        <food-list v-if="field==='food'" :food-datas="listDatas[cityId]"></food-list>
        <hotel-list v-if="field==='hotel'" :hotel-datas="listDatas[cityId]"></hotel-list>
        <massage-list v-if="field==='massage'" :massage-datas="listDatas[cityId]"></massage-list>
        <ktv-list v-if="field==='ktv'" :ktv-datas="listDatas[cityId]"></ktv-list>
        <loading :loading-show="loadingShow"></loading>
      </div>
      <error :error-show="errorShow"></error>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';

  import {mapState} from 'vuex';
  import {ListModel} from 'models/list.js'

  import tools from "utils/tool";

  import ViewList from "./ViewLlist/Index.vue";
  import FoodList from "./FoodList/Index.vue";
  import HotelList from "./HotelList/Index.vue";
  import MassageList from "./MassageList/Index.vue";
  import KtvList from "./KtvList/Index.vue";
  import Loading from "./Sub/Loading";
  import Error from "./Sub/Error";

  export default {
    name: "ListScrollWrapper",
    components: {
      ViewList,
      FoodList,
      HotelList,
      MassageList,
      KtvList,
      Loading,
      Error,
    },
    data() {
      return {
        loadingShow: true,
        errorShow: false,
        listDatas: {}
      }
    },
    computed: {
      ...mapState(['cityId', 'field'])
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper);

      this.getListDatas(this.cityId, this.field);
    },
    methods: {
      getListDatas(cityId, field) {
        if (!this.listDatas[cityId]) {
          const listModel = new ListModel();

          this.loadingShow = true;

          listModel.getListDatas(cityId, field).then((res) => {
            if (res && res.status === 0) {

              this.errorShow = false;

              const data = tools.formatJSON(res.data, 'keyword');
              setTimeout(() => {
                this.listDatas[cityId] = data;
                this.loadingShow = false;
              }, 500);
            } else {
              this.errorShow = true;
              console.log({
                statusCode: res.status,
                errorMsg: res.error
              });
            }
          });
        }
      }
    },
    watch: {
      cityId() {
        this.getListDatas(this.cityId, this.field);
      }
    }
  }
</script>
