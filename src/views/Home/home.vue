<template>
  <div class="home py-[60px]">
    <div class="max-w-[1200px] mx-auto px-[15px]">
      <div class="flex flex-wrap justify-start mx-[-15px]">
        <card v-for="product in products" :product="product" :key="product.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { Products } from '../../types/products';
import Card from '../../components/Card/card.vue';

export default defineComponent({
  name: 'Home',
  components: { Card },
  setup() {
    const products = ref<Products[]>([]);

    onBeforeMount(async () => {
      const response = await axios.get(
        'https://fake-api-ecom.herokuapp.com/api/products?_page=1&_limit=20'
      );
      if (response.status === 200) {
        products.value = [...response.data.data];
      }
    });

    return { products };
  },
});
</script>

