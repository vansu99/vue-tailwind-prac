<template>
  <div id="app">
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import navbar from './components/navbar/navbar.vue';

export default defineComponent({
  components: { navbar },
  name: 'app'
})
</script>
