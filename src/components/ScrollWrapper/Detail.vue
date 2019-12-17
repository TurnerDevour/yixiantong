<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <detail-swiper :pic-datas="detailDatas.pics"></detail-swiper>
    </div>
  </div>
</template>

<script>
  import BetterScroll from 'better-scroll';
  import {DetailModel} from "models/detail";
  import tools from "utils/tool.js";
  import DetailSwiper from './Sub/Swiper.vue';

  export default {
    name: "DetailScrollWrapper",
    data() {
      return {
        field: '',
        id: 0,
        detailDatas: {},
      }
    },
    components:{
      DetailSwiper,
    },
    methods: {
      getDetail(field, id) {
        const detailModel = new DetailModel();
        detailModel.getDetail(field, id).then((res) => {
          if (res && res.status === 0) {
            const data = res.data;

            data.pics && (data.pics = tools.jsonToArr(data.pics));
            data.comment_keyword && (data.comment_keyword = tools.strToArr(data.comment_keyword));
            data.recom && (data.recom = tools.replaceToSpace(data.recom));
            data.service && (data.service = tools.jsonToArr(data.service));

            this.detailDatas = data;
          }
        });
      }
    },
    mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        click: true,
        scrollY: true,
        eventPassthrough: 'vertical'
      });
      this.field = this.$route.query.field;
      this.id = this.$route.query.id;
      this.getDetail(this.field, this.id);
    }
  }
</script>

<style scoped>

</style>
