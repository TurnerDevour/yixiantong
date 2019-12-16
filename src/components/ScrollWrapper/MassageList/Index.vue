<template>
  <div class="list-wrapper">
    <massage-list-sub v-for="(item, index) of massageDatas"
                      :data="item"
                      :key="item.id">
    </massage-list-sub>
  </div>
</template>

<script>
  import MassageListSub from "./Sub.vue";

  export default {
    name: "MassageList",
    components: {
      MassageListSub
    },
    props: {
      massageDatas: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/mixins.scss';
  @import '~styles/variables.scss'

</style>
