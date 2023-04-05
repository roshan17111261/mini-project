<template>
  <div>
    <div v-for="imgUrl in productDetails.images">
      <img :src="imgUrl" />
      <h1>
        {{ productDetails.title }}
      </h1>


    </div>
  </div>
</template>
<script>
import { getMyPhone } from '../services/phones';

export default {
  name: "DetailsView",
  data() {
    return {
      productDetails: {}
    }

  },
  async mounted() {
    console.log('mounted');
    const productId = this.$route.params['id'];
    this.productDetails = await getMyPhone(productId);
    console.log(this.productDetails);
  }
}
</script>