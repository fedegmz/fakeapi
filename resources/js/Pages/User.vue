
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';
import UserContents from '@/Components/UsersContents.js';

defineProps({
  policy: String,
});
</script>

<template>
  <Head title="Usuario" />
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
export default {

  data() {
    return {
      contents: UserContents,
    };
  }
};
</script>