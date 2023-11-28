
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
  policy: String,
});
</script>

<template>
  <Head title="Auth Jwt" />
  <Navbar :contents="contents" /> <!-- Pasamos HTML como una prop -->
</template>

<script>
export default {

  data() {
    return {
      contents: '',
    };
  }
};
</script>