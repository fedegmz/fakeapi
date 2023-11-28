
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';
import CategoriesContent from '@/Components/CategoriesContents.js';

defineProps({
  policy: String,
});
</script>

<template>
  <Head title="Categorias" />
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
export default {

  data() {
    return {
      contents: CategoriesContent,
    };
  }
};
</script>