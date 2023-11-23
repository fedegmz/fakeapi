<script setup>
import Navbar from '@/Components/Navbar.vue';
import { Head } from '@inertiajs/vue3';
import IntroductionContents from '@/Components/IntroductionContents';

defineProps({
    policy: String,
});
</script>

<template>
    <Head title="Home" />
    <Navbar :contents="contents" />
</template>

<script>
export default {
    data() {
        return {
            contents: IntroductionContents,
        };
    }
};
</script>