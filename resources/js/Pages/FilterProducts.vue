
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';
import FilterProducts from '@/Components/FilterProductsContents';

defineProps({
  policy: String,
});
</script>

<template>
  <Head title="Filtro de Productos" />
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
export default {

  data() {
    return {
      contents: FilterProducts,
    };
  }
};
</script>