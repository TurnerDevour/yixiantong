<template>
  <div class="list-wrapper">
    <food-list-sub v-for="(item, index) of foodDatas"
                   :data="item"
                   :key="item.id">
    </food-list-sub>
  </div>
</template>

<script>
  import FoodListSub from "./Sub.vue";

  export default {
    name: "FoodList",
    components: {
      FoodListSub,
    },
    props: {
      foodDatas: Array
    }
  }
</script>
