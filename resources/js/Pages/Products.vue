
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';
import ProductsContents from '@/Components/ProductsContents';

defineProps({
  policy: String,
});
</script>

<template>
  <Head title="Productos" />
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
export default {

  data() {
    return {
      contents: ProductsContents,
    };
  }
};
</script>