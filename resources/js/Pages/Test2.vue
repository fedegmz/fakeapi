
<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    policy: String,
});
</script>

<template>
      <Head title="Tester" />
      <Navbar :content="'<h1>Hola desde Test2.vue</h1>'" /> <!-- Pasamos HTML como una prop -->
</template>