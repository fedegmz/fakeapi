<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    policy: String,
});
</script>

<template>
    <Head title="Home" />
    <Navbar :content="content" />
</template>

<script>
export default {
    data() {
        return {
            content: [
                {
                    body:'hola'
                }
            ]
        };
    }
};
</script>