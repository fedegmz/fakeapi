
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';
import FilesContents from '@/Components/FilesContents';

defineProps({
  policy: String,
});
</script>

<template>
  <Head title="Archivos" />
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
export default {

  data() {
    return {
      contents: FilesContents,
    };
  }
};
</script>