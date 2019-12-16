<template>
  <div class="list-wrapper">
    <hotel-list-sub v-for="(item, index) of hotelDatas"
                    :data="item"
                    :key="item.id">
    </hotel-list-sub>
  </div>
</template>

<script>
  import HotelListSub from './Sub.vue';

  export default {
    name: "HotelList",
    components: {
      HotelListSub
    },
    props: {
      hotelDatas: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss';

</style>
