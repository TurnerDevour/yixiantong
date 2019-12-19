<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :star-num="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
  import DetailName from "./Sub/Name";
  import DetailStars from "./Sub/Stars";
  import DetailAddress from "./Sub/Address";
  import DetailPrice from "./Sub/Price.vue";
  import DetailService from "./Sub/Service.vue";

  export default {
    name: "DetailHotel",
    props: {
      name: String,
      starNum: Number,
      score: String,
      address: String,
      price: Number,
      service: Object,
    },
    components: {
      DetailName,
      DetailPrice,
      DetailStars,
      DetailAddress,
      DetailService,
    },
  }
</script>
