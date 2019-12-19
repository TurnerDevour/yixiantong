<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input type="text"
             class="input"
             v-model="keyword"
             :placeholder="placeholder"
             @input="onSearch"/>
    </div>
  </div>
</template>

<script>
  import tools from "utils/tool.js";
  import {mapState} from 'vuex';
  import {SearchModel} from 'models/search.js'

  export default {
    name: "SearchInput",
    data() {
      return {
        keyword: '',
        placeholder: '美食 / 景点 / 酒店/ 按摩 / KTV'
      }
    },
    computed: {
      ...mapState(['cityId'])
    },
    methods: {
      onSearch: tools.throttle(function() {
        const keyword = tools.trimeSpace(this.keyword);

        if (keyword.length <= 0) {
          this.$emit('onSearch',{});
          return;
        }

        const searchModel = new SearchModel();

        searchModel.searchAction(keyword, this.cityId).then((res) => {
          this.$emit('onSearch',res);
        });
      },1000)
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

  .search-input {
    height: .44rem;
    padding: .06rem .15rem;
    background-color: #FFF;
    box-sizing: border-box;

    .input-wrapper {
      position: relative;
      width: 100%;
      height: 100%;

      .iconfont {
        position: absolute;
        top: .08rem;
        left: .08rem;
        font-size: .16rem;
      }

      .input {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: .03rem;
        box-sizing: border-box;
        font-size: .14rem;
        text-indent: .32rem;
      }
    }
  }
</style>
