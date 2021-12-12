<template>
  <div class="py-[60px]">
    <div class="max-w-[1200px] mx-auto px-[15px]">
      <div class="flex justify-between xs:flex-col sm:flex-row">
        <div class="xs:w-full xs:mb-[30px] sm:w-1/2 flex justify-center">
          <img :src="productDetail?.thumbnail" :alt="productDetail?.title" />
        </div>
        <div class="xs:w-full sm:w-1/2">
          <h2 class="text-2xl font-medium mb-4">{{ productDetail?.title }}</h2>
          <p class="text-[18px] font-medium text-blue-800 mb-3">${{ productDetail?.price }}</p>
          <p class="text-[16px] mb-6">{{ productDetail?.description }}</p>
          <button
            type="button"
            class="bg-blue-800 capitalize text-white rounded inline-block p-2 md:hover:opacity-95 transition-all"
          >
            Chọn mua
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Nprogress from 'nprogress';

export default {
  name: 'Detail',
  setup() {
    const productDetail = ref(null);
    const route = useRoute();

    async function getProductDetail() {
      try {
        Nprogress.start();
        const response = await axios.get(
          `https://fake-api-ecom.herokuapp.com/api/products/${route.params.id}`
        );
        productDetail.value = response.data;
      } catch (e) {
        throw new Error('Error ne')
      } finally {
        Nprogress.done();
      }
    }

    onBeforeMount(() => {
      getProductDetail();
    });

    return { productDetail };
  },
};
</script>

<style scoped></style>
