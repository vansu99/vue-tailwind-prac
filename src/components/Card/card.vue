<template>
  <div class="md:mx-[15px] mb-[15px] item">
    <img class="w-full object-cover mb-[10px]" :src="product.thumbnail" :alt="product.title" />
    <router-link
      :to="{ path: `/${product.id}` }"
      class="block mb-[6px] font-medium md:hover:text-blue-800"
      >{{ product.title }}</router-link
    >
    <span class="text-base text-red-600 font-medium">${{ product.price }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Products } from '../../types/products';
export default defineComponent({
  name: 'Card',
  props: {
    product: { required: true, type: Object as PropType<Products> },
  },
});
</script>

<style>
.item {
  width: calc(16.667% - 30px);
}
</style>
