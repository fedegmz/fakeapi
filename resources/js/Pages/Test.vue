<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    policy: String,
});
</script>

<template>
    <Head title="Privacy Policy" />

                    <Navbar />
</template>