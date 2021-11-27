<template>
  <div class="bg-[#000] h-[60px]">
    <div class="max-w-[1200px] mx-auto px-[15px] h-full flex justify-between items-center">
      <a class="text-white md:text-2xl">Movie</a>
      <ul class="flex items-center">
        <li class="mx-3">
          <router-link to="/" class="text-white text-base font-normal">Home</router-link>
        </li>
        <li class="mx-3">
          <router-link to="/" class="text-white text-base font-normal">About</router-link>
        </li>
        <li class="mx-3">
          <router-link to="/" class="text-white text-base font-normal">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
});
</script>
